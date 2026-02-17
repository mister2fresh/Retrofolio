import { useState } from "react";
import { links, contactForm } from "../config";
import { ICONS } from "../icons";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const showGitHub   = !!links.github;
  const showLinkedIn = !!links.linkedin;
  const showEmail    = !!links.email;
  const showForm     = !!contactForm.endpoint;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="
        min-h-dvh flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 py-20
        section-tint-b
      "
    >
      {/* HEADER */}
      <SectionHeader title="Contact" prompt="CONTACT" maxWidth="max-w-3xl" />

      {/* TOP ROW — email box + social icons */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start mt-4">

        {/* EMAIL — simple text on mobile, ASCII box on sm+ */}
        {showEmail && (
          <>
            <p className="sm:hidden text-sm font-mono text-[var(--crt-text)]">
              Email: {links.email}
            </p>
            <pre
              className="
                hidden sm:block
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
          </>
        )}

        {/* SOCIAL ICON COLUMN — row on mobile, column on sm+ */}
        <div className="flex sm:flex-col gap-6 text-3xl text-[var(--tron)]">
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

      {/* CONTACT FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
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
            disabled={status === "sending" || status === "sent"}
            className="
              px-4 py-2
              border border-[var(--tron)]
              text-[var(--tron)]
              hover-accent hover-border-accent
              bg-black/40
              font-mono tracking-wide
              transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {{ idle: "SEND >", sending: "SENDING...", sent: "SENT!", error: "ERROR — RETRY" }[status]}
          </button>
        </form>
      )}
    </section>
  );
}