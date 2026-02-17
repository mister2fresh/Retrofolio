import { owner } from "../config";
import SectionHeader from "./SectionHeader";

// Render the ASCII box dynamically so it always stays aligned
function buildBioBox(lines) {
  const WIDTH = 50;
  const top    = "+" + "─".repeat(WIDTH) + "+";
  const bottom = top;
  const rows   = lines.map((line) => {
    const padded = line.padEnd(WIDTH);
    return "|  " + padded.slice(0, WIDTH - 2) + "|";
  });
  rows.push("|" + " ".repeat(WIDTH) + "|");
  return [top, ...rows, bottom].join("\n");
}

// Convert bio lines into paragraphs for mobile display.
// Empty strings in the bio array act as paragraph breaks.
function buildBioParagraphs(lines) {
  const paragraphs = [];
  let current = [];

  for (const line of lines) {
    if (line.trim() === "") {
      if (current.length > 0) {
        paragraphs.push(current.join(" "));
        current = [];
      }
    } else {
      current.push(line.trim());
    }
  }
  if (current.length > 0) {
    paragraphs.push(current.join(" "));
  }

  return paragraphs;
}

export default function About() {
  const paragraphs = buildBioParagraphs(owner.bio);

  return (
    <section
      id="about"
      className="
        min-h-dvh
        flex flex-col items-center justify-center
        px-4 sm:px-6 py-16
        section-tint-a
      "
    >
      {/* HEADER */}
      <SectionHeader title="About Me" prompt="ABOUT" />

      {/* BIO */}
      <div className="w-full max-w-xl mt-4 flex justify-center">

        {/* Mobile: flowing text with CRT-styled border */}
        <div
          className="
            md:hidden
            border border-[var(--amber)]/30
            rounded p-4
            text-sm leading-relaxed
            text-[var(--crt-text)]
            font-mono
          "
        >
          {paragraphs.map((p, i) => (
            <p key={i} className={i < paragraphs.length - 1 ? "mb-3" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* Desktop: original ASCII box — centered */}
        <pre
          className="
            hidden md:block
            text-sm lg:text-base
            leading-relaxed
            whitespace-pre
            mx-auto
            text-[var(--crt-text)]
          "
        >
          {buildBioBox(owner.bio)}
        </pre>
      </div>
    </section>
  );
}