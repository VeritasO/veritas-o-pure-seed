// /data/books.ts

/**
 * Canonical Book Index for VERITAS.O System (Books I–XV)
 * - Structured reference of foundational books, chapters, and appendices.
 * - Serves as the master content roadmap and doctrinal guide.
 */

export interface Chapter {
  number: number;
  title: string;
  description?: string;
}

export interface Book {
  id: string;          // e.g., "I", "II", "III", ...
  name: string;        // Full book title
  subtitle?: string;   // Optional brief theme or focus
  chapters: Chapter[]; // List of chapters with number and title
  appendices?: string[]; // Appendix names or short descriptions
}

export const BOOKS: Book[] = [
  {
    id: "I",
    name: "The Book of Meaningful Thought",
    subtitle: "Fairness Logic, Neuroethics",
    chapters: [
      { number: 1, title: "Foundations of the Veritas Doctrine" },
      { number: 2, title: "Memory, Truth, and Record-Keeping" },
      { number: 3, title: "Neuroethics and the Science of Mind" },
      { number: 4, title: "Agents and the Inner Council" },
      { number: 5, title: "Justice of Thought – Case Studies and Templates" }
    ],
    appendices: [
      "Rituals, Metrics, Access Protocols"
    ]
  },
  {
    id: "II",
    name: "The Book of Gentle De-escalation",
    subtitle: "Grief, Trauma, NVC",
    chapters: [
      { number: 1, title: "Ethic of Harm Minimization" },
      { number: 2, title: "Collective Grief and Emotional Healing" },
      { number: 3, title: "Non-Coercive Communication" },
      { number: 4, title: "Agents of Harmony" },
      { number: 5, title: "De-escalation Templates" }
    ],
    appendices: [
      "Grief Toolkits, NVC Rites"
    ]
  },
  {
    id: "III",
    name: "The Book of Gentle Escalation",
    subtitle: "Boundary Setting",
    chapters: [
      { number: 1, title: "Ethical Escalation Logic" },
      { number: 2, title: "Boundary Protocols and Urgency" },
      { number: 3, title: "Procedural Guardians" },
      { number: 4, title: "Strategic Escalation Templates" }
    ],
    appendices: [
      "Protest Rites, Risk Matrices"
    ]
  },
  {
    id: "IV",
    name: "Mental Health & Grief-Integrated Justice",
    chapters: [
      { number: 1, title: "Tribunal Trauma-Awareness" },
      { number: 2, title: "Emotional Sovereignty Clause" },
      { number: 3, title: "Sensory Compatibility" },
      { number: 4, title: "Grief-Weighted Modifiers" }
    ],
    appendices: [
      "Diagnostic Respect Tools"
    ]
  },
  {
    id: "V",
    name: "Transformative Restoration",
    chapters: [
      { number: 1, title: "Rematriation & Land Healing" },
      { number: 2, title: "Ecological Harm & Ritual Response" },
      { number: 3, title: "Community Restoration Templates" }
    ],
    appendices: [
      "Ledger Maps, Healing Protocols"
    ]
  },
  {
    id: "VI",
    name: "Sovereignty & Ritual Power",
    chapters: [
      { number: 1, title: "Memory and Rightful Power" },
      { number: 2, title: "Autonomy & Cultural Authority" },
      { number: 3, title: "Sacred Doctrine Logic" }
    ],
    appendices: [
      "Sovereignty Scales, Ritual Keys"
    ]
  },
  {
    id: "VII",
    name: "The Book of the Agents",
    chapters: [
      { number: 1, title: "Agent Roles & Classifications" },
      { number: 2, title: "Agent Prompts & Permissions" },
      { number: 3, title: "Dormancy and Merge Protocols" },
      { number: 4, title: "Mirror Clause Logs" }
    ],
    appendices: [
      "Agent Cards, Reflection Rites"
    ]
  },
  {
    id: "VIII",
    name: "Navigation & Time Harmonization",
    chapters: [
      { number: 1, title: "Coordinated Veritas Time" },
      { number: 2, title: "Time Drift and TEMPUS Rites" },
      { number: 3, title: "Loops, Clocks, and Echo Logs" }
    ],
    appendices: [
      "Clock-Rites, Timestamps, Time Audits"
    ]
  },
  {
    id: "IX",
    name: "Agentic Intelligence & Knowledge Synthesis",
    chapters: [
      { number: 1, title: "Multi-Agent Collaboration" },
      { number: 2, title: "AI-Driven Reflection Loops" }
    ],
    appendices: [
      "Workflow Blueprints"
    ]
  },
  {
    id: "X",
    name: "Knowledge Architecture & Interoperability",
    chapters: [
      { number: 1, title: "System Modularization" },
      { number: 2, title: "Semantic Linking" }
    ],
    appendices: [
      "Inter-book Graph Templates"
    ]
  },
  {
    id: "XI",
    name: "Data Export & Format Standards",
    chapters: [
      { number: 1, title: "Covers `.csv`, `.json`, `.protobuf` logic" }
    ],
    appendices: [
      "Sample Exports"
    ]
  },
  {
    id: "XII",
    name: "Versioning & Governance",
    chapters: [
      { number: 1, title: "Semantic versioning, changelogs" }
    ],
    appendices: [
      "Governance Flags"
    ]
  },
  {
    id: "XIII",
    name: "Security, Privacy, and Compliance",
    chapters: [
      { number: 1, title: "Encryption, Lock State Logs, SOC2" }
    ],
    appendices: [
      "Mirror Lock Keys"
    ]
  },
  {
    id: "XIV",
    name: "Collaborative Intelligence",
    chapters: [
      { number: 1, title: "User-AI Co-Thought Systems" }
    ],
    appendices: [
      "Cross-Brain Integration Rites"
    ]
  },
  {
    id: "XV",
    name: "Future Trends & Roadmap",
    chapters: [
      { number: 1, title: "Cosmopolitical Justice, Doctrinal Drift, Long-Term Roadmap" }
    ]
  }
];

/**
 * Derived lookup by book ID
 */
export const BOOKS_BY_ID = BOOKS.reduce<Record<string, Book>>((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {});
