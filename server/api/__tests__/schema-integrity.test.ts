import { db } from "../../db";

describe("Database Schema Integrity", () => {
  test("fairness_audits table exists and has required columns", async () => {
    // Use your underlying pg client for raw SQL
    const result = await db.client.query(`
      SELECT column_name FROM information_schema.columns
      WHERE table_name = 'fairness_audits';
    `);
    const columns = result.rows.map((row: any) => row.column_name);
    expect(columns).toEqual(
      expect.arrayContaining([
        "id",
        "case_id",
        "agent_id",
        "audit_date",
        "dimension",
        "score",
        "comments",
        "created_at",
        "updated_at",
      ])
    );
  });
});