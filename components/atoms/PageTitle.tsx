import Image from 'next/image'

export default function PageTitle() {
  return (
    <div className="relative aspect-[2/1] h-8">
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
