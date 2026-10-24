import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { RecentWork } from "@/components/sections/RecentWork";
import { waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export default function Results() {
  const { copy } = useI18n();

  return (
    <PageFrame>
      <PageIntro eyebrow="Selected work / 01" title="Work that earns" highlight="attention.">
        {copy.recentWork.intro}
      </PageIntro>
      <RecentWork />
      <section className="container py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0B0913] p-7 ring-1 ring-white/10 sm:p-12 lg:p-16">
          <div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#EC12D8]/20 blur-3xl" />
          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/45">Next project</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">Your brand could be the next case study.</h2>
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
