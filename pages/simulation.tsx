import React, { useState } from 'react';
import { Button } from '../client/components/ui/button';
import { Card, CardContent } from '../client/components/ui/card';
import { Textarea } from '../client/components/ui/textarea';
import { SymbolicRenderCard } from '../client/components/simulation/SymbolicRenderCard';
import { generateSimulation } from '../lib/api/simulation';

const EdgeCaseSimulator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = async () => {
    setLoading(true);
    const result = await generateSimulation(input);
    setOutput(result);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">⚖️ Edge Case Generator</h1>
      <Card className="mb-4">
        <CardContent className="space-y-4">
          <Textarea
            rows={5}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter your scenario or leave blank for a random simulation..."
          />
          <Button onClick={handleSimulate} disabled={loading}>
            {loading ? 'Processing...' : 'Run Simulation'}
          </Button>
        </CardContent>
      </Card>
      {output && <SymbolicRenderCard data={output} />}
    </div>
  );
};

export default EdgeCaseSimulator;
