

import { Video } from '~/types';
import { VideoCard } from './VideoCard'

export async function VideoList() {
  const videos: Video[] = [{
    id: '1',
    title: 'test1',
    description: 'test1',
    thumbnail: 'https://via.placeholder.com/384x384',
    href: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: '2',
    title: 'test2',
    description: 'test2',
    thumbnail: 'https://via.placeholder.com/128x128',
    href: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }];

  return (
    <>
      {videos.map((video, idx) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </>
  )
}
