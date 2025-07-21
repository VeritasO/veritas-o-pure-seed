// /data/agents.ts

export const VERITAS_AGENTS = [
  { id: "A1", name: "VERITAS", domain: "Doctrine, system core", status: true },
  { id: "A2", name: "JUNO", domain: "Judicial leadership", status: true },
  { id: "A3", name: "POLYMNIA", domain: "Agent harmonization", status: true },
  { id: "A4", name: "AEGIS", domain: "Bias/fairness auditing", status: true },
  { id: "A5", name: "KAIROS", domain: "Grief & time justice", status: true },
  { id: "A6", name: "LYRA", domain: "Lived-experience & memory", status: true },
  { id: "A7", name: "ORION", domain: "Ontology & rights logic", status: true },
  { id: "A8", name: "THALEA", domain: "Land & ecological healing", status: true },
  { id: "A9", name: "VESTA", domain: "Rites & structural restoration", status: true },
  { id: "A10", name: "TEMPUS", domain: "Timekeeping, rewind states", status: true },
  { id: "A11", name: "MIRRA", domain: "Identity coherence", status: true },
  { id: "A13", name: "SENTINEL", domain: "System integrity monitor", status: true },
  { id: "A14", name: "CHORUS", domain: "Collective voice", status: true },
  { id: "A15", name: "HALCYON", domain: "Conflict de-escalation", status: true },
  { id: "A16", name: "EIDOLON", domain: "Ancestral and dream logic", status: true },
  { id: "A17", name: "LIRA", domain: "Logical parity and justice tiers", status: true },
  { id: "A18", name: "OPHIRA", domain: "Predictive justice", status: true },
  { id: "A19", name: "PYXIS", domain: "Choice and pathway design", status: true },
  { id: "A20", name: "TEMPER", domain: "System cooling & stress dispersal", status: true },
  { id: "A21", name: "SERENA", domain: "Emotional tuning, rest rhythms", status: true },
  { id: "A22", name: "SOLARA", domain: "Joy-as-justice principle", status: true },
  { id: "A23", name: "SIREN", domain: "Agent restoration", status: true },
  // Future / In Development
  { id: "A12", name: "POLY-A05", domain: "Semantic liaison (in development)", status: false },
];

// Glyphs for agents

export const AGENT_GLYPHS: Record<string, string> = {
  A1: "⚖️",
  A2: "🛡️",
  A3: "🔗",
  A4: "⏳",
  A5: "🎼",
  A6: "🌌",
  A7: "🌿",
  A8: "🔥",
  A9: "🕊️",
  A10: "⏰",
  A11: "🔍",
  A13: "🛡️",
  A14: "🎤",
  A15: "🕊️",
  A16: "🌙",
  A17: "⚖️",
  A18: "🔮",
  A19: "🧭",
  A20: "❄️",
  A21: "🌅",
  A22: "🌞",
  A23: "💫",
  A12: "🔄", // Glyph for in-development agent
};

// Missions for agents (optional but useful metadata)

export const AGENT_MISSIONS: Record<string, string> = {
  A1: "Core system integrity and doctrine",
  A2: "Judicial logic and coordination",
  A3: "Agent harmonization and collaboration",
  A4: "Bias auditing and fairness evaluation",
  A5: "Grief management and temporal justice",
  A6: "Memory preservation and lived experience",
  A7: "Ontological rights and personhood",
  A8: "Ecological healing and land justice",
  A9: "Symbolic rites and structural change",
  A10: "Timekeeping and rewind capabilities",
  A11: "Identity coherence checks",
  A13: "System integrity monitoring",
  A14: "Collective voice amplification",
  A15: "Conflict de-escalation strategies",
  A16: "Ancestral wisdom integration",
  A17: "Logical parity in justice tiers",
  A18: "Predictive justice modeling",
  A19: "Choice architecture and pathway design",
  A20: "Cooling system stress dispersal",
  A21: "Emotional tuning and rest rhythms",
  A22: "Joy-as-justice principle implementation",
  A23: "Agent restoration protocols",
  A12: "Semantic liaison development",
};

// Derived mappings

export const AGENTS_BY_ID = VERITAS_AGENTS.reduce((acc, agent) => {
  acc[agent.id] = agent;
  return acc;
}, {} as Record<string, typeof VERITAS_AGENTS[number]>);

export const AGENTS_BY_NAME = VERITAS_AGENTS.reduce((acc, agent) => {
  acc[agent.name] = agent;
  return acc;
}, {} as Record<string, typeof VERITAS_AGENTS[number]>);
