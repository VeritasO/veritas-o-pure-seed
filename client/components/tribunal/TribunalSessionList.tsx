import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TribunalSession {
  id: string;
  caseId: string;
  title: string;
  status: 'active' | 'pending' | 'resolved' | 'archived';
  initiatedBy: string;
  participants: string[];
  openedAt: string;
  closedAt?: string;
}

const mockSessions: TribunalSession[] = [
  {
    id: 'session_001',
    caseId: 'case_001',
    title: 'Symbolic Enactment Dispute',
    status: 'resolved',
    initiatedBy: 'JUNO',
    participants: ['LYRA', 'KAIROS', 'AEGIS'],
    openedAt: '2025-07-19T15:00:00Z',
    closedAt: '2025-07-19T17:30:00Z',
  },
  {
    id: 'session_002',
    caseId: 'case_002',
    title: 'Land Memory Restoration',
    status: 'active',
    initiatedBy: 'THALEA',
    participants: ['ORION', 'KAIROS', 'VESTA'],
    openedAt: '2025-07-21T09:00:00Z',
  },
];

export default function TribunalSessionList() {
  const getStatusColor = (status: TribunalSession['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'resolved': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'archived': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">🏛️ Active Tribunal Sessions</h3>
        <div className="space-y-3">
          {mockSessions.map((session) => (
            <div key={session.id} className={`p-4 border rounded-lg ${getStatusColor(session.status)}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{session.title}</h4>
                  <p className="text-sm opacity-75">Initiated by {session.initiatedBy}</p>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-50">
                  {session.status.toUpperCase()}
                </span>
              </div>
              
              <div className="text-sm mb-3">
                <strong>Participants:</strong> {session.participants.join(', ')}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">
                  Started: {new Date(session.openedAt).toLocaleString()}
                </span>
                <Button size="sm" asChild>
                  <Link href={`/case/${session.caseId}`}>View Case</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}