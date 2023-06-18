'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  RectangleGroupIcon as RectangleGroupIconSolid,
  Squares2X2Icon as Squares2X2IconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
} from '@heroicons/react/24/solid'
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
          className="group w-full rounded-lg px-4 py-2 hover:bg-slate-200 hover:dark:bg-zinc-800 md:rounded-xl md:px-8 md:py-4 lg:flex lg:flex-row lg:items-center lg:space-x-4"
          href={navLink.href}
        >
          <div
            className={clsx('first:h-8 first:w-8', {
              'first:stroke-black/50 first:group-hover:stroke-black first:dark:stroke-white/50 first:dark:group-hover:stroke-white':
                !isActive,
            })}
          >
            {isActive ? navLink.active_icon : navLink.icon}
          </div>
          <p
            className={clsx('text-lg font-medium max-lg:hidden', {
              'text-black dark:text-white': isActive,
              'text-black/50 group-hover:text-black dark:text-white/50 dark:group-hover:text-white':
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
    <nav className="flex w-full min-w-min justify-center p-4 max-md:fixed max-md:bottom-0 max-md:z-20 md:z-0 md:flex md:max-w-max md:grow md:bg-transparent md:p-6">
      <ol className="flex h-full w-full max-w-sm items-center justify-between rounded-3xl bg-slate-100 p-2 px-4 shadow-md dark:bg-zinc-900 md:h-fit md:flex-col md:justify-start md:gap-4 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent">
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
    icon: <HomeIcon />,
    active_icon: <HomeIconSolid />,
  },
  {
    id: 1,
    href: '/layout',
    text: 'Layout',
    icon: <RectangleGroupIcon />,
    active_icon: <RectangleGroupIconSolid />,
  },
  {
    id: 2,
    href: '/feature',
    text: 'Feature',
    icon: <Squares2X2Icon />,
    active_icon: <Squares2X2IconSolid />,
  },
  {
    id: 3,
    href: '/about',
    text: 'About',
    icon: <InformationCircleIcon />,
    active_icon: <InformationCircleIconSolid />,
  },
]
