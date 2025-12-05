"use client";

import React, { useEffect, useMemo, useState } from "react";
import { qcmQuestions, type QcmDifficulty } from "@/lib/qcm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n-context";

// Minimal, accessible QCM experience with progress and feedback.

type AnswerState = "idle" | "correct" | "incorrect";

const LS_KEY = "ms_qcm_progress_v1";

export default function QuizPage() {
  const { t } = useI18n();
  const [difficulty, setDifficulty] = useState<QcmDifficulty | "All">(() => {
    if (typeof window === "undefined") return "All";
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return "All";
      const data = JSON.parse(raw) as { difficulty: QcmDifficulty | "All" };
      return data.difficulty ?? "All";
    } catch {
      return "All";
    }
  });
  const questions = useMemo(
    () =>
      qcmQuestions.filter((q) =>
        difficulty === "All" ? true : q.difficulty === difficulty
      ),
    [difficulty]
  );

  const [index, setIndex] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return 0;
      const data = JSON.parse(raw) as { index: number };
      return Number.isFinite(data.index) ? data.index : 0;
    } catch {
      return 0;
    }
  });
  const [score, setScore] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return 0;
      const data = JSON.parse(raw) as { score: number };
      return Number.isFinite(data.score) ? data.score : 0;
    } catch {
      return 0;
    }
  });
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({ difficulty, index, score })
      );
    } catch {}
  }, [difficulty, index, score]);

  const current = questions[index] ?? null;
  const progressPct = questions.length
    ? Math.round(((index + 1) / questions.length) * 100)
    : 0;

  const handleChoose = (i: number) => {
    if (!current) return;
    setSelectedOption(i);
    const isCorrect = i === current.correctIndex;
    setAnswerState(isCorrect ? "correct" : "incorrect");
    if (isCorrect) setScore((s) => s + 1);
  };

  const next = () => {
    setSelectedOption(null);
    setAnswerState("idle");
    setIndex((i) => (i + 1 < questions.length ? i + 1 : 0));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">{t("quiz")}</h1>
        <div className="flex items-center gap-2">
          {(["All", "Beginner", "Intermediate", "Advanced"] as const).map(
            (lvl) => (
              <Button
                key={lvl}
                variant={difficulty === lvl ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setDifficulty(lvl);
                  setIndex(0);
                  setScore(0);
                  setSelectedOption(null);
                  setAnswerState("idle");
                }}
              >
                {lvl}
              </Button>
            )
          )}
        </div>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              Q{index + 1}
              {questions.length ? `/${questions.length}` : ""}
            </span>
            <Badge variant="secondary" className="ml-2">
              Score: {score}
            </Badge>
          </CardTitle>
          <CardDescription>
            <div className="h-2 w-full bg-muted rounded">
              <div
                className="h-2 bg-primary rounded"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {current ? (
            <div className="space-y-4">
              <p className="font-medium text-foreground">{current.question}</p>
              <ul className="grid gap-2" aria-label="Answers">
                {current.options.map((opt, i) => {
                  const isSelected = selectedOption === i;
                  const isCorrect = i === current.correctIndex;
                  const color =
                    answerState === "idle"
                      ? "outline"
                      : isCorrect
                      ? "secondary"
                      : isSelected
                      ? "destructive"
                      : "outline";
                  return (
                    <li key={i}>
                      <Button
                        className="w-full justify-start text-left"
                        variant={color}
                        onClick={() => handleChoose(i)}
                        aria-pressed={isSelected}
                      >
                        {opt}
                      </Button>
                    </li>
                  );
                })}
              </ul>

              <div aria-live="polite">
                {answerState !== "idle" && (
                  <div
                    className={`rounded-md p-3 border ${
                      answerState === "correct"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    }`}
                  >
                    <p className="font-medium mb-1">
                      {answerState === "correct"
                        ? "Correct ✅"
                        : "Incorrect ❌"}
                    </p>
                    <p className="text-sm">{current.explanation}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => next()}>
                  Next
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No questions available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
