import React from 'react';
import { Card, CardContent } from '../ui/card';

export default function RitualHistoryList() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">🕯️ Ritual History</h3>
        <div className="space-y-2">
          <div className="p-2 bg-purple-50 rounded">Echo Ceremony: 2025-07-19</div>
          <div className="p-2 bg-purple-50 rounded">Sanctuary Pause: 2025-07-18</div>
        </div>
      </CardContent>
    </Card>
  );
}
