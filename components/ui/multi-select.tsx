"use client";

import * as React from "react";
import { ChevronDownIcon, XIcon, type LucideIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MultiSelectOption {
  value: string;
  label: string;
  icon?: string | LucideIcon;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selected,
  onSelectionChange,
  placeholder = "Select options...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelectionChange(newSelected);
  };

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectionChange(selected.filter((item) => item !== value));
  };

  const selectedOptions = options.filter((option) =>
    selected.includes(option.value)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between min-h-[38px] max-h-[38px] h-[38px] py-1.5 px-3",
            className
          )}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selected.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              selectedOptions.map((option) => {
                const IconComponent =
                  typeof option.icon === "string" ? null : option.icon;
                const iconString =
                  typeof option.icon === "string" ? option.icon : null;

                return (
                  <span
                    key={option.value}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-xs"
                  >
                    {IconComponent && <IconComponent className="h-3 w-3" />}
                    {iconString && <span>{iconString}</span>}
                    {option.label}
                    <button
                      type="button"
                      onClick={(e) => handleRemove(option.value, e)}
                      className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5"
                    >
                      <XIcon className="h-3 w-3" />
                    </button>
                  </span>
                );
              })
            )}
          </div>
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] p-0" align="start">
        <div className="max-h-[300px] overflow-y-auto p-2">
          {options.map((option) => {
            const isSelected = selected.includes(option.value);
            return (
              <div
                key={option.value}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                onClick={() => handleToggle(option.value)}
              >
                <Checkbox
                  id={option.value}
                  checked={isSelected}
                  onCheckedChange={() => handleToggle(option.value)}
                />
                <Label
                  htmlFor={option.value}
                  className="flex items-center gap-2 cursor-pointer flex-1 text-sm font-medium"
                >
                  {option.icon && typeof option.icon !== "string" ? (
                    React.createElement(option.icon, { className: "h-4 w-4" })
                  ) : option.icon ? (
                    <span>{option.icon}</span>
                  ) : null}
                  {option.label}
                </Label>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
