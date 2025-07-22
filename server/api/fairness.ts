import { NextRequest, NextResponse } from 'next/server'
import { db } from '../db'
import { fairnessAudits } from '../db/schema'

export async function GET() {
  const audits = await db.select().from(fairnessAudits)
  return NextResponse.json(audits)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const inserted = await db.insert(fairnessAudits).values(data).returning()
  return NextResponse.json(inserted[0])
}