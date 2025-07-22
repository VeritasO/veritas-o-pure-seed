import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RitualTemplate {
  id: string;
  title: string;
  symbol: string;
  category: 'closure' | 'healing' | 'restoration' | 'grief' | 'celebration';
  duration: string;
  description: string;
}

const mockRitualTemplates: RitualTemplate[] = [
  { id: 'R1', title: 'Echo Ceremony', symbol: '🔔', category: 'closure', duration: '30 min', description: 'SIREN-guided symbolic closure ritual' },
  { id: 'R2', title: 'Sanctuary Pause', symbol: '🌙', category: 'healing', duration: '15 min', description: 'SERENA-guided rest and emotional tuning' },
  { id: 'R3', title: 'Land Blessing', symbol: '🌿', category: 'restoration', duration: '45 min', description: 'THALEA-guided ecological healing ritual' },
  { id: 'R4', title: 'Joy Enactment', symbol: '☀️', category: 'celebration', duration: '25 min', description: 'SOLARA-guided joy-as-justice celebration' },
];

export default function SymbolicRitualScheduler() {
  const [selectedRitual, setSelectedRitual] = useState<RitualTemplate | null>(null);
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSchedule = () => {
    if (selectedRitual && scheduledDate) {
      console.log('Scheduling ritual:', { ritual: selectedRitual, date: scheduledDate });
      // TODO: Connect to API
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-amber-700">🔥 Schedule Symbolic Ritual</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">Select Ritual Template:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mockRitualTemplates.map((ritual) => (
                <div
                  key={ritual.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedRitual?.id === ritual.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-300 hover:border-amber-300'
                  }`}
                  onClick={() => setSelectedRitual(ritual)}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">{ritual.symbol}</span>
                    <span className="font-semibold">{ritual.title}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{ritual.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{ritual.description}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedRitual && (
            <div className="border-t pt-4">
              <h4 className="font-medium mb-3">Schedule Details:</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                  />
                </div>
                
                <Button onClick={handleSchedule} className="w-full">
                  Schedule {selectedRitual.title}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}