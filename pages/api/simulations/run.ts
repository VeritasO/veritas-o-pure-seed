import type { NextApiRequest, NextApiResponse } from 'next';

interface SimulationInput {
  scenarioType: 'random' | 'parameterized';
  griefPhase?: string;
  timeLagMonths?: number;
  involvedAgents?: string[];
  narrativePrompt?: string;
}

interface Verdict {
  text: string;
  options: string[];
}

interface AgentEvaluation {
  agent: string;
  summary: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const input: SimulationInput = req.body;
    if (!input.scenarioType) {
      return res.status(400).json({ error: 'Missing scenarioType in input' });
    }
    const verdict = generateVerdict(input);
    const agentEvaluations = evaluateAgents(input);
    return res.status(200).json({ verdict, agentEvaluations });
  } catch (error) {
    console.error('Simulation run error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

function generateVerdict(input: SimulationInput): Verdict {
  if (input.scenarioType === 'random') {
    return {
      text:
        'Random simulation verdict: Restoration prioritized with community healing ritual recommended.',
      options: [
        'Option 1: Schedule symbolic restoration ceremony with VESTA.',
        'Option 2: Initiate grief integration protocol via KAIROS.',
        'Option 3: Audit fairness factors with AEGIS and adjust reconciliation.',
      ] as string[],
    };
  } else if (input.scenarioType === 'parameterized') {
    const grief = input.griefPhase || 'neutral';
    const lag = input.timeLagMonths || 0;
    let text = `Parameterized simulation verdict:\nGrief Phase: ${grief}\nTime Lag: ${lag} months.\n`;
    let options: string[] = [];
    if (grief === 'peak' && lag < 3) {
      text +=
        'High grief intensity with recent incident: Recommend immediate restorative intervention.';
      options = [
        'Immediate symbolic ritual with VESTA.',
        'Grief counseling and temporal mediation via KAIROS.',
        'Fairness audit and bias mitigation by AEGIS.',
      ];
    } else if (grief === 'fading' || lag >= 6) {
      text +=
        'Grief decreasing or elapsed time significant: Focus on long-term community restoration.';
      options = [
        'Ecological healing protocols with THALEA.',
        'Narrative truth gathering led by LYRA.',
        'Monitoring with TEMPUS temporal audits.',
      ];
    } else {
      text +=
        'Moderate grief and timing: Balance immediate and sustained restorative measures.';
      options = [
        'Symbolic rites by VESTA combined with ongoing support by HALCYON.',
        'Agent collaboration to tailor phased restoration.',
        'Record and monitor with MIRRA identity coherence.',
      ];
    }
    return { text, options };
  }
  return {
    text: 'Default simulation verdict: Further input required for precise judgment.',
    options: ['Gather additional data.', 'Consult JUNO for doctrinal review.'] as string[],
  };
}

function evaluateAgents(input: SimulationInput): AgentEvaluation[] {
  const involved = input.involvedAgents || ['JUNO', 'LYRA', 'KAIROS', 'AEGIS'];
  const evaluations = involved.map((agent) => {
    switch (agent) {
      case 'JUNO':
        return {
          agent,
          summary: 'Coordinates tribunal logic and final judgment synthesis.',
        };
      case 'LYRA':
        return {
          agent,
          summary: 'Maps lived-experience narratives to assess truth coherence.',
        };
      case 'KAIROS':
        return {
          agent,
          summary: 'Analyzes grief phases and temporal justice parameters.',
        };
      case 'AEGIS':
        return {
          agent,
          summary: 'Conducts bias and fairness audits to ensure equity.',
        };
      case 'VESTA':
        return {
          agent,
          summary: 'Designs symbolic rituals for structural transformation.',
        };
      case 'THALEA':
        return {
          agent,
          summary: 'Implements land-based healing and ecological restoration.',
        };
      case 'TEMPUS':
        return {
          agent,
          summary: 'Manages time protocols, rewind states, and audit logs.',
        };
      default:
        return {
          agent,
          summary: 'Participates in collaborative justice processes.',
        };
    }
  });
  return evaluations;
}
