"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, PieChart, User } from 'lucide-react';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Plan' },
    { href: '/invite', icon: Users, label: 'Invite' },
    { href: '/team', icon: PieChart, label: 'Team' },
    { href: '/mine', icon: User, label: 'Mine' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center py-2">
            <item.icon className={`h-6 w-6 ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`text-xs mt-1 ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'}`}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;