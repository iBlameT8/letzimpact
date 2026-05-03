// Letzimpact — Neon Atelier
// Floating glass navbar at the top. Smooth-scrolls to in-page sections,
// shows a WhatsApp CTA, and collapses to a glass sheet on mobile.

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS, waLink } from "@/lib/brand";
import { MagneticButton } from "@/components/MagneticButton";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Logo() {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group flex items-center gap-2.5"
    >
      {/* mini rocket-glyph mark */}
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
        <span
          aria-hidden
          className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-90"
          style={{
            background:
              "linear-gradient(130deg, #EC12D8, #A250E3 55%, #4CC9F0)",
          }}
        />
        <svg
          viewBox="0 0 24 24"
          className="relative h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#EC12D8" />
              <stop offset="55%" stopColor="#A250E3" />
              <stop offset="100%" stopColor="#4CC9F0" />
            </linearGradient>
          </defs>
          <path
            d="M5 15c0-3.5 2-7 7-11 5 4 7 7.5 7 11l-3 2-2-1-2 1-2-1-2 1-3-2Z"
            stroke="url(#lg)"
          />
          <circle cx="12" cy="9" r="1.4" stroke="url(#lg)" />
        </svg>
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-tight">
          {BRAND.name}
        </span>
        <span className="font-mono-acc text-[10px] uppercase text-white/45">
          social media · LU
        </span>
      </div>
    </a>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-5"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "bg-black/55 ring-1 ring-white/10 backdrop-blur-2xl"
              : "bg-white/[0.03] ring-1 ring-white/5 backdrop-blur-md"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => smoothScrollTo(l.id)}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <MagneticButton
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex !px-5 !py-2.5 !text-[13px]"
              ariaLabel="Contact us on WhatsApp"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Talk on WhatsApp
            </MagneticButton>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/10 md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col px-6 pb-10 pt-6"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-12 flex flex-col gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => {
                      smoothScrollTo(l.id);
                      setOpen(false);
                    }}
                    className="flex items-center justify-between border-b border-white/10 py-5 text-left font-display text-3xl font-semibold tracking-tight"
                  >
                    {l.label}
                    <span className="font-mono-acc text-xs text-white/35">
                      0{i + 1}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <MagneticButton
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  ariaLabel="Contact us on WhatsApp"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  Talk on WhatsApp
                </MagneticButton>
                <p className="text-center font-mono-acc text-xs text-white/45">
                  {BRAND.phoneDisplay} · {BRAND.email}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.05 4.91A9.86 9.86 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.93 9.93 0 0 0 4.76 1.21h.01c5.47 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.21 8.21 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.39 1 2.55.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.46-.59 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
