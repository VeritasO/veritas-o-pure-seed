import React, { useEffect, useState } from 'react';

interface Audit {
  tribunalId: string;
  voiceScore: number;
  neutralityScore: number;
  comments?: string;
}

const FairnessAuditPanel: React.FC = () => {
  const [auditData, setAuditData] = useState<Audit[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/fairness')
      .then(res => res.json())
      .then(setAuditData)
      .catch(() => setError('Failed to load fairness audit data.'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!auditData) return <p>Loading fairness audit...</p>;

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Procedural Fairness Audit</h2>
      <ul className="space-y-2">
        {auditData.map((audit, idx) => (
          <li key={idx} className="p-2 rounded bg-gray-50">
            <strong>Tribunal ID:</strong> {audit.tribunalId} &mdash; <strong>Voice Score:</strong> {audit.voiceScore} &mdash; <strong>Neutrality:</strong> {audit.neutralityScore}
            {audit.comments && (
              <>
                <br />
                <span className="text-gray-600 text-sm">Comments: {audit.comments}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FairnessAuditPanel;