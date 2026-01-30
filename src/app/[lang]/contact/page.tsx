import GradientBg from "../../../components/GradientBg";
import Section from "../../../components/Section";
import Card from "../../../components/Card";
import { isLang } from "../../../lib/i18n";

export default function Contact({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "联系" : "Contact"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh
              ? "告诉我们目标市场、活动类型与预计月度规模，我们会给出运营流程建议。"
              : "Tell us your target markets, event types, and expected monthly volume. We’ll respond with a proposed operational flow."}
          </p>
        </div>
      </div>

      <Section title={zh ? "联系方式" : "Get in touch"} subtitle={zh ? "邮件联系或发送简要需求说明。" : "Email us or send a short brief."}>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title={zh ? "邮箱" : "Email"} desc="admin@stellarrisehk.com" />
          <Card title={zh ? "域名" : "Domain"} desc="stellarrisehk.com" />
          <Card title={zh ? "响应时间" : "Response time"} desc={zh ? "通常 1–2 个工作日内回复。" : "Typically within 1–2 business days."} />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-white font-semibold">{zh ? "需求简述模板" : "Brief template"}</div>
          <div className="mt-2 text-sm text-white/60 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>{zh ? "目标市场（如 SG/HK/JP/EU/US）" : "Target markets (e.g., SG/HK/JP/EU/US)"}</li>
              <li>{zh ? "活动类型（演唱会/体育赛事/音乐节）" : "Event types (concert/sports/festival)"}</li>
              <li>{zh ? "月度门票量级预估" : "Monthly ticket volume estimate"}</li>
              <li>{zh ? "当前流程（手工/平台/混合）" : "Current workflow (manual / platform / mixed)"}</li>
              <li>{zh ? "合规限制或合作方要求" : "Any compliance constraints or partner requirements"}</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
