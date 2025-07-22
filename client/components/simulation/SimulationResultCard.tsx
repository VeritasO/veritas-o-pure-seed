export default function SimulationResultCard({ result }) {
  if (!result) return null;
  return (
    <div className="p-4 mt-6 border rounded-xl bg-gray-50 shadow-md space-y-2">
      <h3 className="text-xl font-bold">🧾 Verdict: {result.verdict}</h3>
      <ul className="list-disc ml-5 text-sm">
        {result.logic.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
      <p className="mt-2 font-medium">Suggested Reconciliation:</p>
      <ul className="list-disc ml-5 text-sm">
        {result.reconciliationOptions.map((opt, i) => <li key={i}>{opt}</li>)}
      </ul>
      <p className="text-xs text-gray-500">Agents Involved: {result.associatedAgents.join(", ")}</p>
      <p className="text-xs text-gray-400">Harmony Impact: {result.harmonyScoreImpact}</p>
    </div>
  );
}
