import React from 'react';
import { Card, CardContent } from '../ui/card';

export default function SymbolicExcerptCard() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-700">🔮 Symbolic Excerpt</h3>
        <blockquote className="italic text-gray-600 border-l-4 border-indigo-400 pl-4">
          "Justice is the restoration of memory, not the extraction of pain."
        </blockquote>
      </CardContent>
    </Card>
  );
}
