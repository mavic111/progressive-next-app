import Image from 'next/image'

export default function PageTitle() {
  return (
    <div className="relative h-full w-12 md:mx-4 lg:mx-16">
      <Image
        loading="eager"
        style={{ objectFit: 'contain' }}
        className="dark:invert"
        fill
        src={'/pwa.svg'}
        alt={'Logo'}
      />
    </div>
  )
}
