import Link from "next/link";
import { Lang } from "../lib/i18n";

export default function Navbar({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  const otherLang = zh ? "en" : "zh";

  const nav = [
    { href: "/solutions", label: zh ? "解决方案" : "Solutions" },
    { href: "/services", label: zh ? "服务" : "Services" },
    { href: "/about", label: zh ? "关于我们" : "About" },
    { href: "/compliance", label: zh ? "合规与风控" : "Compliance" },
    { href: "/contact", label: zh ? "联系" : "Contact" },
    { href: "/insights", label: zh ? "洞察" : "Insights" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-400/20" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">StellarRise</div>
            <div className="text-xs text-white/60">{zh ? "演出科技 • 香港" : "Event Technology • Hong Kong"}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={`/${lang}${i.href}`} className="text-sm text-white/75 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLang}`}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            {zh ? "EN" : "中文"}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 border border-white/15"
          >
            {zh ? "申请演示" : "Request a Demo"}
          </Link>
        </div>
      </div>
    </header>
  );
}
