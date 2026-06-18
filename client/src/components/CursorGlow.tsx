// LëtzImpact — Neon Atelier
// A subtle gradient bloom that follows the user's cursor across the page.
// Adds depth + motion personality without being a real cursor replacement.

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Disable on devices without a fine pointer (touch / mobile)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.08;
      current.current.y += dy * 0.08;
      const el = ref.current;
      if (el) {
        el.style.transform = `translate3d(${current.current.x - 240}px, ${current.current.y - 240}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[480px] w-[480px] rounded-full opacity-60 blur-3xl mix-blend-screen [@media(pointer:fine)]:block"
      style={{
        background:
          "radial-gradient(closest-side, rgba(236,18,216,0.35), rgba(162,80,227,0.20) 45%, rgba(76,201,240,0.15) 70%, transparent 80%)",
      }}
    />
  );
}
