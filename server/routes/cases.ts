import { Router } from 'express';
import { db } from '../db';
import { cases as casesTable } from '../db/schema';
import { eq, and, gte } from 'drizzle-orm';
import { varchar, serial, pgTable } from 'drizzle-orm/pg-core';

const router = Router();

// GET list of cases with filters
router.get('/', async (req, res) => {
  try {
    const { status, griefStage, severity } = req.query;
    let whereClause: any[] = [];
    if (status) whereClause.push(eq(casesTable.status, String(status)));
    if (griefStage) whereClause.push(eq(casesTable.griefStage, String(griefStage)));
    if (severity) whereClause.push(gte(casesTable.severity, Number(severity)));

    const query = whereClause.length
      ? db.select().from(casesTable).where(and(...whereClause))
      : db.select().from(casesTable);

    const result = await query;
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET single case by ID
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await db.select().from(casesTable).where(eq(casesTable.id, id));
    if (!result.length) return res.status(404).json({ error: 'Case not found' });
    res.json(result[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST create a new case
router.post('/', async (req, res) => {
  try {
    const newCase = req.body;
    const inserted = await db.insert(casesTable).values(newCase).returning();
    res.status(201).json(inserted[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

export const cases = pgTable('cases', {
  id: serial('id').primaryKey(),
  // other columns...
  status: varchar('status', { length: 255 }),
  griefStage: varchar('griefStage', { length: 255 }), // Add griefStage column
  severity: serial('severity'), // Add severity column
  // ...possibly more columns
});