import React from "react";
import { SYMBOL_OPTIONS } from "@/config/colorMap";
import colorMap from "@/config/colorMap";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

interface ColorSelectCellProps {
  value: string;
  onChange: (newValue: string) => void;
  disabled?: boolean;
  isCorrect?: boolean;
}

const ColorSelectCell: React.FC<ColorSelectCellProps> = ({ value, onChange, disabled, isCorrect }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-14 h-14 rounded-full transition-all shadow-md border-none",
            isCorrect === true
              ? "bg-green-500"
              : isCorrect === false
              ? "bg-red-500"
              : colorMap[value] || "bg-gray-300",
            disabled && "opacity-50 pointer-events-none"
          )}
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 rounded-lg bg-white shadow-lg w-auto z-50">
        <div className="grid grid-cols-3 gap-2">
          {SYMBOL_OPTIONS.map((symbol) => (
            <button
              key={symbol}
              onClick={() => {
                onChange(symbol);
                setOpen(false);
              }}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                colorMap[symbol] || "bg-gray-400",
                symbol === value && "ring-2 ring-black"
              )}
            >
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorSelectCell;
