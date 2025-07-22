import React from 'react';
import ExportOptions from '@/components/export/ExportOptions';

export default function ExportPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📤 Export Console</h1>
      <p className="text-gray-600 mb-6">Generate case logs, grief vectors, and ritual patterns in multiple formats.</p>
      
      <ExportOptions />
    </div>
  );
}