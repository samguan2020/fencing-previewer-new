import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import { Video } from '~/types'

export function VideoCard({ video }: { video: Video }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={video.thumbnail}
        title={video.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link className="cursor-pointer transition hover:text-cyan-500 hover:underline" href={`/video/${video.id}`}>{video.title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  )
}