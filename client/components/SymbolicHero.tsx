import React from 'react';
import { Card, CardContent } from './ui/card';

export default function SymbolicHero() {
  return (
    <Card className="w-full bg-gradient-to-r from-blue-50 to-green-50">
      <CardContent className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">🌱 Veritas Portal</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Justice, restoration, and symbolic harmony. Powered by agentic intelligence and grief-aware logic.
        </p>
        <div className="text-sm text-blue-700">TEMPUS: {new Date().toLocaleString()} | Harmony Index: 0.988</div>
      </CardContent>
    </Card>
  );
}
