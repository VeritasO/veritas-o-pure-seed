import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GriefMetrics {
  currentLevel: number;
  averageLevel: number;
  peakLevel: number;
  resolution: number;
}

const mockGriefMetrics: GriefMetrics = {
  currentLevel: 1.8,
  averageLevel: 2.2,
  peakLevel: 4.1,
  resolution: 0.73,
};

export default function GriefMeter() {
  const { currentLevel, averageLevel, peakLevel, resolution } = mockGriefMetrics;
  
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">⏳ Grief Vector Analysis</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Current Level</span>
            <span className="text-xl font-bold text-purple-600">{currentLevel}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentLevel / 10) * 100}%` }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700">{averageLevel}</div>
              <div className="text-sm text-gray-500">24h Average</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-red-600">{peakLevel}</div>
              <div className="text-sm text-gray-500">Peak Level</div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-50 rounded-md">
            <div className="text-sm font-medium text-green-800">Resolution Rate: {(resolution * 100).toFixed(1)}%</div>
            <div className="text-xs text-green-600 mt-1">KAIROS temporal healing active</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}