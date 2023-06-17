import SectionView from "@/components/organisms/SectionView";

export default function Layout() {
  return (
    <main className="flex h-[100svh] md:h-[100lvh] flex-col items-center justify-between">
      <SectionView>
        <p className="m-auto">Section 1</p>
      </SectionView>
      <SectionView>
        <p className="m-auto">Section 2</p>
      </SectionView>
      <SectionView>
        <p className="m-auto">Section 3</p>
      </SectionView>
    </main>
  )
}
