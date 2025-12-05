"use client";

import React, { useEffect, useState } from "react";
import Muscles from "@/components/Muscles";
import EquipmentFilter from "@/components/EquipmentFilter";
import DifficultyFilter from "@/components/DifficultyFilter";
import ExerciseList from "@/components/ExerciseList";
import { type Difficulty } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const LS = {
    muscles: "ms_sel_muscles",
    equipment: "ms_sel_equipment",
    difficulties: "ms_sel_difficulties",
  } as const;

  const [selectedMuscles, setSelectedMuscles] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(LS.muscles);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(LS.equipment);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });
  const [selectedDifficulties, setSelectedDifficulties] = useState<
    Difficulty[]
  >(() => {
    if (typeof window === "undefined") return [] as Difficulty[];
    try {
      const raw = localStorage.getItem(LS.difficulties);
      return raw ? (JSON.parse(raw) as Difficulty[]) : [];
    } catch {
      return [] as Difficulty[];
    }
  });

  const handleToggleMuscle = (muscleId: string) => {
    setSelectedMuscles((prev) =>
      prev.includes(muscleId)
        ? prev.filter((id) => id !== muscleId)
        : [...prev, muscleId]
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem(LS.muscles, JSON.stringify(selectedMuscles));
      localStorage.setItem(LS.equipment, JSON.stringify(selectedEquipment));
      localStorage.setItem(
        LS.difficulties,
        JSON.stringify(selectedDifficulties)
      );
    } catch {}
  }, [selectedMuscles, selectedEquipment, selectedDifficulties]);

  const handleToggleEquipment = (equipmentId: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(equipmentId)
        ? prev.filter((id) => id !== equipmentId)
        : [...prev, equipmentId]
    );
    // Reset muscles when equipment changes
    if (selectedMuscles.length > 0) {
      setSelectedMuscles([]);
    }
  };

  const handleToggleDifficulty = (difficulty: Difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  return (
    <div className="h-screen bg-background p-4 md:p-6 overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 md:gap-5 flex-1 min-h-0">
        {/* Header Section */}
        <div className="space-y-1 text-center md:text-left shrink-0">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Build Your Perfect Workout
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Customize your fitness journey by selecting equipment, difficulty
              level, and target muscles to discover personalized exercise
              recommendations.
            </p>
          </div>
        </div>

        {/* Top Input Section */}
        <Card className="border-2 shrink-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg md:text-xl">
                Workout Filters
              </CardTitle>
            </div>
            <CardDescription className="text-sm">
              Select your equipment and preferred difficulty level to customize
              your workout plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Equipment Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    Equipment
                  </h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Required
                  </span>
                </div>
                <EquipmentFilter
                  selectedEquipment={selectedEquipment}
                  onToggleEquipment={handleToggleEquipment}
                />
                {selectedEquipment.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedEquipment.length} equipment
                    {selectedEquipment.length > 1 ? "s" : ""} selected
                  </p>
                )}
              </div>

              {/* Difficulty Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    Difficulty Level
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    Optional
                  </span>
                </div>
                <DifficultyFilter
                  selectedDifficulties={selectedDifficulties}
                  onToggleDifficulty={handleToggleDifficulty}
                />
                {selectedDifficulties.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedDifficulties.length} level
                    {selectedDifficulties.length > 1 ? "s" : ""} selected
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Content Panels - Two horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 flex-1 min-h-0">
          {/* Muscle Selector Card */}
          <Card
            className={`transition-all duration-200 flex flex-col min-h-0 ${
              selectedEquipment.length === 0
                ? "opacity-60 border-dashed"
                : "border-2 shadow-md"
            }`}
          >
            <CardHeader className="shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg md:text-xl">
                  Muscle Selector
                </CardTitle>
                {selectedMuscles.length > 0 && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {selectedMuscles.length} selected
                  </span>
                )}
              </div>
              {selectedEquipment.length === 0 ? (
                <CardDescription className="text-sm">
                  Please select at least one equipment to enable muscle
                  selection.
                </CardDescription>
              ) : (
                <CardDescription className="text-sm">
                  Select the muscles you would like to train. (2-3 recommended)
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-1 min-h-0 overflow-hidden">
              <Muscles
                selectedMuscles={selectedMuscles}
                onToggleMuscle={handleToggleMuscle}
                selectedEquipment={selectedEquipment}
                selectedDifficulties={selectedDifficulties}
              />
            </CardContent>
          </Card>

          {/* Workouts List Card */}
          <Card className="border-2 shadow-md flex flex-col min-h-0">
            <CardHeader className="shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg md:text-xl">
                  Exercise Recommendations
                </CardTitle>
                {selectedMuscles.length > 0 && selectedEquipment.length > 0 && (
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    {selectedMuscles.length > 0 && selectedEquipment.length > 0
                      ? "Ready"
                      : "Pending"}
                  </span>
                )}
              </div>
              <CardDescription className="text-sm">
                {selectedMuscles.length === 0 || selectedEquipment.length === 0
                  ? "Complete your selections above to see personalized exercises."
                  : "Browse through exercises tailored to your preferences."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 overflow-hidden">
              <ExerciseList
                selectedMuscles={selectedMuscles}
                selectedEquipment={selectedEquipment}
                selectedDifficulties={selectedDifficulties}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
