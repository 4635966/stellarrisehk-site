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
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Compliance</h1>
          <p className="mt-4 max-w-2xl text-white/65">We align operations to market rules and keep records ready for audits, partner reviews, and risk checks.</p>
        </div>
      </div>

      <Section title="What we deliver">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Vendor & Channel Controls" tag="Controls" desc="Basic vendor verification, channel selection rules, and documentation standards." />
      <Card title="Anti-fraud & Anomaly Checks" tag="Risk" desc="Flag suspicious patterns, enforce limits, and maintain traceable logs." />
      <Card title="Audit-ready Recordkeeping" tag="Records" desc="Order mapping, invoice/receipt storage, and reconciliation artifacts per event." />
        </div>
      </Section>

  <Section title="Next step" subtitle="Tell us your target markets and monthly volume.">
    <CTA />
  </Section>

    </main>
  );
}
