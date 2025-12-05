"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { exerciseData, equipmentData, muscleData } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function buildInstructions(name: string) {
  const basics = [
    "Set a stable stance and brace your core",
    "Maintain a neutral spine and controlled breathing",
    "Use a full, comfortable range of motion",
  ];
  if (/squat/i.test(name))
    return [
      "Feet shoulder-width apart, toes slightly out",
      "Inhale and push hips back, knees tracking over toes",
      "Keep chest up and spine neutral",
      "Descend until thighs parallel (or safe depth)",
      "Exhale and drive through mid-foot to stand",
      ...basics,
    ];
  if (/row|pulldown|pull/i.test(name))
    return [
      "Hinge at hips with neutral spine",
      "Pull elbows toward hips, squeeze shoulder blades",
      "Control the eccentric (lowering) phase",
      ...basics,
    ];
  if (/press|fly|overhead/i.test(name))
    return [
      "Set shoulders down and back, brace core",
      "Inhale on the way down, exhale as you press",
      "Keep wrists stacked over elbows when possible",
      ...basics,
    ];
  return basics;
}

function buildDonts(name: string) {
  const list = [
    "Avoid rounding or hyperextending your lower back",
    "Don't bounce or use momentum",
    "Don't hold your breath too long—breathe rhythmically",
  ];
  if (/squat/i.test(name)) list.unshift("Don't let knees cave inward (valgus)");
  if (/row|pulldown|pull/i.test(name))
    list.unshift("Don't shrug shoulders toward ears");
  if (/press|fly|overhead/i.test(name))
    list.unshift("Avoid excessive rib flare or arching");
  return list;
}

export default function ExerciseDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const ex = useMemo(
    () => exerciseData.find((e) => e.id === params.id),
    [params.id]
  );

  if (!ex) {
    return (
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-muted-foreground">Exercise not found.</p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => router.push("/")}
        >
          Back
        </Button>
      </div>
    );
  }

  const instructions = buildInstructions(ex.name);
  const donts = buildDonts(ex.name);
  const equipment = ex.equipment
    .map((id) => equipmentData.find((e) => e.id === id)?.name || id)
    .filter(Boolean);
  const muscles = ex.muscles
    .map((id) => muscleData.find((m) => m.id === id)?.name || id)
    .filter(Boolean);

  const tags = [
    ...(ex.muscles.slice(0, 1).length
      ? [
          "Primary: " +
            (muscleData.find((m) => m.id === ex.muscles[0])?.name ||
              ex.muscles[0]),
        ]
      : []),
    ...ex.muscles
      .slice(1)
      .map(
        (m) => "Secondary: " + (muscleData.find((x) => x.id === m)?.name || m)
      ),
    "Difficulty: " + ex.difficulty,
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 space-y-4 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{ex.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/assistant")}>
            Open Assistant
          </Button>
          <Button onClick={() => router.push("/shop")}>Recommended Gear</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Technique</CardTitle>
            <CardDescription>Step-by-step instructions</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-2">
              {instructions.map((s, i) => (
                <li key={i} className="text-sm">
                  {s}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Safety: Do Not Do</CardTitle>
            <CardDescription>Common mistakes to avoid</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {donts.map((s, i) => (
                <li key={i} className="text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Muscles & Equipment</CardTitle>
          <CardDescription>
            Primary and secondary muscles, required gear
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {muscles.map((m) => (
              <Badge key={m} variant="secondary">
                {m}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {equipment.map((e) => (
              <Badge key={e} variant="outline">
                {e}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Illustration or demo GIF</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
            <Image
              src={
                ex.gif.startsWith("assets/")
                  ? `/${ex.gif}`
                  : `/workouts/${ex.gif}`
              }
              alt={ex.name}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
