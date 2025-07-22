import type { NextApiRequest, NextApiResponse } from 'next';

const featuredCases = [
  { id: 'C1', summary: 'Restorative justice for land dispute, grief index high.' },
  { id: 'C2', summary: 'Symbolic closure for ancestral harm, MIRRA flagged.' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(featuredCases);
}
