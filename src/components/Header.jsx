import { useState, useEffect } from "react";
import { owner, links } from "../config";

const NAV_LINKS = [
  { href: "#about",    label: "about/" },
  { href: "#skills",   label: "skills/" },
  { href: "#projects", label: "projects/" },
  { href: "#contact",  label: "contact/" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Derive a short "username" slug from the config name for the file-path aesthetic
  const slug = owner.name.toLowerCase().replace(/\s+/g, "");

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-[9999]
        bg-transparent
        font-mono
        pointer-events-none
      "
    >
      <nav className="py-3 px-6 text-[var(--crt-text)] pointer-events-auto w-fit">

        {/* FILE PATH ROOT */}
        <div className="text-[var(--tron)] mb-1">
          /home/{slug}/
        </div>

        {/* DIRECTORY TREE */}
        <div className="flex flex-col text-sm leading-tight">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  inline w-fit transition-colors duration-200
                  ${isActive
                    ? "text-[var(--tron)]"
                    : "hover:text-[var(--tron)]"
                  }
                `}
              >
                ├── {link.label}
              </a>
            );
          })}

          {/* Resume link — only rendered when configured */}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline w-fit hover:text-[var(--tron)] transition-colors duration-200"
            >
              └── resume.pdf
            </a>
          )}
        </div>

      </nav>
    </header>
  );
}
