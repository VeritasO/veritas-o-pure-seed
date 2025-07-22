import type { NextApiRequest, NextApiResponse } from 'next';

const agents = [
  { id: 'JUNO', name: 'JUNO', status: 'active', lastSignal: '2m ago' },
  { id: 'LYRA', name: 'LYRA', status: 'active', lastSignal: '1m ago' },
  { id: 'MIRRA', name: 'MIRRA', status: 'inactive', lastSignal: '10m ago' },
  { id: 'TEMPUS', name: 'TEMPUS', status: 'active', lastSignal: 'now' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    activeAgents: agents.filter(a => a.status === 'active').map(a => a.name),
    griefLoops: 2,
    signals: agents.map(a => ({ id: a.id, name: a.name, lastSignal: a.lastSignal, status: a.status }))
  });
}
