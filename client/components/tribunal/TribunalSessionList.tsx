import React from 'react';
import { Card, CardContent } from '../ui/card';
import { SESSIONS } from '../../../data/cases';

export default function TribunalSessionList() {
  return (
    <div className="space-y-8">
      {SESSIONS.map((session) => (
        <Card key={session.id} className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-bold text-indigo-700">Session {session.id}</h3>
                <p className="text-xs text-gray-500">Status: {session.status}</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{session.verdict || 'Pending'}</span>
            </div>
            <div className="mb-2">
              <h4 className="font-semibold text-gray-800 mb-2">Participants</h4>
              <div className="flex flex-wrap gap-2">
                {session.participants.map((p) => (
                  <span key={p} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-800 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}