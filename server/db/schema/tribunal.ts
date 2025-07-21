import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';

export const tribunalSessions = pgTable('tribunal_sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  caseId: text('case_id').notNull(),
  initiatedBy: text('initiated_by').notNull(),
  openedAt: timestamp('opened_at').defaultNow(),
  closedAt: timestamp('closed_at'),
});

export const tribunalDialogues = pgTable('tribunal_dialogues', {
  id: uuid('id').defaultRandom().primaryKey(),
  sessionId: text('session_id').notNull(),
  speaker: text('speaker').notNull(),
  message: text('message').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});

export const tribunalVotes = pgTable('tribunal_votes', {
  id: uuid('id').defaultRandom().primaryKey(),
  sessionId: text('session_id').notNull(),
  agentId: text('agent_id').notNull(),
  vote: text('vote').notNull(), // e.g. "restore", "grieve", "delay", etc.
  timestamp: timestamp('timestamp').defaultNow(),
});