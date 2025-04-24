export interface MemoryTestResponse {
  grid: string[][];
  timeout: number;
}

export async function fetchTest(stage: number): Promise<MemoryTestResponse> {
  const res = await fetch(`http://localhost:8080/api/test?stage=${stage}`);
  if (!res.ok) throw new Error("Errore nella richiesta API");
  return res.json();
}

export interface TestSubmission {
  stage: number;
  score: number;
  total: number;
  userGrid: string[][];
  correctGrid: string[][];
}

export async function submitResult(data: TestSubmission): Promise<void> {
  const res = await fetch("http://localhost:8080/api/test/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error("Errore nell'invio dei risultati");
  }
}
