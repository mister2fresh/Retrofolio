# Retrofolio

A retro CRT-aesthetic portfolio. Scanlines, amber phosphor glow, tron-cyan accents — built with React, Vite, and Tailwind CSS.

Edit one file (`src/config.js`) and you're live.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)

---

## Quick Start

```bash
git clone <repo-url>
cd retrofolio
npm install
npm run dev
```

Opens at `http://localhost:5173` with placeholder content.

---

## Configuration

Everything lives in `src/config.js`:

| Section | Controls |
|---|---|
| `owner` | Name, title, tagline, bio, headshot |
| `links` | GitHub, LinkedIn, email, resume |
| `contactForm` | FormSubmit endpoint |
| `skills` | Categorized icon grid |
| `projects` | Project cards |

```js
export const owner = {
  name: "Jane Doe",
  title: "Full-Stack Engineer",
  tagline: "Builder · Learner · Creator",
  photoPath: "./assets/photo.png",
  bio: [
    "I build things that solve problems.",
    "Obsessed with clean code and",
    "user experience.",
  ],
};
```

Set any value to `null` or `""` to hide that section — no code changes needed:

```js
photoPath: null,            // hides hero headshot
links.resume: null,         // hides resume nav link
contactForm.endpoint: null, // hides contact form
links.email: "",            // hides email line
```

---

## Adding Skill Icons

1. Import it in `src/icons.js`:
```js
import { SiRust } from "react-icons/si";
export const ICONS = { ...existing, SiRust };
```

2. Reference it in `config.js`:
```js
{ icon: "SiRust", name: "Rust" },
```

Full icon list: [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

---

## Project Thumbnails

Drop images in `src/assets/` and point to them in config:

```js
thumbnail: "./assets/my-project.png",
```

Set `thumbnail: null` for the default placeholder.

---

## Contact Form

Uses [FormSubmit](https://formsubmit.co/) — no backend needed.

1. Activate your email at [formsubmit.co](https://formsubmit.co/)
2. Paste the endpoint into config:
```js
export const contactForm = {
  endpoint: "https://formsubmit.co/your-unique-id",
};
```

---

## Deployment

| Platform | Notes |
|---|---|
| Vercel | `vercel deploy` — works out of the box |
| Netlify | Build: `npm run build`, publish: `dist` |
| GitHub Pages | Set `base` in `vite.config.js` to your repo name |

---

## Structure

```
src/
├── config.js          # the only file you need to edit
├── icons.js           # icon registry
├── App.jsx
├── main.jsx
├── index.css          # CRT theme
├── assets/
└── components/
    ├── Header.jsx     # sticky directory-tree nav
    ├── Hero.jsx       # name, tagline, photo, socials
    ├── About.jsx      # ASCII bio box
    ├── Skills.jsx     # icon grid with scroll reveal
    ├── Projects.jsx   # project cards
    ├── Contact.jsx    # email, socials, form
    ├── Footer.jsx     # credits
    └── Typewriter.jsx # typewriter text effect
```

---

## License

MIT