export default {
  schema: "./server/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
export const drizzleConfig = {
  schema: "./server/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
export type { drizzleConfig as DrizzleConfig };
export type { drizzleConfig as DrizzleConfigType };
export type { drizzleConfig as DrizzleConfigInterface };
export type { drizzleConfig as DrizzleConfigTypeAlias };
export type { drizzleConfig as DrizzleConfigExport };
export type { drizzleConfig as DrizzleConfigExportType };
export type { drizzleConfig as DrizzleConfigExportInterface };
export type { drizzleConfig as DrizzleConfigExportTypeAlias };