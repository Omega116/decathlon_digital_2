"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { exerciseData } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlay, Square, LoaderCircle } from "lucide-react";
import MediaPipeAssistant from "@/components/assistant/MediaPipeAssistant";

// Simple helper math
function angleDeg(ax: number, ay: number, bx: number, by: number) {
  // angle of vector AB to vertical (in degrees)
  const dx = ax - bx;
  const dy = ay - by;
  const rad = Math.atan2(dx, dy); // swap to measure vs vertical axis
  return (rad * 180) / Math.PI;
}

type Keypoint = { x: number; y: number; score?: number; name?: string };
type Pose = { keypoints?: Keypoint[] };

export default function AssistantPage() {
  return <MediaPipeAssistant />;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [confidence, setConfidence] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(
    exerciseData[0]?.id ?? ""
  );
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiText, setAiText] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const currentExerciseName = useMemo(
    () => exerciseData.find((e) => e.id === currentExercise)?.name ?? "",
    [currentExercise]
  );

  const currentExerciseNameRef = useRef(currentExerciseName);
  useEffect(() => {
    currentExerciseNameRef.current = currentExerciseName;
  }, [currentExerciseName]);

  type TFNS = {
    setBackend: (b: string) => Promise<void>;
    ready: () => Promise<void>;
  };
  type PoseDetectionNS = {
    movenet: { modelType: { SINGLEPOSE_LIGHTNING: string } };
    SupportedModels: { MoveNet: unknown };
    createDetector: (
      model: unknown,
      config: { modelType: string; enableSmoothing?: boolean }
    ) => Promise<{
      estimatePoses: (
        video: HTMLVideoElement,
        opts?: { flipHorizontal?: boolean }
      ) => Promise<Pose[]>;
    }>;
  };

  const draw = React.useCallback((poses: Pose[]) => {
    const ctx = canvasRef.current?.getContext("2d");
    const v = videoRef.current;
    if (!ctx || !v || !canvasRef.current) return;

    canvasRef.current.width = v.videoWidth;
    canvasRef.current.height = v.videoHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.scale(-1, 1); // mirror for selfie view
    ctx.translate(-ctx.canvas.width, 0);
    ctx.drawImage(v, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();

    const kp: Record<string, Keypoint> = {};
    const first = poses?.[0];
    if (first?.keypoints) {
      for (const p of first.keypoints) {
        if (p?.name) kp[p.name] = p;
      }
    }

    // draw keypoints
    ctx.fillStyle = "#22c55e";
    for (const k of Object.values(kp)) {
      if (!k || (k.score ?? 0) < 0.3) continue;
      ctx.beginPath();
      ctx.arc(k.x, k.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    const fb: string[] = [];
    const scores: number[] = [];
    for (const k of Object.values(kp))
      if (typeof k?.score === "number") scores.push(k.score!);
    const avg = scores.length
      ? (scores.reduce((a, b) => a + b, 0) / scores.length) * 100
      : 0;

    const ls = (n: string) => kp[n];
    const shoulder = avgPoint(ls("left_shoulder"), ls("right_shoulder"));
    const hip = avgPoint(ls("left_hip"), ls("right_hip"));
    const knee = avgPoint(ls("left_knee"), ls("right_knee"));
    const elbowL = ls("left_elbow");
    const elbowR = ls("right_elbow");
    const exName = currentExerciseNameRef.current;

    if (shoulder && hip) {
      const backAngle = Math.abs(
        angleDeg(shoulder.x, shoulder.y, hip.x, hip.y)
      );
      if (isPress(exName) || isRow(exName) || isSquat(exName)) {
        if (backAngle > 15) fb.push("Straighten your back");
      }
    }

    if ((isRow(exName) || isPress(exName)) && shoulder && elbowL && elbowR) {
      const dYL = Math.abs(elbowL.y - shoulder.y);
      const dYR = Math.abs(elbowR.y - shoulder.y);
      if (dYL > 80 || dYR > 80) fb.push("Lower your elbows");
    }

    if (isSquat(exName) && knee && hip) {
      const kneeBack = knee.y < hip.y - 20; // rough check
      if (!kneeBack) fb.push("Keep your knees aligned");
    }

    setFeedback(fb.length ? fb : ["Good form! Keep going."]);
    setConfidence(Math.round(avg));
  }, []);

  const loadScripts = useCallback(async () => {
    const add = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });

    const w = window as unknown as {
      tf?: TFNS;
      poseDetection?: PoseDetectionNS;
    };
    if (w.tf && w.poseDetection) return;

    await add(
      "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.16.0/dist/tf.min.js"
    );
    await add(
      "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl@4.16.0/dist/tf-backend-webgl.min.js"
    );
    await add(
      "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@4.16.0/dist/tf-backend-wasm.min.js"
    );
    await add(
      "https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection@3.3.0/dist/pose-detection.min.js"
    );
  }, []);

  useEffect(() => {
    let stop = false;
    let detector: {
      estimatePoses: (
        video: HTMLVideoElement,
        opts?: { flipHorizontal?: boolean }
      ) => Promise<Pose[]>;
    } | null = null;

    async function init() {
      try {
        setLoading(true);
        await loadScripts();
        const w = window as unknown as {
          tf?: TFNS;
          poseDetection?: PoseDetectionNS;
        };
        const tf = w.tf as TFNS;
        const poseDetection = w.poseDetection as PoseDetectionNS;
        try {
          await tf.setBackend("webgl");
          await tf.ready();
        } catch {
          try {
            await tf.setBackend("wasm");
            await tf.ready();
          } catch {
            await tf.setBackend("cpu");
            await tf.ready();
          }
        }

        detector = await poseDetection.createDetector(
          poseDetection.SupportedModels.MoveNet,
          {
            modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
            enableSmoothing: true,
          }
        );

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        if (!videoRef.current) return;
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setReady(true);

        const loop = async () => {
          if (stop) return;
          if (!videoRef.current || !canvasRef.current) {
            requestAnimationFrame(loop);
            return;
          }
          if (!detector) {
            requestAnimationFrame(loop);
            return;
          }
          const poses: Pose[] = await detector.estimatePoses(videoRef.current, {
            flipHorizontal: true,
          });
          draw(poses);
          requestAnimationFrame(loop);
        };
        loop();
      } catch (e) {
        console.error(e);
        setFeedback(["Camera or model failed to initialize."]);
      } finally {
        setLoading(false);
      }
    }

    init();

    return () => {
      stop = true;
      try {
        const v = videoRef.current;
        const src = v?.srcObject as MediaStream | null;
        src?.getTracks().forEach((t) => t.stop());
      } catch {}
      try {
        mediaRecorderRef.current?.stop();
      } catch {}
    };
  }, [loadScripts]);

  const startRecording = useCallback(() => {
    if (isRecording || !canvasRef.current) return;
    try {
      const stream = canvasRef.current.captureStream(30);
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9"
        : "video/webm";
      const mr = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        chunksRef.current = [];
        if (blob.size === 0) return;
        setIsAnalyzing(true);
        setAiText("");
        try {
          const fd = new FormData();
          fd.append("file", blob, `recording-${Date.now()}.webm`);
          fd.append("exercise", currentExercise);
          const res = await fetch("/api/analyze-video", {
            method: "POST",
            body: fd,
          });
          if (!res.ok) throw new Error("Upload failed");
          const json = (await res.json()) as { text?: string; error?: string };
          setAiText(json.text || json.error || "");
        } catch {
          setAiText("Failed to analyze the recording.");
        } finally {
          setIsAnalyzing(false);
        }
      };
      mediaRecorderRef.current = mr;
      mr.start();
      setIsRecording(true);
    } catch (e) {
      console.error(e);
    }
  }, [isRecording, currentExercise]);

  const stopRecording = useCallback(() => {
    if (!isRecording) return;
    try {
      mediaRecorderRef.current?.stop();
    } finally {
      setIsRecording(false);
    }
  }, [isRecording]);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Posture Assistant</h1>
        <div className="flex items-center gap-2">
          <select
            className="border rounded-md px-2 py-1 text-sm bg-background"
            value={currentExercise}
            onChange={(e) => setCurrentExercise(e.target.value)}
            aria-label="Select exercise"
          >
            {exerciseData.map((ex) => (
              <option key={ex.id} value={ex.id}>
                {ex.name}
              </option>
            ))}
          </select>
          <Badge variant="secondary">Confidence: {confidence}%</Badge>
          {!isRecording ? (
            <Button
              onClick={startRecording}
              disabled={!ready || loading || isAnalyzing}
              variant="default"
              size="sm"
            >
              {isAnalyzing ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <CirclePlay />
              )}
              Start Recording
            </Button>
          ) : (
            <Button
              onClick={stopRecording}
              disabled={isAnalyzing}
              variant="destructive"
              size="sm"
            >
              <Square /> Stop
            </Button>
          )}
        </div>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Live Camera</CardTitle>
          <CardDescription>
            {ready
              ? "Tracking keypoints in real-time"
              : loading
              ? "Loading model/camera..."
              : "Waiting for camera"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full max-w-full aspect-video bg-muted rounded-lg overflow-hidden">
            <video ref={videoRef} className="hidden" playsInline muted />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2" aria-live="polite">
            {feedback.map((f, i) => (
              <Badge
                key={i}
                variant={
                  f === "Good form! Keep going." ? "secondary" : "destructive"
                }
              >
                {f}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {(aiText || isAnalyzing) && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle>AI Feedback</CardTitle>
            <CardDescription>
              {isAnalyzing
                ? "Analyzing your recording with Gemini..."
                : "Review the suggestions below"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isAnalyzing ? (
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <LoaderCircle className="animate-spin" /> Processing
              </div>
            ) : aiText ? (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {aiText
                  .split(/\n+/)
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
              </ul>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function avgPoint(a?: Keypoint, b?: Keypoint): Keypoint | undefined {
  if (!a || !b) return undefined;
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    score: Math.min(a.score ?? 1, b.score ?? 1),
  };
}

function isSquat(name: string) {
  return /squat/i.test(name);
}
function isRow(name: string) {
  return /row|pulldown|pull/i.test(name);
}
function isPress(name: string) {
  return /press|fly|overhead/i.test(name);
}
