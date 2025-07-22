import { NextApiRequest, NextApiResponse } from 'next';
import { generateSimulationData } from '../../lib/simulation/generateSimulationData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { parameters } = req.body;
    const simulation = await generateSimulationData(parameters);
    return res.status(200).json(simulation);
  } catch (error) {
    console.error('Simulation error:', error);
    return res.status(500).json({ error: 'Simulation failed' });
  }
}
