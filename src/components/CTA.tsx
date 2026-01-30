import Link from "next/link";
import { Lang } from "../lib/i18n";

export default function CTA({ lang = "en" }: { lang?: Lang }) {
  const zh = lang === "zh";
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/6 via-white/4 to-white/6 p-7">
      <div className="text-white text-lg font-semibold">
        {zh ? "准备好用合规优先的技术栈放大票务规模了吗？" : "Ready to scale ticketing with a compliance-first tech stack?"}
      </div>
      <div className="mt-2 text-white/60 text-sm">
        {zh
          ? "发送目标市场、活动类型与预计月度量级，我们会给出运营流程与集成建议。"
          : "Share your target markets, event types, and expected monthly volume. We’ll propose an operational flow and integration plan."}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={`/${lang}/contact`} className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium">
          {zh ? "联系我们" : "Contact Us"}
        </Link>
        <Link
          href={`/${lang}/compliance`}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          {zh ? "查看合规" : "View Compliance"}
        </Link>
      </div>
    </div>
  );
}
