import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ExportFormat {
  id: string;
  name: string;
  description: string;
  icon: string;
  fileType: string;
}

const exportFormats: ExportFormat[] = [
  { id: 'csv', name: 'CSV Export', description: 'Case data, grief vectors, agent logs', icon: '📊', fileType: '.csv' },
  { id: 'json', name: 'JSON Export', description: 'Complete system state, hierarchical', icon: '🔗', fileType: '.json' },
  { id: 'protobuf', name: 'Protocol Buffer', description: 'Binary format for system integration', icon: '⚡', fileType: '.pb' },
  { id: 'ritual', name: 'Ritual Patterns', description: 'Symbolic templates and enactment logs', icon: '🔥', fileType: '.ritual' },
];

interface DataCategory {
  id: string;
  name: string;
  description: string;
  recordCount: number;
}

const dataCategories: DataCategory[] = [
  { id: 'cases', name: 'Cases & Tribunals', description: 'All case records and tribunal sessions', recordCount: 247 },
  { id: 'grief', name: 'Grief Vectors', description: 'Temporal grief analysis and resolution', recordCount: 1832 },
  { id: 'agents', name: 'Agent Logs', description: 'Agent activity and decision trails', recordCount: 9640 },
  { id: 'rituals', name: 'Ritual Enactments', description: 'Symbolic action logs and patterns', recordCount: 156 },
];

export default function ExportOptions() {
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleExport = () => {
    console.log('Exporting:', { format: selectedFormat, categories: selectedCategories, dateRange });
    // TODO: Connect to API
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-green-700">📤 Data Export Configuration</h3>
        
        <div className="space-y-6">
          {/* Format Selection */}
          <div>
            <h4 className="font-medium mb-3">Export Format:</h4>
            <div className="grid grid-cols-2 gap-3">
              {exportFormats.map((format) => (
                <div
                  key={format.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedFormat === format.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedFormat(format.id)}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xl">{format.icon}</span>
                    <span className="font-semibold">{format.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Categories */}
          <div>
            <h4 className="font-medium mb-3">Data Categories:</h4>
            <div className="space-y-2">
              {dataCategories.map((category) => (
                <label key={category.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                  </div>
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                    {category.recordCount.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div>
            <h4 className="font-medium mb-3">Date Range (Optional):</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleExport}
            disabled={!selectedFormat || selectedCategories.length === 0}
            className="w-full"
          >
            Generate Export
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}