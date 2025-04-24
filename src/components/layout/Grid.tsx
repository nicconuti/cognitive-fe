import React from "react";
import colorMap from "@/config/colorMap";

interface GridProps {
  grid: string[][];
}


const Grid: React.FC<GridProps> = ({ grid }) => {
  if (!grid || grid.length === 0) {
    return <p className="text-red-500">⚠️ Nessuna griglia disponibile</p>;
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-3">
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-14 h-14 rounded-full shadow-md transition-all duration-200 
                          ${colorMap[cell] || "bg-gray-300"} 
                          hover:scale-105 hover:brightness-110`}
              title={cell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
