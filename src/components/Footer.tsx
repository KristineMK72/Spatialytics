import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand / About */}
        <div className="glass rounded-3xl p-6 md:col-span-2">
          <div className="font-bold tracking-tight text-lg">
            {site.name}
          </div>

          <p className="mt-3 text-sm text-white/70 max-w-md">
            Modern GIS, interactive maps, and data storytelling — designed to
            surface insight, guide decisions, and feel like a product, not a
            portal.
          </p>

          <p className="mt-4 text-xs text-white/50">
            Built with Next.js · Web GIS · Spatial analytics
          </p>
        </div>

        {/* Navigation */}
        <div className="glass rounded-3xl p-6">
          <div className="text-sm font-semibold text-white/85 mb-3">
            Navigate
          </div>

          <nav className="grid gap-2 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-white/75 hover:text-white hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA / Contact */}
        <div className="glass rounded-3xl p-6 flex flex-col">
          <div className="text-sm font-semibold text-white/85 mb-3">
            Work with me
          </div>

          <p className="text-sm text-white/70">
            Have a mapping, dashboard, or data problem you want to turn into a
            clear, interactive experience?
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-block rounded-2xl glass border-white/15 px-5 py-3 text-sm font-semibold text-center hover:bg-white/10 transition"
          >
            Start a project
          </Link>

          <div className="mt-auto pt-6 text-xs text-white/45">
            © {new Date().getFullYear()} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
