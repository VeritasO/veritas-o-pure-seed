CREATE TABLE "reflections" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer,
	"triggered_by_agent_id" integer,
	"notes" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "books" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "case_participants" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "grief_cycles" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "rites" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "books" CASCADE;--> statement-breakpoint
DROP TABLE "case_participants" CASCADE;--> statement-breakpoint
DROP TABLE "grief_cycles" CASCADE;--> statement-breakpoint
DROP TABLE "rites" CASCADE;--> statement-breakpoint
ALTER TABLE "cases" DROP CONSTRAINT "cases_case_number_unique";--> statement-breakpoint
ALTER TABLE "verdicts" DROP CONSTRAINT "verdicts_issued_by_agent_id_agents_id_fk";
--> statement-breakpoint
ALTER TABLE "agents" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "agents" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "agents" ALTER COLUMN "glyph" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "agents" ALTER COLUMN "glyph" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cases" ALTER COLUMN "title" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "cases" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "cases" ALTER COLUMN "status" SET DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "grief_vectors" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "participants" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "participants" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "participants" ALTER COLUMN "role" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "symbolic_states" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "verdicts" ALTER COLUMN "case_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "domain" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "active" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "cases" ADD COLUMN "submitted_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "cases" ADD COLUMN "participant_id" integer;--> statement-breakpoint
ALTER TABLE "cases" ADD COLUMN "grief_vector_id" integer;--> statement-breakpoint
ALTER TABLE "cases" ADD COLUMN "symbolic_state_id" integer;--> statement-breakpoint
ALTER TABLE "grief_vectors" ADD COLUMN "grief_level" integer;--> statement-breakpoint
ALTER TABLE "grief_vectors" ADD COLUMN "time_disruption" integer;--> statement-breakpoint
ALTER TABLE "grief_vectors" ADD COLUMN "grief_notes" text;--> statement-breakpoint
ALTER TABLE "participants" ADD COLUMN "avatar_url" text;--> statement-breakpoint
ALTER TABLE "participants" ADD COLUMN "rights_json" jsonb;--> statement-breakpoint
ALTER TABLE "symbolic_states" ADD COLUMN "label" text;--> statement-breakpoint
ALTER TABLE "symbolic_states" ADD COLUMN "color" text;--> statement-breakpoint
ALTER TABLE "symbolic_states" ADD COLUMN "glyph" text;--> statement-breakpoint
ALTER TABLE "symbolic_states" ADD COLUMN "active" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "verdicts" ADD COLUMN "agent_id" integer;--> statement-breakpoint
ALTER TABLE "verdicts" ADD COLUMN "verdict" text NOT NULL;--> statement-breakpoint
ALTER TABLE "verdicts" ADD COLUMN "scale_score" integer;--> statement-breakpoint
ALTER TABLE "reflections" ADD CONSTRAINT "reflections_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reflections" ADD CONSTRAINT "reflections_triggered_by_agent_id_agents_id_fk" FOREIGN KEY ("triggered_by_agent_id") REFERENCES "public"."agents"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_participant_id_participants_id_fk" FOREIGN KEY ("participant_id") REFERENCES "public"."participants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_grief_vector_id_grief_vectors_id_fk" FOREIGN KEY ("grief_vector_id") REFERENCES "public"."grief_vectors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_symbolic_state_id_symbolic_states_id_fk" FOREIGN KEY ("symbolic_state_id") REFERENCES "public"."symbolic_states"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verdicts" ADD CONSTRAINT "verdicts_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" DROP COLUMN "case_number";--> statement-breakpoint
ALTER TABLE "cases" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "cases" DROP COLUMN "updated_at";--> statement-breakpoint
ALTER TABLE "grief_vectors" DROP COLUMN "grief_type";--> statement-breakpoint
ALTER TABLE "grief_vectors" DROP COLUMN "intensity";--> statement-breakpoint
ALTER TABLE "grief_vectors" DROP COLUMN "latency";--> statement-breakpoint
ALTER TABLE "grief_vectors" DROP COLUMN "related_case_id";--> statement-breakpoint
ALTER TABLE "participants" DROP COLUMN "contact_info";--> statement-breakpoint
ALTER TABLE "participants" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "symbolic_states" DROP COLUMN "symbol";--> statement-breakpoint
ALTER TABLE "symbolic_states" DROP COLUMN "ritual";--> statement-breakpoint
ALTER TABLE "symbolic_states" DROP COLUMN "state";--> statement-breakpoint
ALTER TABLE "symbolic_states" DROP COLUMN "reconciliation_status";--> statement-breakpoint
ALTER TABLE "verdicts" DROP COLUMN "verdict_text";--> statement-breakpoint
ALTER TABLE "verdicts" DROP COLUMN "proportionality_score";--> statement-breakpoint
ALTER TABLE "verdicts" DROP COLUMN "restoration_plan";--> statement-breakpoint
ALTER TABLE "verdicts" DROP COLUMN "issued_by_agent_id";