import GradientBg from "../../components/GradientBg";
import Section from "../../components/Section";
import Card from "../../components/Card";
import CTA from "../../components/CTA";
import Link from "next/link";
import { isLang } from "../../lib/i18n";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";

  return (
    <main className="relative">
      <GradientBg />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {zh ? "合规优先 • 国际分销 • 演出科技" : "Compliance-first • International distribution • Event tech"}
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-white">
            {zh ? "以现代演出科技" : "Ticketing operations, powered by"}{" "}
            <span className="text-white/90">{zh ? "驱动票务运营" : "modern event technology."}</span>
          </h1>

          <p className="mt-5 text-white/65 max-w-2xl">
            {zh
              ? "StellarRise Event Technology Limited（星盛演出科技有限公司）提供票务与演出科技服务，聚焦跨境分销、风控与可复制的运营交付。"
              : "StellarRise Event Technology Limited provides event ticketing and entertainment technology services, focusing on cross-border distribution, risk controls, and reliable operational execution."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/solutions`} className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium">
              {zh ? "查看解决方案" : "Explore Solutions"}
            </Link>
            <Link href={`/${lang}/contact`} className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10">
              {zh ? "联系商务" : "Contact Sales"}
            </Link>
          </div>
        </div>
      </div>

      <Section
        title={zh ? "核心类目" : "Core categories"}
        subtitle={zh ? "从分销到交付，用系统化流程保证安全与可扩展。" : "From ticket distribution to operations, we keep the flow secure and scalable."}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            tag={zh ? "票务" : "Ticketing"}
            title={zh ? "演出门票分销" : "Event Ticket Distribution"}
            desc={
              zh
                ? "覆盖演唱会、体育赛事与现场娱乐的跨境分销流程，兼顾速度、可靠性与各市场规则。"
                : "International distribution workflows for concerts, sports, and live entertainment—optimized for speed, reliability, and market-specific rules."
            }
          />
          <Card
            tag={zh ? "技术" : "Technology"}
            title={zh ? "运营工具与集成" : "Operational Tooling"}
            desc={
              zh
                ? "轻量化系统与集成，提升上架、分配、交付与报表效率。"
                : "Lightweight systems and integrations that streamline listing, allocation, fulfillment, and reporting."
            }
          />
          <Card
            tag={zh ? "风控" : "Risk"}
            title={zh ? "合规与反欺诈" : "Compliance & Anti-Fraud"}
            desc={
              zh
                ? "KYC意识流程、异常检测、供应商管理与可审计留痕。"
                : "Compliance-first processes: KYC-aware workflows, anomaly detection, vendor controls, and audit-ready recordkeeping."
            }
          />
        </div>
      </Section>

      <Section title={zh ? "为什么选择 StellarRise" : "Why StellarRise"} subtitle={zh ? "更现代、更纪律化的票务运营方式。" : "A modern, disciplined approach to ticketing operations."}>
        <div className="grid gap-4 md:grid-cols-4">
          <Card title={zh ? "快速启动" : "Fast setup"} desc={zh ? "用精简流程快速上线，随着量级扩展。" : "Start with a lean operational flow and scale as volume grows."} />
          <Card title={zh ? "数据清晰" : "Data clarity"} desc={zh ? "跨市场与渠道的可追溯数据与报表。" : "Clean reporting and traceability across markets and channels."} />
          <Card title={zh ? "安全交付" : "Secure execution"} desc={zh ? "风控内置在流程中，而非事后补丁。" : "Risk controls embedded in the workflow—not bolted on."} />
          <Card title={zh ? "国际化就绪" : "International-ready"} desc={zh ? "从第一天就以跨境分销标准建设。" : "Multi-market distribution mindset from day one."} />
        </div>

        <div className="mt-8">
          <CTA lang={lang} />
        </div>
      </Section>
    </main>
  );
}
