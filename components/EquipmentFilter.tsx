"use client";

import React from "react";
import { equipmentData } from "@/lib/mock-data";
import { MultiSelect } from "@/components/ui/multi-select";
import { getEquipmentIcon } from "@/lib/equipment-icons";

interface EquipmentFilterProps {
  selectedEquipment: string[];
  onToggleEquipment: (equipmentId: string) => void;
}

const EquipmentFilter: React.FC<EquipmentFilterProps> = ({
  selectedEquipment,
  onToggleEquipment,
}) => {
  const options = equipmentData.map((equipment) => ({
    value: equipment.id,
    label: equipment.name,
    icon: getEquipmentIcon(equipment.icon) || undefined,
  }));

  const handleSelectionChange = (selected: string[]) => {
    // Find items that need to be toggled
    const currentSet = new Set(selectedEquipment);
    const newSet = new Set(selected);

    // Items to add (in new but not in current)
    selected.forEach((id) => {
      if (!currentSet.has(id)) {
        onToggleEquipment(id);
      }
    });

    // Items to remove (in current but not in new)
    selectedEquipment.forEach((id) => {
      if (!newSet.has(id)) {
        onToggleEquipment(id);
      }
    });
  };

  return (
    <div className="w-full">
      <MultiSelect
        options={options}
        selected={selectedEquipment}
        onSelectionChange={handleSelectionChange}
        placeholder="Select equipment..."
      />
    </div>
  );
};

export default EquipmentFilter;
