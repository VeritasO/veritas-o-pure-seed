import { Router } from 'express';
import { db } from '../db';
import { cases } from '../db/schema';
import { eq, and, gte } from 'drizzle-orm';

const router = Router();

// GET list of cases with filters
router.get('/', async (req, res) => {
  try {
    const { status, griefStage, severity } = req.query;
    let whereClause = [];
    if (status) whereClause.push(eq(cases.status, String(status)));
    if (griefStage) whereClause.push(eq(cases.griefStage, String(griefStage)));
    if (severity) whereClause.push(gte(cases.severity, Number(severity)));

    const query = whereClause.length
      ? db.select().from(cases).where(and(...whereClause))
      : db.select().from(cases);

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
    const result = await db.select().from(cases).where(eq(cases.id, id));
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
    const inserted = await db.insert(cases).values(newCase).returning();
    res.status(201).json(inserted[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;