import SectionView from '@/components/organisms/SectionView'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col">
      <SectionView>
        <div className="m-auto">
          <Link href={'/layout'}>
            <p>Layout</p>
          </Link>
          <Link href={'/feature'}>
            <p>Feature</p>
          </Link>
          <Link href={'/about'}>
            <p>About</p>
          </Link>
        </div>
      </SectionView>
    </main>
  )
}
