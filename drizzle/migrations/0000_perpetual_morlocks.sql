CREATE TABLE "agents" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"description" text,
	"active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "case_participants" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"participant_id" integer NOT NULL,
	"participant_role" varchar(50) NOT NULL,
	"joined_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "cases" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_number" varchar(30) NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" text,
	"status" varchar(30) DEFAULT 'open',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "cases_case_number_unique" UNIQUE("case_number")
);
--> statement-breakpoint
CREATE TABLE "grief_cycles" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"stage" varchar(50) NOT NULL,
	"started_at" timestamp DEFAULT now(),
	"ended_at" timestamp,
	"notes" text
);
--> statement-breakpoint
CREATE TABLE "participants" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"role" varchar(50) NOT NULL,
	"contact_info" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "rites" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"rite_type" varchar(100) NOT NULL,
	"description" text,
	"performed_at" timestamp DEFAULT now(),
	"performed_by_agent_id" integer
);
--> statement-breakpoint
CREATE TABLE "verdicts" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"verdict_text" text NOT NULL,
	"proportionality_score" integer NOT NULL,
	"restoration_plan" jsonb,
	"issued_at" timestamp DEFAULT now(),
	"issued_by_agent_id" integer
);
--> statement-breakpoint
ALTER TABLE "case_participants" ADD CONSTRAINT "case_participants_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "case_participants" ADD CONSTRAINT "case_participants_participant_id_participants_id_fk" FOREIGN KEY ("participant_id") REFERENCES "public"."participants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "grief_cycles" ADD CONSTRAINT "grief_cycles_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rites" ADD CONSTRAINT "rites_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rites" ADD CONSTRAINT "rites_performed_by_agent_id_agents_id_fk" FOREIGN KEY ("performed_by_agent_id") REFERENCES "public"."agents"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verdicts" ADD CONSTRAINT "verdicts_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verdicts" ADD CONSTRAINT "verdicts_issued_by_agent_id_agents_id_fk" FOREIGN KEY ("issued_by_agent_id") REFERENCES "public"."agents"("id") ON DELETE no action ON UPDATE no action;