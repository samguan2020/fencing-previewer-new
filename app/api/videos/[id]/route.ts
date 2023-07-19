import { type NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest, context: { params: any } ) {
  return NextResponse.json({
    code: 200
  })
}
