import GradientBg from "../../../components/GradientBg";
import Section from "../../../components/Section";
import Card from "../../../components/Card";
import { isLang } from "../../../lib/i18n";

export default function Page({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";

  const items = zh
    ? [
        { tag: "使命", title: "让票务运营更可靠", desc: "通过系统与流程降低不确定性，提升交付确定性与效率。" },
        { tag: "方法", title: "合规优先设计", desc: "在生命周期各环节内置流程控制与留痕机制。" },
        { tag: "定位", title: "国际化运营视角", desc: "跨境分销需要清晰的记录、文档与对市场规则的理解。" },
      ]
    : [
        { tag: "Mission", title: "Make ticketing operations reliable", desc: "We build systems and processes that reduce uncertainty and improve delivery outcomes." },
        { tag: "Approach", title: "Compliance-first by design", desc: "Structured workflows and controls embedded throughout the lifecycle." },
        { tag: "Positioning", title: "International mindset", desc: "Cross-border distribution requires clarity, documentation, and market-aware execution." },
      ];

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "关于我们" : "About"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh ? "面向现代票务运营：更快、更纪律化、合规优先。" : "Built for modern ticketing operations—fast, disciplined, and compliance-first."}
          </p>
        </div>
      </div>

      <Section title={zh ? "我们的定位" : "What we are"} subtitle={zh ? "用现代票务运营体系提升交付确定性。" : "A modern approach to ticketing operations."}>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((c) => (
            <Card key={c.title} tag={c.tag} title={c.title} desc={c.desc} />
          ))}
        </div>
      </Section>
    </main>
  );
}
