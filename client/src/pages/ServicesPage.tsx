import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { SERVICE_PILLARS } from "@/pages/ServiceDetail";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/brand";

export default function ServicesPage() {
  const { copy } = useI18n();

  return (
    <PageFrame>
      <SEOHead title="Social Media, Marketing & Digital Design Services Luxembourg | LëtzImpact" description="Four focused services for ambitious businesses in Luxembourg: campaign management, social media production, design and websites." path="/services" />
      <PageIntro eyebrow={copy.services.pageEyebrow} title="Four services." highlight="One clear system.">
        Choose the part of your marketing that needs to move forward. Each service has its own process, examples and next step.
      </PageIntro>
      <main className="container pb-24">
        <section className="grid gap-5 md:grid-cols-2" aria-label="Our services">
          {SERVICE_PILLARS.map((service, index) => (
            <article key={service.slug} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono-acc text-[11px] tracking-[0.2em] text-[#EC12D8]">0{index + 1}</span>
                <span className="rounded-full border border-white/15 px-3 py-1 font-mono-acc text-[9px] uppercase tracking-[0.15em] text-white/50">Service</span>
              </div>
              <div className={service.slug === "campaign-management-luxembourg" ? "mt-8 grid grid-cols-[minmax(0,1fr)_190px] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_230px]" : service.slug === "social-media-production-luxembourg" || service.slug === "design-luxembourg" || service.slug === "website-design-luxembourg" ? "mt-8 grid grid-cols-[minmax(0,1fr)_132px] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_160px]" : "mt-12"}>
                <div>
                  <h2 className="max-w-sm font-display text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl">{service.title} <span className="text-gradient">{service.highlight}</span></h2>
                  <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{service.description}</p>
                </div>
                {service.slug === "social-media-production-luxembourg" && <ProductionCardDeck />}
                {service.slug === "design-luxembourg" && <DesignCardVisual />}
                {service.slug === "website-design-luxembourg" && <WebsiteCardVisual />}
                {service.slug === "campaign-management-luxembourg" && <CampaignCardVisual />}
              </div>
              <Link href={`/services/${service.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EC12D8] via-[#A250E3] to-[#4CC9F0] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(162,80,227,0.22)] transition hover:scale-[1.02]">
                Explore this service <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>
        <section className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#4CC9F0]">Not sure where to start?</div>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/65">Tell us what you want to improve. We will point you to the right service instead of selling you everything.</p>
          </div>
          <MagneticButton href={waLink()} target="_blank" rel="noopener noreferrer" className="shrink-0">Talk to LëtzImpact <ArrowRight className="h-4 w-4" /></MagneticButton>
        </section>
      </main>
    </PageFrame>
  );
}

function ProductionCardDeck() {
  return (
    <div className="relative h-[142px] w-[132px] shrink-0 sm:h-[166px] sm:w-[160px]" aria-label="Selected production examples">
      <img src="/services/production-chalet.png" alt="Chalet au Gourmet social production" className="absolute right-0 top-1 h-[126px] w-[70px] rounded-[10px] object-cover shadow-[0_12px_28px_rgba(0,0,0,0.35)] sm:h-[150px] sm:w-[84px]" />
      <img src="/services/production-gridx.png" alt="GridX social production" className="absolute left-[43px] top-0 z-10 h-[132px] w-[74px] -rotate-[4deg] rounded-[10px] object-cover shadow-[0_14px_30px_rgba(0,0,0,0.42)] sm:left-[52px] sm:h-[158px] sm:w-[88px]" />
      <img src="/services/production-ramen.png" alt="Ramen Shifu social production" className="absolute left-0 top-3 z-20 h-[126px] w-[70px] rotate-[5deg] rounded-[10px] object-cover shadow-[0_12px_28px_rgba(0,0,0,0.35)] sm:h-[150px] sm:w-[84px]" />
    </div>
  );
}

function DesignCardVisual() {
  return (
    <div className="flex h-[112px] w-[132px] items-center justify-end sm:h-[132px] sm:w-[160px]" aria-label="EMESA vehicle branding example">
      <img src="/services/emesa-van.png" alt="EMESA orange branded construction van" className="h-auto w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)]" />
    </div>
  );
}

function WebsiteCardVisual() {
  return (
    <div className="flex h-[112px] w-[132px] items-center justify-end sm:h-[132px] sm:w-[160px]" aria-label="EMESA website design example">
      <img src="/services/emesa-laptop.png" alt="EMESA website shown on a laptop" className="h-auto w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)]" />
    </div>
  );
}

function CampaignCardVisual() {
  return (
    <div className="flex h-[160px] w-[190px] items-center justify-end sm:h-[185px] sm:w-[230px]" aria-label="Campaign performance result visual">
      <img src="/services/campaign-result-badge.png" alt="Campaign performance result visual" className="h-auto w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.3)]" />
    </div>
  );
}
