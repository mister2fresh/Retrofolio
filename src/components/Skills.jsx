import { useEffect, useRef, useState } from "react";
import { skills } from "../config";
import { ICONS } from "../icons";
import SectionHeader from "./SectionHeader";

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
        min-h-dvh flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 py-20
        section-tint-b
      "
    >
      {/* HEADER */}
      <SectionHeader title="Skills" prompt="SKILLS" />

      {/* ASCII FRAME — hidden on mobile, centered on md+ */}
      <pre
        className="
          hidden md:block
          text-base leading-relaxed
          mt-2 mb-6
          mx-auto
          text-[var(--crt-text)]
        "
      >
        {String.raw`+--------------------------------------------------+
|  Tools, languages, and technologies I use to     |
|  build systems that feel alive.                  |
+--------------------------------------------------+`}
      </pre>

      {/* Mobile subtitle */}
      <p
        className="
          md:hidden
          text-sm text-[var(--crt-text)]/80
          font-mono text-center
          mt-2 mb-6
        "
      >
        Tools, languages, and technologies I use to build systems that feel alive.
      </p>

      {/* CATEGORIZED GRID — centered */}
      <div className="w-full max-w-4xl mt-4 flex flex-col items-center gap-8">
        {skills.map((category, catIndex) => {
          return (
            <div
              key={category.label}
              className="w-full flex flex-col items-center transition-all duration-700 ease-out"
              style={{
                opacity:    active ? 1 : 0,
                transform:  active ? "translateY(0)" : "translateY(24px)",
                transitionDelay: active ? `${catIndex * 120}ms` : "0ms",
              }}
            >
              {/* Category header — centered with dashes on both sides */}
              <div className="flex items-center gap-3 mb-3 w-full max-w-lg">
                <span className="text-[var(--crt-text)] text-xs font-mono opacity-30 flex-1 overflow-hidden text-right">
                  ──────────────────────────
                </span>
                <span className="text-[var(--crt-text)] text-xs tracking-widest font-mono opacity-60 shrink-0">
                  [{category.ascii}]
                </span>
                <span className="text-[var(--crt-text)] text-xs font-mono opacity-30 flex-1 overflow-hidden">
                  ──────────────────────────
                </span>
              </div>

              {/* Icon row — centered */}
              <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = ICONS[item.icon];

                  if (!Icon) {
                    return (
                      <div key={item.name} className="flex flex-col items-center gap-1.5">
                        <span className="text-3xl sm:text-4xl text-[var(--amber)]/40">?</span>
                        <span className="text-[var(--crt-text)] text-[10px] sm:text-xs font-mono opacity-50 tracking-wider">
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
                          text-3xl sm:text-4xl
                          !text-[var(--tron)]
                          neon-tron dual-glow hover-flicker
                          cursor-default
                        "
                      />
                      <span className="text-[var(--crt-text)] text-[10px] sm:text-xs font-mono opacity-50 tracking-wider">
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