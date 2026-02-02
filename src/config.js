/**
 * ─────────────────────────────────────────────────────
 *  PORTFOLIO CONFIG
 *  This is the only file you need to edit.
 *  Fill in your own details below and you're live.
 * ─────────────────────────────────────────────────────
 */

export const owner = {
  name: "YOUR NAME",            // Displayed as the hero heading
  title: "Software Engineer",   // Line below your name
  tagline: "Builder · Learner · Creator", // Sub-tagline (use · as separator)
  photoPath: null,              // Path to your headshot, e.g. "./assets/photo.png"
                                // Set to null to hide the photo entirely.
  bio: [
    // Each string = one line inside the ASCII bio box.
    // Keep lines under ~50 chars so the box stays aligned.
    "Replace this with your own bio.",
    "Talk about what you build,",
    "what drives you, and what",
    "makes you unique.",
  ],
};

export const links = {
  github:   "",   // e.g. "https://github.com/yourusername"
  linkedin: "",   // e.g. "https://linkedin.com/in/yourusername"
  email:    "",   // e.g. "you@example.com"
  resume:   "/resume.pdf",   // URL or relative path to your resume PDF, e.g. "/resume.pdf"
                  // Set to null to hide the resume link entirely.
};

/**
 * Contact form backend.
 * This template uses FormSubmit (https://formsubmit.co/) out of the box.
 *   1. Go to formsubmit.co
 *   2. Enter your email → you'll get an activation link
 *   3. Activate, then paste your unique endpoint below.
 *
 * Set to null to hide the contact form entirely.
 */
export const contactForm = {
  endpoint: null,   // e.g. "https://formsubmit.co/your-unique-id"
};

/**
 * Skills — grouped by category.
 * Each icon name maps to a react-icons import (see components/Skills.jsx
 * for the full supported list). To add a new icon, add its import there.
 */
export const skills = [
  {
    label: "Languages",
    ascii: "LANG",
    items: [
      { icon: "FaJs",         name: "JavaScript" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "FaPython",     name: "Python" },
    ],
  },
  {
    label: "Frontend",
    ascii: "FRNT",
    items: [
      { icon: "FaReact",        name: "React" },
      { icon: "SiNextdotjs",    name: "Next.js" },
      { icon: "FaHtml5",        name: "HTML5" },
      { icon: "FaCss3Alt",      name: "CSS3" },
      { icon: "SiTailwindcss",  name: "Tailwind" },
    ],
  },
  {
    label: "Backend",
    ascii: "BACK",
    items: [
      { icon: "FaNodeJs",   name: "Node.js" },
      { icon: "SiExpress",  name: "Express" },
      { icon: "SiGraphql",  name: "GraphQL" },
      { icon: "SiNpm",      name: "npm" },
    ],
  },
  {
    label: "Databases",
    ascii: "DATA",
    items: [
      { icon: "SiPostgresql", name: "PostgreSQL" },
      { icon: "SiMongodb",    name: "MongoDB" },
      { icon: "SiRedis",      name: "Redis" },
    ],
  },
  {
    label: "DevOps & Tools",
    ascii: "OPS·",
    items: [
      { icon: "FaGitAlt",   name: "Git" },
      { icon: "FaDocker",   name: "Docker" },
      { icon: "FaAws",      name: "AWS" },
      { icon: "SiLinux",    name: "Linux" },
      { icon: "SiPostman",  name: "Postman" },
      { icon: "SiJest",     name: "Jest" },
    ],
  },
  {
    label: "Design",
    ascii: "DSGN",
    items: [
      { icon: "SiFigma", name: "Figma" },
    ],
  },
];

/**
 * Projects — each entry becomes one card.
 * thumbnail: path to an image file in src/assets/, or null for a placeholder.
 */
export const projects = [
  {
    href: "https://your-project-link.com",
    thumbnail: null,            // e.g. "./assets/project1.png"  (relative to src/)
    alt: "Project 1 Thumbnail",
    title: "Project Title 1",
    description: "A short description of what this project does and what makes it interesting.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    href: "https://your-project-link.com",
    thumbnail: null,
    alt: "Project 2 Thumbnail",
    title: "Project Title 2",
    description: "Another short description. Keep it to 1–2 sentences.",
    tags: ["Python", "AWS", "Docker"],
  },
  {
    href: "https://your-project-link.com",
    thumbnail: null,
    alt: "Project 3 Thumbnail",
    title: "Project Title 3",
    description: "What did you build? What problem did it solve?",
    tags: ["Next.js", "TypeScript", "Redis"],
  },
];
