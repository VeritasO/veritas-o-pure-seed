import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/server/db'
import { participants } from '@/server/db/schema'

export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id')
  const result = id
    ? await db.select().from(participants).where(eq(participants.id, id))
    : await db.select().from(participants)
  return NextResponse.json(result)
}