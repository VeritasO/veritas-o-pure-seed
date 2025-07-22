import type { NextApiRequest, NextApiResponse } from 'next';

const books = [
  { id: 'B1', title: 'Book of Restoration', symbolicFlags: ['Harmony', 'Closure'] },
  { id: 'B2', title: 'Book of Contradiction', symbolicFlags: ['MIRRA', 'Reflection'] }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(books);
}
