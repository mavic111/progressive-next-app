import PageTitle from '../atoms/PageTitle'
import Toolbar from './Toolbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-white p-4 dark:bg-zinc-950 md:bg-transparent md:dark:bg-transparent">
      <PageTitle />
      <Toolbar />
    </header>
  )
}
