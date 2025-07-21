CREATE TABLE "books" (
	"id" varchar(8) PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "grief_vectors" (
	"id" varchar(16) PRIMARY KEY NOT NULL,
	"grief_type" varchar(32),
	"intensity" integer,
	"latency" varchar(16),
	"related_case_id" varchar(32)
);
--> statement-breakpoint
CREATE TABLE "symbolic_states" (
	"id" varchar(16) PRIMARY KEY NOT NULL,
	"symbol" varchar(8),
	"ritual" varchar(64),
	"state" varchar(32),
	"reconciliation_status" varchar(32)
);
--> statement-breakpoint
ALTER TABLE "agents" ALTER COLUMN "id" SET DATA TYPE varchar(8);--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "mission" text;--> statement-breakpoint
ALTER TABLE "agents" ADD COLUMN "glyph" varchar(8);--> statement-breakpoint
ALTER TABLE "agents" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "agents" DROP COLUMN "active";--> statement-breakpoint
ALTER TABLE "agents" DROP COLUMN "created_at";