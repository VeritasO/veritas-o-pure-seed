import React from 'react';

const justiceTierColors = {
  grief: 'bg-yellow-100 text-yellow-800',
  restoration: 'bg-blue-100 text-blue-800',
  time: 'bg-gray-100 text-gray-700',
  harm: 'bg-red-100 text-red-800',
  healing: 'bg-green-100 text-green-800',
};

const justiceTierIcons = {
  grief: '🕯️',
  restoration: '🌿',
  time: '⏳',
  harm: '⚡',
  healing: '💧',
};

export function SymbolicRenderCard({ data }) {
  if (!data) return null;
  return (
    <div className="p-6 border rounded-xl bg-white shadow space-y-4">
      <div className="flex items-center gap-3">
        <span className={`text-2xl ${justiceTierColors[data.justiceTier || 'grief']}`}>{justiceTierIcons[data.justiceTier || 'grief']}</span>
        <h2 className="text-xl font-bold">{data.verdict}</h2>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${justiceTierColors[data.justiceTier || 'grief']}`}>{data.justiceTierLabel || 'Grief Tier'}</span>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Reasoning Path (Book VI):</h3>
        <ul className="list-disc ml-5 text-sm">
          {data.logic.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Amends Paths (Book V/VII):</h3>
        <ul className="list-disc ml-5 text-sm">
          {data.reconciliationOptions.map((opt, i) => <li key={i}>{opt}</li>)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Agent Echo Trail:</h3>
        <ul className="list-disc ml-5 text-xs">
          {data.agentEchoes?.map((echo, i) => <li key={i}><span className="mr-2">{echo.icon}</span>{echo.commentary}</li>)}
        </ul>
      </div>
      <div className="flex gap-4 mt-2">
        <span className="text-xs text-gray-500">Harmony Score: {data.harmonyScoreImpact}</span>
        <span className="text-xs text-gray-400">TEMPUS Index: {data.tempusIndex || '--'}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Export Verdict Card</button>
        <button className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600">Save Simulation</button>
      </div>
      <div className="mt-2 text-xs text-gray-400">Book Reference: {data.bookReference || 'Book VI, V, IX, X'}</div>
    </div>
  );
}
