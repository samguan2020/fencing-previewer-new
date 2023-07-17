import type { User } from "@clerk/nextjs/dist/types/server"


interface SiteHeaderProps {
  user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
  

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
      test
      </div>
    </header>
  )
}
