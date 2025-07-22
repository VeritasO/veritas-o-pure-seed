import type { NextApiRequest, NextApiResponse } from 'next';

const mirraFlags = [
  { id: 'F1', caseId: 'C2', flag: 'Contradiction: Restoration incomplete', agent: 'MIRRA', date: '2025-07-22' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mirraFlags);
}
