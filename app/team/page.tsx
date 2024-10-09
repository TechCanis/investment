import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Team</h1>
      <Card>
        <CardHeader>
          <CardTitle>Team Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Total Members: 15</p>
          <p className="mb-2">Active Investors: 10</p>
          <p>Team Earnings: ₹25,000</p>
        </CardContent>
      </Card>
    </div>
  )
}