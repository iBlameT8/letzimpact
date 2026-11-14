import { ArrowUpRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { SEOHead } from "@/components/SEOHead";
import { BRAND, waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export type ServiceSlug = "campaign-management-luxembourg" | "social-media-production-luxembourg" | "design-luxembourg" | "website-design-luxembourg";

type Service = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  audience: string;
  bullets: string[];
  outcome: string;
};

const PRODUCTION_WORK = [
  {
    brand: "GridX",
    label: "Interview / XTaste",
    description: "A conversational GridX piece that puts a real voice and the XTaste experience at the centre.",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/opTgQPUImZzojHeJ.mp4",
    poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/QZZYYQVxCBhAdfjD.jpg",
  },
  {
    brand: "Ramen Shifu",
    label: "Campaign / restaurant",
    description: "A campaign film designed to make the restaurant, food and atmosphere feel real before the visit.",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/EfoWelopvDlxAjTj.mp4",
    poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/PCvZbANtwnBURzbC.jpg",
  },
  {
    brand: "Chalet au Gourmet",
    label: "Advertising / restaurant",
    description: "A short advertising cut made to stop the scroll and make the offer immediate.",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/oOXDxIQbqKkBLyiO.mp4",
    poster: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797/TmjspQUNanpBcHtf.jpg",
  },
] as const;

export const SERVICE_PILLARS: Service[] = [
  {
    slug: "campaign-management-luxembourg",
    eyebrow: "01 / Campaign management",
    title: "Campaigns built to",
    highlight: "move.",
    description: "Paid and organic campaigns with a clear offer, creative direction and reporting that connects attention to business results.",
    seoTitle: "Campaign Management & Social Media Advertising Luxembourg | LëtzImpact",
    seoDescription: "Campaign management in Luxembourg for Meta, Instagram and TikTok: strategy, creative production, targeting, launch and performance reporting.",
    intro: "Campaign management is where strategy, creative and distribution work as one system. We plan campaigns around a real business objective, then make the content and targeting strong enough to earn attention.",
    audience: "For launches, restaurant promotions, hospitality campaigns, offers, events and local businesses that need more than a boosted post.",
    bullets: ["Campaign strategy and offer positioning", "Meta, Instagram and TikTok campaign setup", "Creative concepts, hooks and short-form ad variations", "Audience, budget and placement planning", "Performance monitoring and clear next-step reporting"],
    outcome: "A campaign with a job to do, a message people understand and a process for improving the result.",
  },
  {
    slug: "social-media-production-luxembourg",
    eyebrow: "02 / Social media production",
    title: "Content that earns",
    highlight: "attention.",
    description: "Professional Reels, TikToks and short-form video produced for brands that want a modern, recognisable presence in Luxembourg.",
    seoTitle: "Social Media Production & Reels Agency Luxembourg | LëtzImpact",
    seoDescription: "Social media production in Luxembourg: Reels, TikToks, short-form video, filming, editing and monthly content for restaurants, hotels, cafés and local brands.",
    intro: "We bring an American-inspired, dynamic content style to Luxembourg without losing the personality of the local brand. Every shoot is planned around a hook, a message and a reason to keep watching.",
    audience: "Especially for restaurants, hotels, cafés, hospitality brands and service businesses that need consistent content without managing production themselves.",
    bullets: ["Content concepts and monthly production planning", "On-location filming and direction", "Reels, TikToks, interviews and promotional videos", "Editing, captions, sound design and platform formats", "Content libraries designed for organic posts and paid campaigns"],
    outcome: "A stronger content system that makes the brand easier to recognise and easier to choose.",
  },
  {
    slug: "design-luxembourg",
    eyebrow: "03 / Design",
    title: "A visual identity people",
    highlight: "remember.",
    description: "Digital design and brand applications that keep your business consistent from screen to street.",
    seoTitle: "Digital Design & Branding Agency Luxembourg | LëtzImpact",
    seoDescription: "Digital design and branding in Luxembourg: campaign visuals, banners, stickers, branded workwear, vehicle wrap concepts and social assets.",
    intro: "Design should make the business recognisable before anyone reads the name. We create clear visual systems for social media, campaigns and real-world brand applications.",
    audience: "For businesses refreshing their look, launching a campaign or bringing one visual identity across digital and physical touchpoints.",
    bullets: ["Digital campaign and social media visuals", "Banners, posters and promotional layouts", "Sticker and branded workwear concepts", "Vehicle wrap and commercial branding concepts", "Visual direction that connects design to the marketing message"],
    outcome: "A brand that feels considered, consistent and visible wherever customers meet it.",
  },
  {
    slug: "website-design-luxembourg",
    eyebrow: "04 / Websites",
    title: "Websites that turn attention",
    highlight: "into action.",
    description: "Fast, modern websites and landing pages built to explain the offer clearly and make the next step obvious.",
    seoTitle: "Website Design & Web Design Agency Luxembourg | LëtzImpact",
    seoDescription: "Website design in Luxembourg for modern businesses: responsive company websites, landing pages, clear content structure and conversion-focused design.",
    intro: "A website should not make people work to understand what you do. We create focused digital experiences with strong hierarchy, mobile-first layouts and a clear path to contact.",
    audience: "For businesses that need a new website, a sharper landing page or a more professional digital home for their campaigns and social traffic.",
    bullets: ["Website and landing-page structure", "Mobile-first interface and visual direction", "Clear service pages and conversion paths", "Integration of social proof, portfolio and contact actions", "SEO-ready headings, metadata and internal linking"],
    outcome: "A website that gives your marketing somewhere credible to send people.",
  },
];

export function ServiceDetailRoute() {
  const [, params] = useRoute<{ slug: string }>("/services/:slug");
  const service = SERVICE_PILLARS.find(item => item.slug === params?.slug);
  return service ? <ServiceDetail service={service} /> : null;
}

export function ServiceDetail({ service }: { service: Service }) {
  const { copy } = useI18n();
  const campaignCopy = service.slug === "campaign-management-luxembourg" ? copy.campaignCaseStudy : null;
  const websiteCopy = service.slug === "website-design-luxembourg" ? copy.websiteCaseStudy : null;
  const serviceCopy = campaignCopy ?? websiteCopy;
  return (
    <PageFrame>
      <SEOHead title={service.seoTitle} description={service.seoDescription} path={`/services/${service.slug}`} />
      {service.slug === "campaign-management-luxembourg" ? (
        <header className="container pt-10 pb-8 sm:pt-16 sm:pb-10">
          <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#EC12D8]">{serviceCopy?.label ?? service.eyebrow}</div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">{serviceCopy?.heading ?? service.title} <span className="text-gradient">{serviceCopy?.highlight ?? service.highlight}</span></h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/60">{serviceCopy?.intro ?? service.description}</p>
        </header>
      ) : (
        <PageIntro eyebrow={service.eyebrow} title={service.title} highlight={service.highlight}>
          {service.description}
        </PageIntro>
      )}
      <main className={`container pb-24 ${service.slug === "social-media-production-luxembourg" ? "-mt-16 sm:-mt-20 lg:-mt-28" : ""}`}>
        {service.slug === "campaign-management-luxembourg" && <CampaignCaseStudy />}
        {service.slug === "website-design-luxembourg" && <WebsiteShowcase />}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{serviceCopy?.detailHeading ?? "Built around a clear"} <span className="text-gradient">{serviceCopy?.detailHighlight ?? "purpose."}</span></h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-white/65">{serviceCopy?.intro ?? service.intro}</p>
            <div className="mt-10 border-t border-white/10 pt-7">
              <h3 className="font-mono-acc text-[11px] uppercase tracking-[0.2em] text-white/45">{serviceCopy?.handleLabel ?? "What we handle"}</h3>
              <ul className="mt-5 space-y-4">
                {(serviceCopy?.handle ?? service.bullets).map(item => <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white/75"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4CC9F0]" />{item}</li>)}
              </ul>
            </div>
          </div>
          <aside className={service.slug === "social-media-production-luxembourg" ? "self-start" : "self-start rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9"}>
            {service.slug === "social-media-production-luxembourg" && <CompactProductionRail />}
            <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#EC12D8]">{serviceCopy?.audienceLabel ?? "Who it is for"}</div>
            <p className="mt-4 text-[16px] leading-relaxed text-white/70">{serviceCopy?.audience ?? service.audience}</p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#4CC9F0]">{serviceCopy?.outcomeLabel ?? "The outcome"}</div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">{serviceCopy?.outcome ?? service.outcome}</p>
            </div>
            <MagneticButton href={waLink(`Hi ${BRAND.name}, I would like to talk about ${service.title.toLowerCase()} ${service.highlight}`)} target="_blank" rel="noopener noreferrer" className="mt-8 w-full justify-center">
              {serviceCopy?.conversation ?? "Start a conversation"} <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </aside>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
          <Link href="/results" className="text-sm font-semibold text-white underline decoration-[#EC12D8] underline-offset-4">{serviceCopy?.seeResults ?? "See our results"}</Link>
          <Link href="/services" className="text-sm text-white/55 transition hover:text-white">{serviceCopy?.backServices ?? "Back to all services"}</Link>
        </div>
      </main>
    </PageFrame>
  );
}

function CampaignCaseStudy() {
  const { copy } = useI18n();
  const content = copy.campaignCaseStudy;

  const [values, setValues] = useState({ reservations: 0, daily: 0, budget: 0, cost: 0, returnValue: 0, table: 0 });
  useEffect(() => {
    const started = performance.now();
    const duration = 1600;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues({
        reservations: Math.round(160 * eased),
        daily: Math.round(5 * eased),
        budget: Math.round(1200 * eased),
        cost: Number((7.5 * eased).toFixed(2)),
        returnValue: Math.round(10 * eased),
        table: Math.round(80 * eased),
      });
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="mb-16" aria-labelledby="campaign-results">
      <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#EC12D8]">{content.label}</div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="relative overflow-hidden px-1 py-2 sm:px-3 sm:py-5">
          <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="flex min-h-[190px] flex-col justify-center px-2 py-5 sm:min-h-[245px] sm:px-4">
              <div className="bg-gradient-to-r from-[#9eeaff] via-[#d6b7ff] to-[#b7caff] bg-clip-text font-display text-7xl font-bold leading-none text-transparent sm:text-8xl">+{values.reservations}</div>
              <div className="mt-4 max-w-[220px] text-lg font-semibold text-white sm:text-xl">{content.reservations}</div>
              <div className="mt-2 text-sm text-white/45">{content.daily}: ~{values.daily}</div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
              <AnimatedMetric value={`${values.budget.toLocaleString("de-DE")} €`} label={content.budgetValue} />
              <AnimatedMetric value={`${values.cost.toFixed(2).replace(".", ",")} €`} label={content.costValue} />
              <AnimatedMetric value={`${values.returnValue}×`} label={content.returnValue} />
              <AnimatedMetric value={`~${values.table} €`} label={content.tableValue} />
            </div>
          </div>
          <div className="mt-6 px-2 py-3 sm:px-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="font-mono-acc text-[10px] uppercase tracking-[0.16em] text-white/65">{content.performance}</div>
                <div className="mt-1 text-sm font-semibold text-white">{content.growth}</div>
              </div>
              <div className="font-mono-acc text-[9px] text-white/45">{content.strong}</div>
            </div>
            <div className="mt-4 flex h-1 items-center gap-1 opacity-55">
              {[30, 44, 58, 74, 92].map(height => (
                <div key={height} className="h-full flex-1 rounded-full bg-gradient-to-r from-[#9eeaff] to-[#d6b7ff]" style={{ opacity: height / 100 }} aria-hidden="true" />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono-acc text-[9px] text-white/40"><span>{content.weak}</span><span>{content.strong}</span></div>
          </div>
        </div>
        <div className="flex items-center rounded-[26px] border border-white/10 bg-gradient-to-br from-[#ec12d8]/10 via-white/[0.03] to-[#4cc9f0]/10 p-6 sm:p-8">
          <p id="campaign-results" className="text-[16px] leading-[1.85] text-white/75">{content.intro}</p>
        </div>
      </div>
      <div className="mt-6 max-w-4xl">
        <p className="mt-4 text-[16px] leading-[1.85] text-white/75">{content.caseStudy}</p>
        <p className="mt-4 font-mono-acc text-[10px] uppercase tracking-[0.16em] text-white/40">{content.resultNote}</p>
        <p className="mt-5 text-lg font-semibold text-white">{content.cta}</p>
      </div>
    </section>
  );
}

function WebsiteShowcase() {
  return (
    <section className="mb-16 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#8ee7ff]/10 via-[#a88cff]/[0.08] to-[#ec12d8]/10 px-3 py-5 sm:px-8 sm:py-8" aria-label="Website examples">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 sm:grid-cols-3 sm:gap-4">
        <img src="/services/website-barber.png" alt="Gentleman Barber website example" className="mx-auto w-full drop-shadow-[0_18px_30px_rgba(142,231,255,0.16)] transition duration-500 hover:-translate-y-2 sm:w-[92%] sm:translate-y-5" />
        <img src="/services/website-emesa.png" alt="EMESA website example" className="mx-auto w-full drop-shadow-[0_24px_42px_rgba(168,140,255,0.26)] transition duration-500 hover:-translate-y-2 sm:scale-[1.08] sm:-translate-y-2" />
        <img src="/services/website-sams-original.jpg" alt="Sam's Cars website example" className="mx-auto w-full drop-shadow-[0_18px_30px_rgba(236,18,216,0.14)] transition duration-500 hover:-translate-y-2 sm:w-[92%] sm:translate-y-5" />
      </div>
    </section>
  );
}

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-h-[70px] flex-col justify-center px-2 py-2">
      <div className="bg-gradient-to-r from-[#9eeaff] via-[#d6b7ff] to-[#b7caff] bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl">{value}</div>
      <div className="mt-1 text-[10px] leading-tight text-white/45">{label}</div>
    </div>
  );
}

function CompactProductionRail() {
  return (
    <div className="mb-6" aria-labelledby="selected-production-work">
      <div id="selected-production-work" className="mb-3 font-mono-acc text-[10px] uppercase tracking-[0.18em] text-[#4CC9F0]">Selected work / recent production</div>
      <div className="grid grid-cols-3 gap-2">
        {PRODUCTION_WORK.map(work => (
          <article key={`${work.brand}-${work.label}`} className="group min-w-0 overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.025]">
            <video className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={work.src} poster={work.poster} controls playsInline preload="metadata" aria-label={`${work.brand} ${work.label}`} />
            <div className="truncate px-1.5 py-1.5 font-mono-acc text-[8px] uppercase tracking-[0.05em] text-white/60">{work.brand}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
