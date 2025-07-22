import React from 'react';
import Layout from '../components/ui/Layout';
import ExportOptions from '../components/export/ExportOptions';
import CaseLogList from '../components/export/CaseLogList';
import SymbolicPatternMap from '../components/export/SymbolicPatternMap';

export default function ExportPage() {
  return (
    <Layout title="Export Console">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">📤 Export Console</h1>
        <p className="text-gray-600 mb-6">Generate case logs, grief vectors, and ritual patterns in multiple formats.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExportOptions />
          <CaseLogList />
          <SymbolicPatternMap />
        </div>
      </div>
    </Layout>
  );
}