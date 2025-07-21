export const VERITAS_BOOKS = [
  {
    id: "I",
    title: "The Book of Meaningful Thought",
    chapters: [
      "Foundations of the Veritas Doctrine",
      "Memory, Truth, and Record-Keeping",
      "Neuroethics and the Science of Mind",
      "Agents and the Inner Council",
      "Justice of Thought – Case Studies and Templates"
    ],
    appendix: ["Rituals, Metrics, Access Protocols"]
  },
  {
    id: "II",
    title: "The Book of Gentle De-escalation",
    chapters: [
      "Ethic of Harm Minimization",
      "Collective Grief and Emotional Healing",
      "Non-Coercive Communication",
      "Agents of Harmony",
      "De-escalation Templates"
    ],
    appendix: ["Grief Toolkits, NVC Rites"]
  },
  {
    id: "III",
    title: "The Book of Gentle Escalation",
    chapters: [
      "Ethical Escalation Logic",
      "Boundary Protocols and Urgency",
      "Procedural Guardians",
      "Strategic Escalation Templates"
    ],
    appendix: ["Protest Rites, Risk Matrices"]
  },
  {
    id: "IV",
    title: "The Book of Restorative Structure",
    chapters: [
      "Scaffolding Restoration and Return",
      "Fairness Logic and Proportionality",
      "Designing Time-Reversible Processes",
      "Structural Harm and Reweaving",
      "Examples of Tiered Restoration"
    ],
    appendix: ["Justice Templates, Time-Reversal Symbols"]
  },
  {
    id: "V",
    title: "The Book of Grief Logic",
    chapters: [
      "KAIROS and the Weight of Suffering",
      "Scaling Justice to Emotional Depth",
      "Intergenerational Wounds",
      "Lamentation as Record",
      "Grief-Adjusted Tribunal Templates"
    ],
    appendix: ["KAIROS Metrics, Time/Emotion Maps"]
  },
  {
    id: "VI",
    title: "The Book of Non-Carcerality",
    chapters: [
      "Beyond Punishment: Philosophical Foundations",
      "Abolition as Default",
      "Reintegration Rites",
      "Narrative Repair and Return",
      "Sacred Accountability"
    ],
    appendix: ["Return Ceremonies, Oath Protocols"]
  },
  {
    id: "VII",
    title: "The Book of Symbolic Justice",
    chapters: [
      "VESTA and the Logic of Symbols",
      "Ritualizing Structural Change",
      "Symbolic Enactment Templates",
      "Designing Collective Rituals",
      "Memorials, Marks, and Records"
    ],
    appendix: ["Symbol Libraries, Ritual Frameworks"]
  },
  {
    id: "VIII",
    title: "The Book of Right Relationship",
    chapters: [
      "Land-Based Justice",
      "Consent and Co-Creation",
      "Indigenous Sovereignty & Memory",
      "Sacred Witnessing",
      "Regrounding Techniques"
    ],
    appendix: ["Land Rites, THALEA Protocols"]
  },
  {
    id: "IX",
    title: "The Book of Narrative Truth",
    chapters: [
      "LYRA and Lived Experience",
      "Narrative as Evidence",
      "Story Circles and Public Truths",
      "Generational Truth Processing",
      "Tools for Listening"
    ],
    appendix: ["LYRA Templates, Oral Recordkeeping"]
  },
  {
    id: "X",
    title: "The Book of Temporal Ethics",
    chapters: [
      "Time, Justice, and Kairotic Order",
      "Grief-Time & Restoration-Time",
      "Temporal Interventions",
      "Clock Ethics and Tribunal Cadence",
      "KAIROS-AEGIS Integrations"
    ],
    appendix: ["Time Maps, Cadence Charts"]
  },
  {
    id: "XI",
    title: "The Book of Structural Audits",
    chapters: [
      "AEGIS and Bias Recognition",
      "Audit Rituals",
      "Structural Intervention Ethics",
      "Feedback Loops",
      "Symbol-Audit Integration"
    ],
    appendix: ["AEGIS Auditing Frameworks"]
  },
  {
    id: "XII",
    title: "The Book of Ontological Justice",
    chapters: [
      "ORION and Rights Logic",
      "Beingness as Basis",
      "Ethical Ontology",
      "Justice Beyond the Human",
      "Sacred Definitions"
    ],
    appendix: ["Ontology Templates, Right Claims"]
  },
  {
    id: "XIII",
    title: "The Book of Emotional Sovereignty",
    chapters: [
      "Personal Integrity and Emotional Ground",
      "Witnessing vs. Absorption",
      "Energetic Boundaries",
      "Holding and Being Held",
      "JUNO-LYRA Dialogues"
    ],
    appendix: ["Emotional Protocols, Sacred Space Rites"]
  },
  {
    id: "XIV",
    title: "The Book of Tribunal Protocol",
    chapters: [
      "Veritas Tribunal Logic",
      "Layers of Justice Involvement",
      "Case Templates and Logs",
      "Agent Council Dynamics",
      "Resolution Documentation"
    ],
    appendix: ["Tribunal Templates, Agent Roles"]
  },
  {
    id: "XV",
    title: "The Book of Evolutionary Justice",
    chapters: [
      "AI Collaboration and Ethical Evolution",
      "Feedback-Based Systems",
      "Living Systems Justice",
      "Doctrinal Flexibility",
      "Symbolic Recode Practices"
    ],
    appendix: ["SORA Integrations, Evolution Triggers"]
  }
];
export const BOOKS = VERITAS_BOOKS.map((book, index) => ({
  id: `B${String(index + 1).padStart(2, '0')}`,
  title: book.title,
  order: index + 1,
}));
export const BOOK_GLYPHS = {
  B01: "📖",
  B02: "🕊️",
  B03: "⏳",
  B04: "🔗",
  B05: "💔",
  B06: "🏗️",
  B07: "🛡️",
  B08: "🌿",
  B09: "🎼",
  B10: "⏰",
  B11: "💫",
  B12: "🔄",
  B13: "🌌",
  B14: "🔥",
  B15: "⚖️"
};
export const BOOKS_WITH_GLYPHS = BOOKS.map(book => ({
  ...book,
  glyph: BOOK_GLYPHS[book.id]
}));
export const BOOKS_BY_ID = BOOKS.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {} as Record<string, typeof BOOKS[number]>);
export const BOOKS_BY_ORDER = BOOKS.reduce((acc, book) => {
  acc[book.order] = book;
  return acc;
}, {} as Record<number, typeof BOOKS[number]>);
export const BOOKS_BY_TITLE = BOOKS.reduce((acc, book) => {
  acc[book.title] = book;
  return acc;
}, {} as Record<string, typeof BOOKS[number]>);
export const BOOKS_BY_ID_WITH_GLYPHS = BOOKS_WITH_GLYPHS.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {} as Record<string, typeof BOOKS_WITH_GLYPHS[number]>);
export const BOOKS_BY_ORDER_WITH_GLYPHS = BOOKS_WITH_GLYPHS.reduce((acc, book) => {
  acc[book.order] = book;
  return acc;
}, {} as Record<number, typeof BOOKS_WITH_GLYPHS[number]>);
export const BOOKS_BY_TITLE_WITH_GLYPHS = BOOKS_WITH_GLYPHS.reduce((acc, book) => {
  acc[book.title] = book;
  return acc;
}, {} as Record<string, typeof BOOKS_WITH_GLYPHS[number]>);
export const BOOKS_BY_ID_AND_ORDER = BOOKS.reduce((acc, book) => {
  acc[book.id] = book;
  acc[book.order] = book;
  return acc;
}, {} as Record<string | number, typeof BOOKS[number]>);
export const BOOKS_BY_ID_AND_ORDER_WITH_GLYPHS = BOOKS_WITH_GLYPHS.reduce((acc, book) => {
  acc[book.id] = book;
  acc[book.order] = book;
  return acc;
}, {} as Record<string | number, typeof BOOKS_WITH_GLYPHS[number]>);
export const BOOKS_BY_ID_AND_TITLE = BOOKS.reduce((acc, book) => {
  acc[book.id] = book;
  acc[book.title] = book;
  return acc;
}, {} as Record<string, typeof BOOKS[number]>);
export const BOOKS_BY_ID_AND_TITLE_WITH_GLYPHS = BOOKS_WITH_GLYPHS
PHS.reduce((acc, book) => {
  acc[book.id] = book;
  acc[book.title] = book;
  return acc;
}, {} as Record<string, typeof BOOKS_WITH_GLYPHS[number]>);
export const BOOKS_BY_ORDER_AND_TITLE = BOOKS.reduce((acc, book) => {
  acc[book.order] = book;
  acc[book.title] = book;
  return acc;
}, {} as Record<number | string, typeof BOOKS[number]>);
export const BOOKS_BY_ORDER_AND_TITLE_WITH_GLYPHS = BOOKS_WITH_GLY