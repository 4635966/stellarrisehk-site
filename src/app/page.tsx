import GradientBg from "../components/GradientBg";
import Section from "../components/Section";
import Card from "../components/Card";
import CTA from "../components/CTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <GradientBg />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Compliance-first • International distribution • Event tech
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Ticketing operations, powered by <span className="text-white/90">modern event technology</span>.
          </h1>
          <p className="mt-5 text-white/65 max-w-2xl">
            StellarRise Event Technology Limited provides event ticketing and entertainment technology services,
            focusing on cross-border distribution, risk controls, and reliable operational execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/solutions" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium">
              Explore Solutions
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <Section
        title="Core categories"
        subtitle="From ticket distribution to operations, we keep the flow secure and scalable."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            tag="Ticketing"
            title="Event Ticket Distribution"
            desc="International distribution workflows for concerts, sports, and live entertainment—optimized for speed, reliability, and market-specific rules."
          />
          <Card
            tag="Technology"
            title="Operational Tooling"
            desc="Lightweight systems and integrations that streamline listing, allocation, fulfillment, and reporting."
          />
          <Card
            tag="Risk"
            title="Compliance & Anti-Fraud"
            desc="Compliance-first processes: KYC-aware workflows, anomaly detection, vendor controls, and audit-ready recordkeeping."
          />
        </div>
      </Section>

      <Section
        title="Why StellarRise"
        subtitle="A modern, disciplined approach to ticketing operations."
      >
        <div className="grid gap-4 md:grid-cols-4">
          <Card title="Fast setup" desc="Start with a lean operational flow and scale as volume grows." />
          <Card title="Data clarity" desc="Clean reporting and traceability across markets and channels." />
          <Card title="Secure execution" desc="Risk controls embedded in the workflow—not bolted on." />
          <Card title="International-ready" desc="Multi-market distribution mindset from day one." />
        </div>

        <div className="mt-8">
          <CTA />
        </div>
      </Section>
    </main>
  );
}
