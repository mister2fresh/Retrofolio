# CRT Portfolio Template

A retro CRT-aesthetic portfolio built with **React + Vite + Tailwind CSS**. Scanlines, amber phosphor glow, tron-cyan accents — and the only file you ever need to touch is `src/config.js`.

![Stack](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Stack](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite)
![Stack](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)

---

## Quick Start

```bash
git clone <repo-url>
cd crt-portfolio
npm install
npm run dev
```

Open `http://localhost:5173` — you'll see the template with placeholder content.

---

## Customizing Your Portfolio

**Everything** personal lives in one place:

### `src/config.js`

| Section | What it controls |
|---|---|
| `owner` | Name, title, tagline, bio, headshot path |
| `links` | GitHub, LinkedIn, email, resume URL |
| `contactForm` | FormSubmit endpoint (set to `null` to hide the form) |
| `skills` | Categorized skill grid (icons + labels) |
| `projects` | Project cards (title, description, tags, thumbnail, link) |

#### Example — adding your info

```js
export const owner = {
  name: "Jane Doe",
  title: "Full-Stack Engineer",
  tagline: "Builder · Learner · Creator",
  photoPath: "./assets/photo.png",   // drop your headshot in src/assets/
  bio: [
    "I build things that solve problems.",
    "Obsessed with clean code and",
    "user experience.",
  ],
};
```

#### Hiding optional sections

Set the value to `null` or an empty string to hide it entirely — no code changes needed:

```js
photoPath: null,          // hides the hero headshot
links.resume: null,       // hides the resume nav link
contactForm.endpoint: null, // hides the contact form
links.email: "",          // hides the email line
```

---

## Adding a New Skill Icon

Two steps:

1. **Add the import** in `src/icons.js`:
   ```js
   import { SiRust } from "react-icons/si";

   export const ICONS = {
     // ... existing icons ...
     SiRust,   // ← add here
   };
   ```

2. **Reference it** in `src/config.js`:
   ```js
   { icon: "SiRust", name: "Rust" },
   ```

The full list of available icon names lives at [react-icons](https://react-icons.github.io/react-icons/).

---

## Adding Project Thumbnails

1. Drop your screenshot into `src/assets/` (e.g. `my-project.png`).
2. In `config.js`, point to it:
   ```js
   thumbnail: "./assets/my-project.png",
   ```

Set `thumbnail: null` to show the default placeholder box instead.

---

## Setting Up the Contact Form

This template uses [FormSubmit](https://formsubmit.co/) — no backend required.

1. Go to [formsubmit.co](https://formsubmit.co/).
2. Enter your email address.
3. Click the activation link they send you.
4. Copy your unique endpoint URL.
5. Paste it into `config.js`:
   ```js
   export const contactForm = {
     endpoint: "https://formsubmit.co/your-unique-id",
   };
   ```

The form includes built-in spam protection via FormSubmit's captcha.

---

## Deployment

| Platform | Notes |
|---|---|
| **Vercel** | `vercel deploy` — works out of the box |
| **Netlify** | Build command: `npm run build`, publish dir: `dist` |
| **GitHub Pages** | Set `base` in `vite.config.js` to your repo name if not at root |

---

## Project Structure

```
src/
├── config.js           ← ✏️  THE only file you need to edit
├── icons.js            ← icon registry (add new icons here)
├── App.jsx
├── main.jsx
├── index.css           ← CRT theme styles
├── assets/             ← drop images here
│   └── (your photos & screenshots)
└── components/
    ├── Header.jsx      ← sticky nav with directory-tree aesthetic
    ├── Hero.jsx        ← name, tagline, photo, social links
    ├── About.jsx       ← ASCII bio box
    ├── Skills.jsx      ← categorized icon grid with scroll reveal
    ├── Projects.jsx    ← project cards
    ├── Contact.jsx     ← email, socials, optional contact form
    ├── Footer.jsx      ← tech stack credits
    └── Typewriter.jsx  ← reusable typewriter text effect
```

---

## License

MIT — use it, fork it, ship it.
