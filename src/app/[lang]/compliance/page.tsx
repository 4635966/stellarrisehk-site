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
        { tag: "控制", title: "供应商与渠道控制", desc: "基础供应商核验、渠道选择规则与文档标准。" },
        { tag: "风控", title: "反欺诈与异常检测", desc: "识别可疑模式、设置限额并保留可追溯日志。" },
        { tag: "留痕", title: "审计就绪的记录体系", desc: "订单映射、票据存档与按活动维度的对账材料。" },
      ]
    : [
        { tag: "Controls", title: "Vendor & Channel Controls", desc: "Vendor verification, channel selection rules, and documentation standards." },
        { tag: "Risk", title: "Anti-fraud & Anomaly Checks", desc: "Flag suspicious patterns, enforce limits, and maintain traceable logs." },
        { tag: "Records", title: "Audit-ready Recordkeeping", desc: "Order mapping, invoice/receipt storage, and reconciliation artifacts per event." },
      ];

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "合规与风控" : "Compliance"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh ? "对齐各市场规则，建立审计就绪留痕体系，便于合作方与风控审核。" : "We align operations to market rules and keep records ready for audits, partner reviews, and risk checks."}
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
