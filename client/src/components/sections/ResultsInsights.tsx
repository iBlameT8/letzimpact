import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

type ResultMetric = { value: number; suffix: string; label: string };

const COPY = {
  en: {
    metricsEyebrow: "The numbers behind the work",
    metrics: [
      { value: 330, suffix: "K+", label: "People reached in Luxembourg" },
      { value: 8, suffix: "M+", label: "Views generated" },
      { value: 1000, suffix: "+", label: "Videos produced" },
    ],
  },
  fr: {
    metricsEyebrow: "Les chiffres derrière le travail",
    metrics: [
      { value: 330, suffix: " K+", label: "Personnes touchées au Luxembourg" },
      { value: 8, suffix: " M+", label: "Vues générées" },
      { value: 1000, suffix: "+", label: "Vidéos produites" },
    ],
  },
  lb: {
    metricsEyebrow: "D'Zuelen hannert der Aarbecht",
    metrics: [
      { value: 330, suffix: " Tsd.+", label: "Leit zu Lëtzebuerg erreecht" },
      { value: 8, suffix: " Mio.+", label: "Vue generéiert" },
      { value: 1000, suffix: "+", label: "Videoen produzéiert" },
    ],
  },
} as const;

function Counter({ metric, active }: { metric: ResultMetric; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1200;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(metric.value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, metric.value]);
  return (
    <div className="border-b border-white/10 py-5 last:border-0 sm:py-6">
      <div className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">+{count}{metric.suffix}</div>
      <div className="mt-2 text-sm font-medium text-white/80">{metric.label}</div>
    </div>
  );
}

export function ResultsInsights() {
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
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className="container pb-16 sm:pb-24">
      <div className="grid items-center gap-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.15fr_.85fr] lg:p-14">
        <div className="flex justify-center lg:justify-start">
          <img
            src={active ? "/luxembourg_reach_animated.svg" : undefined}
            alt="Luxembourg reach spreading across the country"
            className={`w-[min(72vw,320px)] transition-all duration-1000 sm:w-[min(42vw,320px)] ${active ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          />
        </div>
        <div>
          <div className="flex items-center gap-3 font-mono-acc text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-[11px]"><span className="h-px w-7 bg-[#EC12D8]" />{copy.metricsEyebrow}</div>
          <div className="mt-3 divide-y divide-white/10">
            {copy.metrics.map((metric) => <Counter key={metric.label} metric={metric} active={active} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
