import FeatureShell from '@/components/organisms/FeatureShell'
import ScrollView from '@/components/organisms/ScrollView'

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FeatureShell>
      <ScrollView>{children}</ScrollView>
    </FeatureShell>
  )
}
