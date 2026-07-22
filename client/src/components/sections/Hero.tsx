// LëtzImpact — Neon Atelier
// Hero: diagonal split, oversized headline left, animated gradient orb right.
// Brand commitments: Space Grotesk display, off-white body, glass chips,
// brand gradient (#EC12D8 → #A250E3 → #4CC9F0), magenta primary CTA.

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { WhatsAppGlyph } from "@/components/SiteNav";
import { waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

type ClientLogo = { src: string; alt: string };
const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/partners/neteco.png", alt: "neteco" },
  { src: "/partners/salonkee.png", alt: "Salonkee" },
  { src: "/partners/amhome.png", alt: "amhome" },
  { src: "/partners/sananny.png", alt: "Sananny" },
  { src: "/partners/emesa-construction.png", alt: "EMESA Construction" },
  {
    src: "/partners/ar-secherheet-security.png",
    alt: "ÄR Secherheet Security",
  },
  { src: "/partners/asad-gym.png", alt: "ASAD Gym" },
  { src: "/partners/gridx.png", alt: "GridX" },
];

const PARTNER_MARQUEE_COPIES = 5;

function HeadlineWord({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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
  const { copy } = useI18n();
  const delays = [0.05, 0.05, 0.18, 0.28, 0.42];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-40 lg:pb-32 lg:pt-52"
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
        <div className="mx-auto max-w-5xl text-center">
          {/* headline */}
          <h1 className="mx-auto max-w-5xl text-center font-display text-[34px] font-bold leading-[0.98] tracking-tight xs:text-[40px] sm:text-6xl sm:leading-[0.95] lg:text-[80px]">
            {copy.hero.words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="inline-block overflow-hidden">
                  <HeadlineWord delay={delays[index] ?? 0.05}>
                    {index === 3 ? (
                      <span className="text-gradient">{word}</span>
                    ) : (
                      word
                    )}
                  </HeadlineWord>
                </span>{" "}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-white/70 sm:mt-7 sm:text-[17px]"
          >
            {copy.hero.bodyPrefix}{" "}
            <span className="text-white">LëtzImpact</span>, {copy.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-3.5"
          >
            <MagneticButton
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={copy.nav.whatsapp}
            >
              <WhatsAppGlyph className="h-4 w-4" />
              {copy.nav.talk}
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              href="#packages"
              onClick={() => {
                const el = document.getElementById("packages");
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              strength={0.25}
            >
              {copy.hero.packagesCta}
              <ArrowDownRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partner strip moved out of <Hero> so the page can place it after RecentWork.
export function PartnerStrip() {
  const { copy } = useI18n();

  return (
    <div className="relative mt-14 overflow-hidden border-y border-white/20 bg-[radial-gradient(circle_at_20%_50%,rgba(76,201,240,0.24),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(236,18,216,0.22),transparent_36%),linear-gradient(90deg,rgba(255,255,255,0.19),rgba(255,255,255,0.13),rgba(255,255,255,0.19))] py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm sm:mt-20 sm:py-9">
      <div className="container mb-4 flex items-center gap-3 sm:mb-5">
        <span className="h-px w-7 bg-white/35 sm:w-10" />
        <span className="font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-[11px] sm:tracking-[0.22em]">
          {copy.hero.partners}
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
          {Array.from({ length: PARTNER_MARQUEE_COPIES }).flatMap(
            (_, copyIndex) =>
              CLIENT_LOGOS.map((logo, logoIndex) => (
                <div
                  key={`${copyIndex}-${logoIndex}`}
                  className="group flex h-20 w-[clamp(190px,23vw,280px)] shrink-0 grow-0 basis-[clamp(190px,23vw,280px)] items-center justify-center px-4 sm:h-24 sm:px-5 lg:h-28"
                  aria-hidden={copyIndex > 0}
                >
                  <div className="flex h-full w-full items-center justify-center px-2 py-1.5 sm:px-3 sm:py-2">
                    <img
                      src={logo.src}
                      alt={copyIndex === 0 ? logo.alt : ""}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                      className="block h-full w-full select-none object-contain opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] transition duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_18px_rgba(76,201,240,0.22)]"
                    />
                  </div>
                </div>
              ))
          )}
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
