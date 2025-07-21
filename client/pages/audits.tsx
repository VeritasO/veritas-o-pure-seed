import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Audit {
  id: string;
  caseId: string;
  agentId: string;
  auditDate: string;
  dimension: string;
  score: number;
  comments: string;
  agentName?: string;
  caseNumber?: string; // or caseTitle?: string;
}

export default function AuditsPage() {
  const [audits, setAudits] = useState<Audit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({ caseId: "", agentId: "", startDate: "", endDate: "" });
  const [page, setPage] = useState(1);

  const fetchAudits = async () => {
    setLoading(true);
    setError("");
    try {
      const params: any = { page, pageSize: 20, ...filters };
      const res = await axios.get("/api/fairness-audits", { params });
      setAudits(res.data.data);
    } catch (e) {
      setError("Failed to load audits");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAudits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filters]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Tribunal Fairness Audits</h1>
      <div className="mb-4 flex space-x-2">
        <input
          placeholder="Case ID"
          value={filters.caseId}
          onChange={(e) => setFilters({ ...filters, caseId: e.target.value })}
          className="input"
        />
        <input
          placeholder="Agent ID"
          value={filters.agentId}
          onChange={(e) => setFilters({ ...filters, agentId: e.target.value })}
          className="input"
        />
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          className="input"
        />
        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="input"
        />
        <button onClick={() => setPage(1)} className="btn">
          Filter
        </button>
      </div>
      {loading ? (
        <p>Loading audits...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">Audit ID</th>
              <th className="border border-gray-300 px-2 py-1">Case</th>
              <th className="border border-gray-300 px-2 py-1">Agent</th>
              <th className="border border-gray-300 px-2 py-1">Dimension</th>
              <th className="border border-gray-300 px-2 py-1">Score</th>
              <th className="border border-gray-300 px-2 py-1">Audit Date</th>
              <th className="border border-gray-300 px-2 py-1">Comments</th>
            </tr>
          </thead>
          <tbody>
            {audits.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No audits found.
                </td>
              </tr>
            ) : (
              audits.map((audit) => (
                <tr key={audit.id}>
                  <td className="border border-gray-300 px-2 py-1">{audit.id}</td>
                  <td className="border border-gray-300 px-2 py-1">
                    <Link
                      href={`/cases/${audit.caseId}`}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {audit.caseNumber || audit.caseId}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <Link
                      href={`/participants/${audit.agentId}`}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {audit.agentName || audit.agentId}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-2 py-1">{audit.dimension}</td>
                  <td className="border border-gray-300 px-2 py-1">{audit.score.toFixed(2)}</td>
                  <td className="border border-gray-300 px-2 py-1">{new Date(audit.auditDate).toLocaleDateString()}</td>
                  <td className="border border-gray-300 px-2 py-1" title={audit.comments}>
                    {audit.comments.length > 50 ? audit.comments.slice(0, 50) + "…" : audit.comments}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
      <div className="mt-4 flex justify-between">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="btn"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={audits.length < 20}
          onClick={() => setPage(page + 1)}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}