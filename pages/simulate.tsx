import { useState } from "react";
import SimulationInputPanel from "../client/components/simulation/SimulationInputPanel";
import SimulationResultCard from "../client/components/simulation/SimulationResultCard";
import generateRandomCase from "../client/components/simulation/RandomCaseGenerator";

export default function SimulatePage() {
  const [result, setResult] = useState(null);
  const [inputMode, setInputMode] = useState<'custom' | 'random'>('custom');

  async function handleSimulate(formData) {
    const res = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResult(data);
  }

  function handleRandomGenerate() {
    const randomInput = generateRandomCase();
    handleSimulate(randomInput);
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">⚖️ Generate Edge Case Simulation</h1>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-medium border ${inputMode === 'custom' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600'}`}
          onClick={() => setInputMode('custom')}
        >Custom Case</button>
        <button
          className={`px-4 py-2 rounded font-medium border ${inputMode === 'random' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border-indigo-600'}`}
          onClick={handleRandomGenerate}
        >Randomized Case</button>
      </div>
      {inputMode === 'custom' && <SimulationInputPanel onSimulate={handleSimulate} />}
      <SimulationResultCard result={result} />
    </div>
  );
}
