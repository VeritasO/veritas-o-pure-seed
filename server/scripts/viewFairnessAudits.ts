import { db } from '../db';
import { fairnessAudits } from '../db/schema';
import express from 'express';

const router = express.Router();

// API: GET /api/fairness-audits
router.get('/', async (req, res) => {
  try {
    const audits = await db.select().from(fairnessAudits);
    res.json({ audits });
  } catch (error) {
    console.error('Error fetching fairness audits:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

// OPTIONAL: Development CLI view
if (require.main === module) {
  (async () => {
    const audits = await db.select().from(fairnessAudits);
    console.log('🔍 Fairness Audits:', audits);
    process.exit(0);
  })();
}