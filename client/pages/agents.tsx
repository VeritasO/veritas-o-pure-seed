import React from 'react';
import AgentGrid from '@/components/agents/AgentGrid';

export default function AgentsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">👥 Agent Council</h1>
      <p className="text-gray-600 mb-6">Monitor JUNO, LYRA, TEMPUS, and other agents' symbolic intelligence roles.</p>
      
      <AgentGrid />
    </div>
  );
}