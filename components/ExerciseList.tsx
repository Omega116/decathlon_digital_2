"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  exerciseData,
  muscleData,
  equipmentData,
  type Difficulty,
  type Exercise,
} from "@/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";
import { Search, Dumbbell } from "lucide-react";

interface ExerciseListProps {
  selectedMuscles: string[];
  selectedEquipment: string[];
  selectedDifficulties: Difficulty[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({
  selectedMuscles,
  selectedEquipment,
  selectedDifficulties,
}) => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );

  const filteredExercises = useMemo(() => {
    if (selectedMuscles.length === 0 || selectedEquipment.length === 0) {
      return [];
    }

    return exerciseData.filter((exercise) => {
      // Check if exercise targets at least one selected muscle
      const matchesMuscle = exercise.muscles.some((muscle) =>
        selectedMuscles.includes(muscle)
      );

      // Check if exercise uses at least one selected equipment
      const matchesEquipment = exercise.equipment.some((equip) =>
        selectedEquipment.includes(equip)
      );

      // Check if exercise matches selected difficulty (if any selected)
      const matchesDifficulty =
        selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(exercise.difficulty);

      return matchesMuscle && matchesEquipment && matchesDifficulty;
    });
  }, [selectedMuscles, selectedEquipment, selectedDifficulties]);

  if (selectedMuscles.length === 0 || selectedEquipment.length === 0) {
    return (
      <Empty>
        <EmptyMedia variant="icon">
          <Dumbbell className="size-6" />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No selections yet</EmptyTitle>
          <EmptyDescription>
            Select equipment and muscles above to see available exercises
            tailored to your preferences.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  if (filteredExercises.length === 0) {
    return (
      <Empty>
        <EmptyMedia variant="icon">
          <Search className="size-6" />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No exercises found</EmptyTitle>
          <EmptyDescription>
            No exercises match your selected criteria. Try adjusting your
            equipment, muscles, or difficulty filters.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <>
      <div className="space-y-2 h-full overflow-y-auto">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => setSelectedExercise(exercise)}
            className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">
                  {exercise.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exercise.muscles.map((muscleId) => {
                    const muscle = muscleData.find((m) => m.id === muscleId);
                    return (
                      <Badge
                        key={muscleId}
                        variant="secondary"
                        className="text-xs"
                      >
                        {muscle?.name || muscleId}
                      </Badge>
                    );
                  })}
                  {exercise.equipment.map((equipId) => {
                    const equipment = equipmentData.find(
                      (e) => e.id === equipId
                    );
                    return (
                      <Badge
                        key={equipId}
                        variant="outline"
                        className="text-xs"
                      >
                        {equipment?.name || equipId}
                      </Badge>
                    );
                  })}
                  <Badge
                    variant={
                      exercise.difficulty === "Beginner"
                        ? "default"
                        : exercise.difficulty === "Intermediate"
                        ? "secondary"
                        : "destructive"
                    }
                    className="text-xs"
                  >
                    {exercise.difficulty}
                  </Badge>
                </div>
              </div>
              <Link href={`/exercise/${exercise.id}`} className="shrink-0">
                <Button size="sm" variant="outline">
                  View sheet
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Exercise Detail Modal */}
      <Dialog
        open={selectedExercise !== null}
        onOpenChange={(open) => !open && setSelectedExercise(null)}
      >
        {selectedExercise && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedExercise.name}</DialogTitle>
              <DialogDescription>
                Exercise details and instructions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={
                    selectedExercise.gif.startsWith("assets/")
                      ? `/${selectedExercise.gif}`
                      : `/workouts/${selectedExercise.gif}`
                  }
                  alt={selectedExercise.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {selectedExercise.description && (
                <p className="text-foreground">
                  {selectedExercise.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Muscles:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExercise.muscles.map((muscleId) => {
                      const muscle = muscleData.find((m) => m.id === muscleId);
                      return (
                        <Badge key={muscleId} variant="secondary">
                          {muscle?.name || muscleId}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Equipment:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExercise.equipment.map((equipId) => {
                      const equipment = equipmentData.find(
                        (e) => e.id === equipId
                      );
                      return (
                        <Badge key={equipId} variant="outline">
                          {equipment?.name || equipId}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <Badge
                  variant={
                    selectedExercise.difficulty === "Beginner"
                      ? "default"
                      : selectedExercise.difficulty === "Intermediate"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {selectedExercise.difficulty}
                </Badge>
              </div>
              <div className="flex justify-end">
                <Link href={`/exercise/${selectedExercise.id}`}>
                  <Button>Open full sheet</Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ExerciseList;
