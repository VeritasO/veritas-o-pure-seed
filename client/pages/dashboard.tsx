import React from 'react';
import Layout from '../components/ui/Layout';
import HarmonyChart from '../components/dashboard/HarmonyChart';
import GriefMeter from '../components/dashboard/GriefMeter';
import AgentStatusPanel from '../components/dashboard/AgentStatusPanel';

export default function DashboardPage() {
  return (
    <Layout title="System Dashboard">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">🧭 System Dashboard</h1>
        <p className="text-gray-600 mb-6">Monitor harmony index, agent status, grief levels, and TEMPUS protocols.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HarmonyChart />
          <GriefMeter />
          <AgentStatusPanel />
        </div>
      </div>
    </Layout>
  );
}