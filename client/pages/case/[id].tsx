import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TribunalPanel from '@/components/TribunalPanel'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
// import SymbolicRitualScheduler from '@/components/SymbolicRitualScheduler'

const agentTabs = [
  { id: 'LYRA', label: 'LYRA: Memory & Narrative' },
  { id: 'AEGIS', label: 'AEGIS: Fairness Audit' },
  { id: 'KAIROS', label: 'KAIROS: Grief Logic' },
]

export default function CaseDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [caseData, setCaseData] = useState<any>(null)
  const [reflections, setReflections] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showRitual, setShowRitual] = useState(false)
  const [activeTab, setActiveTab] = useState('LYRA')

  useEffect(() => {
    if (!id) return
    Promise.all([
      fetch(`/api/cases/${id}`).then(res => res.json()),
      fetch(`/api/reflections?caseId=${id}`).then(res => res.json())
    ]).then(([caseInfo, reflectionData]) => {
      setCaseData(caseInfo)
      setReflections(reflectionData)
      setLoading(false)
    })
  }, [id])

  if (loading || !caseData) return <p className="text-center">Loading case details...</p>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div>
              <h1 className="text-2xl font-bold">{caseData.title}</h1>
              <p className="text-gray-600">{caseData.description}</p>
              <p className="text-xs text-gray-400">Submitted: {new Date(caseData.submittedAt).toLocaleString()}</p>
            </div>

            <div className="pt-2">
              <div className="flex space-x-2 mb-3">
                {agentTabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`px-3 py-1 rounded-md ${
                      activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-gray-50 rounded-md shadow-inner">
                {activeTab === 'LYRA' && (
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Narrative Reflections (LYRA)</h2>
                    {reflections.length > 0 ? (
                      <ul className="list-disc pl-5">
                        {reflections.map((r, i) => (
                          <li key={i} className="text-sm text-gray-700">{r.notes ?? r.text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm italic text-gray-400">No reflections submitted yet.</p>
                    )}
                  </div>
                )}
                {activeTab === 'AEGIS' && (
                  <p>
                    AEGIS is running a fairness and bias audit. It flags imbalance, symbolic weighting errors, or exclusion logic.
                  </p>
                )}
                {activeTab === 'KAIROS' && (
                  <p>
                    KAIROS is interpreting the grief timeline, assessing urgency, reversibility, and harm rhythm. Temporal justice is being modeled.
                  </p>
                )}
              </div>
            </div>

            {showRitual && (
              <div className="pt-4">
                <SymbolicRitualScheduler caseId={caseData.id} />
              </div>
            )}

            <div className="flex gap-4 pt-6">
              <Button variant="default" onClick={() => setShowRitual(true)}>
                Render Symbolic Judgment
              </Button>
              <Button variant="outline" onClick={() => router.back()}>
                Back
              </Button>
            </div>

            <TribunalPanel tribunalId={caseData.tribunalId} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
