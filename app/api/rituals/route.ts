// ✅ SERVER ROUTE HANDLER (Next.js 13/14 App Router)

import { db } from '@/server/db'
import { ritualTemplates } from '@/server/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const caseId = searchParams.get('caseId')

  try {
    let query = db.select().from(ritualTemplates)
    if (caseId && caseId !== 'glossary') {
      query = query.where(eq(ritualTemplates.caseId, caseId))
    }

    const rows = await query.orderBy(ritualTemplates.description)

    const formatted = rows.map((r) => ({
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
  } catch (error) {
    console.error('Error fetching rituals:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
