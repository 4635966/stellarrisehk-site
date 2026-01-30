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
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Services</h1>
          <p className="mt-4 max-w-2xl text-white/65">Hands-on execution support: systems, process design, and operational delivery for ticketing businesses.</p>
        </div>
      </div>

      <Section title="What we deliver">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Operational Setup" tag="Setup" desc="From SOPs to tooling: we help you build an execution layer that stays consistent under volume." />
      <Card title="Lightweight Integrations" tag="Integration" desc="Connect order sources, internal sheets, and operational dashboards for traceability." />
      <Card title="Fulfillment Support" tag="Delivery" desc="Operational monitoring, exception management, and structured post-event reconciliation." />
        </div>
      </Section>

  <Section title="Next step" subtitle="Tell us your target markets and monthly volume.">
    <CTA />
  </Section>

    </main>
  );
}
