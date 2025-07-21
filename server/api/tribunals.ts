import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/server/db'
import { cases } from '@/server/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const caseId = new URL(req.url).searchParams.get('caseId')
  const result = caseId
    ? await db.select().from(cases).where(eq(cases.id, caseId))
    : await db.select().from(cases)
  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const inserted = await db.insert(cases).values(data).returning()
  return NextResponse.json(inserted[0])
}