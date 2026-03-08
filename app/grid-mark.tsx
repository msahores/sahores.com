"use client";

import { useEffect, useState } from "react";

const COLORS = ["#c4956a", "#a06b3e", "#8b5e34", "#d4a574", "#b8845a"];
const COUNT = 12;

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function initial() {
  return Array.from({ length: COUNT }, () => randomColor());
}

export function GridMark() {
  const [colors, setColors] = useState(() => initial());

  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prev) => {
        const next = [...prev];
        const i = Math.floor(Math.random() * COUNT);
        next[i] = randomColor();
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center" role="img" aria-hidden="true">
      {colors.map((color, i) => (
        <div
          key={i}
          className="h-2 w-2 shrink-0 rounded-[1px] sm:h-2.5 sm:w-2.5"
          style={{
            backgroundColor: color,
            marginLeft: i === 0 ? 0 : Math.round(Math.pow(i, 1.8)),
            transition: "background-color 1.5s ease",
          }}
        />
      ))}
    </div>
  );
}
