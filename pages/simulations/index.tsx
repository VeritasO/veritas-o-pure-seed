import React, { useState } from 'react';
import SimulationForm from '../../client/components/SimulationForm';
import SimulationResultCard from '../../client/components/SimulationResultCard';
import AgentEvaluationPanel from '../../client/components/AgentEvaluationPanel';
import ExportOptions from '../../client/components/ExportOptions';

export default function SimulationPage() {
  const [simulationInput, setSimulationInput] = useState<any>(null);
  const [simulationResult, setSimulationResult] = useState<any>(null);
  const [agentEvaluations, setAgentEvaluations] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleRunSimulation(input) {
    setLoading(true);
    setSimulationInput(input);
    setSimulationResult(null);
    setAgentEvaluations(null);

    try {
      const res = await fetch('/api/simulations/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      setSimulationResult(data.verdict);
      setAgentEvaluations(data.agentEvaluations);
    } catch (err) {
      console.error('Simulation error:', err);
      setSimulationResult({ error: 'Simulation failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Veritas.O Simulation Generator
      </h1>
      <section className="bg-white rounded-lg p-6 shadow">
        <SimulationForm onRun={handleRunSimulation} loading={loading} />
      </section>
      {loading && (
        <p className="text-center text-gray-500">Running simulation...</p>
      )}
      {simulationResult && !('error' in simulationResult) && (
        <>
          <section>
            <SimulationResultCard verdict={simulationResult} />
          </section>
          <section>
            <AgentEvaluationPanel evaluations={agentEvaluations} />
          </section>
          <section className="pt-4">
            <ExportOptions data={{ simulationInput, simulationResult, agentEvaluations }} />
          </section>
        </>
      )}
      {simulationResult && simulationResult.error && (
        <p className="text-center text-red-600">{simulationResult.error}</p>
      )}
    </main>
  );
}
