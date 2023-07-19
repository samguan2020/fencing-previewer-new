import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import { urlForImage } from '~/sanity/lib/image'
import { Video } from '~/sanity/schemas/video'

export function VideoCard({ video }: { video: Video }) {
  return (
    <Card sx={{ minWidth: 275 }}>
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