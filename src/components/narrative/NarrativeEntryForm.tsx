// Create: src/components/narrative/NarrativeEntryForm.tsx
'use client';

import React, { useState } from 'react';
import { useGlobalState } from '@/state/useGlobalState';
import { lyra } from '../../agents/lyra';

export function NarrativeEntryForm() {
  const [narrative, setNarrative] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResult, setLastResult] = useState<any>(null);
  
  const { addGriefVector, setGriefLevel } = useGlobalState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!narrative.trim()) return;
    
    setIsProcessing(true);
    
    try {
      // Process with LYRA
      const result = lyra.processNarrative(narrative);
      
      // Update global state
      addGriefVector(result.griefVector);
      setGriefLevel(result.griefVector.level);
      
      setLastResult(result);
      setNarrative('');
    } catch (error) {
      console.error('Error processing narrative:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold mb-4 text-white">📝 Narrative Entry (LYRA)</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={narrative}
          onChange={(e) => setNarrative(e.target.value)}
          className="w-full h-32 bg-slate-800 text-white p-4 rounded-lg border border-slate-600 resize-none"
          placeholder="Share your lived experience here... LYRA will process it for truth weight and emotional mapping."
          disabled={isProcessing}
        />
        
        <button
          type="submit"
          disabled={isProcessing || !narrative.trim()}
          className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium"
        >
          {isProcessing ? 'Processing with LYRA...' : 'Submit to LYRA'}
        </button>
      </form>
      
      {lastResult && (
        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">LYRA Analysis:</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-300">Emotions detected:</span>
              <span className="ml-2 text-blue-300">{lastResult.emotions.join(', ') || 'None'}</span>
            </div>
            <div>
              <span className="text-gray-300">Truth weight:</span>
              <span className="ml-2 text-green-300">{(lastResult.truthWeight * 100).toFixed(1)}%</span>
            </div>
            <div>
              <span className="text-gray-300">Grief level:</span>
              <span className="ml-2 text-red-300">{lastResult.griefVector.level}/10</span>
            </div>
            {lastResult.suggestions.length > 0 && (
              <div>
                <span className="text-gray-300">Suggestions:</span>
                <ul className="ml-4 mt-1 text-yellow-300">
                  {lastResult.suggestions.map((suggestion: string, index: number) => (
                    <li key={index} className="text-xs">• {suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}