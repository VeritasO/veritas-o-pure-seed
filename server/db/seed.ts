import "dotenv/config";
import { db } from "./index";
import {
  agents,
  // books,
  participants,
  cases,
  verdicts,
  griefVectors,
  symbolicStates,
  ritualTemplates,
  fairnessAudits,
} from "./schema";
import { v4 as uuidv4 } from "uuid";

const caseIds = [
  "case-uuid-1",
  "case-uuid-2",
  "case-uuid-3",
  "case-uuid-4",
]; /* Replace with actual UUIDs from your cases and agents tables */
const agentIds = [
  "agent-aegis-uuid",
  "agent-juno-uuid",
  "agent-lyra-uuid",
  "agent-vesta-uuid",
];
const dimensions = [
  "Procedural Fairness",
  "Bias Detection",
  "Voice",
  "Neutrality",
  "Respect",
];

function randomDateInLast6Months() {
  const now = new Date();
  const past = new Date(now);
  past.setMonth(now.getMonth() - 6);
  return new Date(
    past.getTime() + Math.random() * (now.getTime() - past.getTime())
  );
}

const seedFairnessAudits = Array.from({ length: 12 }).map((_, i) => ({
  id: uuidv4(),
  caseId: caseIds[Math.floor(Math.random() * caseIds.length)],
  agentId: agentIds[Math.floor(Math.random() * agentIds.length)],
  auditDate: randomDateInLast6Months(),
  dimension: dimensions[Math.floor(Math.random() * dimensions.length)],
  score: Math.round((Math.random() * 0.5 + 0.5) * 100) / 100, // 0.5–1.0
  comments: `Mock audit comment #${i + 1}`,
}));

async function seed() {
  // Seed Books I–XV (and placeholder for Book XVI+)
  await db.insert(books).values([
    { id: "B01", title: "Book of Foundations", order: 1 },
    { id: "B02", title: "Book of Grief Integration", order: 2 },
    { id: "B03", title: "Book of Time Harmonization", order: 3 },
    { id: "B04", title: "Book of Narrative Truth", order: 4 },
    { id: "B05", title: "Book of Ontological Rights", order: 5 },
    { id: "B06", title: "Book of Restoration Logic", order: 6 },
    { id: "B07", title: "Book of the Agents (Codex)", order: 7 },
    { id: "B08", title: "Book of Symbolic Enactment", order: 8 },
    { id: "B09", title: "Book of Tribunal Simulation", order: 9 },
    { id: "B10", title: "Book of Doctrinal Reflection", order: 10 },
    { id: "B11", title: "Book of Emotional Sovereignty", order: 11 },
    { id: "B12", title: "Book of Temporal Reversibility", order: 12 },
    { id: "B13", title: "Book of Ecological Memory", order: 13 },
    { id: "B14", title: "Book of Agent Glyphs", order: 14 },
    { id: "B15", title: "Book of Audit Integrity", order: 15 },
  ]);

  // Seed Core Agents (A01–A21 Placeholder)
  await db.insert(agents).values([
    { id: "A01", name: "JUNO", mission: "Judicial Logic & Coordination", glyph: "⚖️" },
    { id: "A02", name: "AEGIS", mission: "Bias Auditing & Fairness", glyph: "🛡️" },
    { id: "A03", name: "KAIROS", mission: "Grief & Temporal Justice", glyph: "⏳" },
    { id: "A04", name: "LYRA", mission: "Narrative Truth & Memory", glyph: "🎼" },
    { id: "A05", name: "ORION", mission: "Ontological Rights & Personhood", glyph: "🌌" },
    { id: "A06", name: "THALEA", mission: "Healing & Land-Based Justice", glyph: "🌿" },
    { id: "A07", name: "VESTA", mission: "Symbolic Rites & Structural Change", glyph: "🔥" },
    // Extend A08–A21...
  ]);

  // Seed Sample Grief Vector Entry
  await db.insert(griefVectors).values([
    {
      id: "GVI-0001",
      griefType: "Loss",
      intensity: 8,
      latency: "long",
      relatedCaseId: "CASE-0001",
    },
  ]);

  // Seed Symbolic States
  await db.insert(symbolicStates).values([
    {
      id: "SYM-0001",
      symbol: "🕊️",
      ritual: "Peace Offering",
      state: "Pending",
      reconciliationStatus: "In Progress",
    },
  ]);

  // Seed Ritual Templates
  await db.insert(ritualTemplates).values([
    {
      id: "peace-offering",
      title: "Peace Offering",
      description: "A ritual to restore harmony between parties.",
      tags: ["peace", "restoration"],
      category: "symbolic",
      meaning: "Symbolizes the intention to reconcile and move forward.",
      symbol: "🕊️",
    },
    {
      id: "memory-vigil",
      title: "Memory Vigil",
      description: "A gathering to honor and remember those lost.",
      tags: ["memory", "honor"],
      category: "commemorative",
      meaning: "Collective remembrance and healing.",
      symbol: "🕯️",
    },
    {
      id: "circle-of-truth",
      title: "Circle of Truth",
      description: "Participants share their truths in a protected space.",
      tags: ["truth", "sharing", "protection"],
      category: "restorative",
      meaning: "Fosters honesty and mutual understanding.",
      symbol: "⭕",
    },
    {
      id: "ritual-001",
      title: "Cleansing Water Ritual",
      description: "Cleansing Water Ritual",
      tags: ["cleansing", "purification", "water"],
      category: "Purification",
      meaning: "A ritual to cleanse negative energies and restore balance using sacred water.",
      symbol: "💧",
    },
    {
      id: "ritual-002",
      title: "Healing Fire Ceremony",
      description: "Healing Fire Ceremony",
      tags: ["healing", "fire", "transformation"],
      category: "Healing",
      meaning: "Uses fire symbolism to ignite transformation and emotional healing.",
      symbol: "🔥",
    },
    {
      id: "ritual-003",
      title: "Ancestor Reverence Gathering",
      description: "Ancestor Reverence Gathering",
      tags: ["ancestral", "respect", "community"],
      category: "Ancestral",
      meaning: "Honoring ancestral spirits to connect with wisdom and guidance.",
      symbol: "🪶",
    },
  ]);

  // Seed Fairness Audits
  await db.insert(fairnessAudits).values(seedFairnessAudits);

  console.log("✅ Veritas Seed complete.");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seed error:", e);
  process.exit(1);
});
