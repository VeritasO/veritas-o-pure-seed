import express from 'express';
import { db } from '../db';
import { tribunalSessions, tribunalDialogues, tribunalVotes } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

// Get all tribunal sessions or filter by caseId
router.get('/', async (req, res) => {
  try {
    const { caseId } = req.query;
    let sessions;
    if (caseId) {
      sessions = await db.select().from(tribunalSessions).where(eq(tribunalSessions.caseId, String(caseId)));
    } else {
      sessions = await db.select().from(tribunalSessions);
    }
    res.json(sessions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Get tribunal session details including dialogues and votes
router.get('/:id', async (req, res) => {
  try {
    const sessionId = req.params.id;

    const [session] = await db.select().from(tribunalSessions).where(eq(tribunalSessions.id, sessionId));
    if (!session) return res.status(404).json({ error: 'Tribunal session not found' });

    const dialogues = await db.select().from(tribunalDialogues).where(eq(tribunalDialogues.sessionId, sessionId));
    const votes = await db.select().from(tribunalVotes).where(eq(tribunalVotes.sessionId, sessionId));

    res.json({
      session,
      dialogues,
      votes,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Post new dialogue entry
router.post('/:id/dialogue', async (req, res) => {
  try {
    const sessionId = req.params.id;
    const { speaker, message, timestamp } = req.body;

    const inserted = await db.insert(tribunalDialogues).values({
      sessionId,
      speaker,
      message,
      timestamp: timestamp || new Date().toISOString(),
    }).returning();

    res.status(201).json(inserted[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Post new vote
router.post('/:id/vote', async (req, res) => {
  try {
    const sessionId = req.params.id;
    const { voterId, vote, rationale } = req.body;

    const inserted = await db.insert(tribunalVotes).values({
      sessionId,
      agentId: voterId,
      vote,
      timestamp: new Date(),
    }).returning();

    res.status(201).json(inserted[0]);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;