import Link from "next/link";

const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Contact" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-400/20" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">StellarRise</div>
            <div className="text-xs text-white/60">Event Technology • Hong Kong</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-white/75 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 border border-white/15"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
