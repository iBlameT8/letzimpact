// Letzimpact — Neon Atelier
// Persistent WhatsApp action button bottom-right, with gradient halo + ping ring.

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/brand";
import { WhatsAppGlyph } from "@/components/SiteNav";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 16,
        pointerEvents: show ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to Letzimpact on WhatsApp"
      className="group fixed right-4 z-40 inline-flex items-center gap-3 rounded-full bg-[#0E0C18] px-3 py-3 ring-1 ring-white/15 backdrop-blur-xl sm:bottom-7 sm:right-7 sm:gap-3 sm:px-4"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <span
        aria-hidden
        className="absolute -inset-px rounded-full opacity-80 blur-md transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(115deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
        }}
      />
      <span
        aria-hidden
        className="absolute -inset-px rounded-full"
        style={{
          background:
            "linear-gradient(115deg, #EC12D8 0%, #A250E3 50%, #4CC9F0 100%)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-[1.5px] rounded-full bg-[#0E0C18]"
      />
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[#25D366]">
        <WhatsAppGlyph className="h-4 w-4 text-white" />
      </span>
      <span className="relative hidden pr-1 font-display text-[14px] font-semibold tracking-tight text-white sm:inline">
        Talk on WhatsApp
      </span>
    </motion.a>
  );
}
