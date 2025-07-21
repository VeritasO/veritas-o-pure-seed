// Create: src/pages/tribunal.tsx
'use client';

import React from 'react';
import { NarrativeEntryForm } from '@/components/narrative/NarrativeEntryForm';
import { AgentSignalPanel } from '@/components/agents/AgentSignalPanel';
import { TempusClock } from '@/components/time/TempusClock';
import { useGlobalState } from '@/state/useGlobalState';

export default function TribunalPage() {
  const { griefLevel, harmonyIndex, systemStatus } = useGlobalState();

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">⚖️ Veritas Tribunal Room</h1>
          <p className="text-gray-300 text-lg">Sacred space for truth processing and symbolic justice</p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">System Status:</span>
              <span className={`font-medium ${
                systemStatus === 'active' ? 'text-green-400' : 
                systemStatus === 'ritual_pause' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {systemStatus.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Harmony Index:</span>
              <span className="text-blue-300 font-medium">{harmonyIndex.toFixed(3)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Current Grief Level:</span>
              <span className={`font-medium ${
                griefLevel < 4 ? 'text-green-400' : 
                griefLevel < 7 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {griefLevel}/10
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Narrative Entry */}
          <div className="space-y-6">
            <NarrativeEntryForm />
            
            {griefLevel >= 7 && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">⚠️ High Grief Alert</h3>
                <p className="text-red-200 text-sm">
                  Sanctuary Pause protocol available. TEMPUS time dilation activated.
                  Consider activating supportive rituals.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - System Panels */}
          <div className="space-y-6">
            <TempusClock />
            <AgentSignalPanel />
          </div>
        </div>

        {/* Bottom Section - Quick Actions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-3 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:bg-purple-600/30 transition-colors">
              <div className="text-lg mb-1">📚</div>
              <div className="text-sm">View Books</div>
            </button>
            <button className="p-3 bg-orange-600/20 border border-orange-500/30 rounded-lg hover:bg-orange-600/30 transition-colors">
              <div className="text-lg mb-1">🔥</div>
              <div className="text-sm">Start Ritual</div>
            </button>
            <button className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors">
              <div className="text-lg mb-1">📊</div>
              <div className="text-sm">View Dashboard</div>
            </button>
            <button className="p-3 bg-green-600/20 border border-green-500/30 rounded-lg hover:bg-green-600/30 transition-colors">
              <div className="text-lg mb-1">📤</div>
              <div className="text-sm">Export Data</div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}