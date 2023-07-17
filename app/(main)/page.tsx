import { VideoList } from './video/VideoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-8">
      <div className="w-full">
        <h2 className="font-semibold text-lg">Videos</h2>
        <hr className="mt-2 mb-6 border-zinc-300 dark:border-zinc-700" />
        <ul className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <VideoList />
        </ul>
      </div>
    </main>
  )
}
