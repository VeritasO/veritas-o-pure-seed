import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';

interface MIRRAFlag {
  id: string;
  caseId: string;
  flag: string;
  agent: string;
  date: string;
}

export default function MIRRAFlagViewer() {
  const [flags, setFlags] = useState<MIRRAFlag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/books/mirra-flags')
      .then(res => res.json())
      .then(data => {
        setFlags(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-red-700">MIRRA Contradiction Flags</h3>
        {loading ? (
          <div className="text-gray-500">Loading flags...</div>
        ) : (
          <div className="space-y-2">
            {flags.map(flag => (
              <div key={flag.id} className="p-2 bg-red-50 rounded">
                <strong>{flag.agent}</strong> flagged <strong>Case {flag.caseId}</strong>: {flag.flag} <span className="ml-2 text-xs text-gray-500">{flag.date}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
