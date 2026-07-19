"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}=+*^?#";

/**
 * Headline letters random characters se "decode" ho kar asal text
 * mein settle hoti hain — jaise system aapke business ko "samajh" raha ho.
 */
export function ScrambleText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState("");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const timeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = text.length * 3 + 20;

      const interval = setInterval(() => {
        frame++;
        const revealed = Math.floor((frame / totalFrames) * text.length);
        let output = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed || text[i] === " ") {
            output += text[i];
          } else {
            output += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(output);
        if (revealed >= text.length) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, 35);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{display || "\u00A0"}</span>;
}