import { useEffect, useRef, useState } from "react";
import { projects } from "../config";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setActive(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        min-h-dvh flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 py-20
        section-tint-a
      "
    >
      {/* HEADER */}
      <SectionHeader title="Projects" prompt="PROJECTS" />

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-[var(--amber)]/40
              p-4 rounded-md
              hover-border-accent
              hover:bg-[var(--amber)]/5
              transition-colors duration-200
            "
            style={{
              opacity:    active ? 1 : 0,
              transform:  active ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              transitionDelay: active ? `${index * 100}ms` : "0ms",
            }}
          >
            {/* THUMBNAIL or PLACEHOLDER */}
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.alt}
                className="
                  w-full h-36 sm:h-40
                  object-cover
                  border border-[var(--amber)]/20
                  mb-4
                  rounded
                "
              />
            ) : (
              <div
                className="
                  w-full h-36 sm:h-40
                  bg-black/40
                  border border-[var(--amber)]/20
                  mb-4
                  flex items-center justify-center
                  text-[var(--amber)]/40
                  text-sm
                "
              >
                Thumbnail
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl text-[var(--amber)] mb-2">{project.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-[var(--amber)]/80 text-sm">
              {project.description}
            </p>

            {/* TECH TAGS */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-xs
                      border border-[var(--tron)]/40
                      text-[var(--tron)]/80
                      px-2 py-0.5
                      rounded
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
