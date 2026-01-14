import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="glass rounded-3xl p-6">
          <div className="font-bold tracking-tight">{site.name}</div>
          <p className="mt-3 text-sm text-white/70">
            Modern GIS, interactive maps, and data storytelling built to be
            clear, fast, and useful.
          </p>
        </div>

        {/* Footer Nav */}
        <div className="glass rounded-3xl p-6">
          <div className="text-sm font-semibold text-white/85 mb-3">
            Navigate
          </div>

          <nav className="grid grid-cols-2 gap-3 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white underline-offset-4 hover:underline transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Explicit contact link */}
            <Link
              href="/contact"
              className="col-span-2 mt-2 inline-block rounded-2xl border border-white/15 px-4 py-2 text-center font-semibold text-white/85 hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Meta / CTA */}
        <div className="glass rounded-3xl p-6">
          <div className="text-sm font-semibold text-white/85 mb-3">
            Let’s work together
          </div>
          <p className="text-sm text-white/70">
            Have a map, dashboard, or data problem you want to turn into a
            product?
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-block rounded-2xl glass border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
          >
            Start a project
          </Link>

          <div className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
