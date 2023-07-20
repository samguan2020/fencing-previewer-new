'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { navigationItems } from '~/config/nav'

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <Link
      href={href}
      className={clsx(
        'relative block whitespace-nowrap px-2 py-2 transition hover:text-cyan-500',
        isActive
          ? 'text-cyan-500 dark:text-cyan-400'
          : 'hover:text-cyan-500 dark:hover:text-cyan-400'
      )}
    >
      {children}
    </Link>
  )
}

function Desktop({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {

  return (
    <nav
      className={clsx(
        `flex`,
        className)}
      {...props}
    >
      <ul className="flex bg-transparent px-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 ">
        {navigationItems.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export const NavigationBar = {
  Desktop,
  // Mobile,
} as const
