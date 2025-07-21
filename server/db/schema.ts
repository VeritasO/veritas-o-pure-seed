import { pgTable, serial, text, timestamp, integer, boolean, jsonb, varchar, uuid, float4 } from "drizzle-orm/pg-core";

// 🌱 CASES TABLE – Core Tribunal Records
export const cases = pgTable('cases', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  submittedAt: timestamp('submitted_at').defaultNow(),
  participantId: integer('participant_id').references(() => participants.id),
  griefVectorId: integer('grief_vector_id').references(() => griefVectors.id),
  symbolicStateId: integer('symbolic_state_id').references(() => symbolicStates.id),
  status: text('status').default('pending'),
});

// 🧍 PARTICIPANTS TABLE – Agents, Humans, and Others
export const participants = pgTable('participants', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role'), // e.g., "witness", "initiator", "agent"
  avatarUrl: text('avatar_url'),
  rightsJson: jsonb('rights_json'), // Ontological rights
});

// 🤖 AGENTS TABLE – All system agents A01–A50
export const agents = pgTable('agents', {
  id: serial('id').primaryKey(),
  glyph: text('glyph').notNull(),
  name: text('name').notNull(),
  mission: text('mission'),
  domain: text('domain'),
  active: boolean('active').default(true),
});

// ⚖️ VERDICTS TABLE – Justice output from tribunal
export const verdicts = pgTable('verdicts', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id').references(() => cases.id),
  agentId: integer('agent_id').references(() => agents.id),
  verdict: text('verdict').notNull(), // e.g., "restore+symbol X", "deny + ritual Y"
  scaleScore: integer('scale_score'),
  issuedAt: timestamp('issued_at').defaultNow(),
});

// 💔 GRIEF VECTORS – Intensity/Temporal tracking
export const griefVectors = pgTable('grief_vectors', {
  id: serial('id').primaryKey(),
  griefLevel: integer('grief_level'),
  timeDisruption: integer('time_disruption'), // measured in days or symbolic units
  griefNotes: text('grief_notes'),
});

// 🔮 SYMBOLIC STATES – Ritual/Enactment State
export const symbolicStates = pgTable('symbolic_states', {
  id: serial('id').primaryKey(),
  label: text('label'), // e.g., "initiation", "reversal", "integration"
  color: text('color'),
  glyph: text('glyph'),
  active: boolean('active').default(true),
});

// 📚 REFLECTIONS TABLE – Time-loop feedback or contradiction logs
export const reflections = pgTable('reflections', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id').references(() => cases.id),
  triggeredByAgentId: integer('triggered_by_agent_id').references(() => agents.id),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

// ✨ RITUAL TEMPLATES – Predefined ritual structures
export const ritualTemplates = pgTable('ritual_templates', {
  id: varchar('id', { length: 64 }).primaryKey(),
  title: text('title'), // optional, but recommended for display
  description: text('description').notNull(),
  tags: jsonb('tags').default([]).notNull(), // store array as JSONB
  category: varchar('category', { length: 64 }).notNull(),
  meaning: text('meaning').notNull(),
  symbol: varchar('symbol', { length: 8 }), // optional emoji/symbol
  // add other fields as needed
});

// 🔍 FAIRNESS AUDITS – Evaluation of bias and fairness in tribunal decisions
export const fairnessAudits = pgTable('fairness_audits', {
  id: serial('id').primaryKey(),
  initiator: varchar('initiator', { length: 100 }),
  agent_involved: varchar('agent_involved', { length: 100 }),
  case_reference: varchar('case_reference', { length: 255 }),
  issue: text('issue'),
  justice_tier: integer('justice_tier'),
  grief_weight: integer('grief_weight'),
  created_at: timestamp('created_at').defaultNow(),
});