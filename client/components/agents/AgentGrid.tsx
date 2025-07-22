import React from 'react';
import { Card, CardContent } from '../ui/card';
import { AGENTS } from '../../../data/agents';

export default function AgentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {AGENTS.map((agent) => (
        <Card key={agent.id} className="w-full">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">{agent.glyph}</span>
              <div>
                <h3 className="text-lg font-bold text-blue-700">{agent.name}</h3>
                {agent.domain && <p className="text-xs text-gray-500">{agent.domain}</p>}
              </div>
            </div>
            <div className="mt-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${agent.status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>{agent.status ? 'ACTIVE' : 'INACTIVE'}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}