"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl glass grid place-items-center">
            <span className="font-black">S</span>
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-tight">{site.name}</div>
            <div className="text-xs text-white/60">GIS · Web Maps · Analytics</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-2xl text-sm transition border",
                  active
                    ? "glass border-white/20 text-white"
                    : "border-transparent text-white/70 hover:text-white hover:border-white/10 hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="px-4 py-2 rounded-2xl glass border-white/15 text-sm font-semibold hover:bg-white/10 transition"
        >
          Let’s build
        </Link>
      </div>
    </header>
  );
}
