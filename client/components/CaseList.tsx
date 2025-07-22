import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';

interface Case {
  id: string;
  summary: string;
  status?: string;
}

export default function CaseList() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cases/featured')
      .then(res => res.json())
      .then(data => {
        setCases(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="text-gray-500">Loading cases...</div>
      ) : (
        cases.map(c => (
          <Card key={c.id} className="w-full">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-2">Case {c.id}</h3>
              <p className="mb-2 text-gray-700">{c.summary}</p>
              {c.status && <span className="px-2 py-1 rounded bg-purple-100 text-purple-800 text-xs font-medium">{c.status}</span>}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
