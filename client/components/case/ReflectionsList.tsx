import React from 'react';
import { Card, CardContent } from '../ui/card';

export default function ReflectionsList() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">💭 Reflections</h3>
        <div className="space-y-2">
          <div className="p-2 bg-purple-50 rounded">Reflection #1: "Restoration achieved."</div>
          <div className="p-2 bg-purple-50 rounded">Reflection #2: "Pending review."</div>
        </div>
      </CardContent>
    </Card>
  );
}
