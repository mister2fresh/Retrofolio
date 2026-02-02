export default function Footer() {
  return (
    <footer
      className="
        w-full py-4
        text-center font-mono text-xs
        text-[var(--crt-text)]
        opacity-80
        bg-black/60
      "
    >
      <div
        className="
          leading-tight inline-block text-left
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
    </footer>
  );
}
