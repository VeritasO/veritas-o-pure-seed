import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';

interface AgentSignal {
  id: string;
  name: string;
  lastSignal: string;
  status: string;
}

export default function AgentSignalPanel() {
  const [signals, setSignals] = useState<AgentSignal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agents/status')
      .then(res => res.json())
      .then(data => {
        setSignals(data.signals || []);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-green-700">📡 Agent Signals</h3>
        {loading ? (
          <div className="text-gray-500">Loading signals...</div>
        ) : (
          <div className="space-y-2">
            {signals.map(signal => (
              <div key={signal.id} className={`p-2 rounded ${signal.status === 'active' ? 'bg-green-50' : 'bg-gray-100'}`}>
                {signal.name}: Signal received {signal.lastSignal} <span className={`ml-2 text-xs font-bold ${signal.status === 'active' ? 'text-green-700' : 'text-gray-500'}`}>{signal.status.toUpperCase()}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
