export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
        {subtitle && <p className="mt-3 text-white/65">{subtitle}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
