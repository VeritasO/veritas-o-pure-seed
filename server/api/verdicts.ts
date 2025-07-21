import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/server/db'
import { verdicts } from '@/server/db/schema'

export async function GET() {
  const allVerdicts = await db.select().from(verdicts)
  return NextResponse.json(allVerdicts)
}