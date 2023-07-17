import { type NextRequest, NextResponse } from 'next/server'
import { videos } from '~/data/videos'

export const runtime = 'edge'

export async function GET(req: NextRequest, context: { params: any } ) {
  const video = videos.find((video) => video.id ===context.params.id)
  return NextResponse.json({
    ...video
  })
}
