"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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

        {/* Desktop nav */}
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

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-2xl glass border-white/15 text-sm font-semibold hover:bg-white/10 transition"
          >
            Let’s build
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="px-3 py-2 rounded-2xl glass border-white/15 text-sm font-semibold hover:bg-white/10 transition"
          >
            Contact
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="px-3 py-2 rounded-2xl border border-white/10 bg-white/0 hover:bg-white/5 transition"
          >
            {/* simple hamburger */}
            <span className="block w-5 h-[2px] bg-white/80 mb-1" />
            <span className="block w-5 h-[2px] bg-white/80 mb-1" />
            <span className="block w-5 h-[2px] bg-white/80" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* panel */}
          <div className="absolute top-0 right-0 h-full w-[86%] max-w-sm glass border-l border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-2xl border border-white/10 bg-white/0 hover:bg-white/5 transition"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {site.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-2xl border transition",
                      active
                        ? "glass border-white/20 text-white"
                        : "border-white/10 text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-2 px-4 py-3 rounded-2xl glass border-white/15 text-sm font-semibold hover:bg-white/10 transition text-center"
              >
                Let’s build
              </Link>
            </div>

            <div className="mt-6 text-xs text-white/50">
              Tip: add your LinkedIn to <code className="text-white/70">src/lib/site.ts</code> to show it here too.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
