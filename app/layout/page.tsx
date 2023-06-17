import SectionView from "@/components/organisms/SectionView";

export default function Layout() {
  return (
    <main className="flex flex-col">
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
