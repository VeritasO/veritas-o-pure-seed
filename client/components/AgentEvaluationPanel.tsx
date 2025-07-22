import React from 'react';

export default function AgentEvaluationPanel({ evaluations }) {
  if (!evaluations || evaluations.length === 0) return null;
  return (
    <div className="bg-white border rounded p-4 shadow mt-6">
      <h3 className="text-lg font-semibold mb-3">Agent Logic Evaluations</h3>
      <ul className="space-y-3 max-h-60 overflow-y-auto">
        {evaluations.map((evalItem, idx) => (
          <li key={idx} className="border-b pb-2 last:border-b-0">
            <strong>{evalItem.agent}</strong>: {evalItem.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}
