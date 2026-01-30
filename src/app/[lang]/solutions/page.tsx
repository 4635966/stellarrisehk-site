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
        { tag: "分销", title: "多市场分销流程", desc: "从采购、分配、交付到对账的标准化流程，适配不同市场与渠道。" },
        { tag: "运营", title: "分配与交付运营", desc: "围绕座位/数量分配、交付时点与异常处理的运营手册与机制。" },
        { tag: "报表", title: "对账与数据报表", desc: "可审计留痕、订单映射、拒付准备与清晰的利润可视化。" },
      ]
    : [
        { tag: "Distribution", title: "Multi-market Distribution Flow", desc: "A standardized flow to source, allocate, fulfill, and reconcile across markets and channels." },
        { tag: "Operations", title: "Allocation & Fulfillment Ops", desc: "Playbooks for seat/quantity allocation, fulfillment timing, and exception handling." },
        { tag: "Reporting", title: "Reconciliation & Reporting", desc: "Audit-ready records, order mapping, chargeback readiness, and clear margin visibility." },
      ];

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "解决方案" : "Solutions"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh ? "面向跨境票务分销的流程蓝图：可扩展运营与清晰控制点。" : "Blueprints for international ticketing distribution with scalable operations and clear controls."}
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
