import { FC } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TestGrid from "@/components/layout/TestGrid";
import TestComplete from "@/components/layout/TestComplete";
import TestHeader from "./TestHeader";
import TestResult from "./TestResult";
import Grid from "./Grid";

interface Props {
  data: { grid: string[][]; timeout: number };
  stage: number;
  showGrid: boolean;
  userGrid: string[][];
  setUserGrid: (val: string[][]) => void;
  submit: () => void;
  score: number | null;
  resultGrid: boolean[][];
  passed: boolean;
  nextStage: () => void;
  error: string | null;
}

const MemoryTestView: FC<Props> = ({
  data,
  stage,
  showGrid,
  userGrid,
  setUserGrid,
  submit,
  score,
  resultGrid,
  passed,
  nextStage,
  error,
}) => {
  const total = data ? data.grid.length * data.grid[0].length : 0;

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-3xl shadow-xl border rounded-xl">
        <CardHeader>
          <TestHeader stage={stage} />
        </CardHeader>

        <CardContent className="flex flex-col items-center space-y-8">
          {error && <p className="text-red-500 font-medium">❌ {error}</p>}
          {!data && !error && <p>⏳ Caricamento...</p>}

          {data && showGrid && (
            <>
              <Grid grid={data.grid} />
              <p className="mt-2">Hai {data.timeout} secondi per memorizzare</p>
            </>
          )}

          {data && !showGrid && (
            <>
              <TestGrid
                gridSize={{ rows: data.grid.length, cols: data.grid[0].length }}
                value={userGrid}
                onChange={(row, col, val) => {
                  const updated = structuredClone(userGrid);
                  updated[row][col] = val;
                  setUserGrid(updated);
                }}
                disabled={score !== null}
                onSubmit={submit}
                score={score}
              />
            </>
          )}


          {data && !showGrid && score !== null && (
            <TestResult score={score} total={total} passed={passed} />
          )}

          {!data && stage > 5 && <TestComplete />}
        </CardContent>
      </Card>
    </div>
  );
};

export default MemoryTestView;