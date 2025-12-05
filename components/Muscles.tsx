"use client";

import React, { useMemo } from "react";
import {
  muscleData,
  equipmentData,
  type Muscle,
  type Difficulty,
} from "@/lib/mock-data";
import Illustration from "./Illustration";
import styles from "./Muscles.module.css";

interface MusclesProps {
  selectedMuscles: string[];
  onToggleMuscle: (muscleId: string) => void;
  selectedEquipment: string[];
  selectedDifficulties: Difficulty[];
}

const Muscles: React.FC<MusclesProps> = ({
  selectedMuscles,
  onToggleMuscle,
  selectedEquipment,
  selectedDifficulties,
}) => {
  // Filter muscles based on selected equipment
  const filteredMuscleData = useMemo(() => {
    let filtered = muscleData;

    // If equipment is selected, only show muscles that can be trained with those equipment
    if (selectedEquipment.length > 0) {
      const availableMuscles = new Set<string>();
      selectedEquipment.forEach((equipId) => {
        const equipment = equipmentData.find((e) => e.id === equipId);
        if (equipment) {
          equipment.muscles.forEach((muscleId) =>
            availableMuscles.add(muscleId)
          );
        }
      });
      filtered = filtered.filter((muscle) => availableMuscles.has(muscle.id));
    }

    // Filter by difficulty levels
    if (selectedDifficulties.length > 0) {
      filtered = filtered.map((muscle) => ({
        ...muscle,
        count: selectedDifficulties.reduce(
          (acc, difficulty) =>
            acc +
            ((muscle[difficulty.toLowerCase() as keyof Muscle] as number) || 0),
          0
        ),
      }));
    }

    // Only show muscles with available exercises
    return filtered.filter((muscle) => muscle.count > 0);
  }, [selectedEquipment, selectedDifficulties]);

  const isDisabled = selectedEquipment.length === 0;

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div
        className={`${styles.svgContainer} flex-1 min-h-0 ${
          isDisabled ? "pointer-events-none opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Illustration
          toggleMuscle={isDisabled ? () => {} : onToggleMuscle}
          muscles={selectedMuscles}
          exerciseCount={filteredMuscleData}
        />
      </div>

      {/* Selected muscles list */}
      {selectedMuscles.length > 0 && (
        <div className="mt-2 p-2 bg-card rounded-xl border border-border shrink-0">
          <h4 className="font-semibold text-foreground mb-1 text-sm">
            Selected Muscles:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {selectedMuscles.map((muscleId) => {
              const muscle = muscleData.find((m) => m.id === muscleId);
              return (
                <span
                  key={muscleId}
                  className="px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs font-medium"
                >
                  {muscle?.name || muscleId}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Muscles;
