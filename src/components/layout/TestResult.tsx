import { FC } from "react";
import { Badge } from "../ui/badge";

interface Props {
  score: number;
  total: number;
  passed: boolean;
}

const TestResult: FC<Props> = ({ score, total, passed }) => (
  <div className="text-center mt-2 space-y-1">
    <Badge variant={passed ? "default" : "destructive"}>
      {passed ? "✅ Test superato" : "❌ Test non superato"}
    </Badge>
    <p className="text-sm text-muted-foreground">Risposte corrette: {score} su {total}</p>
  </div>
);

export default TestResult;
