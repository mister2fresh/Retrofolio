import Typewriter from "./Typewriter";
import { owner, links } from "../config";
import { ICONS } from "../icons";

export default function Hero() {
  const showGitHub   = !!links.github;
  const showLinkedIn = !!links.linkedin;
  const showSocials  = showGitHub || showLinkedIn;

  return (
    <section
      className="
        relative min-h-dvh flex flex-col items-center justify-center
        px-4 sm:px-6
        crt-curved scanlines scanlines-animated bootup
      "
    >

      {/* LOADING TEXT (fades out) — desktop only */}
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

      {/* PHOTO — mobile: centered above name; desktop: absolute bottom-left */}
      {owner.photoPath && (
        <img
          src={owner.photoPath}
          alt={`${owner.name} headshot`}
          className="
            md:hidden
            w-24 h-24 rounded-full object-cover
            border-2 border-[var(--tron)]
            shadow-[0_0_12px_var(--tron)]
            no-crt mb-6
            boot-fade
          "
        />
      )}
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
          text-3xl sm:text-4xl md:text-5xl font-bold
          text-center
        "
      >
        <Typewriter text={owner.name.toUpperCase()} speed={140} />
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-[var(--amber)]/90 glow-amber text-center">
        {owner.title}
        &nbsp;•&nbsp;
        {owner.tagline}
      </p>

      {/* SOCIAL ICONS */}
      {showSocials && (
        <div
          className="
            flex gap-8 mt-10 text-3xl md:text-4xl
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