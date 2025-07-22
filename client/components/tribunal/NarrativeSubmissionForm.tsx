import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NarrativeSubmission {
  title: string;
  description: string;
  griefLevel: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  participants: string[];
}

export default function NarrativeSubmissionForm() {
  const [submission, setSubmission] = useState<NarrativeSubmission>({
    title: '',
    description: '',
    griefLevel: 1,
    urgency: 'medium',
    participants: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting narrative:', submission);
    // TODO: Connect to API
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-700">📝 Submit Narrative Case</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Case Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={submission.title}
              onChange={(e) => setSubmission({ ...submission, title: e.target.value })}
              placeholder="Brief, clear case description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Narrative Description</label>
            <textarea
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={submission.description}
              onChange={(e) => setSubmission({ ...submission, description: e.target.value })}
              placeholder="Share your lived experience story for LYRA processing..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grief Level (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                className="w-full"
                value={submission.griefLevel}
                onChange={(e) => setSubmission({ ...submission, griefLevel: parseInt(e.target.value) })}
              />
              <span className="text-sm text-gray-500">Current: {submission.griefLevel}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={submission.urgency}
                onChange={(e) => setSubmission({ ...submission, urgency: e.target.value as any })}
              >
                <option value="low">Low - Reflective</option>
                <option value="medium">Medium - Processing</option>
                <option value="high">High - Active harm</option>
                <option value="critical">Critical - Immediate</option>
              </select>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit to LYRA for Narrative Mapping
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}