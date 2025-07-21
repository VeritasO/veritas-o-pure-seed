import request from "supertest";
import app from "../../index"; // Adjust path if needed
import { db } from "../db";
import { fairnessAudits } from "../db/schema";
import { eq } from "drizzle-orm";

describe("Fairness Audits API", () => {
  beforeAll(async () => {
    // Seed a test audit record
    await db.insert(fairnessAudits).values({
      id: "00000000-0000-0000-0000-000000000001",
      caseId: "11111111-1111-1111-1111-111111111111",
      agentId: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      auditDate: new Date("2025-01-01"),
      dimension: "Test Dimension",
      score: 0.75,
      comments: "Test audit record",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  afterAll(async () => {
    // Clean up test data
    await db.delete(fairnessAudits).where(eq(fairnessAudits.id, "00000000-0000-0000-0000-000000000001"));
    await db.end();
  });

  test("GET /api/fairness-audits returns audits", async () => {
    const res = await request(app).get("/api/fairness-audits");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test("GET /api/fairness-audits filters by caseId", async () => {
    const res = await request(app)
      .get("/api/fairness-audits")
      .query({ caseId: "11111111-1111-1111-1111-111111111111" });
    expect(res.status).toBe(200);
    expect(res.body.data.every((audit: any) => audit.caseId === "11111111-1111-1111-1111-111111111111")).toBe(true);
  });

  test("GET /api/fairness-audits paginates results", async () => {
    const res1 = await request(app).get("/api/fairness-audits").query({ page: 1, pageSize: 1 });
    const res2 = await request(app).get("/api/fairness-audits").query({ page: 2, pageSize: 1 });
    expect(res1.status).toBe(200);
    expect(res2.status).toBe(200);
    expect(res1.body.data.length).toBeLessThanOrEqual(1);
    expect(res2.body.data.length).toBeLessThanOrEqual(1);
    expect(res1.body.data[0]?.id).not.toEqual(res2.body.data[0]?.id);
  });

  test("returns 400 for invalid UUID in caseId", async () => {
    const res = await request(app).get("/api/fairness-audits").query({ caseId: "not-a-uuid" });
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/Invalid UUID/);
  });

  test("returns empty array if no audits found", async () => {
    const res = await request(app).get("/api/fairness-audits").query({ caseId: "00000000-0000-0000-0000-000000000000" });
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });
});