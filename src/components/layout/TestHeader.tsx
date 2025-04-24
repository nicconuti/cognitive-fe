import { FC } from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  stage: number;
}

const TestHeader: FC<Props> = ({ stage }) => (
  <div className="text-center ">
    <h1 className="text-3xl font-bold mb-2">Test di Memoria Visiva</h1>
    <Badge variant="outline" className="text-sm">Livello {stage}</Badge>
  </div>
);

export default TestHeader;