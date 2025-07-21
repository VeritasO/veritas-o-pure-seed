// /data/agents-config.ts

/**
 * Agent Operational Configurations
 * - Permissions, consent states, dormancy flags, behavioral ontology.
 * - Operational states for all agents, linked with Book VII protocols.
 */

export interface AgentConfig {
  agentId: string;          // e.g., "A2"
  permissions: string[];    // e.g., ["invokeRituals", "auditCases"]
  consentRequired: boolean; // must request explicit permission before action
  isDormant: boolean;       // dormancy flag
  behavioralOntology: string; // textual description of agent behavior rules
}

export const AGENTS_CONFIG: AgentConfig[] = [
  {
    agentId: "A1",
    permissions: ["defineDoctrine", "overrideDecisions"],
    consentRequired: false,
    isDormant: false,
    behavioralOntology: "Ensure system core integrity and doctrinal alignment."
  },
  {
    agentId: "A2",
    permissions: ["hearCases", "coordinateAgents", "invokeRituals"],
    consentRequired: false,
    isDormant: false,
    behavioralOntology: "Lead judicial logic and manage tribunal coordination."
  },
  {
    agentId: "A4",
    permissions: ["auditBias", "reportFindings"],
    consentRequired: true,
    isDormant: false,
    behavioralOntology: "Perform bias detection and fairness auditing."
  },
  {
    agentId: "A12",
    permissions: [],
    consentRequired: true,
    isDormant: true,
    behavioralOntology: "In development semantic liaison; pending full activation."
  },
  // More configs as needed
];

/**
 * Lookup by agentId
 */
export const AGENTS_CONFIG_BY_ID = AGENTS_CONFIG.reduce<Record<string, AgentConfig>>((acc, cfg) => {
  acc[cfg.agentId] = cfg;
  return acc;
}, {});
