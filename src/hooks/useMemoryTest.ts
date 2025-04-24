import { useEffect, useState } from "react";
import { fetchTest, MemoryTestResponse } from "@/services/api";
import { submitResult } from "@/services/api";

export function useMemoryTest() {
  const [stage, setStage] = useState(1);
  const [data, setData] = useState<MemoryTestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [userGrid, setUserGrid] = useState<string[][]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [resultGrid, setResultGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    if (stage > 5) {
      setData(null);
      setShowGrid(false);
      return;
    }
  
    fetchTest(stage)
      .then((res) => {
        setData(res);
        const emptyGrid = Array.from({ length: res.grid.length }, () =>
          Array.from({ length: res.grid[0].length }, () => "")
        );
        setUserGrid(emptyGrid);
        setScore(null);
        setResultGrid([]);
        setShowGrid(true);
        setTimeout(() => setShowGrid(false), res.timeout * 1000);
      })
      .catch((err) => setError(err.message));
  }, [stage]);
  
  
  function submit() {
    if (!data) return;
  
    const correctness = data.grid.map((row, i) =>
      row.map((cell, j) => userGrid[i][j] === cell)
    );
    setResultGrid(correctness);
  
    let correct = 0;
    correctness.forEach((row) =>
      row.forEach((isCorrect) => {
        if (isCorrect) correct++;
      })
    );
    setScore(correct);
  
    submitResult({
      stage,
      score: correct,
      total: data.grid.length * data.grid[0].length,
      userGrid,
      correctGrid: data.grid,
    });
    if (stage > 5) {
      setShowGrid(false);
      setData(null);
      return;
    }
    setTimeout(() => {
      nextStage();
    }, 1500);
    
  }
  
  


  function nextStage() {
    setStage((s) => Math.min(s + 1, 5));
  }
  

  const total = data ? data.grid.length * data.grid[0].length : 0;
  const passed = score !== null && score === total;

  return {
    data,
    error,
    stage,
    showGrid,
    userGrid,
    setUserGrid,
    submit,
    score,
    resultGrid,
    passed,
    nextStage,
  };
}
