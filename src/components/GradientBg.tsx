export default function GradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/25 via-cyan-400/20 to-indigo-500/25 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-cyan-400/18 via-indigo-500/18 to-fuchsia-500/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black" />
    </div>
  );
}
