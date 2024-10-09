import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Milk, Coffee, IceCream } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <Image src="/logo.png" alt="KraftHeinz Lactalis Logo" width={200} height={50} />
        <div className="flex space-x-4">
          <Button variant="outline">VIP</Button>
          <Button variant="outline">SVIP</Button>
        </div>
      </header>

      <nav className="flex justify-between mb-8">
        {['Recharge', 'Withdraw', 'Latest Notice', 'Channels', 'Online'].map((item) => (
          <Button key={item} variant="ghost">{item}</Button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Milk className="h-8 w-8" />, title: 'VIP 1', price: '₹470.00', income: '₹100.00', cycle: '180 days', total: '₹18000.00' },
          { icon: <Coffee className="h-8 w-8" />, title: 'VIP 2', price: '₹1780.00', income: '₹420.00', cycle: '180 days', total: '₹75600.00' },
          { icon: <IceCream className="h-8 w-8" />, title: 'VIP 3', price: '₹4790.00', income: '₹1252.00', cycle: '180 days', total: '₹225360.00' },
        ].map((plan, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {plan.icon}
                <span>{plan.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold mb-2">Price: {plan.price}</p>
              <p className="text-sm mb-1">Income: {plan.income}</p>
              <p className="text-sm mb-1">Cycle: {plan.cycle}</p>
              <p className="text-sm mb-4">Total: {plan.total}</p>
              <Button className="w-full">Invest now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}