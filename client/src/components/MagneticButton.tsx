// Letzimpact — Neon Atelier
// A magnetic CTA button with gradient border + soft pull-toward-cursor effect.

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  // visual variants
  variant?: "solid" | "ghost";
  // pulling strength (0..1)
  strength?: number;
  // anchor target
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "solid",
  strength = 0.35,
  target,
  rel,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const innerX = useTransform(springX, (v) => v * 0.4);
  const innerY = useTransform(springY, (v) => v * 0.4);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[14px] font-semibold tracking-tight select-none transition-colors sm:px-7 sm:py-3.5 sm:text-[15px]";
  const visual =
    variant === "solid"
      ? "text-white"
      : "text-white/85 hover:text-white";

  const Inner = (
    <motion.span
      style={{ x: innerX, y: innerY }}
      className="relative z-10 flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const SolidBg =
    variant === "solid" ? (
      <>
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-95 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(115deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
          }}
        />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-90"
          style={{
            background:
              "linear-gradient(115deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
          }}
        />
      </>
    ) : (
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-white/[0.04] backdrop-blur-md ring-1 ring-inset ring-white/15 transition-colors group-hover:bg-white/[0.07]"
      />
    );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={cn(base, visual, className)}
        style={{ x: springX, y: springY }}
      >
        {SolidBg}
        {Inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(base, visual, className)}
      style={{ x: springX, y: springY }}
    >
      {SolidBg}
      {Inner}
    </motion.button>
  );
}
