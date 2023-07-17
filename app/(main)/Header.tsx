'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import React from 'react'
import FencingIcon from '~/assets/icons/FencingIcon'

import { NavigationBar } from '~/app/(main)/NavigationBar'
import { url } from '~/lib'

export function Header() {

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-cyan-600">
        <div className="px-4 py-2 inline-flex w-full items-center">
          <div className="inline-flex gap-2"><FencingIcon className='w-5 h-5' />Fencing Previewer</div>

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
  const { user } = useUser()

  console.log(user)
  return (
    <>
      <SignedIn key="user-info">
        <div
          className="pointer-events-auto relative flex h-10 items-center"
        >
          <UserButton
            afterSignOutUrl={url(pathname).href}
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9 ring-2 ring-white/20',
              },
            }}
          />
        </div>
      </SignedIn>
      <SignedOut key="sign-in">
        <SignInButton />
      </SignedOut></>
  )
}
