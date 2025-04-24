import React from "react";
import ColorSelectCell from "../common/ColorSelectCell";

interface EditableGridProps {
  gridSize: { rows: number; cols: number };
  value: string[][];
  onChange: (row: number, col: number, newSymbol: string) => void;
  resultGrid?: boolean[][];
  disabled?: boolean;
}


const EditableGrid: React.FC<EditableGridProps> = ({
  gridSize,
  value,
  onChange,
  resultGrid,
  disabled
}) => {

  if (!value || value.length === 0 || !value[0]) {
    return <p className="text-red-500">⚠️ Griglia vuota o incompleta</p>;
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      {Array.from({ length: gridSize.rows }).map((_, row) => (
        <div key={row} className="flex gap-3">
          {Array.from({ length: gridSize.cols }).map((_, col) => (
            <ColorSelectCell
              key={`${row}-${col}`}
              value={value[row][col]}
              onChange={(val) => onChange(row, col, val)}
              disabled={disabled}
              isCorrect={resultGrid?.[row]?.[col]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EditableGrid;
