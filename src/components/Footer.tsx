import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-6">
          <div className="font-bold">{site.name}</div>
          <p className="p mt-2">{site.description}</p>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="font-semibold">Explore</div>
          <div className="mt-3 grid gap-2 text-white/75">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="link w-fit">
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="font-semibold">Connect</div>
          <div className="mt-3 grid gap-2 text-white/75">
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} className="link w-fit" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
            <Link href="/contact" className="link w-fit">
              Contact
            </Link>
          </div>
          <div className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
