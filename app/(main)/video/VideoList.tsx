

import { currentUser } from '@clerk/nextjs'
import { VideoCard } from './VideoCard'
import { getAllVideos } from '~/sanity/queries'

export async function VideoList() {
  const user = await currentUser()

  if (!user) {
    return <div>Nothing</div>
  }

  const videos = await getAllVideos(user!.id)
  return (
    <>
      {videos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </>
  )
}
