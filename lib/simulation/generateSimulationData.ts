import { v4 as uuidv4 } from 'uuid';

export type SimulationInput = {
  theme?: string;
  griefLevel?: number;
  contradiction?: boolean;
  agentFocus?: string[];
};

export type SimulationResult = {
  id: string;
  verdict: string;
  logic: string[];
  amends: string[];
  involvedAgents: string[];
  timestamp: string;
};

export function generateSimulationData(input: SimulationInput = {}): SimulationResult {
  const id = uuidv4();
  const now = new Date().toISOString();

  const griefLevel = input.griefLevel ?? Math.floor(Math.random() * 5 + 1);
  const contradiction = input.contradiction ?? Math.random() < 0.3;
  const agents = input.agentFocus ?? ["JUNO", "KAIROS", "LYRA"];

  const theme = input.theme ?? ["land conflict", "memory dispute", "symbolic injustice", "temporal delay"][Math.floor(Math.random() * 4)];

  const logic = [
    `Theme identified: ${theme}`,
    `Grief Level: ${griefLevel}`,
    contradiction ? "Contradiction detected: triggering MIRRA protocol" : "No contradiction detected",
    `Agents invoked: ${agents.join(", ")}`,
  ];

  const verdict = `Symbolic justice rendered for theme '${theme}' with grief tier ${griefLevel}`;

  const amends = [
    "Storyholding circle initiated",
    "Land memory restoration suggested",
    "Ritual closure required",
    "Time-based restoration loop active"
  ].slice(0, griefLevel);

  return {
    id,
    verdict,
    logic,
    amends,
    involvedAgents: agents,
    timestamp: now
  };
}
