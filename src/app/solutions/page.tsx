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
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Solutions</h1>
          <p className="mt-4 max-w-2xl text-white/65">Blueprints for international ticketing distribution with scalable operations and clear controls.</p>
        </div>
      </div>

      <Section title="What we deliver">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Multi-market Distribution Flow" tag="Distribution" desc="A standardized flow to source, allocate, fulfill, and reconcile across markets and channels." />
      <Card title="Allocation & Fulfillment Ops" tag="Operations" desc="Operational playbooks for seat/quantity allocation, fulfillment timing, and exception handling." />
      <Card title="Reconciliation & Reporting" tag="Reporting" desc="Audit-ready records, order mapping, chargeback readiness, and clear margin visibility." />
        </div>
      </Section>

  <Section title="Next step" subtitle="Tell us your target markets and monthly volume.">
    <CTA />
  </Section>

    </main>
  );
}
