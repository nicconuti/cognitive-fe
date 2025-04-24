import React from "react";
import MemoryTestView from "@/components/layout/MemoryTestView";
import { useMemoryTest } from "@/hooks/useMemoryTest";

function App() {
  const props = useMemoryTest();
  return props.data ?
    <MemoryTestView
      data={props.data!}
      stage={props.stage}
      showGrid={props.showGrid}
      userGrid={props.userGrid}
      setUserGrid={props.setUserGrid}
      submit={props.submit}
      score={props.score}
      resultGrid={props.resultGrid}
      passed={props.passed}
      nextStage={props.nextStage}
      error={props.error}
    />
    : <p>Loading...</p>;
}

export default App;
