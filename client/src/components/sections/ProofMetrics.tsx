import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Metric = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  note: string;
};

const COPY = {
  en: {
    eyebrow: "Proof, not promises",
    claim: "Real results. No empty promises.",
    metrics: [
      { value: 8, suffix: "M", label: "Views generated", note: "We put your brand in front of more people." },
      { value: 330, suffix: "K", label: "People reached in Luxembourg", note: "Your future customers are already seeing the work." },
      { value: 100, suffix: "%", prefix: "", label: "Made in Luxembourg", note: "Strategy, production and creative direction from Luxembourg." },
    ],
  },
  fr: {
    eyebrow: "Des preuves, pas des promesses",
    claim: "De vrais résultats. Pas de promesses vides.",
    metrics: [
      { value: 8, suffix: " M", label: "Vues générées", note: "Nous plaçons votre marque devant plus de personnes." },
      { value: 330, suffix: " K", label: "Personnes touchées au Luxembourg", note: "Vos futurs clients voient déjà votre marque." },
      { value: 100, suffix: " %", prefix: "", label: "Made in Luxembourg", note: "Stratégie, production et direction créative depuis le Luxembourg." },
    ],
  },
  lb: {
    eyebrow: "Beweiser, keng Verspriechen",
    claim: "Echt Resultater, keng eidel Verspriechen.",
    metrics: [
      { value: 8, suffix: " Mio.", label: "Views generéiert", note: "Mir bréngen deng Mark virun d'Ae vu méi Leit." },
      { value: 330, suffix: " Tsd.", label: "Leit zu Lëtzebuerg erreecht", note: "Deng zukünfteg Cliente gesinn deng Mark schonn." },
      { value: 100, suffix: "%", prefix: "", label: "Made in Lëtzebuerg", note: "Strategie, Produktioun a kreativ Direktioun aus Lëtzebuerg." },
    ],
  },
} as const;

function Counter({ metric, active }: { metric: Metric; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1300;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(metric.value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, metric.value]);
  return (
    <div className="relative px-5 py-5 text-center sm:px-7 sm:py-7">
      <div className="pointer-events-none absolute inset-x-10 top-1/2 h-20 -translate-y-1/2 rounded-full bg-[#EC12D8]/10 blur-3xl" />
      <div className="relative font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl lg:text-6xl">
        {metric.prefix ?? "+"}{count}{metric.suffix}
      </div>
      <div className="relative mt-3 text-sm font-medium text-white/85">{metric.label}</div>
      <div className="relative mx-auto mt-2 max-w-[18rem] text-xs leading-relaxed text-white/45">{metric.note}</div>
    </div>
  );
}

export function ProofMetrics() {
  const { language } = useI18n();
  const copy = COPY[language];
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className="container relative py-12 sm:py-16">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_80px_rgba(162,80,227,0.08)] backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-center gap-3 font-mono-acc text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
          <span className="h-px w-7 bg-[#EC12D8]" />{copy.eyebrow}<span className="h-px w-7 bg-[#4CC9F0]" />
        </div>
        <div className="mt-5 grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {copy.metrics.map((metric) => <Counter key={metric.label} metric={metric} active={active} />)}
        </div>
        <p className="mt-5 text-center font-display text-lg font-semibold text-white/80 sm:text-xl">{copy.claim}</p>
      </div>
    </section>
  );
}
