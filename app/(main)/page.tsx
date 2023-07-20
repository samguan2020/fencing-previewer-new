import { Button, Divider } from '@mui/material'
import Link from 'next/link'
import { VideoList } from './video/VideoList'
import { currentUser } from '@clerk/nextjs';
import { VideoCard } from './video/VideoCard';
import { firstVideo } from '~/data/video';

export default async function Home() {
  const user = await currentUser();

  if (!user) return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">
      <div className='w-full flex gap-2 flex-col justify-center items-center'>
        <h1 className='font-semibold text-lg'>Not logged in</h1>
        <p>but you can look at this video</p>
        <div className='w-max-[375px] mx-auto'>
          <VideoCard video={firstVideo} noClose></VideoCard>
        </div>
      </div>
    </main>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">
      <div className="w-full">
        <span className="w-full mb-2 inline-flex items-center justify-between">
          <h2 className="font-semibold text-lg">Videos</h2>
          <Link href="/upload"><Button variant="contained" color="primary" size="small">Add</Button></Link>
        </span>
        <Divider />
        <ul className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <VideoList />
        </ul>
      </div>
    </main>
  )
}
