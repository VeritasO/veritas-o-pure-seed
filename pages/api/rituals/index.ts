import type { NextApiRequest, NextApiResponse } from 'next';

const rituals = [
  { id: 'R1', title: 'Echo Ceremony', agent: 'SIREN', status: 'scheduled', date: '2025-07-23' },
  { id: 'R2', title: 'Sanctuary Pause', agent: 'SERENA', status: 'completed', date: '2025-07-21' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(rituals);
}
