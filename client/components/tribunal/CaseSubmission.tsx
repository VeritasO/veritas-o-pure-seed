import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export default function CaseSubmission() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-700">📂 Submit Case</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Case Title</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" placeholder="Case title..." />
          </div>
          <Button type="submit" className="w-full">Submit Case</Button>
        </form>
      </CardContent>
    </Card>
  );
}
