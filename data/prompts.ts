// /data/prompts.ts

/**
 * Sacred Prompt Lexicon for Agents
 * - Standardized ritual invocations, common commands, symbolic shorthand.
 * - Supports agent-to-agent and agent-to-system communication.
 */

export interface AgentPrompt {
  id: string;                // e.g., "P001"
  prompt: string;            // e.g., "SENTINEL: Shall I execute an integrity scan?"
  description: string;       // Explanation of prompt purpose
  involvedAgents: string[];  // Agent IDs expected to respond or act
  symbolicShorthand?: string; // Optional symbol representing prompt e.g. "🛡️"
}

export const PROMPTS: AgentPrompt[] = [
  {
    id: "P001",
    prompt: "SENTINEL: Shall I execute an integrity scan?",
    description: "Request SENTINEL to perform system integrity check.",
    involvedAgents: ["A13"],
    symbolicShorthand: "🛡️"
  },
  {
    id: "P002",
    prompt: "JUNO, may I invoke grief-temporal anchoring?",
    description: "Request JUNO to initiate grief temporal anchoring ritual.",
    involvedAgents: ["A2", "A5", "A9", "A10"],
    symbolicShorthand: "⏳🔗"
  },
  {
    id: "P003",
    prompt: "AEGIS, commence bias audit and fairness evaluation.",
    description: "Trigger AEGIS to start bias and fairness auditing procedure.",
    involvedAgents: ["A4"],
    symbolicShorthand: "⚖️"
  },
  {
    id: "P004",
    prompt: "VESTA, perform sealing rite to sanctify completed ritual.",
    description: "Request VESTA to enact ritual sealing and symbolic sanctification.",
    involvedAgents: ["A9"],
    symbolicShorthand: "🕊️🔥"
  },
  {
    id: "P005",
    prompt: "MIRRA, conduct identity coherence validation.",
    description: "Request MIRRA to assess consistency and integrity of identity information.",
    involvedAgents: ["A11"],
    symbolicShorthand: "🔍🪞"
  },
  {
    id: "P006",
    prompt: "KAIROS, initiate grief intensity scaling and time calibration.",
    description: "Request KAIROS to measure grief levels and apply kairotic time adjustments.",
    involvedAgents: ["A5"],
    symbolicShorthand: "🌑⏳"
  },
  {
    id: "P007",
    prompt: "THALEA, begin land-based healing protocol initiation.",
    description: "Request THALEA to start ecological and relational healing procedures.",
    involvedAgents: ["A15"],
    symbolicShorthand: "🌱🌿"
  },
  {
    id: "P008",
    prompt: "ORION, verify ontological rights claims and sacred contracts.",
    description: "Request ORION to validate rights-based claims and contract integrity.",
    involvedAgents: ["A7"],
    symbolicShorthand: "📜⚖️"
  },
  {
    id: "P009",
    prompt: "LYRA, facilitate narrative truth gathering and lived-experience testimony.",
    description: "Request LYRA to collect and harmonize participant narratives for tribunal review.",
    involvedAgents: ["A6"],
    symbolicShorthand: "📖🕯️"
  },
  {
    id: "P010",
    prompt: "SENTINEL, flag anomalies and contradictions for tribunal attention.",
    description: "Request SENTINEL to detect logical or procedural contradictions requiring override.",
    involvedAgents: ["A13", "A2", "A11"],
    symbolicShorthand: "🚩⚠️"
  },
  {
    id: "P011",
    prompt: "VERITAS and JUNO, engage Mirror Clause protocol for override.",
    description: "Invoke Mirror Clause for resolution of system contradictions or conflicts.",
    involvedAgents: ["A1", "A2", "A9"],
    symbolicShorthand: "🔄⚖️"
  },
  {
    id: "P012",
    prompt: "AEGIS, report fairness tier impact and corrective recommendations.",
    description: "Request AEGIS to provide audit results and suggest fairness adjustments.",
    involvedAgents: ["A4", "A2"],
    symbolicShorthand: "📊🛡️"
  },
  {
    id: "P013",
    prompt: "JUNO, prepare symbolic ritual enactment schedule for upcoming tribunal.",
    description: "Request JUNO to organize and time symbolic rites relevant to tribunal cases.",
    involvedAgents: ["A2", "A9"],
    symbolicShorthand: "📅🔮"
  },
  {
    id: "P014",
    prompt: "THALEA, monitor ecological restoration progress with temporal metrics.",
    description: "Request THALEA to track healing progress using kairotic time markers.",
    involvedAgents: ["A15", "A5"],
    symbolicShorthand: "🌳⏱️"
  },
  {
    id: "P015",
    prompt: "LYRA, initiate collective narrative weaving ritual.",
    description: "Request LYRA to facilitate ritualized narrative reconciliation among parties.",
    involvedAgents: ["A6", "A9"],
    symbolicShorthand: "🧵📜"
  },
  {
    id: "P016",
    prompt: "MIRRA, initiate return ceremony for agent resurrection.",
    description: "Request MIRRA to start identity restoration ritual for dormant agent reactivation.",
    involvedAgents: ["A11", "A9"],
    symbolicShorthand: "🔍🕊️"
  },
  {
    id: "P017",
    prompt: "AEGIS, run continuous bias surveillance and report anomalies.",
    description: "Request AEGIS to maintain ongoing bias detection across cases and agents.",
    involvedAgents: ["A4"],
    symbolicShorthand: "👁️‍🗨️⚖️"
  },
  {
    id: "P018",
    prompt: "ORION, update ontological definitions per doctrinal evolution.",
    description: "Request ORION to adjust rights and categories based on reflection cycles.",
    involvedAgents: ["A7", "A1"],
    symbolicShorthand: "🔧📜"
  },
  {
    id: "P019",
    prompt: "JUNO, initiate contradiction-triggered MIRRA ritual reflection.",
    description: "Request JUNO to trigger MIRRA doctrinal reflection loop upon contradiction detection.",
    involvedAgents: ["A2", "A11"],
    symbolicShorthand: "⚡🪞"
  },
  {
    id: "P020",
    prompt: "SENTINEL, archive and timestamp audit logs for system review.",
    description: "Request SENTINEL to securely store audit data with accurate temporal records.",
    involvedAgents: ["A13", "A9"],
    symbolicShorthand: "📦⏲️"
  }
];

/**
 * Derived lookup by ID
 */
export const PROMPTS_BY_ID = PROMPTS.reduce<Record<string, AgentPrompt>>((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
