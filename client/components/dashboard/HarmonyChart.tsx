import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface HarmonyData {
  timestamp: string;
  harmonyIndex: number;
  griefLevel: number;
  systemStability: number;
}

const mockHarmonyData: HarmonyData[] = [
  { timestamp: '2025-07-21T08:00:00Z', harmonyIndex: 0.987, griefLevel: 2.1, systemStability: 0.992 },
  { timestamp: '2025-07-21T12:00:00Z', harmonyIndex: 0.988, griefLevel: 1.8, systemStability: 0.995 },
  { timestamp: '2025-07-21T16:00:00Z', harmonyIndex: 0.991, griefLevel: 1.5, systemStability: 0.997 },
];

export default function HarmonyChart() {
  const latestHarmony = mockHarmonyData[mockHarmonyData.length - 1];

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-700">🌱 Harmony Index Monitor</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{latestHarmony.harmonyIndex}</div>
            <div className="text-sm text-gray-500">Harmony Index</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">{latestHarmony.griefLevel}</div>
            <div className="text-sm text-gray-500">Grief Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{latestHarmony.systemStability}</div>
            <div className="text-sm text-gray-500">System Stability</div>
          </div>
        </div>
        <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-md flex items-center justify-center">
          <span className="text-gray-600">📊 Harmony Timeline Chart (Mock)</span>
        </div>
      </CardContent>
    </Card>
  );
}