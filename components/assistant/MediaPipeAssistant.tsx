"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CirclePlay, Square, LoaderCircle } from "lucide-react";
import { exerciseData } from "@/lib/mock-data";

// MediaPipe globals from CDN
declare global {
  interface Window {
    Pose?: any;
    Camera?: any;
  }
}

const ALL_EXERCISES = exerciseData;

const IDEAL_ANGLES: Record<string, Record<string, [number, number]>> = {
  squat: {
    "Left Knee": [80, 110],
    "Right Knee": [80, 110],
    "Back Alignment": [160, 180],
  },
  pushup: {
    "Left Elbow": [80, 110],
    "Right Elbow": [80, 110],
    "Back Alignment": [160, 180],
  },
  deadlift: {
    "Back Alignment": [160, 180],
    "Left Knee": [160, 180],
    "Right Knee": [160, 180],
  },
  bicep_curl: {
    "Left Elbow": [30, 50],
    "Right Elbow": [30, 50],
  },
  shoulder_press: {
    "Left Elbow": [80, 100],
    "Right Elbow": [80, 100],
    "Left Shoulder": [160, 180],
    "Right Shoulder": [160, 180],
  },
};

export default function MediaPipeAssistant() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cameraRef = useRef<any>(null);
  const poseRef = useRef<any>(null);

  const [currentExercise, setCurrentExercise] = useState(
    ALL_EXERCISES[0]?.id ?? ""
  );
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedbackText, setFeedbackText] = useState<string>(
    'Click "Start Camera" and begin your exercise to receive real-time AI feedback on your form.'
  );
  const [status, setStatus] = useState<{
    label: string;
    variant: "perfect" | "good" | "needs" | "hidden";
  }>({ label: "Ready to analyze", variant: "hidden" });
  const prevFeedbackRef = useRef<string>("");
  const analyzingFlagRef = useRef<boolean>(false);

  const selectedExercise = useMemo(
    () => ALL_EXERCISES.find((e) => e.id === currentExercise),
    [currentExercise]
  );
  const referenceImage = selectedExercise
    ? `/${selectedExercise.gif}`
    : undefined;

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

    if (window.Pose && window.Camera) return;

    await add(
      "https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/pose.js"
    );
    await add(
      "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.js"
    );
  }, []);

  const updateFeedback = useCallback((text: string) => {
    setFeedbackText(text);
  }, []);

  const updateFormStatus = useCallback(
    (label: string, kind: "perfect" | "good" | "needs" | "hidden") => {
      setStatus({ label, variant: kind });
    },
    []
  );

  const showAnalyzing = useCallback((show: boolean) => {
    setIsAnalyzing(show);
  }, []);

  function mapExerciseToIdealKey(
    name: string
  ): keyof typeof IDEAL_ANGLES | null {
    const n = name.toLowerCase();
    if (/squat/.test(n)) return "squat";
    if (/deadlift/.test(n)) return "deadlift";
    if (/push\s?-?\s?up/.test(n)) return "pushup";
    if (/curl/.test(n)) return "bicep_curl";
    if (/(shoulder\s*press|overhead\s*press)/.test(n)) return "shoulder_press";
    return null;
  }

  const startCamera = useCallback(async () => {
    try {
      setLoading(true);
      await loadScripts();

      // Request camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      if (!videoRef.current) return;
      videoRef.current.srcObject = stream;

      // Init Pose
      poseRef.current = new window.Pose({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`,
      });
      poseRef.current.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
      poseRef.current.onResults(onPoseResults);

      // Camera wrapper reads from the HTMLVideoElement
      cameraRef.current = new window.Camera(videoRef.current, {
        onFrame: async () => {
          if (poseRef.current && videoRef.current?.readyState === 4) {
            await poseRef.current.send({ image: videoRef.current });
          }
        },
        width: 640,
        height: 480,
      });
      cameraRef.current.start();

      setReady(true);
      updateFeedback(
        "📹 Camera started! Begin your exercise and AI will analyze your form."
      );
      updateFormStatus("Ready to analyze", "good");
    } catch (e) {
      console.error("Camera init error:", e);
      updateFeedback(
        "❌ Error accessing camera. Please allow camera permissions and try again."
      );
    } finally {
      setLoading(false);
    }
  }, [loadScripts, updateFeedback, updateFormStatus]);

  const stopCamera = useCallback(() => {
    try {
      const v = videoRef.current;
      const src = v?.srcObject as MediaStream | null;
      src?.getTracks().forEach((t) => t.stop());
      if (cameraRef.current) cameraRef.current.stop();
      setReady(false);
      updateFeedback('⏹️ Camera stopped. Click "Start Camera" to resume.');
      updateFormStatus("Ready to analyze", "hidden");
    } catch {}
  }, [updateFeedback, updateFormStatus]);

  useEffect(() => {
    return () => {
      try {
        const v = videoRef.current;
        const src = v?.srcObject as MediaStream | null;
        src?.getTracks().forEach((t) => t.stop());
      } catch {}
      try {
        cameraRef.current?.stop?.();
      } catch {}
    };
  }, []);

  function drawPose(landmarks: any[]) {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw skeleton
    const connections = [
      [11, 12],
      [11, 13],
      [13, 15],
      [12, 14],
      [14, 16],
      [11, 23],
      [12, 24],
      [23, 24],
      [23, 25],
      [25, 27],
      [27, 29],
      [27, 31],
      [24, 26],
      [26, 28],
      [28, 30],
      [28, 32],
    ];

    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 3;
    for (const [s, e] of connections) {
      const start = landmarks[s];
      const end = landmarks[e];
      if (start && end && start.visibility > 0.5 && end.visibility > 0.5) {
        ctx.beginPath();
        ctx.moveTo(start.x * canvas.width, start.y * canvas.height);
        ctx.lineTo(end.x * canvas.width, end.y * canvas.height);
        ctx.stroke();
      }
    }

    ctx.fillStyle = "#ef4444";
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;
    for (const lm of landmarks) {
      if (lm.visibility > 0.5) {
        ctx.beginPath();
        ctx.arc(lm.x * canvas.width, lm.y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  function calculateAngles(landmarks: any[]) {
    const getAngle = (a: any, b: any, c: any) => {
      const radians =
        Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
      let angle = Math.abs((radians * 180.0) / Math.PI);
      if (angle > 180.0) angle = 360 - angle;
      return Math.round(angle);
    };

    const angles: Record<string, number> = {};
    try {
      angles["Left Knee"] = getAngle(
        landmarks[23],
        landmarks[25],
        landmarks[27]
      );
      angles["Right Knee"] = getAngle(
        landmarks[24],
        landmarks[26],
        landmarks[28]
      );
      angles["Left Hip"] = getAngle(
        landmarks[11],
        landmarks[23],
        landmarks[25]
      );
      angles["Right Hip"] = getAngle(
        landmarks[12],
        landmarks[24],
        landmarks[26]
      );
      angles["Left Elbow"] = getAngle(
        landmarks[11],
        landmarks[13],
        landmarks[15]
      );
      angles["Right Elbow"] = getAngle(
        landmarks[12],
        landmarks[14],
        landmarks[16]
      );
      angles["Left Shoulder"] = getAngle(
        landmarks[13],
        landmarks[11],
        landmarks[23]
      );
      angles["Right Shoulder"] = getAngle(
        landmarks[14],
        landmarks[12],
        landmarks[24]
      );

      const midShoulder = {
        x: (landmarks[11].x + landmarks[12].x) / 2,
        y: (landmarks[11].y + landmarks[12].y) / 2,
      };
      const midHip = {
        x: (landmarks[23].x + landmarks[24].x) / 2,
        y: (landmarks[23].y + landmarks[24].y) / 2,
      };
      angles["Back Alignment"] = getAngle(
        { x: midShoulder.x, y: 0 },
        midShoulder,
        midHip
      );
    } catch (e) {
      // ignore
    }

    return angles;
  }

  function checkFormAccuracy(
    currentAngles: Record<string, number>,
    idealAngles: Record<string, [number, number]>
  ) {
    let total = 0;
    let pass = 0;
    for (const [joint, [min, max]] of Object.entries(idealAngles)) {
      if (currentAngles[joint] !== undefined) {
        total++;
        const angle = currentAngles[joint];
        const tolerance = 15;
        if (angle >= min - tolerance && angle <= max + tolerance) pass++;
      }
    }
    const accuracy = total > 0 ? Math.round((pass / total) * 100) : 0;
    return { accuracy, isPerfect: accuracy >= 95 };
  }

  async function analyzePose(landmarks: any[]) {
    if (analyzingFlagRef.current) return;
    analyzingFlagRef.current = true;
    showAnalyzing(true);

    try {
      const angles = calculateAngles(landmarks);
      const idealKey = mapExerciseToIdealKey(selectedExercise?.name || "");
      const ideal = idealKey ? IDEAL_ANGLES[idealKey] : undefined;
      const form = ideal ? checkFormAccuracy(angles, ideal) : null;

      const frameDataUrl =
        canvasRef.current?.toDataURL("image/jpeg", 0.85) || "";
      const res = await fetch("/api/gemini-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exercise: selectedExercise?.name || currentExercise,
          angles,
          idealAngles: ideal || {},
          referenceImagePath: selectedExercise?.gif || "",
          currentFrameDataUrl: frameDataUrl,
          previousFeedback: prevFeedbackRef.current || "",
        }),
      });
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      const data = (await res.json()) as { text?: string; error?: string };
      const fb = data.text || data.error || "";

      prevFeedbackRef.current = fb;
      updateFeedback(fb);

      if (form?.isPerfect) {
        updateFormStatus("PERFECT FORM! ✓", "perfect");
      } else if (form && form.accuracy >= 80) {
        updateFormStatus(`Good Form (${form.accuracy}%)`, "good");
      } else if (form) {
        updateFormStatus(`Needs Improvement (${form.accuracy}%)`, "needs");
      } else {
        // No ideal profile known for this exercise; hide status box
        updateFormStatus("", "hidden");
      }
    } catch (e: any) {
      console.error("Analysis error:", e);
      updateFeedback(`❌ Error: ${e.message || "Failed to analyze"}`);
    } finally {
      showAnalyzing(false);
      setTimeout(() => {
        analyzingFlagRef.current = false;
      }, 3000);
    }
  }

  function onPoseResults(results: any) {
    if (!results?.poseLandmarks) return;
    drawPose(results.poseLandmarks);
    if (!analyzingFlagRef.current) analyzePose(results.poseLandmarks);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Posture Assistant</h1>
        <div className="flex items-center gap-2">
          <select
            className="border rounded-md px-2 py-1 text-sm bg-background"
            value={currentExercise}
            onChange={(e) => setCurrentExercise(e.target.value)}
            aria-label="Select exercise"
          >
            {ALL_EXERCISES.map((ex) => (
              <option key={ex.id} value={ex.id}>
                {ex.name}
              </option>
            ))}
          </select>
          {!ready ? (
            <Button onClick={startCamera} disabled={loading} size="sm">
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <CirclePlay />
              )}
              Start Camera
            </Button>
          ) : (
            <Button onClick={stopCamera} variant="destructive" size="sm">
              <Square /> Stop
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Live Camera</CardTitle>
            <CardDescription>
              {ready
                ? "Tracking landmarks in real-time"
                : loading
                ? "Starting camera..."
                : "Waiting for camera"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full max-w-full aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full"
                autoPlay
                playsInline
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-3">
              <div className="text-sm text-muted-foreground">Reference: </div>
              <div className="mt-2 flex items-center gap-3">
                {referenceImage ? (
                  <img
                    src={referenceImage}
                    alt="Exercise reference"
                    className="h-24 w-auto rounded-md border"
                  />
                ) : null}
                <Badge variant="secondary" className="text-xs">
                  {selectedExercise?.name ?? currentExercise}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>AI Feedback</CardTitle>
            <CardDescription>
              {isAnalyzing
                ? "Analyzing your form..."
                : "Live guidance based on your movement"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isAnalyzing && (
              <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                <LoaderCircle className="animate-spin" /> Processing
              </div>
            )}
            {status.variant !== "hidden" && (
              <div
                className={
                  "mb-3 rounded-md px-3 py-2 text-sm font-medium " +
                  (status.variant === "perfect"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : status.variant === "good"
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "bg-amber-100 text-amber-700 border border-amber-300")
                }
              >
                {status.label}
              </div>
            )}
            <div className="text-sm whitespace-pre-wrap leading-6">
              {feedbackText}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
