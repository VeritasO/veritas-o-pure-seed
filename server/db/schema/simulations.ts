import { pgTable, serial, json, text, real, timestamp } from 'drizzle-orm/pg-core';

export const simulations = pgTable("simulations", {
  id: serial("id").primaryKey(),
  userInput: json("user_input").notNull(),
  generatedVerdict: text("generated_verdict").notNull(),
  logic: json("logic").notNull(),
  reconciliationOptions: json("reconciliation_options").notNull(),
  associatedAgents: json("associated_agents").notNull(),
  harmonyScoreImpact: real("harmony_score_impact").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
