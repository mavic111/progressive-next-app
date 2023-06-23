'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutPanelLeft, CircuitBoard, Info } from 'lucide-react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()

  const NavLinks = navLinks.map((navLink) => {
    const isActive =
      navLink.href.length <= 1
        ? pathname === navLink.href
        : pathname.startsWith(navLink.href)
    return (
      <motion.li
        key={navLink.id}
        whileTap={{ scale: 0.95 }}
        className="flex md:w-full"
      >
        <Link
          replace
          aria-label={navLink.text}
          className={clsx(
            'group rounded-lg p-2 hover:bg-zinc-200 hover:dark:bg-zinc-800 md:w-full md:rounded-xl md:px-8 md:py-4 md:hover:bg-zinc-100 md:hover:dark:bg-zinc-900 lg:flex lg:flex-row lg:items-center lg:space-x-4',
            {
              'bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-100 md:dark:bg-zinc-900':
                isActive,
            }
          )}
          href={navLink.href}
        >
          <div
            className={clsx(
              ' group-hover:first:text-black group-hover:dark:first:text-white',
              {
                'first:text-black first:dark:text-white': isActive,
              },
              {
                'first:text-zinc-600 first:dark:text-zinc-400': !isActive,
              }
            )}
          >
            {navLink.icon}
          </div>
          <p
            className={clsx('text-lg font-medium leading-none max-lg:hidden', {
              'text-black dark:text-white': isActive,
              'text-black/70 group-hover:text-black dark:text-white/70 group-hover:dark:text-white':
                !isActive,
            })}
          >
            {navLink.text}
          </p>
        </Link>
      </motion.li>
    )
  })
  return (
    <nav className="flex w-full min-w-min justify-center bg-transparent p-4 max-md:fixed max-md:bottom-0 max-md:z-20 md:z-0 md:flex md:max-w-max md:grow md:p-0">
      <ol className="flex h-full w-full max-w-sm items-center justify-around rounded-3xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900 md:h-fit md:flex-col md:justify-start md:gap-4 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent">
        {NavLinks}
      </ol>
    </nav>
  )
}

const navLinks = [
  {
    id: 0,
    href: '/',
    text: 'Home',
    icon: <Home className="h-8 w-8" />,
  },
  {
    id: 1,
    href: '/layout',
    text: 'Layout',
    icon: <LayoutPanelLeft className="h-8 w-8" />,
  },
  {
    id: 2,
    href: '/feature',
    text: 'Feature',
    icon: <CircuitBoard className="h-8 w-8" />,
  },
  {
    id: 3,
    href: '/about',
    text: 'About',
    icon: <Info className="h-8 w-8" />,
  },
]
