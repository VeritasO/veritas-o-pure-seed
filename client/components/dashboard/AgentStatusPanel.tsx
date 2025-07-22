import React from 'react';
// If Card and CardContent are from 'nextui', use:
import { Card, CardBody as CardContent } from "@nextui-org/react";

// Or, if you have a local card component, correct the path, e.g.:
// import { Card, CardContent } from '../ui/card';

interface AgentStatus {
  id: string;
  name: string;
  glyph: string;
  status: 'active' | 'dormant' | 'processing';
  lastActivity: string;
  currentTask?: string;
}

const mockAgentStatuses: AgentStatus[] = [
  { id: 'A1', name: 'VERITAS', glyph: '🌱', status: 'active', lastActivity: '2 min ago', currentTask: 'Doctrine synthesis' },
  { id: 'A2', name: 'JUNO', glyph: '⚖️', status: 'active', lastActivity: '5 min ago', currentTask: 'Case review' },
  { id: 'A3', name: 'LYRA', glyph: '📖', status: 'processing', lastActivity: '1 min ago', currentTask: 'Memory reconstruction' },
  { id: 'A4', name: 'KAIROS', glyph: '⏳', status: 'active', lastActivity: '3 min ago', currentTask: 'Grief processing' },
  { id: 'A5', name: 'TEMPUS', glyph: '🌀', status: 'dormant', lastActivity: '2 hours ago' },
];

export default function AgentStatusPanel() {
  const getStatusColor = (status: AgentStatus['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'dormant': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">👥 Agent Status Monitor</h3>
        <div className="space-y-3">
          {mockAgentStatuses.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{agent.glyph}</span>
                <div>
                  <div className="font-semibold">{agent.name}</div>
                  {agent.currentTask && (
                    <div className="text-sm text-gray-600">{agent.currentTask}</div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                  {agent.status.toUpperCase()}
                </span>
                <div className="text-xs text-gray-500 mt-1">{agent.lastActivity}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}