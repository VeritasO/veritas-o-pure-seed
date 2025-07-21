import React from 'react';
import { useRouter } from 'next/router';

interface Case {
  id: string;
  title: string;
  status: string;
}

interface CaseListProps {
  cases: Case[];
  loading: boolean;
}

const CaseList: React.FC<CaseListProps> = ({ cases, loading }) => {
  const router = useRouter();

  if (loading) return <p>Loading cases...</p>;
  if (!cases || cases.length === 0) return <p>No cases found.</p>;

  return (
    <ul className="space-y-2">
      {cases.map((c) => (
        <li
          key={c.id}
          onClick={() => router.push(`/case/${c.id}`)}
          className="cursor-pointer p-3 rounded bg-gray-100 hover:bg-gray-200 transition"
        >
          <strong className="block text-lg">{c.title}</strong>
          <span className="text-sm text-gray-600">Status: {c.status}</span>
        </li>
      ))}
    </ul>
  );
};

export default CaseList;
