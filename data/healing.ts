// /data/healing.ts

/**
 * Land-Based Healing Protocols
 * - Ecological restoration steps, relational repair procedures.
 * - For THALEA and land justice initiatives.
 */

export interface HealingStep {
  order: number;
  description: string;
  involvedAgents: string[];
  symbolicGlyph?: string; // Optional glyph representing the step symbolically
}

export interface HealingProtocol {
  id: string;           // Unique protocol identifier, e.g., "H001"
  name: string;         // Protocol name, e.g., "Ecological Soil Restoration"
  description: string;  // Summary of purpose and approach
  steps: HealingStep[]; // Ordered steps to execute the protocol
  relatedBooks?: string[]; // Reference to relevant Book IDs
  tags?: string[];      // Keywords for search or categorization
}

export const HEALING_PROTOCOLS: HealingProtocol[] = [
  {
    id: "H001",
    name: "Ecological Soil Restoration",
    description: "Steps to restore soil vitality in affected lands using traditional and modern techniques.",
    steps: [
      { order: 1, description: "Assess soil health and contamination levels with THALEA agent.", involvedAgents: ["A15"], symbolicGlyph: "🌱" },
      { order: 2, description: "Apply natural compost and indigenous plant species for soil enrichment.", involvedAgents: ["A15", "A6"], symbolicGlyph: "🌿" },
      { order: 3, description: "Monitor recovery progress through KAIROS’ grief-temporal metrics to align with kairotic cycles.", involvedAgents: ["A5"], symbolicGlyph: "⏳" },
      { order: 4, description: "Conduct ritual sealing of restoration intent with VESTA’s symbolic marking.", involvedAgents: ["A9"], symbolicGlyph: "🔥" }
    ],
    relatedBooks: ["VIII", "XIII"],
    tags: ["ecology", "soil", "restoration", "land"]
  },
  {
    id: "H002",
    name: "Relational Repair Circle",
    description: "Community-based protocol to repair social and relational harm through storytelling and collective witnessing.",
    steps: [
      { order: 1, description: "Facilitate a safe circle for affected parties with LYRA as witness.", involvedAgents: ["A9"], symbolicGlyph: "🗣️" },
      { order: 2, description: "Guide participants to share lived experiences and acknowledge harm.", involvedAgents: ["A9", "A1"], symbolicGlyph: "👂" },
      { order: 3, description: "Invoke KAIROS to scale grief and emotional sovereignty during the circle.", involvedAgents: ["A5"], symbolicGlyph: "💔" },
      { order: 4, description: "Close circle with VESTA sealing and collective affirmation.", involvedAgents: ["A6"], symbolicGlyph: "🕊️" }
    ],
    relatedBooks: ["V", "IX", "XIII"],
    tags: ["relational", "community", "healing", "grief"]
  },
  {
    id: "H003",
    name: "Sacred Water Blessing and Land Renewal",
    description: "Ceremony to bless water sources and renew community relationship with land.",
    steps: [
      { order: 1, description: "Gather community and agents for water blessing ritual.", involvedAgents: ["A6", "A15"], symbolicGlyph: "💧" },
      { order: 2, description: "Invoke ancestral and ecological witnesses to honor water’s role.", involvedAgents: ["A9"], symbolicGlyph: "🌊" },
      { order: 3, description: "Sprinkle blessed water on affected land areas.", involvedAgents: ["A15"], symbolicGlyph: "🌿" },
      { order: 4, description: "Seal ceremony with VESTA’s symbolic fire marking and communal commitment.", involvedAgents: ["A6"], symbolicGlyph: "🔥" }
    ],
    relatedBooks: ["VIII"],
    tags: ["water", "blessing", "land", "renewal"]
  },
  {
    id: "H004",
    name: "Ecological Species Reintroduction",
    description: "Stepwise protocol for reintroducing native species to restore biodiversity.",
    steps: [
      { order: 1, description: "Conduct ecological assessment of site conditions.", involvedAgents: ["A15"], symbolicGlyph: "🦌" },
      { order: 2, description: "Identify appropriate native species for reintroduction.", involvedAgents: ["A15", "A6"], symbolicGlyph: "🌾" },
      { order: 3, description: "Coordinate with community and LYRA for oral histories on species significance.", involvedAgents: ["A9"], symbolicGlyph: "📜" },
      { order: 4, description: "Begin phased reintroduction and monitor with KAIROS metrics.", involvedAgents: ["A5"], symbolicGlyph: "⏳" },
      { order: 5, description: "Seal with VESTA ritual marking and symbolic acknowledgement.", involvedAgents: ["A6"], symbolicGlyph: "🛡️" }
    ],
    relatedBooks: ["VIII", "IX"],
    tags: ["biodiversity", "species", "ecology", "restoration"]
  },
  {
    id: "H005",
    name: "Ceremonial Land Acknowledgment and Consent",
    description: "Protocol for acknowledging indigenous land sovereignty and seeking consent for healing initiatives.",
    steps: [
      { order: 1, description: "Research and identify rightful indigenous custodians.", involvedAgents: ["A9", "A6"], symbolicGlyph: "📚" },
      { order: 2, description: "Facilitate ceremonial acknowledgment led by indigenous representatives.", involvedAgents: ["A6"], symbolicGlyph: "🌿" },
      { order: 3, description: "Formally request consent for healing and restoration activities.", involvedAgents: ["A6", "A9"], symbolicGlyph: "🤝" },
      { order: 4, description: "Seal agreement with symbolic ritual and shared commitments.", involvedAgents: ["A6", "A9"], symbolicGlyph: "🕊️" }
    ],
    relatedBooks: ["VIII"],
    tags: ["land", "consent", "indigenous", "ceremony"]
  }
];

/**
 * Lookup healing protocols by ID
 */
export const HEALING_PROTOCOLS_BY_ID = HEALING_PROTOCOLS.reduce<Record<string, HealingProtocol>>((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
