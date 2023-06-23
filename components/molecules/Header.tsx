import PageTitle from '../atoms/PageTitle'
import Toolbar from './Toolbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-zinc-100 p-4 shadow dark:bg-zinc-900 dark:shadow-zinc-800/50 md:shadow-none">
      <PageTitle />
      <Toolbar />
    </header>
  )
}
