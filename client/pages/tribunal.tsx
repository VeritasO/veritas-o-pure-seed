import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NarrativeSubmissionForm from '@/components/tribunal/NarrativeSubmissionForm'
import TribunalSessionList from '@/components/tribunal/TribunalSessionList'

export default function TribunalPage() {
  const [cases, setCases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center">Loading cases...</p>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">⚖️ Tribunal Room</h1>
      <p className="text-gray-600 mb-6">Submit lived experiences for symbolic justice processing via LYRA narrative mapping.</p>
      
      <div className="space-y-6">
        <NarrativeSubmissionForm />
        <TribunalSessionList />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((c: any) => (
          <motion.div key={c.id} whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{c.description}</p>
                <p className="text-xs text-gray-400 mb-4">Submitted: {new Date(c.submittedAt).toLocaleString()}</p>
                <Link href={`/case/${c.id}`}>
                  <Button variant="default">Open for Deliberation</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}