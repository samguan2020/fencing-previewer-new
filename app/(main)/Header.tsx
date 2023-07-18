'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import React from 'react'
import FencingIcon from '~/assets/icons/FencingIcon'

import { NavigationBar } from '~/app/(main)/NavigationBar'
import { url } from '~/lib'
import Link from 'next/link'
import PWAInstallButton from '~/components/PwaButton'

export function Header() {

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-cyan-600">
        <div className="px-4 py-2 inline-flex w-full items-center">
          <Link className="inline-flex gap-2 mr-2" href={'/'}><FencingIcon className='w-5 h-5' />Fencing Previewer</Link>

          {/* <PWAInstallButton /> */}

          <div className="flex flex-1 justify-end ">
            <NavigationBar.Desktop className="pointer-events-auto relative z-50 md:hidden" />
            <NavigationBar.Desktop className="pointer-events-auto relative z-50 hidden md:block" />
          </div>

          <UserInfo />
        </div>
      </header>
    </>
  )
}

function UserInfo() {
  const pathname = usePathname()

  return (
    <>
      <SignedIn key="user-info">
        <div
          className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-gray-100 shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
        >
          <SignOutButton />
          {/* <UserButton
            afterSignOutUrl={url(pathname).href}
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9 ring-2 ring-white/20',
              },
            }}
          /> */}
        </div>
      </SignedIn>
      <SignedOut key="sign-in">
        <div className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-gray-100 shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs" >
          <SignInButton mode="modal" redirectUrl={url(pathname).href} />
        </div>
      </SignedOut></>
  )
}
