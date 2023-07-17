

import { VideoCard } from './VideoCard'
import { videos } from '~/data/videos';

export async function VideoList() {
  return (
    <>
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </>
  )
}
