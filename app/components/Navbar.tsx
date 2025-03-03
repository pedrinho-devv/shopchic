"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBagIcon, Heart, User } from "lucide-react";

const Links = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/Games" },
  { name: "Promotions", href: "/Promotions" },
  { name: "BestSellers", href: "/BestSellers" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50">
      <div className="flex items-center justify-between py-4 mx-auto max-w-7xl px-6">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Finall<span className="text-[#AFE619]">Boss</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex">
          {Links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-lg font-semibold transition duration-200 ${
                pathname === link.href
                  ? "text-[#AFE619]"
                  : "text-white hover:text-[#AFE619]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center items-center gap-4 text-white">
          <ShoppingBagIcon className="w-6 h-6 cursor-pointer transition duration-200 hover:text-[#AFE619]" />
          <Heart className="w-6 h-6 cursor-pointer transition duration-200 hover:text-[#AFE619]" />
          <User className="w-6 h-6 cursor-pointer transition duration-200 hover:text-[#AFE619]" />
        </div>
      </div>
    </header>
  );
}
