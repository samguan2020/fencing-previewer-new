import Image from 'next/image'
import Link from 'next/link'
import { Video } from '~/types'

export function VideoCard({ video }: { video: Video }) {
  return (
    <Link className="flex flex-col shadow-sm overflow-hidden" href={`/video/${video.id}`}>
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={video.thumbnail}
          alt=""
          width={384}
          height={384}
        />
      </div>
      <div className="flex-1 bg-white dark:bg-zinc-800 p-6  flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:underline">
              {video.title}
            </a>
          </p>
        </div>
      </div>
    </Link>
  )
}