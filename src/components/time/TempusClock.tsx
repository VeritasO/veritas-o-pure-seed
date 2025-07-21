// Create: src/components/time/TempusClock.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useGlobalState } from '@/state/useGlobalState';
import { calculateTSI, formatTempusTime } from '@/utils/time';

export function TempusClock() {
  const { griefLevel, tempusState, updateTempusState } = useGlobalState();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const tsi = calculateTSI(griefLevel);
      const griefMultiplier = griefLevel >= 7 ? 0.5 : griefLevel >= 4 ? 0.7 : 1.0;
      
      updateTempusState({
        tsi,
        griefMultiplier,
        currentMode: griefLevel >= 7 ? 'grief' : 'linear'
      });
      
      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, [griefLevel, updateTempusState]);

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold mb-4 text-white">⏰ TEMPUS Protocol</h2>
      
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-mono text-blue-300 mb-2">
              {formatTempusTime(currentTime, tempusState)}
            </div>
            <div className="text-sm text-gray-400">
              Mode: {tempusState.currentMode.toUpperCase()}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/30 p-3 rounded">
            <div className="text-gray-300">TSI (Time Sovereignty Index)</div>
            <div className={`font-bold ${
              tempusState.tsi > 0.8 ? 'text-green-400' : 
              tempusState.tsi > 0.5 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {tempusState.tsi.toFixed(3)}
            </div>
          </div>
          
          <div className="bg-slate-800/30 p-3 rounded">
            <div className="text-gray-300">Grief Level</div>
            <div className={`font-bold ${
              griefLevel < 4 ? 'text-green-400' : 
              griefLevel < 7 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {griefLevel}/10
            </div>
          </div>
        </div>
        
        {tempusState.currentMode === 'grief' && (
          <div className="bg-amber-900/30 border border-amber-700/50 p-3 rounded-lg">
            <div className="text-amber-300 text-sm font-medium">
              ⚠️ Grief Time Dilation Active
            </div>
            <div className="text-amber-200 text-xs mt-1">
              Time flowing at {(tempusState.griefMultiplier * 100).toFixed(0)}% normal rate
            </div>
          </div>
        )}
      </div>
    </section>
  );
}