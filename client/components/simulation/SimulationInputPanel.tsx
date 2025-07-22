import { useState } from "react";

export default function SimulationInputPanel({ onSimulate }) {
  const [formData, setFormData] = useState({
    griefLevel: 5,
    harmType: "relational",
    timeImbalance: "delayed",
    justiceType: "symbolic"
  });

  return (
    <div className="grid gap-4 p-4 border rounded-xl bg-white shadow-lg">
      <label>
        Grief Level (1–10):
        <input type="range" min="1" max="10" value={formData.griefLevel}
          onChange={(e) => setFormData({ ...formData, griefLevel: +e.target.value })}
          className="w-full" />
      </label>
      <label>
        Type of Harm:
        <select value={formData.harmType}
          onChange={(e) => setFormData({ ...formData, harmType: e.target.value })}
          className="w-full p-2 rounded border">
          <option value="relational">Relational</option>
          <option value="systemic">Systemic</option>
          <option value="historical">Historical</option>
          <option value="ecological">Ecological</option>
          <option value="spiritual">Spiritual</option>
        </select>
      </label>
      <label>
        Time Imbalance:
        <select value={formData.timeImbalance}
          onChange={(e) => setFormData({ ...formData, timeImbalance: e.target.value })}
          className="w-full p-2 rounded border">
          <option value="delayed">Delayed</option>
          <option value="premature">Premature</option>
          <option value="cyclical">Cyclical</option>
          <option value="frozen">Frozen</option>
        </select>
      </label>
      <label>
        Desired Justice Type:
        <select value={formData.justiceType}
          onChange={(e) => setFormData({ ...formData, justiceType: e.target.value })}
          className="w-full p-2 rounded border">
          <option value="symbolic">Symbolic</option>
          <option value="grief-based">Grief-Based</option>
          <option value="proportional">Proportional</option>
        </select>
      </label>
      <button
        onClick={() => onSimulate(formData)}
        className="mt-4 bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
        Generate Simulation
      </button>
    </div>
  );
}
