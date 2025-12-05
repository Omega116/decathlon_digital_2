"use client";

import React from "react";
import { difficultyLevels, type Difficulty } from "@/lib/mock-data";
import { MultiSelect } from "@/components/ui/multi-select";

interface DifficultyFilterProps {
  selectedDifficulties: Difficulty[];
  onToggleDifficulty: (difficulty: Difficulty) => void;
}

const DifficultyFilter: React.FC<DifficultyFilterProps> = ({
  selectedDifficulties,
  onToggleDifficulty,
}) => {
  const options = difficultyLevels.map((difficulty) => ({
    value: difficulty,
    label: difficulty,
  }));

  const handleSelectionChange = (selected: string[]) => {
    // Find items that need to be toggled
    const currentSet = new Set(selectedDifficulties);
    const newSet = new Set(selected);

    // Items to add (in new but not in current)
    selected.forEach((id) => {
      if (!currentSet.has(id as Difficulty)) {
        onToggleDifficulty(id as Difficulty);
      }
    });

    // Items to remove (in current but not in new)
    selectedDifficulties.forEach((difficulty) => {
      if (!newSet.has(difficulty)) {
        onToggleDifficulty(difficulty);
      }
    });
  };

  return (
    <div className="w-full">
      <MultiSelect
        options={options}
        selected={selectedDifficulties}
        onSelectionChange={handleSelectionChange}
        placeholder="Select difficulty"
      />
    </div>
  );
};

export default DifficultyFilter;
