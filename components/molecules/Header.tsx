import PageTitle from '../atoms/PageTitle'
import Toolbar from './Toolbar'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between p-4 md:p-6">
      <PageTitle />
      <Toolbar />
    </header>
  )
}
