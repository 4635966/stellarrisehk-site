import GradientBg from "../../components/GradientBg";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function Contact() {
  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <GradientBg />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            Tell us your target markets, event types, and expected monthly volume. We’ll respond with a proposed operational flow.
          </p>
        </div>
      </div>

      <Section title="Get in touch" subtitle="Email us or send a short brief.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Email" desc="youngjianpd@gmail.com" />
          <Card title="Domain" desc="stellarrisehk.com" />
          <Card title="Response time" desc="Typically within 1–2 business days." />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-white font-semibold">Brief template</div>
          <div className="mt-2 text-sm text-white/60 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Target markets (e.g., SG/HK/JP/EU/US)</li>
              <li>Event types (concert/sports/festival)</li>
              <li>Monthly ticket volume estimate</li>
              <li>Current workflow (manual / platform / mixed)</li>
              <li>Any compliance constraints or partner requirements</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
