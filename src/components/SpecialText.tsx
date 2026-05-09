import { useEffect, useState } from "react";
import { motion } from "motion/react";

const CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

interface SpecialTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function SpecialText({ text, className = "", speed = 40 }: SpecialTextProps) {
  const [displayText, setDisplayText] = useState("\u00A0".repeat(text.length));

  useEffect(() => {
    let iteration = 0;
    setDisplayText("\u00A0".repeat(text.length));

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, i) => (i < iteration ? char : randomChar()))
          .join("");
      });

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`inline-block whitespace-nowrap ${className}`}
      aria-label={text}
    >
      {displayText}
    </motion.span>
  );
}
