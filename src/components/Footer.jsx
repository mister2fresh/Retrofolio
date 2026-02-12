export default function Footer() {
  return (
    <footer
      className="
        w-full py-4
        text-center font-mono text-xs
        text-[var(--crt-text)]
        opacity-80
        section-tint-b
        px-4
      "
    >
      {/* Desktop: ASCII box */}
      <div
        className="
          hidden sm:inline-block
          leading-tight text-left
          whitespace-pre overflow-x-auto
        "
      >
{String.raw`
+----------------------------------+
|  BUILT WITH                      |
|    React        Vite             |
|    Tailwind     React Icons      |
+----------------------------------+
`}
      </div>

      {/* Mobile: simple text */}
      <div className="sm:hidden leading-relaxed">
        <p className="text-[var(--tron)] mb-1">BUILT WITH</p>
        <p>React · Vite · Tailwind · React Icons</p>
      </div>
    </footer>
  );
}
