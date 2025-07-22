import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { RITUALS } from '../../../data/rituals';

const griefTierIcons = {
  low: '🌾',
  medium: '🕯️',
  high: '🌑',
};

const griefTierLabels = {
  low: 'Low Grief',
  medium: 'Medium Grief',
  high: 'High Grief',
};

const griefTierColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-gray-100 text-gray-600',
};

const agentIcons = {
  SIREN: '🦢',
  SERENA: '🧘',
  THALEA: '🌿',
  SOLARA: '☀️',
};

const bookReferences = {
  closure: 'Book V',
  healing: 'Book VII',
  restoration: 'Book VI',
  grief: 'Book IX',
  celebration: 'Book X',
};

interface RitualTemplate {
  id: string;
  title: string;
  symbol: string;
  category: 'closure' | 'healing' | 'restoration' | 'grief' | 'celebration';
  duration: string;
  description: string;
  agent: 'SIREN' | 'SERENA' | 'THALEA' | 'SOLARA';
}

const mockRitualTemplates: RitualTemplate[] = [
  { id: 'R1', title: 'Echo Ceremony', symbol: '🔔', category: 'closure', duration: '30 min', description: 'SIREN-guided symbolic closure ritual', agent: 'SIREN' },
  { id: 'R2', title: 'Sanctuary Pause', symbol: '🌙', category: 'healing', duration: '15 min', description: 'SERENA-guided rest and emotional tuning', agent: 'SERENA' },
  { id: 'R3', title: 'Land Blessing', symbol: '🌿', category: 'restoration', duration: '45 min', description: 'THALEA-guided ecological healing ritual', agent: 'THALEA' },
  { id: 'R4', title: 'Joy Enactment', symbol: '☀️', category: 'celebration', duration: '25 min', description: 'SOLARA-guided joy-as-justice celebration', agent: 'SOLARA' },
];

interface Ritual {
  id: string;
  title: string;
  agent: string;
  status: string;
  date: string;
}

function SymbolicRitualSchedulerComponent() {
  const [selectedRitual, setSelectedRitual] = useState<RitualTemplate | null>(null);
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledRitual, setScheduledRitual] = useState<any>(null);
  const [exported, setExported] = useState(false);
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rituals/index')
      .then(res => res.json())
      .then(data => {
        setRituals(data || []);
        setLoading(false);
      });
  }, []);

  const handleSchedule = () => {
    if (selectedRitual && scheduledDate) {
      const ritualData = {
        ...selectedRitual,
        scheduledDate,
        bookReference: bookReferences[selectedRitual.category],
        agentIcon: agentIcons[selectedRitual.agent],
      };
      setScheduledRitual(ritualData);
      setExported(false);
      // TODO: Connect to API/save to /cases as simulation
    }
  };

  const handleExport = () => {
    setExported(true);
    // TODO: Implement PDF/MD export logic
  };

  return (
    <div className="space-y-8">
      {loading ? (
        <div className="text-gray-500">Loading rituals...</div>
      ) : (
        rituals.map(ritual => (
          <Card key={ritual.id} className="w-full">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-orange-700 mb-2">{ritual.title}</h3>
              <div className="mb-2 text-gray-700">Agent: {ritual.agent}</div>
              <div className="mb-2 text-gray-700">Date: {ritual.date}</div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${ritual.status === 'scheduled' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-600'}`}>{ritual.status.toUpperCase()}</span>
            </CardContent>
          </Card>
        ))
      )}

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
                      <span className="ml-2 text-xl" title={ritual.agent}>{agentIcons[ritual.agent]}</span>
                      <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-200 text-gray-700">{bookReferences[ritual.category]}</span>
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

      {scheduledRitual && (
        <Card className="w-full mt-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-2xl ${griefTierColors['low']}`}>{selectedRitual?.symbol}</span>
              <span className="text-lg font-bold">{scheduledRitual.title}</span>
              <span className="ml-2 text-xl" title={scheduledRitual.agent}>{scheduledRitual.agentIcon}</span>
              <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-200 text-gray-700">{scheduledRitual.bookReference}</span>
            </div>
            <div className="mb-2 text-sm text-gray-600">{scheduledRitual.description}</div>
            <div className="mb-2 text-xs text-gray-500">Scheduled for: {scheduledRitual.scheduledDate}</div>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleExport} className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Export Ritual Card</Button>
              <Button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">Save Ritual</Button>
            </div>
            {exported && <div className="mt-2 text-xs text-green-600">Ritual card exported!</div>}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default SymbolicRitualSchedulerComponent;
export { SymbolicRitualSchedulerComponent as SymbolicRitualScheduler };