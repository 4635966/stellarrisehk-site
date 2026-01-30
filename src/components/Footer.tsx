import Link from "next/link";
import { Lang } from "../lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold">StellarRise Event Technology Limited</div>
          <div className="mt-2 text-sm text-white/60">
            {zh
              ? "票务与演出科技服务，聚焦国际分销与合规优先的运营体系。"
              : "Ticketing & entertainment technology services with a focus on international distribution and compliance-first operations."}
          </div>
          <div className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} StellarRise. All rights reserved.</div>
        </div>

        <div className="text-sm">
          <div className="text-white/70 mb-2">{zh ? "站点" : "Site"}</div>
          <div className="grid gap-2 text-white/60">
            <Link href={`/${lang}/solutions`} className="hover:text-white">{zh ? "解决方案" : "Solutions"}</Link>
            <Link href={`/${lang}/services`} className="hover:text-white">{zh ? "服务" : "Services"}</Link>
            <Link href={`/${lang}/compliance`} className="hover:text-white">{zh ? "合规与风控" : "Compliance"}</Link>
            <Link href={`/${lang}/insights`} className="hover:text-white">{zh ? "洞察" : "Insights"}</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-white/70 mb-2">{zh ? "联系" : "Contact"}</div>
          <div className="text-white/60 grid gap-2">
            <div>Domain: stellarrisehk.com</div>
            <div>Email: admin@stellarrisehk.com</div>
            <div className="text-xs text-white/40">
              {zh
                ? "备注：我们不提供金融、博彩或受限服务。票务合规要求因司法辖区而异。"
                : "Note: We do not provide financial, gambling, or restricted services. Ticketing compliance applies by jurisdiction."}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
