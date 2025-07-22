import React, { useState } from 'react';

export default function ExportOptions({ data }) {
  const [format, setFormat] = useState('json');

  function handleExport() {
    let content = '';
    let mime = '';
    let ext = '';
    if (format === 'json') {
      content = JSON.stringify(data, null, 2);
      mime = 'application/json';
      ext = 'json';
    } else if (format === 'md') {
      const md = `# Simulation Result\n\n**Input:**\n\`\`\`json\n${JSON.stringify(
        data.simulationInput,
        null,
        2,
      )}\n\`\`\`\n\n**Verdict:**\n\n${data.simulationResult.text}\n\n**Options:**\n${data.simulationResult.options
        .map((opt) => `- ${opt}`)
        .join('\n')}`;
      content = md;
      mime = 'text/markdown';
      ext = 'md';
    }
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `veritas-simulation.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-4 flex items-center gap-3">
      <label htmlFor="format" className="font-semibold">
        Export as:
      </label>
      <select
        id="format"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="json">JSON</option>
        <option value="md">Markdown</option>
      </select>
      <button
        onClick={handleExport}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
      >
        Download
      </button>
    </div>
  );
}
