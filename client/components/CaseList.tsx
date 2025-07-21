import React from 'react'
import { useRouter } from 'next/router'

const CaseList = ({ cases, loading }) => {
  const router = useRouter()
  if (loading) return <p>Loading cases...</p>
  if (!cases.length) return <p>No cases found.</p>
  return (
    <ul>
      {cases.map(c => (
        <li key={c.id} onClick={() => router.push(`/case/${c.id}`)}>
          <strong>{c.title}</strong> — Status: {c.status}
        </li>
      ))}
    </ul>
  )
}
export default CaseList
