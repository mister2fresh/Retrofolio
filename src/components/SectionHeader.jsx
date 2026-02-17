export default function SectionHeader({ title, prompt, maxWidth = "max-w-4xl" }) {
  return (
    <div className={`section-header-block w-full ${maxWidth} text-center`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl dual-header">{title}</h2>
      <div className="dual-divider" aria-hidden="true" />
      <div className="dual-prompt text-center">
        {prompt} &gt;<span className="cursor-cyan">█</span>
      </div>
    </div>
  );
}
