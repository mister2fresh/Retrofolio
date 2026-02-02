import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 120 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="font-mono text-white">
      {displayed}
      {!done && <span className="animate-pulse">|</span>}
    </span>
  );
}
