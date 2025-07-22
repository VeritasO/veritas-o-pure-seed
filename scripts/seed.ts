import "dotenv/config";
import { db } from "../server/db/index";
import {
  books,
  agents,
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
    { name: "JUNO", mission: "Judicial Logic & Coordination", glyph: "⚖️", active: true },
    { name: "AEGIS", mission: "Bias Auditing & Fairness", glyph: "🛡️", active: true },
    { name: "KAIROS", mission: "Grief & Temporal Justice", glyph: "⏳", active: true },
    { name: "LYRA", mission: "Narrative Truth & Memory", glyph: "🎼", active: true },
    { name: "ORION", mission: "Ontological Rights & Personhood", glyph: "🌌", active: true },
    { name: "THALEA", mission: "Healing & Land-Based Justice", glyph: "🌿", active: true },
    { name: "VESTA", mission: "Symbolic Rites & Structural Change", glyph: "🔥", active: true },
    // Extend more agents as needed
  ]);

  // Seed Sample Grief Vector Entry
  await db.insert(griefVectors).values([
    {
      griefLevel: 8,
      timeDisruption: 30,
      griefNotes: "Loss, long latency, related to case 1."
    },
  ]);

  // Seed Symbolic States
  await db.insert(symbolicStates).values([
    {
      label: "initiation",
      color: "white",
      glyph: "🕊️",
      active: true
    },
  ]);

  console.log("✅ Veritas Seed complete.");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seed error:", e);
  process.exit(1);
});

