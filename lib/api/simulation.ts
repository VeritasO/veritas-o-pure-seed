// generateSimulation: API call to /api/simulation for edge case simulation
export async function generateSimulation(input) {
  const res = await fetch('/api/simulation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scenario: input }),
  });
  return await res.json();
}
