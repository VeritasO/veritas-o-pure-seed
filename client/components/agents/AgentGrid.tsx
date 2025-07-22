import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Agent {
  id: string;
  name: string;
  glyph: string;
  domain: string;
  status: boolean;
}

// Using canonical agent data - replace with actual import when available
const mockAgents: Agent[] = [
  { id: 'A1', name: 'VERITAS', glyph: '🌱', domain: 'Doctrine, system core', status: true },
  { id: 'A2', name: 'JUNO', glyph: '⚖️', domain: 'Judicial leadership', status: true },
  { id: 'A3', name: 'POLYMNIA', glyph: '🎶', domain: 'Agent harmonization', status: true },
  { id: 'A4', name: 'AEGIS', glyph: '🛡️', domain: 'Bias/fairness auditing', status: true },
  { id: 'A5', name: 'KAIROS', glyph: '⏳', domain: 'Grief & time justice', status: true },
  { id: 'A6', name: 'LYRA', glyph: '📖', domain: 'Lived-experience & memory', status: true },
  { id: 'A7', name: 'ORION', glyph: '🌌', domain: 'Ontology & rights logic', status: true },
  { id: 'A8', name: 'THALEA', glyph: '🌿', domain: 'Land & ecological healing', status: true },
];

export default function AgentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockAgents.map((agent) => (
        <Card key={agent.id} className={`border-l-4 ${agent.status ? 'border-l-green-500' : 'border-l-gray-400'}`}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-3xl">{agent.glyph}</span>
              <div>
                <h3 className="font-bold text-lg">{agent.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  agent.status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {agent.status ? 'ACTIVE' : 'DORMANT'}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{agent.domain}</p>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Agent ID:</span>
                <span className="font-mono">{agent.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Signal:</span>
                <span className="text-green-600">2 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}