// /data/symbols.ts

/**
 * Canonical Symbol Sets for Veritas
 * - Ritual acts, justice tiers, restoration markers, time glyphs, agent glyphs.
 * - Supports symbolic justice and ritual enactments by VESTA.
 */

export interface SymbolSet {
  id: string;           // Unique identifier, e.g., "S001"
  name: string;         // Descriptive name of symbol set, e.g., "Justice Tier Symbols"
  description: string;  // Context and usage summary
  symbols: Record<string, string>; // Mapping of key (name) to symbol/glyph character
}

export const SYMBOLS: SymbolSet[] = [
  {
    id: "S001",
    name: "Justice Tier Symbols",
    description: "Glyphs representing justice tiers from 1 (lowest) to 5 (highest severity and restoration intensity).",
    symbols: {
      "Tier 1 - Minimal Harm": "⚪",
      "Tier 2 - Mild Harm": "🟡",
      "Tier 3 - Moderate Harm": "🟠",
      "Tier 4 - Severe Harm": "🔴",
      "Tier 5 - Extreme Harm": "⚫"
    }
  },
  {
    id: "S002",
    name: "Ritual Action Symbols",
    description: "Core symbols used in ritual steps, including sealing, transformation, time, and protection.",
    symbols: {
      "Seal (VESTA)": "🕊️",
      "Fire (Transformation)": "🔥",
      "Time (Kairotic Flow)": "⏳",
      "Integrity (Protection)": "🛡️",
      "Reflection (Cycle)": "🔄",
      "Weave (Reweaving Harm)": "🧵",
      "Light (Illumination)": "🔆",
      "Anchor (Temporal Fixing)": "⚓"
    }
  },
  {
    id: "S003",
    name: "Restoration Markers",
    description: "Symbols indicating phases or statuses of restoration processes and communal healing.",
    symbols: {
      "Initiation": "🌱",
      "Growth": "🌿",
      "Bloom": "🌸",
      "Harvest": "🌾",
      "Completion": "🏁",
      "Community Witness": "👥",
      "Sacred Ground": "⛰️",
      "Healing Waters": "💧"
    }
  },
  {
    id: "S004",
    name: "Temporal Glyphs",
    description: "Symbols representing timeframes, temporal states, and time-related justice concepts.",
    symbols: {
      "Kairotic Moment": "⌛",
      "Rewind": "⏮️",
      "Forward": "⏭️",
      "Pause": "⏸️",
      "Reset": "🔄",
      "Time Loop": "♾️",
      "Cycle": "🔁",
      "Temporal Anchor": "⚓"
    }
  },
  {
    id: "S005",
    name: "Agent Glyphs",
    description: "Symbolic representations for core Veritas agents, used in prompts and ritual invocations.",
    symbols: {
      "JUNO (Judicial Agent)": "🔥",
      "VERITAS (Doctrine)": "⚖️",
      "AEGIS (Bias/Fairness)": "🛡️",
      "KAIROS (Grief/Time)": "⏳",
      "LYRA (Narrative Truth)": "🎼",
      "ORION (Ontology/Rights)": "🔄",
      "THALEA (Healing/Land Justice)": "🌿",
      "VESTA (Rites/Transformation)": "🕊️",
      "MIRRA (Reflection/Identity)": "🪞",
      "SENTINEL (Integrity Monitor)": "🛡️",
      "TEMPUS (Timekeeper)": "⌛"
    }
  },
  {
    id: "S006",
    name: "Justice Outcome Symbols",
    description: "Symbols marking verdict outcomes, reconciliation stages, and tribunal results.",
    symbols: {
      "Restoration Complete": "✅",
      "Ongoing Healing": "🔄",
      "Conflict Detected": "⚠️",
      "Resolution Pending": "⌛",
      "Overridden (Mirror Clause)": "🔄⚖️",
      "Consent Withdrawn": "❌",
      "Grief Scale High": "💔",
      "Fairness Confirmed": "⚖️✅"
    }
  },
  {
    id: "S007",
    name: "Emotional Sovereignty Markers",
    description: "Symbols related to emotional states, boundaries, and sovereignty protocols.",
    symbols: {
      "Emotional Boundary": "🛑",
      "Witnessing": "👁️",
      "Grief": "😢",
      "Healing": "💚",
      "Empathy": "🤝",
      "Sovereignty Asserted": "✋",
      "Energetic Balance": "⚖️",
      "Safe Space": "🛋️"
    }
  },
  {
    id: "S008",
    name: "Conflict and Resolution",
    description: "Symbols marking phases of conflict, contradiction detection, and resolution strategies.",
    symbols: {
      "Contradiction Flag": "🚩",
      "Override Initiated": "⚡",
      "Mirror Clause Active": "🪞",
      "Consensus Achieved": "🤝",
      "Mediation": "🕊️",
      "De-escalation": "🕊️🛡️",
      "Tension": "🔥",
      "Peace": "🕊️"
    }
  }
];

/**
 * Lookup symbol sets by ID
 */
export const SYMBOLS_BY_ID = SYMBOLS.reduce<Record<string, SymbolSet>>((acc, s) => {
  acc[s.id] = s;
  return acc;
}, {});
