import Typewriter from "./Typewriter";
import { owner, links } from "../config";
import { ICONS } from "../icons";

export default function Hero() {
  // Only show social icons if at least one link is configured
  const showGitHub   = !!links.github;
  const showLinkedIn = !!links.linkedin;
  const showSocials  = showGitHub || showLinkedIn;

  return (
    <section
      className="
        relative min-h-screen flex flex-col items-center justify-center
        crt-curved scanlines scanlines-animated bootup
      "
    >

      {/* LOADING TEXT (fades out) — visible md+ only, shown when photo is set */}
      {owner.photoPath && (
        <div
          className="
            hidden md:block
            absolute left-10 bottom-40
            text-[var(--amber)]/70 font-mono text-sm
            loading-text
          "
        >
          loading...
        </div>
      )}

      {/* PHOTO (fades in) — visible md+ only, conditional */}
      {owner.photoPath && (
        <img
          src={owner.photoPath}
          alt={`${owner.name} headshot`}
          className="
            hidden md:block
            absolute left-10 bottom-10
            w-28 h-28 rounded-full object-cover
            border-2 border-[var(--tron)]
            shadow-[0_0_12px_var(--tron)]
            no-crt
            boot-fade
          "
        />
      )}

      {/* NAME */}
      <h1
        className="
          text-[var(--amber)] glow-amber phosphor-bloom
          text-5xl font-bold
        "
      >
        <Typewriter text={owner.name.toUpperCase()} speed={140} />
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-xl text-[var(--amber)]/90 glow-amber text-center">
        {owner.title}
        &nbsp;•&nbsp;
        {owner.tagline}
      </p>

      {/* SOCIAL ICONS */}
      {showSocials && (
        <div
          className="
            flex gap-8 mt-10 text-4xl
            text-[var(--amber)] glow-amber
          "
        >
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
      )}
    </section>
  );
}
