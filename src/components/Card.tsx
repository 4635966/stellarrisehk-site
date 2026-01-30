export default function Card({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
      {tag && (
        <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          {tag}
        </div>
      )}
      <div className="text-white font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</div>
    </div>
  );
}
