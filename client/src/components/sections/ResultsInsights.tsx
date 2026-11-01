import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Reach / Luxembourg",
    mapTitle: "+330,000 people reached in Luxembourg",
    mapBody: "We put brands in front of the people who matter, across the country.",
    mapNote: "Your future customers are already seeing the work.",
    chartEyebrow: "Momentum / 24 months",
    chartTitle: "Our reach grows — month by month.",
    chartBody: "Consistent results, not just one viral video.",
    chartNote: "We build on the signal and turn attention into momentum.",
  },
  fr: {
    eyebrow: "Portée / Luxembourg",
    mapTitle: "+330 000 personnes touchées au Luxembourg",
    mapBody: "Nous plaçons les marques devant les bonnes personnes, partout dans le pays.",
    mapNote: "Vos futurs clients voient déjà votre travail.",
    chartEyebrow: "Dynamique / 24 mois",
    chartTitle: "Notre portée grandit — mois après mois.",
    chartBody: "Des résultats constants, pas seulement une vidéo virale.",
    chartNote: "Nous transformons l'attention en vraie dynamique.",
  },
  lb: {
    eyebrow: "Reechwäit / Lëtzebuerg",
    mapTitle: "+330.000 Leit zu Lëtzebuerg erreecht",
    mapBody: "Mir bréngen Marken virun déi richteg Leit, uechtert d'Land.",
    mapNote: "Deng zukünfteg Cliente gesinn deng Aarbecht schonn.",
    chartEyebrow: "Dynamik / 24 Méint",
    chartTitle: "Eis Reechwäit wiisst — Mount fir Mount.",
    chartBody: "Konstant Resultater, net just ee viralen Video.",
    chartNote: "Mir bauen op a verwandelen Opmierksamkeet a Momentum.",
  },
} as const;

const POINTS = [
  [112, 75], [145, 103], [184, 68], [220, 118], [259, 83], [302, 133], [341, 96], [379, 145], [421, 110],
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, active };
}

function LuxembourgMap({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 520 210" className="h-auto w-full overflow-visible" role="img" aria-label="Stylised map of Luxembourg">
      <defs>
        <linearGradient id="lux-map-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#EC12D8" />
          <stop offset="0.5" stopColor="#A250E3" />
          <stop offset="1" stopColor="#4CC9F0" />
        </linearGradient>
        <filter id="lux-map-glow"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path d="M91 36 142 20 190 35 236 19 282 31 326 18 368 43 421 50 447 87 430 122 454 151 423 177 378 165 344 188 302 176 264 194 222 174 180 187 143 165 103 172 77 142 89 111 61 80Z" fill="url(#lux-map-gradient)" opacity=".22" stroke="url(#lux-map-gradient)" strokeWidth="3" />
      <path d="M102 73 154 57 201 72 242 55 291 67 334 54 377 78 415 82 397 111 418 139 383 151 346 139 311 162 271 148 230 163 188 145 151 154 118 133 126 105 95 91Z" fill="#0E0B19" stroke="white" strokeOpacity=".18" />
      {POINTS.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`} style={{ opacity: active ? 1 : 0, transition: `opacity 400ms ease ${index * 100}ms` }} filter="url(#lux-map-glow)">
          <circle cx={cx} cy={cy} r="10" fill="#EC12D8" opacity=".22" />
          <circle cx={cx} cy={cy} r="3.5" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

function GrowthChart({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 720 300" className="h-auto w-full" role="img" aria-label="Growth chart over 24 months">
      <defs>
        <linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#EC12D8" stopOpacity=".42" /><stop offset="1" stopColor="#4CC9F0" stopOpacity="0" /></linearGradient>
        <linearGradient id="growth-line" x1="0" x2="1"><stop offset="0" stopColor="#EC12D8" /><stop offset=".55" stopColor="#A250E3" /><stop offset="1" stopColor="#4CC9F0" /></linearGradient>
      </defs>
      <g stroke="white" strokeOpacity=".08" strokeDasharray="3 8">
        <path d="M54 45H680" /><path d="M54 105H680" /><path d="M54 165H680" /><path d="M54 225H680" />
      </g>
      <path d="M54 242 C105 237 118 225 152 230 S214 210 250 215 S312 186 344 194 S400 158 432 169 S478 128 515 139 S567 94 600 108 S646 61 680 48 V260 H54Z" fill="url(#growth-fill)" className={active ? "chart-area-in" : ""} />
      <path d="M54 242 C105 237 118 225 152 230 S214 210 250 215 S312 186 344 194 S400 158 432 169 S478 128 515 139 S567 94 600 108 S646 61 680 48" fill="none" stroke="url(#growth-line)" strokeWidth="5" strokeLinecap="round" className={active ? "chart-line-in" : "chart-line-ready"} />
      <text x="54" y="285" fill="white" fillOpacity=".4" fontSize="11">MONTH 01</text>
      <text x="625" y="285" fill="white" fillOpacity=".4" fontSize="11">MONTH 24</text>
    </svg>
  );
}

export function ResultsInsights() {
  const { language } = useI18n();
  const copy = COPY[language];
  const map = useReveal();
  const chart = useReveal();
  return (
    <div className="container space-y-6 pb-16 sm:space-y-8 sm:pb-24">
      <section ref={map.ref} className="grid items-center gap-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:p-14">
        <div>
          <div className="flex items-center gap-3 font-mono-acc text-[10px] uppercase tracking-[0.2em] text-white/45"><span className="h-px w-7 bg-[#EC12D8]" />{copy.eyebrow}</div>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{copy.mapTitle}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">{copy.mapBody}</p>
          <p className="mt-5 text-sm font-medium text-white/80">{copy.mapNote}</p>
        </div>
        <div className="rounded-2xl bg-[#07060B]/50 p-3 ring-1 ring-white/10 sm:p-5"><LuxembourgMap active={map.active} /></div>
      </section>
      <section ref={chart.ref} className="rounded-[28px] border border-white/10 bg-[#0B0913] p-6 backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="max-w-2xl"><div className="flex items-center gap-3 font-mono-acc text-[10px] uppercase tracking-[0.2em] text-white/45"><span className="h-px w-7 bg-[#4CC9F0]" />{copy.chartEyebrow}</div><h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-5xl">{copy.chartTitle}</h2><p className="mt-4 text-base text-white/60">{copy.chartBody}</p></div>
        <div className="mt-8 overflow-hidden rounded-2xl bg-[#07060B]/55 p-3 ring-1 ring-white/10 sm:mt-10 sm:p-6"><GrowthChart active={chart.active} /></div>
        <p className="mt-4 text-sm font-medium text-white/70">{copy.chartNote}</p>
      </section>
    </div>
  );
}
