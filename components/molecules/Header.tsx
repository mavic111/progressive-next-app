import PageTitle from '../atoms/PageTitle'
import Toolbar from './Toolbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-white p-4 shadow dark:bg-zinc-950 dark:shadow-zinc-900/50 md:bg-transparent md:shadow-none md:dark:bg-transparent">
      <PageTitle />
      <Toolbar />
    </header>
  )
}
