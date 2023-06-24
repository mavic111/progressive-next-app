import AppShell from '@/components/organisms/AppShell'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell>{children}</AppShell>
}
