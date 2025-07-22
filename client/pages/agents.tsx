import React from 'react';
import Layout from '../components/ui/Layout';
import AgentGrid from '../components/agents/AgentGrid';
import AgentMissionCard from '../components/agents/AgentMissionCard';
import AgentSignalPanel from '../components/agents/AgentSignalPanel';

export default function AgentsPage() {
  return (
    <Layout title="Agent Council">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">👥 Agent Council</h1>
        <p className="text-gray-600 mb-6">Monitor JUNO, LYRA, TEMPUS, and other agents' symbolic intelligence roles.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AgentGrid />
          <AgentMissionCard />
          <AgentSignalPanel />
        </div>
      </div>
    </Layout>
  );
}