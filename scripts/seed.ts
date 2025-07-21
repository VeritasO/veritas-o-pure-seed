import "dotenv/config";
import { db } from "../db"; // Make sure ../db.ts or ../db/index.ts exists and exports 'db'
import {
  agents,
  books,
  participants,
  cases,
  verdicts,
  griefVectors,
  symbolicStates,
} from "./schema";

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

  console.log("✅ Veritas Seed complete.");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seed error:", e);
  process.exit(1);
});

