import { FC } from "react";
import { Button } from "@/components/ui/button";
import EditableGrid from "./EditableGrid";

interface Props {
  gridSize: { rows: number; cols: number };
  value: string[][];
  onChange: (row: number, col: number, val: string) => void;
  disabled: boolean;
  onSubmit: () => void;
  score: number | null;
}

const TestGrid: FC<Props> = ({ gridSize, value, onChange, disabled, onSubmit, score }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <EditableGrid
        gridSize={gridSize}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {score === null && (
        <Button onClick={onSubmit}>
          Conferma
        </Button>
      )}
    </div>
  );
};

export default TestGrid;
