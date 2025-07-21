import "dotenv/config";
import { db } from "./index";
import {
  agents,
  // books, // Removed because 'books' is not exported from './schema'
  participants,
  cases,
  verdicts,
  griefVectors,
  symbolicStates,
  ritualTemplates,
  fairnessAudits,
} from "./schema";
import { tribunalSessions, tribunalDialogues, tribunalVotes } from "./schema/tribunal";
import { v4 as uuidv4 } from "uuid";
import { AGENTS } from "../../data/agents";
import { BOOKS, BOOKS_BY_ID } from "../../data/books";

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
  case_id: caseIds[Math.floor(Math.random() * caseIds.length)],
  agent_id: agentIds[Math.floor(Math.random() * agentIds.length)],
  audit_date: randomDateInLast6Months(),
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
  // /scripts/seed.ts (Agent Insertion Only)
await db.insert(agents).values(AGENTS);


  // Seed Sample Grief Vector Entry
  await db.insert(griefVectors).values([
    {
      id: 1,
      griefLevel: 8,
      timeDisruption: 0,
      griefNotes: "Loss",
      relatedCaseId: 1,
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

  // --- Tribunal Session ---
  await db.insert(cases).values({
    id: "mock_case_001",
    title: "Test Tribunal: Symbolic Enactment Dispute",
    status: "open",
    openedAt: new Date("2025-07-21T09:54:45.521553Z"),
    // Add other required fields if your schema needs them (e.g., description, participantId, etc.)
  });

  await db.insert(tribunalSessions).values({
    id: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
    caseId: "case_001",
    initiatedBy: "JUNO",
    openedAt: new Date("2025-07-19T15:00:00Z"),
    closedAt: new Date("2025-07-19T17:30:00Z"),
  });

  // --- Tribunal Dialogues ---
  await db.insert(tribunalDialogues).values([
    {
      id: "04acf4d6-589c-48fa-85bb-4b839ce308eb",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      speaker: "JUNO",
      message: "This tribunal convenes in pursuit of restoration, not punishment.",
      timestamp: new Date("2025-07-19T15:05:00Z"),
    },
    {
      id: "9648578a-3c40-427b-a20b-afef64f10231",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      speaker: "LYRA",
      message: "The narrative truth has been shared and honored.",
      timestamp: new Date("2025-07-19T15:15:00Z"),
    },
    {
      id: "baa3bde8-65e8-4d25-ac52-912d356b43eb",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      speaker: "KAIROS",
      message: "Temporal harm weighted. Grief resonance recorded.",
      timestamp: new Date("2025-07-19T15:30:00Z"),
    },
  ]);

  // --- Tribunal Votes ---
  await db.insert(tribunalVotes).values([
    {
      id: "7bf04b96-daee-45a0-a9ba-010c8f3d855c",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      agentId: "JUNO",
      vote: "restore",
      timestamp: new Date("2025-07-19T17:00:00Z"),
    },
    {
      id: "7c4d1765-d2bd-488c-ba59-6b35a0cc2150",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      agentId: "LYRA",
      vote: "grieve",
      timestamp: new Date("2025-07-19T17:10:00Z"),
    },
    {
      id: "5f72d9e1-14d0-4f91-b17e-8af5b03c0a27",
      sessionId: "bcc16aa2-a4f6-4760-9fae-b5a64cceb659",
      agentId: "KAIROS",
      vote: "restore",
      timestamp: new Date("2025-07-19T17:20:00Z"),
    },
  ]);

  // --- Tribunal Session: case_002 ---
  await db.insert(tribunalSessions).values({
    id: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
    caseId: "case_002",
    initiatedBy: "THALEA",
    openedAt: new Date("2025-07-12T13:00:00Z"),
    closedAt: new Date("2025-07-12T15:10:00Z"),
  });

  await db.insert(tribunalDialogues).values([
    {
      id: "147c9d22-1223-46c4-a07b-2790f87e84a4",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      speaker: "THALEA",
      message: "This land has held the memory of harm. We listen now to its silence.",
      timestamp: new Date("2025-07-12T13:10:00Z"),
    },
    {
      id: "d909a4a0-262b-4e78-9649-1c944f359f6e",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      speaker: "ORION",
      message: "Ecological rights are in breach. The claim is valid and time-anchored.",
      timestamp: new Date("2025-07-12T13:45:00Z"),
    },
    {
      id: "aa3f345e-8ff7-4819-9f3c-80d16327c4e5",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      speaker: "KAIROS",
      message: "Grief pulses through generations. Acknowledged in long-form.",
      timestamp: new Date("2025-07-12T14:10:00Z"),
    },
  ]);

  await db.insert(tribunalVotes).values([
    {
      id: "c2f09990-227e-41d2-abc8-bae9d0e6f4d1",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      agentId: "THALEA",
      vote: "restore",
      timestamp: new Date("2025-07-12T14:30:00Z"),
    },
    {
      id: "0f22b9f6-9797-4ff5-89b1-0f2546070b4c",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      agentId: "ORION",
      vote: "restore",
      timestamp: new Date("2025-07-12T14:45:00Z"),
    },
    {
      id: "f3518e7b-292b-42a9-bfac-d9fa282512f4",
      sessionId: "62a7d790-2b4a-470c-9b12-4c9a4296b502",
      agentId: "KAIROS",
      vote: "grieve",
      timestamp: new Date("2025-07-12T14:55:00Z"),
    },
  ]);

  // --- Tribunal Session: case_003 ---
  await db.insert(tribunalSessions).values({
    id: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
    caseId: "case_003",
    initiatedBy: "AEGIS",
    openedAt: new Date("2025-07-01T10:00:00Z"),
    closedAt: new Date("2025-07-01T12:20:00Z"),
  });

  await db.insert(tribunalDialogues).values([
    {
      id: "e0212636-8ddf-4cd1-b2d5-6ef80ee73db8",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      speaker: "AEGIS",
      message: "Bias audit triggered. Examining decision architecture for skew.",
      timestamp: new Date("2025-07-01T10:15:00Z"),
    },
    {
      id: "b4a119b1-11e3-4e1e-ae96-f2340b06fef2",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      speaker: "VESTA",
      message: "Structural imbalance confirmed. Proceeding to ritual planning.",
      timestamp: new Date("2025-07-01T10:50:00Z"),
    },
    {
      id: "e6b3ab3a-537a-4668-b9fc-fdf785697a4d",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      speaker: "JUNO",
      message: "Doctrine confirmed. Structural rebalancing is within scope.",
      timestamp: new Date("2025-07-01T11:20:00Z"),
    },
  ]);

  await db.insert(tribunalVotes).values([
    {
      id: "0aa394a0-d0a8-4372-9062-290f376c174b",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      agentId: "AEGIS",
      vote: "audit",
      timestamp: new Date("2025-07-01T11:40:00Z"),
    },
    {
      id: "d4bda1a9-c7cf-4b94-ae71-e55bff5e1ec6",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      agentId: "VESTA",
      vote: "transform",
      timestamp: new Date("2025-07-01T11:55:00Z"),
    },
    {
      id: "50d0b720-0f01-45bc-9ae0-c1319f3b9c80",
      sessionId: "4b48e302-6f2f-4e7e-8454-6ff9fef9844d",
      agentId: "JUNO",
      vote: "restore",
      timestamp: new Date("2025-07-01T12:05:00Z"),
    },
  ]);

  console.log("✅ Veritas Seed complete.");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seed error:", e);
  process.exit(1);
});

expect(BOOKS_BY_ID["I"].name).toBe("The Book of Meaningful Thought");
