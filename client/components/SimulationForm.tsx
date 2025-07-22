import React, { useState } from 'react';

type SimulationParameters = {
  scenarioType: string;
  griefPhase: string;
  timeLagMonths: number;
  involvedAgents: string[];
  narrativePrompt: string;
};

const defaultParameters: SimulationParameters = {
  scenarioType: 'random',
  griefPhase: 'neutral',
  timeLagMonths: 0,
  involvedAgents: [],
  narrativePrompt: '',
};

const SCENARIO_TYPES = ['random', 'parameterized'];
const GRIEF_PHASES = ['neutral', 'rising', 'peak', 'fading'];

export default function SimulationForm({ onRun, loading }: { onRun: (params: SimulationParameters) => void; loading: boolean }) {
  const [inputs, setInputs] = useState<SimulationParameters>(defaultParameters);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setInputs((prev) => {
        const newAgents = checked
          ? [...prev.involvedAgents, value]
          : prev.involvedAgents.filter((a) => a !== value);
        return { ...prev, involvedAgents: newAgents };
      });
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRun(inputs);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
      <label className="block font-semibold">
        Scenario Type
        <select
          name="scenarioType"
          value={inputs.scenarioType}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2"
          disabled={loading}
        >
          {SCENARIO_TYPES.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </label>
      {inputs.scenarioType === 'parameterized' && (
        <>
          <label className="block font-semibold">
            Grief Phase
            <select
              name="griefPhase"
              value={inputs.griefPhase}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
              disabled={loading}
            >
              {GRIEF_PHASES.map((phase) => (
                <option key={phase} value={phase}>
                  {phase.charAt(0).toUpperCase() + phase.slice(1)}
                </option>
              ))}
            </select>
          </label>
          <label className="block font-semibold">
            Time Lag (months)
            <input
              type="number"
              name="timeLagMonths"
              value={inputs.timeLagMonths}
              min={0}
              max={36}
              onChange={handleChange}
              className="mt-1 block w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </label>
          <fieldset className="border p-3 rounded">
            <legend className="font-semibold">Involved Agents</legend>
            {[
              'JUNO',
              'AEGIS',
              'KAIROS',
              'LYRA',
              'ORION',
              'THALEA',
              'VESTA',
              'TEMPUS',
              'MIRRA',
              'SENTINEL',
            ].map((agent) => (
              <label key={agent} className="inline-flex items-center mr-4 mt-2">
                <input
                  type="checkbox"
                  name="involvedAgents"
                  value={agent}
                  checked={inputs.involvedAgents.includes(agent)}
                  onChange={handleChange}
                  disabled={loading}
                  className="mr-2"
                />
                {agent}
              </label>
            ))}
          </fieldset>
          <label className="block font-semibold">
            Narrative Prompt (optional)
            <textarea
              name="narrativePrompt"
              value={inputs.narrativePrompt}
              onChange={handleChange}
              rows={3}
              placeholder="Provide context or description"
              className="mt-1 block w-full border rounded px-3 py-2"
              disabled={loading}
            />
          </label>
        </>
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded"
      >
        Run Simulation
      </button>
    </form>
  );
}
