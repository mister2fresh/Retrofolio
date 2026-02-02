import { owner } from "../config";

// Render the ASCII box dynamically so it always stays aligned
// regardless of how many lines or what text the user puts in config.
function buildBioBox(lines) {
  const WIDTH = 50; // inner width (excluding the | borders)
  const top    = "+" + "─".repeat(WIDTH) + "+";
  const bottom = top;
  const rows   = lines.map((line) => {
    const padded = line.padEnd(WIDTH);
    return "|  " + padded.slice(0, WIDTH - 2) + "|";
  });
  // Add an empty line before the closing border for breathing room
  rows.push("|" + " ".repeat(WIDTH) + "|");
  return [top, ...rows, bottom].join("\n");
}

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-[100svh]
        flex flex-col items-center justify-center
        px-6 py-16
        section-tint-a
      "
    >
      {/* HEADER */}
      <div className="section-header-block w-full max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl dual-header">About Me</h2>

        <div className="dual-divider">
          ───────────────────────────────────────────────
        </div>

        <div className="dual-prompt">
          ABOUT &gt;<span className="cursor-cyan">█</span>
        </div>
      </div>

      {/* ASCII BIO — generated from config */}
      <pre
        className="
          text-xs sm:text-base
          leading-relaxed
          whitespace-pre
          overflow-x-auto
          max-w-full
          mt-4
          text-[var(--crt-text)]
        "
      >
        {buildBioBox(owner.bio)}
      </pre>
    </section>
  );
}
