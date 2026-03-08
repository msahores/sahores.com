"use client";

import { useCallback, useEffect, useState } from "react";

const COLORS = ["#c4956a", "#a06b3e", "#8b5e34", "#d4a574", "#b8845a"];
const COUNT = 12;
const DRIFT = 6;

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function initial() {
  return Array.from({ length: COUNT }, () => randomColor());
}

export function GridMark() {
  const [colors, setColors] = useState(() => initial());
  const [offsets, setOffsets] = useState(() => new Array(COUNT).fill(0));

  const nudge = useCallback((index: number, direction: 1 | -1) => {
    setOffsets((prev) => {
      const next = [...prev];
      next[index] = direction * DRIFT;
      return next;
    });

    setTimeout(() => {
      setOffsets((prev) => {
        const next = [...prev];
        next[index] = 0;
        return next;
      });

      const neighbor = index + direction;
      if (neighbor >= 0 && neighbor < COUNT && Math.random() > 0.3) {
        setTimeout(() => nudge(neighbor, direction), 200);
      }
    }, 800 + Math.random() * 400);
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColors((prev) => {
        const next = [...prev];
        const i = Math.floor(Math.random() * COUNT);
        next[i] = randomColor();
        return next;
      });
    }, 1200);

    const moveInterval = setInterval(() => {
      const i = Math.floor(Math.random() * COUNT);
      const dir = Math.random() > 0.5 ? 1 : -1;
      nudge(i, dir as 1 | -1);
    }, 2500);

    return () => {
      clearInterval(colorInterval);
      clearInterval(moveInterval);
    };
  }, [nudge]);

  return (
    <div className="flex w-full items-center" role="img" aria-hidden="true">
      {colors.map((color, i) => (
        <div
          key={i}
          className="h-2 w-2 shrink-0 rounded-[1px] sm:h-2.5 sm:w-2.5"
          style={{
            backgroundColor: color,
            marginLeft: i === 0 ? 0 : Math.round(Math.pow(i, 1.8)),
            transform: `translateX(${offsets[i]}px)`,
            transition:
              "background-color 1.5s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      ))}
    </div>
  );
}
