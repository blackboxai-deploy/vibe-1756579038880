'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMobile } from '@/hooks/use-mobile';

export default function Header() {
  const isMobile = useMobile();

  const navLinks = (
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-2 lg:space-y-0">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/products" className="hover:underline">Products</Link>
      <Link href="#" className="hover:underline">For Buyers</Link>
      <Link href="#" className="hover:underline">For Sellers</Link>
      <Link href="#" className="hover:underline">Contact Us</Link>
    </div>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">Global Trade</Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8">
                {navLinks}
                <div className="mt-6 flex flex-col space-y-2">
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-8">
            <nav>
              {navLinks}
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}