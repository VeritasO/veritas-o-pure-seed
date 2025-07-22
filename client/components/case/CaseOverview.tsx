import React from 'react';
import { Card, CardContent } from '../ui/card';

export default function CaseOverview() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-700">🔍 Case Overview</h3>
        <div className="space-y-2">
          <div className="p-2 bg-indigo-50 rounded">Case #001: Restoration</div>
          <div className="p-2 bg-indigo-50 rounded">Case #002: Pending</div>
        </div>
      </CardContent>
    </Card>
  );
}
