import Link from 'next/link'
import { NavIcon } from '../atoms/NavIcon'

export default function Navbar() {
  return (
    <nav className="flex w-full min-w-min justify-center p-4 max-md:fixed max-md:bottom-0 max-md:z-20 md:z-0 md:flex md:max-w-max md:grow md:bg-transparent md:p-6">
      <ol className="flex h-full w-full max-w-sm items-center justify-between rounded-3xl bg-slate-100 p-2 px-4 shadow-md dark:bg-zinc-900 md:h-fit md:flex-col md:justify-start md:gap-4 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent">
        {navLinks.map((navLink) => (
          <li key={navLink.id} className="flex md:w-full">
            <Link
              className="w-full rounded-lg p-2 hover:bg-white/20 md:rounded-xl md:p-4 lg:flex lg:flex-row lg:items-center lg:space-x-4"
              href={navLink.href}
            >
              <NavIcon />
              <p className="max-lg:hidden">{navLink.text}</p>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

const navLinks = [
  {
    id: 0,
    href: '/',
    text: 'Home',
  },
  {
    id: 1,
    href: '/layout',
    text: 'Layout',
  },
  {
    id: 2,
    href: '/feature',
    text: 'Feature',
  },
  {
    id: 3,
    href: '/about',
    text: 'About',
  },
]
