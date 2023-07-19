

import { VideoCard } from './VideoCard'
import { getAllVideos } from '~/sanity/queries'

export async function VideoList() {
  const videos = await getAllVideos()
  return (
    <>
      {videos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </>
  )
}
