// Create: veritas.config.ts
export const VeritasConfig = {
  kernelVersion: "v5.5.0-CODIFIED",
  harmonyIndex: 0.988,
  activeAgents: ["JUNO", "LYRA", "MIRRA", "TEMPUS", "VESTA", "KAIROS", "AEGIS", "ORION"],
  symbolicFieldStatus: "98.7% harmonized",
  griefThreshold: 7,
  timeProtocol: "TEMPUS v4.0",
  exportFormats: ["json", "csv", "pdf", "proto"],
  agentMap: {
    JUNO: { id: "A01", role: "System Overseer & Fairness Review" },
    LYRA: { id: "A03", role: "Narrative Truth & Emotional Mapping" },
    MIRRA: { id: "A09", role: "Contradiction Anchor & Doctrine Reflection" },
    TEMPUS: { id: "A17", role: "Grief/Time Integration & Reversibility" },
    VESTA: { id: "A07", role: "Symbolic State & Ritual Scheduling" },
    KAIROS: { id: "A08", role: "Grief Timelines & Justice Urgency" },
    AEGIS: { id: "A04", role: "Fairness Audits & Emotional Sovereignty" },
    ORION: { id: "A02", role: "Rights Logic & Cultural Ontologies" }
  }
} as const;

export type AgentName = keyof typeof VeritasConfig.agentMap;
export type AgentConfig = typeof VeritasConfig.agentMap[AgentName];