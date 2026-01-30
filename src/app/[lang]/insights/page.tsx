import GradientBg from "../../../components/GradientBg";
import Section from "../../../components/Section";
import Card from "../../../components/Card";
import Link from "next/link";
import { isLang } from "../../../lib/i18n";

export default function Insights({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";

  const posts = zh
    ? [
        { title: "合规优先的票务流程如何设计", desc: "如何组织分配、交付与留痕，满足跨境分销需求。", tag: "运营" },
        { title: "票务业务常见风控红旗与应对", desc: "降低欺诈暴露、提升合作方信任的实用控制点。", tag: "风控" },
        { title: "从表格到轻量化工具链", desc: "分阶段建设运营系统，避免过度工程化。", tag: "技术" },
      ]
    : [
        { title: "Designing a compliance-first ticketing workflow", desc: "How to structure allocation, fulfillment, and recordkeeping for cross-border distribution.", tag: "Operations" },
        { title: "Avoiding common risk flags in ticketing businesses", desc: "Practical controls to reduce fraud exposure and improve partner trust.", tag: "Risk" },
        { title: "From spreadsheets to lightweight tooling", desc: "A staged approach to building reliable operations without over-engineering.", tag: "Technology" },
      ];

  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">{zh ? "洞察" : "Insights"}</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            {zh ? "关于票务分销、风控与可扩展运营的简短笔记。" : "Short operational notes on ticketing distribution, risk controls, and scalable execution."}
          </p>
        </div>
      </div>

      <Section title={zh ? "最新内容" : "Latest notes"} subtitle={zh ? "可作为运营检查清单使用。" : "Use these as operational checklists."}>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} tag={p.tag} />
          ))}
        </div>

        <div className="mt-8 text-sm text-white/60">
          {zh ? "需要定制检查清单？" : "Want a custom checklist?"}{" "}
          <Link href={`/${lang}/contact`} className="text-white underline underline-offset-4">
            {zh ? "联系我们" : "Contact us"}
          </Link>
          .
        </div>
      </Section>
    </main>
  );
}
