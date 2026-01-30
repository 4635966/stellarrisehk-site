import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold">StellarRise Event Technology Limited</div>
          <div className="mt-2 text-sm text-white/60">
            Ticketing & entertainment technology services with a focus on international distribution and compliance-first operations.
          </div>
          <div className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} StellarRise. All rights reserved.
          </div>
        </div>

        <div className="text-sm">
          <div className="text-white/70 mb-2">Site</div>
          <div className="grid gap-2 text-white/60">
            <Link href="/solutions" className="hover:text-white">Solutions</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/compliance" className="hover:text-white">Compliance</Link>
            <Link href="/insights" className="hover:text-white">Insights</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-white/70 mb-2">Contact</div>
          <div className="text-white/60 grid gap-2">
            <div>Domain: stellarrisehk.com</div>
            <div>Email: youngjianpd@gmail.com</div>
            <div className="text-xs text-white/40">
              Note: We do not provide financial, gambling, or restricted services. Ticketing compliance applies by jurisdiction.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
