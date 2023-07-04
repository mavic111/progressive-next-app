import PageTitle from '../atoms/PageTitle'
import Toolbar from './Toolbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between bg-white p-4 dark:bg-zinc-950 md:bg-transparent md:px-6 md:dark:bg-transparent lg:px-8">
      <PageTitle />
      <Toolbar />
    </header>
  )
}
