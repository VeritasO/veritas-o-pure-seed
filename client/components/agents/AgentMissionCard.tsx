import React from 'react';
import { Card, CardContent } from '../ui/card';

export default function AgentMissionCard() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">🧭 Agent Mission</h3>
        <div className="space-y-2">
          <div className="p-2 bg-blue-50 rounded">JUNO: Orchestrate justice harmony</div>
          <div className="p-2 bg-blue-50 rounded">LYRA: Integrate lived narratives</div>
        </div>
      </CardContent>
    </Card>
  );
}
