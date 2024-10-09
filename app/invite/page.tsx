import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'

export default function InvitePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Invite Friends</h1>
      <Card>
        <CardHeader>
          <CardTitle>Share Your Referral Code</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold mb-4">Your Code: INVEST123</p>
          <Button className="w-full">
            <Share2 className="mr-2 h-4 w-4" /> Share Referral Code
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}