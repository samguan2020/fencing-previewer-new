import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import { urlForImage } from '~/sanity/lib/image'
import { Video } from '~/sanity/schemas/video'
import { Close as CloseIcon } from '@mui/icons-material'
import { deleteVideoById } from '~/sanity/queries'

export function VideoCard({ video }: { video: Video }) {
  async function deleteVideo() {
    'use server'

    await deleteVideoById(video._id)
  }

  return (
    <Card sx={{ minWidth: 275 }} className='relative !overflow-visible group'>
      <form action={deleteVideo} className="absolute -top-3 -right-3 text-gray-500 opacity-0 group-hover:text-red-500 group-hover:opacity-100 transition">
        <button type="submit"> <CloseIcon /></button>

      </form>

      <CardMedia
        sx={{ height: 140 }}
        image={urlForImage(video?.mainImage!)?.url()}
        title={video.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link className="cursor-pointer transition hover:text-cyan-500 hover:underline" href={`/video/${video._id}`}>{video.title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  )
}