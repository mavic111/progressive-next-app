import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
