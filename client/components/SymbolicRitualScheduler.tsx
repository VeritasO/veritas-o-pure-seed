// /client/components/SymbolicRitualScheduler.tsx
import { useEffect, useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

interface Props {
  caseId: string
}

export default function SymbolicRitualScheduler({ caseId }: Props) {
  const [rituals, setRituals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [enacting, setEnacting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [selectedRitual, setSelectedRitual] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/rituals?caseId=${caseId}`)
      .then(res => res.json())
      .then(data => {
        setRituals(data)
        setLoading(false)
      })
  }, [caseId])

  const handleEnact = async () => {
    if (!selectedRitual) {
      setMessage('Please select a ritual to enact.')
      return
    }
    setEnacting(true)
    setMessage(null)
    const res = await fetch('/api/enact-ritual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ caseId, ritualId: selectedRitual }),
    })
    const data = await res.json()
    setEnacting(false)
    setMessage(data.message || data.error)
  }

  if (loading) return <p>Loading symbolic rituals...</p>

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <Card className="rounded-xl border border-yellow-300 bg-yellow-50">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-bold text-yellow-800">🕊️ Symbolic Ritual Enactment</h2>

          {rituals.length > 0 ? (
            <ul className="list-disc pl-6 text-yellow-900">
              {rituals.map((r, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ritual"
                      value={r.id}
                      checked={selectedRitual === r.id}
                      onChange={() => setSelectedRitual(r.id)}
                    />
                    {r.description}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-yellow-700 italic">No rituals defined yet for this case.</p>
          )}

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="default"
              onClick={handleEnact}
              disabled={enacting || !selectedRitual}
            >
              {enacting ? 'Enacting...' : 'Enact Ritual'}
            </Button>
            {message && (
              <span className="text-sm text-yellow-800">{message}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
