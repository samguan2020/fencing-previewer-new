import { Footer } from '~/app/(main)/Footer'
import { Header } from '~/app/(main)/Header'

export default async function Layout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
