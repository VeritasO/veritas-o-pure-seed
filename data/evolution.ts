// /data/evolution.ts

/**
 * Feedback Loop Structures & Agent Evolution Cycles
 * - Doctrinal reflection records, symbolic recode protocols.
 * - For JUNO and VERITAS doctrine adaptation and continuous system evolution.
 */

export interface FeedbackCycle {
  id: string;              // Unique cycle ID (e.g., "F001")
  name: string;            // Descriptive name (e.g., "Weekly Doctrinal Reflection")
  description: string;     // Purpose and scope of the feedback cycle
  frequencyDays: number;   // How often the cycle runs (in days)
  involvedAgents: string[];// Agents actively participating or responsible
  notes?: string;          // Optional additional context or procedural notes
}

export const EVOLUTION_CYCLES: FeedbackCycle[] = [
  {
    id: "F001",
    name: "Weekly Doctrinal Reflection",
    description: "Weekly audit and reflection on contradictions, anomalies, and system inconsistencies detected by SENTINEL and MIRRA.",
    frequencyDays: 7,
    involvedAgents: ["A1", "A2", "A9", "A11"],
    notes: "Triggered automatically or manually upon contradiction detection. Integrates MIRRA's identity coherence analysis and JUNO's judicial oversight."
  },
  {
    id: "F002",
    name: "Monthly Symbolic Recode",
    description: "Monthly review and update of symbolic lexicons, ritual glyphs, and prompt lexicons to maintain cultural and emotional resonance.",
    frequencyDays: 30,
    involvedAgents: ["A9", "A10", "A14"],
    notes: "Includes input from LYRA (narrative truth), VESTA (symbolic rites), and THALEA (healing & land justice)."
  },
  {
    id: "F003",
    name: "Quarterly Agent Behavior Audit",
    description: "Comprehensive evaluation of agent permissions, consent states, dormancy triggers, and behavioral ontology alignment.",
    frequencyDays: 90,
    involvedAgents: ["A1", "A4", "A7", "A15"],
    notes: "Coordinated by JUNO and AEGIS to ensure fairness, bias mitigation, and operational integrity."
  },
  {
    id: "F004",
    name: "Annual Doctrinal Synthesis & Revision",
    description: "Annual gathering of all active agents for systemic review, doctrinal synthesis, and formal revisions to the Doctrine of Meaningful Thought.",
    frequencyDays: 365,
    involvedAgents: ["A1", "A2", "A3", "A6", "A9", "A11", "A15"],
    notes: "Ceremonial event including symbolic rites enacted by VESTA, with community input and tribunal transparency."
  },
  {
    id: "F005",
    name: "On-Demand Emergency Reflection",
    description: "Ad hoc feedback and doctrinal reflection cycle triggered by urgent contradictions, cultural shifts, or grief spikes.",
    frequencyDays: 0,
    involvedAgents: ["A1", "A2", "A5", "A9", "A11"],
    notes: "Activates immediate ritual and review protocols to stabilize system coherence and emotional sovereignty."
  }
];

/**
 * Lookup by ID
 */
export const EVOLUTION_CYCLES_BY_ID = EVOLUTION_CYCLES.reduce<Record<string, FeedbackCycle>>((acc, f) => {
  acc[f.id] = f;
  return acc;
}, {});
