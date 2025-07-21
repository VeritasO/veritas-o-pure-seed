import { db } from '@/server/db'
import { ritualTemplates } from '@/server/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import useSWR from 'swr'

interface Ritual {
  id: string
  title?: string
  description: string
  tags?: string[]
  category?: string
  meaning?: string
  symbol?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function RitualsGlossary() {
  const { data, error } = useSWR<Ritual[]>('/api/rituals?caseId=glossary', fetcher)

  if (error) return <div>Error loading rituals.</div>
  if (!data) return <div>Loading rituals...</div>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Symbolic Rituals Glossary</h1>
      {data.map((ritual) => (
        <div
          key={ritual.id}
          className="mb-8 p-4 border rounded-lg shadow-sm bg-white"
        >
          <div className="flex items-center gap-2 mb-2">
            {ritual.symbol && <span className="text-2xl">{ritual.symbol}</span>}
            <h2 className="text-xl font-semibold">
              {ritual.title || ritual.description}
            </h2>
          </div>
          <div className="mb-2 text-gray-700">{ritual.description}</div>
          {ritual.category && (
            <div className="mb-2">
              <span className="font-semibold">Category: </span>
              <span className="italic text-gray-700">{ritual.category}</span>
            </div>
          )}
          {ritual.tags && ritual.tags.length > 0 && (
            <div className="mb-3">
              <span className="font-semibold">Tags: </span>
              {ritual.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {ritual.meaning && (
            <div className="text-gray-600 italic text-sm">
              Meaning: {ritual.meaning}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const caseId = searchParams.get('caseId')

  try {
    if (caseId === 'glossary') {
      const ritualRows = await db
        .select()
        .from(ritualTemplates)
        .orderBy(ritualTemplates.description)

      const formatted = ritualRows.map((r) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        tags: Array.isArray(r.tags)
          ? r.tags
          : (r.tags ? JSON.parse(r.tags) : []),
        category: r.category || '',
        meaning: r.meaning || '',
        symbol: r.symbol || '',
      }))

      return NextResponse.json(formatted)
    }

    // Handle fetching rituals for a specific case
    if (caseId) {
      const ritualRows = await db
        .select()
        .from(ritualTemplates)
        .where(eq(ritualTemplates.caseId, caseId))

      const formatted = ritualRows.map((r) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        tags: Array.isArray(r.tags)
          ? r.tags
          : (r.tags ? JSON.parse(r.tags) : []),
        category: r.category || '',
        meaning: r.meaning || '',
        symbol: r.symbol || '',
      }))

      return NextResponse.json(formatted)
    }

    return NextResponse.json(
      { error: 'Invalid or missing caseId parameter' },
      { status: 400 },
    )
  } catch (error) {
    console.error('Error fetching rituals:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}