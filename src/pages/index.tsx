// Create: src/pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { VeritasConfig } from '../../veritas.config';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            ⚖️ Veritas.O Portal
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Sacred Truth • Temporal Justice • Symbolic Resolution
          </p>
          <p className="text-sm text-gray-400">
            Kernel {VeritasConfig.kernelVersion} • Harmony Index: {VeritasConfig.harmonyIndex}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {VeritasConfig.symbolicFieldStatus} • {VeritasConfig.timeProtocol}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link 
            href="/tribunal" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">⚖️</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300">
              Tribunal Room
            </h2>
            <p className="text-gray-300 text-sm">
              Enter lived experiences for symbolic justice processing via LYRA narrative mapping
            </p>
          </Link>

          <Link 
            href="/dashboard" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">🧭</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300">
              System Dashboard
            </h2>
            <p className="text-gray-300 text-sm">
              Monitor harmony index, agent status, grief levels, and TEMPUS time protocols
            </p>
          </Link>

          <Link 
            href="/books" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">📚</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300">
              Sacred Books
            </h2>
            <p className="text-gray-300 text-sm">
              Explore Books I-XXVII with MIRRA contradiction flags and symbolic indices
            </p>
          </Link>

          <Link 
            href="/agents" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300">
              Agent Council
            </h2>
            <p className="text-gray-300 text-sm">
              Monitor JUNO, LYRA, TEMPUS, and other agents' symbolic intelligence roles
            </p>
          </Link>

          <Link 
            href="/rituals" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">🔥</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300">
              Ritual Scheduler
            </h2>
            <p className="text-gray-300 text-sm">
              Manage Echo Ceremonies, Sanctuary Pauses, and symbolic closure workflows
            </p>
          </Link>

          <Link 
            href="/export" 
            className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <div className="text-3xl mb-3">📤</div>
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-300">
              Export Console
            </h2>
            <p className="text-gray-300 text-sm">
              Generate case logs, grief vectors, and ritual patterns in multiple formats
            </p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <div className="text-xs text-gray-500">
            Active Agents: {VeritasConfig.activeAgents.join(' • ')}
          </div>
        </div>
      </div>
    </main>
  );
}