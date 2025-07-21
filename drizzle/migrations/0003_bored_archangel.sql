CREATE TABLE "ritual_templates" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"title" text,
	"description" text NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"category" varchar(64) NOT NULL,
	"meaning" text NOT NULL,
	"symbol" varchar(8)
);
