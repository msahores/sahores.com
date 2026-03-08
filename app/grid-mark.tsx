"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const COLORS = ["#c4956a", "#a06b3e", "#8b5e34", "#d4a574", "#b8845a"];
const COUNT = 12;
const REPULSE_RADIUS = 100;
const REPULSE_STRENGTH = 30;

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function initial() {
  return Array.from({ length: COUNT }, () => randomColor());
}

export function GridMark() {
  const [colors, setColors] = useState(() => initial());
  const [offsets, setOffsets] = useState(() =>
    new Array(COUNT).fill(null).map(() => ({ x: 0, y: 0 }))
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const newOffsets = pixelRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - e.clientX;
      const dy = cy - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSE_RADIUS && dist > 0) {
        const force = (1 - dist / REPULSE_RADIUS) * REPULSE_STRENGTH;
        return {
          x: (dx / dist) * force,
          y: (dy / dist) * force,
        };
      }
      return { x: 0, y: 0 };
    });

    setOffsets(newOffsets);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffsets(new Array(COUNT).fill(null).map(() => ({ x: 0, y: 0 })));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

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
    <div
      ref={containerRef}
      className="flex w-full items-center"
      role="img"
      aria-hidden="true"
    >
      {colors.map((color, i) => (
        <div
          key={i}
          ref={(el) => { pixelRefs.current[i] = el; }}
          className="h-2 w-2 shrink-0 rounded-[1px] sm:h-2.5 sm:w-2.5"
          style={{
            backgroundColor: color,
            marginLeft: i === 0 ? 0 : Math.round(Math.pow(i, 1.8)),
            transform: `translate(${offsets[i].x}px, ${offsets[i].y}px)`,
            transition:
              "background-color 1.5s ease, transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      ))}
    </div>
  );
}
