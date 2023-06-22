import Image from 'next/image'

export default function PageTitle() {
  return (
    <div className="relative h-6 w-12 md:h-8 md:w-24">
      <Image
        style={{ objectFit: 'contain' }}
        fill
        src={'/pwa.svg'}
        alt={'Logo'}
      />
    </div>
  )
}
