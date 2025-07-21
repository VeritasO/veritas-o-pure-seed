// /data/rights.ts

/**
 * Ontological Rights Definitions and Personhood Categories
 * - Defines categories of rights, claim templates, sacred contracts.
 * - Used by ORION for rights logic and claims processing.
 */

export interface RightDefinition {
  id: string;           // Unique right identifier, e.g., "RT001"
  name: string;         // Descriptive right name, e.g., "Right to Bodily Integrity"
  description: string;  // Explanation of right's scope and meaning
  category: string;     // Broad classification, e.g., "Personal Rights", "Collective Rights", "Ecological Rights"
  claimTemplate: string; // Standardized sacred claim or oath phrase for asserting this right
  relatedSymbols?: string[]; // Optional glyphs/symbols related to this right
  linkedAgents?: string[];   // Agents primarily responsible for upholding or enforcing this right
}

export const RIGHTS: RightDefinition[] = [
  {
    id: "RT001",
    name: "Right to Bodily Integrity",
    description: "Protection against physical harm, violation, and unwanted intrusion into one’s body.",
    category: "Personal Rights",
    claimTemplate: "I claim the right to safety and respect for my body, inviolate and sovereign.",
    relatedSymbols: ["🛡️", "⚪"],
    linkedAgents: ["A8", "A1"] // THALEA (healing), JUNO (judicial)
  },
  {
    id: "RT002",
    name: "Right to Restorative Justice",
    description: "Right to justice focused on healing, restoration, and reintegration rather than punishment.",
    category: "Personal Rights",
    claimTemplate: "I claim the right to healing and restoration as the true path to justice.",
    relatedSymbols: ["🌿", "🔗"],
    linkedAgents: ["A1", "A9"] // JUNO, MIRRA
  },
  {
    id: "RT003",
    name: "Right to Land and Ecological Sovereignty",
    description: "Collective right of communities and peoples to maintain sovereignty over their ancestral lands and the ecosystems therein.",
    category: "Collective Rights",
    claimTemplate: "We claim the sacred right to land, its care, and ecological restoration.",
    relatedSymbols: ["🌿", "⛰️"],
    linkedAgents: ["A7", "A6"] // THALEA, VESTA
  },
  {
    id: "RT004",
    name: "Right to Emotional Sovereignty",
    description: "Right to maintain control over one’s emotional state, boundaries, and healing processes without coercion or intrusion.",
    category: "Personal Rights",
    claimTemplate: "I claim the sovereign right to my emotions and the safe expression thereof.",
    relatedSymbols: ["✋", "🛑"],
    linkedAgents: ["A5", "A1"] // KAIROS, JUNO
  },
  {
    id: "RT005",
    name: "Right to Narrative Truth",
    description: "Right to have one’s lived experience and narrative recognized as valid and integral to justice processes.",
    category: "Personal and Collective Rights",
    claimTemplate: "I claim the right for my story to be heard, honored, and held as truth.",
    relatedSymbols: ["🎼", "👥"],
    linkedAgents: ["A9"] // LYRA
  },
  {
    id: "RT006",
    name: "Right to Non-Carceral Accountability",
    description: "Right to accountability mechanisms that do not rely on carceral or punitive systems but focus on restoration and community healing.",
    category: "Personal and Collective Rights",
    claimTemplate: "I claim the right to be held accountable in ways that restore and repair rather than punish.",
    relatedSymbols: ["🔄", "🕊️"],
    linkedAgents: ["A1", "A9", "A6"] // JUNO, MIRRA, VESTA
  },
  {
    id: "RT007",
    name: "Right to Sacred Witnessing",
    description: "Right to have one’s experience witnessed in a sacred, non-judgmental manner as part of healing and justice.",
    category: "Personal Rights",
    claimTemplate: "I claim the right to sacred witnessing that honors my truth and pain.",
    relatedSymbols: ["👁️", "🕊️"],
    linkedAgents: ["A9", "A6"] // LYRA, VESTA
  },
  {
    id: "RT008",
    name: "Right to Temporal Justice",
    description: "Right to justice processes that honor kairotic time, grief-time, and proportional temporal restoration.",
    category: "Personal and Collective Rights",
    claimTemplate: "I claim the right to justice that respects the rhythms of time and healing.",
    relatedSymbols: ["⏳", "🔗"],
    linkedAgents: ["A5", "A10"] // KAIROS, TEMPUS
  },
  {
    id: "RT009",
    name: "Right to Ontological Respect",
    description: "Right to be recognized and respected in one’s being and existence beyond legal or material definitions.",
    category: "Personal Rights",
    claimTemplate: "I claim the sacred right to be recognized in my full being.",
    relatedSymbols: ["🔄", "🌌"],
    linkedAgents: ["A12"] // ORION
  },
  {
    id: "RT010",
    name: "Right to Privacy and Data Sovereignty",
    description: "Right to control over one’s personal data and privacy within the Veritas system and beyond.",
    category: "Personal Rights",
    claimTemplate: "I claim the right to privacy and control over my data and narrative.",
    relatedSymbols: ["🔒", "🛡️"],
    linkedAgents: ["A2", "A13"] // JUNO, SENTINEL
  }
];

/**
 * Lookup rights by ID
 */
export const RIGHTS_BY_ID = RIGHTS.reduce<Record<string, RightDefinition>>((acc, r) => {
  acc[r.id] = r;
  return acc;
}, {});
