import GradientBg from "../../../components/GradientBg";
import Section from "../../../components/Section";
import Card from "../../../components/Card";
import CTA from "../../../components/CTA";
import { isLang } from "../../../lib/i18n";

export default function Page({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";

  const items = zh
    ? [
        { tag: "搭建", title: "运营体系搭建", desc: "从SOP到工具链，搭建可复制、可扩展的执行层。" },
        { tag: "集成", title: "轻量化系统集成", desc: "连接订单来源、内部表格与运营看板，提升可追溯性。" },
        { tag: "交付", title: "交付支持", desc: "监控与异常处理，以及活动后的结构化对账复盘。" },
      ]
    : [
        { tag: "Setup", title: "Operational Setup", desc: "From SOPs to tooling: build an execution layer that stays consistent under volume." },
        { tag: "Integration", title: "Lightweight Integrations", desc: "Connect order sources, internal sheets, and dashboards for traceability." },
        { tag: "Delivery", title: "Fulfillment Support", desc: "Monitoring, exception management, and structured post-event reconciliation." },
      ];

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "服务" : "Services"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh ? "提供落地执行支持：系统、流程设计与票务运营交付。" : "Hands-on execution support: systems, process design, and operational delivery for ticketing businesses."}
          </p>
        </div>
      </div>

      <Section title={zh ? "交付内容" : "What we deliver"}>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((c) => (
            <Card key={c.title} tag={c.tag} title={c.title} desc={c.desc} />
          ))}
        </div>
      </Section>

      <Section title={zh ? "下一步" : "Next step"} subtitle={zh ? "告诉我们目标市场与月度规模，我们会给出方案。" : "Tell us your target markets and monthly volume."}>
        <CTA lang={lang} />
      </Section>
    </main>
  );
}
