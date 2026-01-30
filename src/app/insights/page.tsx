import GradientBg from "../../components/GradientBg";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Link from "next/link";

const posts = [
  {
    title: "Designing a compliance-first ticketing workflow",
    desc: "How to structure allocation, fulfillment, and recordkeeping for cross-border distribution.",
    tag: "Operations",
  },
  {
    title: "Avoiding common risk flags in ticketing businesses",
    desc: "Practical controls to reduce fraud exposure and improve partner trust.",
    tag: "Risk",
  },
  {
    title: "From spreadsheets to lightweight tooling",
    desc: "A staged approach to building reliable operations without over-engineering.",
    tag: "Technology",
  },
];

export default function Insights() {
  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Insights</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            Short operational notes on ticketing distribution, risk controls, and scalable execution.
          </p>
        </div>
      </div>

      <Section title="Latest notes" subtitle="Use these as operational checklists.">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} tag={p.tag} />
          ))}
        </div>

        <div className="mt-8 text-sm text-white/60">
          Want a custom checklist? <Link href="/contact" className="text-white underline underline-offset-4">Contact us</Link>.
        </div>
      </Section>
    </main>
  );
}
