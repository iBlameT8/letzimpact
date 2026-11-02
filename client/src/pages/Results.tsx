import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { RecentWork } from "@/components/sections/RecentWork";
import { ResultsInsights } from "@/components/sections/ResultsInsights";
import { waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

const RESULTS_PAGE_COPY = {
  en: { eyebrow: "Results / proof", title: "Our results", highlight: "speak for themselves.", next: "Start a project", cta: "Send us a message on WhatsApp — we reply within 3 hours." },
  fr: { eyebrow: "Résultats / preuves", title: "Nos résultats", highlight: "parlent d'eux-mêmes.", next: "Démarrer un projet", cta: "Envoyez-nous un message sur WhatsApp — réponse sous 3 heures." },
  lb: { eyebrow: "Resultater / Beweiser", title: "Eis Resultater", highlight: "schwätze fir sech.", next: "Start e Projet", cta: "Schreif eis op WhatsApp – mir äntweren bannent 3 Stonnen." },
} as const;

export default function Results() {
  const { copy, language } = useI18n();
  const pageCopy = RESULTS_PAGE_COPY[language];

  return (
    <PageFrame>
      <PageIntro eyebrow={pageCopy.eyebrow} title={pageCopy.title} highlight={pageCopy.highlight}>
        {copy.recentWork.intro}
      </PageIntro>
      <ResultsInsights />
      <RecentWork />
      <section className="container py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0B0913] p-7 ring-1 ring-white/10 sm:p-12 lg:p-16">
          <div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#EC12D8]/20 blur-3xl" />
          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/45">{pageCopy.next}</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">{pageCopy.cta}</h2>
            </div>
            <MagneticButton href={waLink()} target="_blank" rel="noopener noreferrer" ariaLabel={copy.nav.whatsapp}>
              {copy.nav.talk} <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
