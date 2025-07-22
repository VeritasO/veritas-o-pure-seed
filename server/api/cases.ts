import { NextRequest, NextResponse } from 'next/server'
import { db } from '../db'
import { cases, verdicts, griefVectors } from '../db/schema'
import { eq, and, gte } from 'drizzle-orm'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const griefStage = searchParams.get('griefStage')
  const severity = searchParams.get('severity')

  let whereClause: any[] = []
  if (status) whereClause.push(eq(cases.status, status))
  // Replace 'griefStage' with the correct column name from your cases schema, e.g. 'stage' or remove if not needed
  // if (griefStage) whereClause.push(eq(cases.stage, griefStage))
  // Replace 'severity' with the correct column name from your cases schema, e.g. 'priority' or remove if not needed
  // if (severity) whereClause.push(gte(cases.priority, Number(severity)))

  const result = whereClause.length
    ? await db.select().from(cases).where(and(...whereClause))
    : await db.select().from(cases)

  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const inserted = await db.insert(cases).values(data).returning()
  return NextResponse.json(inserted[0])
}