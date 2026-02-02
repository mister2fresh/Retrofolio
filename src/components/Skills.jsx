import { useEffect, useRef, useState } from "react";
import { skills } from "../config";
import { ICONS } from "../icons";

export default function Skills() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        min-h-screen flex flex-col items-center justify-center
        px-8 py-20
        section-tint-b
      "
    >
      {/* HEADER */}
      <div className="section-header-block w-full max-w-4xl text-center">
        <h2 className="text-4xl dual-header">Skills</h2>

        <div className="dual-divider">
          ───────────────────────────────────────────────
        </div>

        <div className="dual-prompt">
          SKILLS &gt;<span className="cursor-cyan">█</span>
        </div>
      </div>

      {/* ASCII FRAME */}
      <pre className="text-base leading-relaxed mt-2 mb-6 text-[var(--crt-text)]">
        {String.raw`+--------------------------------------------------+
|  Tools, languages, and technologies I use to     |
|  build systems that feel alive.                  |
+--------------------------------------------------+`}
      </pre>

      {/* CATEGORIZED GRID — driven entirely by config */}
      <div className="w-full max-w-4xl mt-4 flex flex-col gap-8">
        {skills.map((category, catIndex) => {
          return (
            <div
              key={category.label}
              className="transition-all duration-700 ease-out"
              style={{
                opacity:    active ? 1 : 0,
                transform:  active ? "translateY(0)" : "translateY(24px)",
                transitionDelay: active ? `${catIndex * 120}ms` : "0ms",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[var(--crt-text)] text-xs tracking-widest font-mono opacity-60">
                  [{category.ascii}]
                </span>
                <span className="text-[var(--crt-text)] text-xs font-mono opacity-30 flex-1">
                  {"─".repeat(60)}
                </span>
              </div>

              {/* Icon row */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pl-1">
                {category.items.map((item, itemIndex) => {
                  const Icon = ICONS[item.icon];

                  // Graceful fallback: if icon name is invalid, show a "?" placeholder
                  if (!Icon) {
                    return (
                      <div key={item.name} className="flex flex-col items-center gap-1.5">
                        <span className="text-4xl text-[var(--amber)]/40">?</span>
                        <span className="text-[var(--crt-text)] text-xs font-mono opacity-50 tracking-wider">
                          {item.name}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-1.5 transition-all duration-500 ease-out"
                      style={{
                        opacity:   active ? 1 : 0,
                        transform: active ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
                        transitionDelay: active ? `${catIndex * 120 + itemIndex * 70}ms` : "0ms",
                      }}
                    >
                      <Icon
                        className="
                          text-4xl
                          !text-[var(--tron)]
                          neon-tron dual-glow hover-flicker
                          cursor-default
                        "
                      />
                      <span className="text-[var(--crt-text)] text-xs font-mono opacity-50 tracking-wider">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
