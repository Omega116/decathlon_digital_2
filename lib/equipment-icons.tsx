import {
  User,
  Dumbbell,
  GripVertical,
  Circle,
  Waves,
  RectangleHorizontal,
  type LucideIcon,
} from "lucide-react";

export const equipmentIconMap: Record<string, LucideIcon> = {
  user: User,
  dumbbell: Dumbbell,
  "grip-vertical": GripVertical,
  circle: Circle,
  waves: Waves,
  "rectangle-horizontal": RectangleHorizontal,
};

export function getEquipmentIcon(iconId: string): LucideIcon | null {
  return equipmentIconMap[iconId] || null;
}
