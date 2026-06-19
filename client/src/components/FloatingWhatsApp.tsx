// LëtzImpact — Neon Atelier
// Persistent social action buttons bottom right, with gradient halo and matching pill design.

import { motion } from "framer-motion";
import { type ComponentType, type SVGProps, useEffect, useState } from "react";
import { WhatsAppGlyph } from "@/components/SiteNav";
import { BRAND, waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

type SocialAction = {
  label: string;
  href: string;
  ariaLabel: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName: string;
  iconBackground: string;
};

function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.1" cy="6.9" r="1.25" fill="currentColor" />
    </svg>
  );
}

function TikTokGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.7 2.5c.26 2.32 1.55 3.71 3.79 3.86v3.04a7.04 7.04 0 0 1-3.75-1.13v5.88c0 3.66-2.19 6.05-5.55 6.05-3.13 0-5.45-2.15-5.45-5.11 0-3.28 2.69-5.55 6.11-5.03v3.16c-1.55-.48-2.96.38-2.96 1.84 0 1.18.91 2.02 2.18 2.02 1.45 0 2.31-.86 2.31-2.83V2.5h3.33Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const { copy } = useI18n();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialActions: SocialAction[] = [
    {
      label: "Instagram",
      href: BRAND.instagramUrl,
      ariaLabel: "LëtzImpact on Instagram",
      Icon: InstagramGlyph,
      iconClassName: "h-4 w-4 text-white",
      iconBackground:
        "linear-gradient(135deg, #F58529 0%, #DD2A7B 48%, #8134AF 100%)",
    },
    {
      label: "TikTok",
      href: BRAND.tiktokUrl,
      ariaLabel: "LëtzImpact on TikTok",
      Icon: TikTokGlyph,
      iconClassName: "h-4 w-4 text-white",
      iconBackground: "linear-gradient(135deg, #00F2EA 0%, #0E0C18 45%, #FF0050 100%)",
    },
    {
      label: "WhatsApp",
      href: waLink(copy.nav.whatsappMessage),
      ariaLabel: copy.nav.whatsapp,
      Icon: WhatsAppGlyph,
      iconClassName: "h-4 w-4 text-white",
      iconBackground: "#25D366",
    },
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 16,
        pointerEvents: show ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-7"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      {socialActions.map(({ label, href, ariaLabel, Icon, iconClassName, iconBackground }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="group relative inline-flex items-center gap-3 rounded-full bg-[#0E0C18] px-3 py-3 ring-1 ring-white/15 backdrop-blur-xl sm:gap-3 sm:px-4"
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
          <span
            className="relative grid h-8 w-8 place-items-center rounded-full"
            style={{ background: iconBackground }}
          >
            <Icon className={iconClassName} />
          </span>
          <span className="relative hidden pr-1 font-display text-[14px] font-semibold tracking-tight text-white sm:inline">
            {label}
          </span>
        </a>
      ))}
    </motion.div>
  );
}
