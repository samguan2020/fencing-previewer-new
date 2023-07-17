

import { Video } from '~/types';
import { VideoCard } from './VideoCard'

export async function VideoList() {
  const videos: Video[] = [{
    id: '1',
    title: 'test1',
    description: 'test1',
    thumbnail: 'https://via.placeholder.com/384x384',
  },
  {
    id: '2',
    title: 'test2',
    description: 'test2',
    thumbnail: 'https://via.placeholder.com/384x384',
  }];

  return (
    <>
      {videos.map((video, idx) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </>
  )
}
