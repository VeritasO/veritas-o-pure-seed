// Create: src/components/agents/AgentSignalPanel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { VeritasConfig } from '@/veritas.config';
import { juno } from '@/agents/juno';
import { lyra } from '@/agents/lyra';

export function AgentSignalPanel() {
  const [agentStatuses, setAgentStatuses] = useState<any[]>([]);

  useEffect(() => {
    // Mock agent status updates
    const updateStatuses = () => {
      const statuses = VeritasConfig.activeAgents.map(agentName => {
        const config = VeritasConfig.agentMap[agentName as keyof typeof VeritasConfig.agentMap];
        return {
          name: agentName,
          ...config,
          active: true,
          lastUpdate: new Date(),
          signalStrength: Math.random() * 0.3 + 0.7 // 70-100%
        };
      });
      setAgentStatuses(statuses);
    };

    updateStatuses();
    const interval = setInterval(updateStatuses, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold mb-4 text-white">🧠 Agent Signal Panel</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {agentStatuses.map((agent) => (
          <div
            key={agent.name}
            className="bg-slate-800/50 p-3 rounded-lg border border-slate-600"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-white">{agent.name}</span>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    agent.active ? 'bg-green-400' : 'bg-red-400'
                  }`}
                />
                <span className="text-xs text-gray-300">
                  {(agent.signalStrength * 100).toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              {agent.id} • {agent.role}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-slate-800/30 rounded-lg">
        <div className="text-sm text-gray-300">
          <span className="font-medium">System Status:</span>
          <span className="ml-2 text-green-300">All agents operational</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Last sync: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </section>
  );
}