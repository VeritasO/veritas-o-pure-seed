import express from "express";
import { db } from "../db";
import { fairnessAudits, agents, cases } from "../db/schema";
import { eq, and, gte, lte } from "drizzle-orm";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { caseId, agentId, startDate, endDate, page = "1", pageSize = "20" } = req.query;
    const filters = [];

    if (caseId) filters.push(eq(fairnessAudits.caseId, caseId as string));
    if (agentId) filters.push(eq(fairnessAudits.agentId, agentId as string));
    if (startDate) filters.push(gte(fairnessAudits.auditDate, new Date(startDate as string)));
    if (endDate) filters.push(lte(fairnessAudits.auditDate, new Date(endDate as string)));

    const whereClause = filters.length ? and(...filters) : undefined;
    const pageNum = parseInt(page as string);
    const sizeNum = parseInt(pageSize as string);

    const audits = await db
      .select({
        id: fairnessAudits.id,
        caseId: fairnessAudits.caseId,
        agentId: fairnessAudits.agentId,
        auditDate: fairnessAudits.auditDate,
        dimension: fairnessAudits.dimension,
        score: fairnessAudits.score,
        comments: fairnessAudits.comments,
        agentName: agents.name,
        caseNumber: cases.id, // or cases.title if you want the title
      })
      .from(fairnessAudits)
      .leftJoin(agents, eq(fairnessAudits.agentId, agents.id))
      .leftJoin(cases, eq(fairnessAudits.caseId, cases.id))
      .where(whereClause)
      .orderBy(fairnessAudits.auditDate.desc())
      .limit(sizeNum)
      .offset((pageNum - 1) * sizeNum);

    res.json({ data: audits, page: pageNum, pageSize: sizeNum });
  } catch (error) {
    console.error("Error fetching fairness audits:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;