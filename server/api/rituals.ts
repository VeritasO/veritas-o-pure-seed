import { db } from '../db'
import { ritualTemplates } from '../db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
// Removed React component and related imports; this file should only export API handlers for Next.js API routes.

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