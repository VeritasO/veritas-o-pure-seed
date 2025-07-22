'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card'
// import { Skeleton } from '@/components/ui/skeleton'
import { Skeleton } from '../components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { SymbolicRitualScheduler } from '../components/rituals/SymbolicRitualScheduler'
import RitualHistoryList from '../components/rituals/RitualHistoryList'
import Layout from '../components/ui/Layout'

interface Ritual {
  id: string
  title?: string
  description: string
  tags: string[]
  category: string
  meaning: string
  symbol?: string
}

export default function RitualsPage() {
  const [rituals, setRituals] = useState<Ritual[]>([])
  const [filteredRituals, setFilteredRituals] = useState<Ritual[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRituals() {
      const res = await fetch('/api/rituals?caseId=glossary')
      const data: Ritual[] = await res.json()
      setRituals(data)
      setFilteredRituals(data)
      setLoading(false)
    }
    fetchRituals()
  }, [])

  useEffect(() => {
    let filtered = rituals

    if (categoryFilter !== 'All') {
      filtered = filtered.filter((r) => r.category === categoryFilter)
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (r) =>
          (r.title?.toLowerCase().includes(term) ?? false) ||
          r.description.toLowerCase().includes(term) ||
          r.meaning.toLowerCase().includes(term) ||
          r.tags.some((tag) => tag.toLowerCase().includes(term))
      )
    }

    setFilteredRituals(filtered)
  }, [searchTerm, categoryFilter, rituals])

  // Extract unique categories for filter dropdown
  const categories = ['All', ...Array.from(new Set(rituals.map((r) => r.category)))]

  return (
    <Layout title="Ritual Scheduler">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Symbolic Rituals Glossary</h1>

        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search rituals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border rounded px-3 py-2"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {loading && <Skeleton className="h-32 w-full" />}
        {!loading && filteredRituals.length === 0 && <p>No rituals found.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRituals.map((r) => (
            <Card key={r.id} className="rounded-2xl border bg-muted/40">
              <CardContent className="p-4">
                <div className="font-semibold text-xl">🔮 {r.title || 'Unnamed Ritual'}</div>
                <p className="mt-2 text-muted-foreground">{r.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">ID: {r.id}</Badge>
                  {r.symbol && <Badge>{r.symbol}</Badge>}
                </div>
                <div className="mt-2 text-sm text-gray-700">{r.meaning}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  <Badge variant="outline">{r.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">🔥 Ritual Scheduler</h2>
          <p className="text-gray-600 mb-6">
            Manage Echo Ceremonies, Sanctuary Pauses, and symbolic closure workflows.
          </p>

          <SymbolicRitualScheduler />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">📜 Ritual History</h2>
          <p className="text-gray-600 mb-6">
            View and manage the history of performed rituals.
          </p>

          <RitualHistoryList />
        </div>
      </div>
    </Layout>
  )
}