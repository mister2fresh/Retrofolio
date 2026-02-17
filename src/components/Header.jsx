import { useState, useEffect } from "react";
import { owner, links, skills, projects, contactForm } from "../config";

const NAV_LINKS = [
  { href: "#about",    label: "about/" },
  ...(skills.length > 0   ? [{ href: "#skills",   label: "skills/"   }] : []),
  ...(projects.length > 0 ? [{ href: "#projects", label: "projects/" }] : []),
  ...(links.github || links.linkedin || links.email || contactForm.endpoint
    ? [{ href: "#contact", label: "contact/" }]
    : []),
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const slug = owner.name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-[9999]
        bg-transparent
        font-mono
        pointer-events-none
      "
    >
      <nav className="py-3 px-4 sm:px-6 text-[var(--crt-text)] pointer-events-auto w-fit">

        {/* FILE PATH ROOT — tappable on mobile to toggle menu */}
        <div
          className="text-[var(--tron)] mb-1 flex items-center gap-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span>/home/{slug}/</span>
          <span className="md:hidden text-xs opacity-60">
            {menuOpen ? "▾" : "▸"}
          </span>
        </div>

        {/* DIRECTORY TREE — always visible on md+, toggle on mobile */}
        <div
          className={`
            flex flex-col text-sm leading-tight
            transition-all duration-300 ease-out origin-top
            ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
            md:max-h-none md:opacity-100 md:overflow-visible
          `}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
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

          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
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