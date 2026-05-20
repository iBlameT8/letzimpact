// Letzimpact — Neon Atelier
// Hero: diagonal split, oversized headline left, animated gradient orb right.
// Brand commitments: Space Grotesk display, off-white body, glass chips,
// brand gradient (#EC12D8 → #A250E3 → #4CC9F0), magenta primary CTA.

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { MagneticButton } from "@/components/MagneticButton";
import { WhatsAppGlyph } from "@/components/SiteNav";

type ClientLogo = { src: string; alt: string };
const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/partners/neteco.png", alt: "neteco" },
  { src: "/partners/amhome.png", alt: "amhome" },
  { src: "/partners/sananny.png", alt: "Sananny" },
  { src: "/partners/emesa-construction.png", alt: "EMESA Construction" },
  { src: "/partners/ar-secherheet-security.png", alt: "ÄR Secherheet Security" },
  { src: "/partners/asad-gym.png", alt: "ASAD Gym" },
];

function HeadlineWord({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-40 sm:pb-20 lg:pt-52 lg:pb-32"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(162,80,227,0.22), transparent 60%), radial-gradient(40% 40% at 10% 80%, rgba(76,201,240,0.18), transparent 60%), radial-gradient(50% 40% at 50% 0%, rgba(236,18,216,0.12), transparent 70%)",
        }}
      />
      <GridLines />

      <div className="container">
        <div className="max-w-5xl">
            {/* headline */}
            <h1 className="font-display text-[34px] font-bold leading-[0.98] tracking-tight xs:text-[40px] sm:text-6xl sm:leading-[0.95] lg:text-[80px]">
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.05}>Social media</HeadlineWord>
              </span>
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.18}>that&nbsp;</HeadlineWord>
                <HeadlineWord delay={0.28}>
                  <span className="text-gradient">actually</span>
                </HeadlineWord>
              </span>
              <span className="block overflow-hidden">
                <HeadlineWord delay={0.42}>does the work.</HeadlineWord>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-7 sm:text-[17px]"
            >
              We're <span className="text-white">Letzimpact</span> — a Luxembourg-based duo
              that plans, films and runs short-form content for brands who'd rather
              build attention than rent it. Strategy, shoots and management — under one roof,
              run honestly, shipped on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-3.5"
            >
              <MagneticButton
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open WhatsApp chat with Letzimpact"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Let's talk
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                href="#packages"
                onClick={() => {
                  const el = document.getElementById("packages");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                strength={0.25}
              >
                See the packages
                <ArrowDownRight className="h-4 w-4" />
              </MagneticButton>
            </motion.div>

            {/* meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.95 }}
              className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-5 font-mono-acc text-[10px] uppercase tracking-[0.16em] text-white/45 sm:mt-12 sm:gap-6 sm:pt-6 sm:text-[11px] sm:tracking-[0.18em]"
            >
              <div>
                <div className="text-[18px] font-display font-semibold tracking-tight text-white sm:text-[22px]">
                  IG · TT
                </div>
                native short-form
              </div>
              <div>
                <div className="text-[18px] font-display font-semibold tracking-tight text-white sm:text-[22px]">
                  2&nbsp;founders
                </div>
                no agency overhead
              </div>
              <div>
                <div className="text-[18px] font-display font-semibold tracking-tight text-white sm:text-[22px]">
                  +352
                </div>
                Made in {BRAND.location}
              </div>
            </motion.div>
        </div>
      </div>

    </section>
  );
}

// Partner strip moved out of <Hero> so the page can place it after RecentWork.
export function PartnerStrip() {
  return (
    <div className="relative mt-14 border-y border-white/10 bg-white/[0.02] py-6 sm:mt-20 sm:py-8">
      <div className="container mb-4 flex items-center gap-3 sm:mb-5">
        <span className="h-px w-7 bg-white/20 sm:w-10" />
        <span className="font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-[11px] sm:tracking-[0.22em]">
          Our Partners:
        </span>
      </div>
      <div
        className="marquee"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track items-center">
          {[...Array(2)].map((_, k) => (
            <div
              key={k}
              className="flex shrink-0 items-center"
              aria-hidden={k === 1}
            >
              {CLIENT_LOGOS.map((logo, i) => (
                <div
                  key={`${k}-${i}`}
                  className="group flex h-10 shrink-0 items-center justify-center px-6 sm:h-12 sm:px-8 lg:h-14"
                  style={{ flexBasis: "clamp(160px, 20vw, 240px)" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    draggable={false}
                    className="max-h-full max-w-full select-none object-contain"
                    style={{ width: "auto" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
      }}
    />
  );
}
