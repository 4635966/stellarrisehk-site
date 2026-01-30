import Link from "next/link";

export default function CTA() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/6 via-white/4 to-white/6 p-7">
      <div className="text-white text-lg font-semibold">Ready to scale ticketing with a compliance-first tech stack?</div>
      <div className="mt-2 text-white/60 text-sm">
        Share your target markets, event types, and expected monthly volume. We’ll propose an operational flow and integration plan.
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/contact" className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium">
          Contact Us
        </Link>
        <Link href="/compliance" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
          View Compliance
        </Link>
      </div>
    </div>
  );
}
