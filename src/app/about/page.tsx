import GradientBg from "../../components/GradientBg";
import Section from "../../components/Section";
import Card from "../../components/Card";
import CTA from "../../components/CTA";

export default function Page() {
  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">About</h1>
          <p className="mt-4 max-w-2xl text-white/65">StellarRise Event Technology Limited is built for modern ticketing operations—fast, disciplined, and compliance-first.</p>
        </div>
      </div>

      <Section title="What we deliver">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Make ticketing operations reliable" tag="Mission" desc="We focus on building systems and processes that reduce uncertainty and improve delivery outcomes." />
      <Card title="Compliance-first by design" tag="Approach" desc="Clear records, structured workflows, and controls embedded throughout the lifecycle." />
      <Card title="International mindset" tag="Positioning" desc="Cross-border distribution requires clarity, documentation, and market-aware execution." />
        </div>
      </Section>

    </main>
  );
}
