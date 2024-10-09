import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">₹10,000</p>
          <div className="flex space-x-4 mt-4">
            <Button>Deposit</Button>
            <Button variant="outline">Withdraw</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>My Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Active Investments: 2</p>
          <p>Total Invested: ₹5,000</p>
        </CardContent>
      </Card>
    </div>
  )
}