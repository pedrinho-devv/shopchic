"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {ShoppingBagIcon} from 'lucide-react'

const Links = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/Games" },
  { name: "Promotions", href: "/Promotions" },
  { name: "BestSellers", href: "/BestSellers" },
];

export default function Navbar() {
  const parthname = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between py-4 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Finall<span className="text-purple-800">Boss</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {Links.map((link, idx) => (
            <div key={idx}>
              {parthname === link.href ? (
                <Link
                  className="text-lg font-semibold text-purple-900"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-700 transition duration-200 hover:text-purple-900"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex justify-center items-center">
          <Button variant="outline">
            <ShoppingBagIcon/>
            <span>(0)</span>
          </Button>
          
        </div>
      </div>
    </header>
  );
}
