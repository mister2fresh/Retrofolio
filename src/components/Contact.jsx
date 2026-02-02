import { links, contactForm } from "../config";
import { ICONS } from "../icons";

export default function Contact() {
  const showGitHub   = !!links.github;
  const showLinkedIn = !!links.linkedin;
  const showEmail    = !!links.email;
  const showForm     = !!contactForm.endpoint;

  return (
    <section
      id="contact"
      className="
        min-h-screen flex flex-col items-center justify-center
        px-8 py-20
        section-tint-b
      "
    >
      {/* HEADER */}
      <div className="section-header-block w-full max-w-3xl text-center">
        <h2 className="text-4xl dual-header">Contact</h2>

        <div className="dual-divider">
          ───────────────────────────────────────────────
        </div>

        <div className="dual-prompt">
          CONTACT &gt;<span className="cursor-cyan">█</span>
        </div>
      </div>

      {/* TOP ROW — email box + social icons */}
      <div className="flex flex-col sm:flex-row gap-10 items-start mt-4">

        {/* ASCII CONTACT BOX — only shown when email is configured */}
        {showEmail && (
          <pre
            className="
              text-sm leading-relaxed
              whitespace-pre overflow-x-auto
              text-[var(--crt-text)]
            "
          >
            {[
              "+--------------------------------------------------+",
              `|  Email: ${links.email.padEnd(40)}|`,
              "+--------------------------------------------------+",
            ].join("\n")}
          </pre>
        )}

        {/* SOCIAL ICON COLUMN */}
        <div className="flex flex-col gap-6 text-3xl text-[var(--tron)]">
          {showGitHub && (
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <ICONS.FaGithub className="hover-flicker neon-tron phosphor-bloom" />
            </a>
          )}
          {showLinkedIn && (
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <ICONS.FaLinkedin className="hover-flicker neon-tron phosphor-bloom" />
            </a>
          )}
        </div>
      </div>

      {/* CONTACT FORM — only rendered when an endpoint is configured */}
      {showForm && (
        <form
          action={contactForm.endpoint}
          method="POST"
          className="
            w-full max-w-md mt-10
            border border-[var(--tron)]
            p-4
            bg-black/40
            text-[var(--crt-text)]
            font-mono text-sm
            shadow-[0_0_8px_var(--tron)]
          "
        >
          <input type="hidden" name="_captcha" value="true" />

          {/* NAME */}
          <label className="block mb-3">
            <span className="text-[var(--tron)]">NAME:</span>
            <input
              type="text"
              name="name"
              required
              className="
                w-full mt-1 p-2
                bg-black/30
                border border-[var(--tron)]/50
                text-[var(--crt-text)]
                focus:outline-none
                focus:border-[var(--tron)]
                focus:shadow-[0_0_6px_var(--tron)]
                transition-all duration-200
              "
            />
          </label>

          {/* EMAIL */}
          <label className="block mb-3">
            <span className="text-[var(--tron)]">EMAIL:</span>
            <input
              type="email"
              name="email"
              required
              className="
                w-full mt-1 p-2
                bg-black/30
                border border-[var(--tron)]/50
                text-[var(--crt-text)]
                focus:outline-none
                focus:border-[var(--tron)]
                focus:shadow-[0_0_6px_var(--tron)]
                transition-all duration-200
              "
            />
          </label>

          {/* MESSAGE */}
          <label className="block mb-4">
            <span className="text-[var(--tron)]">MESSAGE:</span>
            <textarea
              name="message"
              rows="4"
              required
              className="
                w-full mt-1 p-2
                bg-black/30
                border border-[var(--tron)]/50
                text-[var(--crt-text)]
                focus:outline-none
                focus:border-[var(--tron)]
                focus:shadow-[0_0_6px_var(--tron)]
                transition-all duration-200
              "
            />
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              px-4 py-2
              border border-[var(--tron)]
              text-[var(--tron)]
              hover-accent hover-border-accent
              bg-black/40
              font-mono tracking-wide
              transition-colors duration-200
            "
          >
            SEND &gt;
          </button>
        </form>
      )}
    </section>
  );
}
