export const runtime = "nodejs";

interface GenerateRequest {
  exercise: string;
  angles: Record<string, number>;
  idealAngles: Record<string, [number, number]>;
  previousFeedback?: string;
  referenceImagePath?: string;
  currentFrameDataUrl?: string;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return new Response("Missing GOOGLE_API_KEY", { status: 500 });
    }

    const body = (await req.json()) as GenerateRequest;
    const {
      exercise,
      angles,
      idealAngles,
      previousFeedback,
      referenceImagePath,
      currentFrameDataUrl,
    } = body;

    const anglesText = Object.entries(angles)
      .map(([joint, angle]) => `${joint}: ${angle}°`)
      .join("\n");

    const idealText = Object.entries(idealAngles)
      .map(([joint, range]) => `${joint}: ${range[0]}°-${range[1]}°`)
      .join("\n");

    const prompt = `You are an expert fitness coach analyzing a ${exercise} exercise in real-time.

ATTACHED IMAGES:
1) User's current frame (live capture)
2) Reference correct form image

CURRENT BODY ANGLES:\n${anglesText}

IDEAL ANGLE RANGES FOR ${exercise.toUpperCase()}:\n${idealText}

PREVIOUS FEEDBACK: ${previousFeedback || "None"}

INSTRUCTIONS:
- Compare the user's posture to the attached reference image (treat it as the correct form) and to the ideal angle ranges.
- If form accuracy is 95%+ respond with ONLY: "✓ PERFECT! Your form is excellent. Keep it up!".
- Otherwise, give 2-3 specific, actionable corrections focusing on the biggest issues.
- Be encouraging but direct. Keep under 100 words.`;

    // Build multimodal parts: optional current frame + reference image + text
    type Part =
      | { text: string }
      | { inlineData: { mimeType: string; data: string } };
    const parts: Part[] = [];

    // Attach current frame from data URL if provided
    if (currentFrameDataUrl && currentFrameDataUrl.startsWith("data:")) {
      try {
        const commaIdx = currentFrameDataUrl.indexOf(",");
        if (commaIdx > 0) {
          const meta = currentFrameDataUrl.substring(0, commaIdx);
          const dataB64 = currentFrameDataUrl.substring(commaIdx + 1);
          const mimeMatch = meta.match(/^data:([^;]+);base64$/);
          const mimeType = mimeMatch?.[1] || "image/jpeg";
          parts.push({ inlineData: { mimeType, data: dataB64 } });
        }
      } catch {}
    }

    // Attach reference image from /public if provided
    if (referenceImagePath) {
      try {
        const { promises: fsp } = await import("fs");
        const pathMod = await import("path");
        const normalized = pathMod.default.normalize(
          referenceImagePath.replace(/^\/+/, "")
        );
        const publicRoot = pathMod.default.join(process.cwd(), "public");
        let absPath = pathMod.default.join(publicRoot, normalized);
        // Basic containment check
        if (absPath.startsWith(publicRoot)) {
          let usePath = absPath;
          let useExt = pathMod.default.extname(usePath).toLowerCase();
          if (useExt === ".gif") {
            // Try to find a non-GIF sibling with same basename
            const base = usePath.slice(0, -useExt.length);
            const candidates = [".jpg", ".jpeg", ".png", ".webp"];
            for (const c of candidates) {
              const p = base + c;
              try {
                await fsp.stat(p);
                usePath = p;
                useExt = c;
                break;
              } catch {}
            }
          }
          if (useExt !== ".gif") {
            const buf = await fsp.readFile(usePath);
            const b64 = buf.toString("base64");
            const mimeType =
              useExt === ".png"
                ? "image/png"
                : useExt === ".jpg" || useExt === ".jpeg"
                ? "image/jpeg"
                : useExt === ".webp"
                ? "image/webp"
                : "application/octet-stream";
            parts.push({ inlineData: { mimeType, data: b64 } });
          }
          // If still GIF (no sibling found), skip attaching to avoid 400
        }
      } catch {
        // ignore image attach failures; proceed with text-only prompt
      }
    }

    parts.push({ text: prompt });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts }] }),
    });

    if (!res.ok) {
      const text = await res.text();
      return Response.json(
        { error: `Gemini API error: ${res.status} ${text}` },
        { status: 500 }
      );
    }

    const data = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return Response.json({ text });
  } catch (err: unknown) {
    console.error("gemini-feedback error", err);
    return Response.json({ error: "Failed to get feedback" }, { status: 500 });
  }
}
