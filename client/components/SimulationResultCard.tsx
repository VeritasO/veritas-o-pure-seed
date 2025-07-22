import React from 'react';

export default function SimulationResultCard({ verdict }) {
  if (!verdict) return null;
  return (
    <div className="bg-green-50 border border-green-300 rounded p-6 shadow">
      <h2 className="text-xl font-bold mb-3">Simulation Verdict</h2>
      <p className="whitespace-pre-wrap">{verdict.text}</p>
      {verdict.options && verdict.options.length > 0 && (
        <>
          <h3 className="mt-4 font-semibold">Potential Reconciliation Options</h3>
          <ul className="list-disc pl-5 mt-2">
            {verdict.options.map((opt, idx) => (
              <li key={idx} className="mb-1">{opt}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
