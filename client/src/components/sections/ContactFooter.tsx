// Letzimpact — Neon Atelier
// Final CTA + footer block. Big WhatsApp call-to-action, clean meta strip below.

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS, waLink } from "@/lib/brand";
import { MagneticButton } from "@/components/MagneticButton";
import { WhatsAppGlyph } from "@/components/SiteNav";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 pt-20 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-24 lg:pt-32"
    >
      {/* big ambient glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(236,18,216,0.20), transparent 65%), radial-gradient(40% 40% at 80% 30%, rgba(76,201,240,0.18), transparent 70%), radial-gradient(40% 40% at 20% 60%, rgba(162,80,227,0.18), transparent 70%)",
        }}
      />

      <div className="container">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[24px] bg-[#0B0913] p-7 ring-1 ring-white/10 sm:rounded-[28px] sm:p-12 lg:p-20"
        >
          {/* gradient border */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            style={{
              padding: "1px",
              background:
                "linear-gradient(135deg, rgba(236,18,216,0.6), rgba(162,80,227,0.4) 50%, rgba(76,201,240,0.55))",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="relative grid gap-9 sm:gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1 ring-1 ring-white/10 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#4CC9F0] ping-soft" />
                  <span className="relative h-2 w-2 rounded-full bg-[#4CC9F0]" />
                </span>
                <span className="font-mono-acc text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Open for new brands
                </span>
              </div>
              <h2 className="mt-5 font-display text-[34px] font-bold leading-[1.02] tracking-tight sm:mt-6 sm:text-5xl lg:text-[64px]">
                Let's turn your <span className="text-gradient">attention</span> into actual customers.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65 sm:mt-5 sm:text-[16px]">
                Fifteen minutes on WhatsApp, a few honest questions, a clear next step.
                No pitch deck, no pressure — and no salesperson named Bryan.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
              <MagneticButton
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center !px-7 !py-3.5 !text-[15px] sm:w-auto sm:justify-start sm:!px-8 sm:!py-4 sm:!text-[16px]"
                ariaLabel="Open WhatsApp chat with Letzimpact"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Talk on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href={`tel:+${BRAND.whatsappNumber}`}
                className="font-display text-xl font-semibold tracking-tight text-white/90 hover:text-white sm:text-2xl"
              >
                {BRAND.phoneDisplay}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="font-mono-acc text-[12px] uppercase tracking-[0.18em] text-white/50 hover:text-white sm:tracking-[0.2em]"
              >
                or {BRAND.email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* footer meta */}
        <div className="mt-16 grid gap-10 sm:mt-20 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/manus-storage/letzimpact-logo_f96e1d8b.png"
              alt="Letzimpact — social media marketing"
              className="h-9 w-auto sm:h-11"
              draggable={false}
            />
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-white/55">
              Digital strategies. Real impact. We help brands grow through focused
              social media, content and strategy — out of {BRAND.location}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="font-mono-acc text-[11px] uppercase tracking-[0.22em] text-white/40">
              Sitemap
            </div>
            <ul className="mt-4 space-y-2 text-[14.5px]">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(l.id);
                      if (el) {
                        const y =
                          el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-acc text-[11px] uppercase tracking-[0.22em] text-white/40">
              Reach us
            </div>
            <ul className="mt-4 space-y-2 text-[14.5px]">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-white/80 hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-white/55">{BRAND.location}, EU</li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 font-mono-acc text-[11px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Letzimpact · Made in Luxembourg</div>
          <div>v 2.0 · Neon Atelier</div>
        </div>
      </div>
    </footer>
  );
}
