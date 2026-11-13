import { ArrowUpRight, Check } from "lucide-react";
import { Link, useRoute } from "wouter";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { SEOHead } from "@/components/SEOHead";
import { BRAND, waLink } from "@/lib/brand";

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
  return (
    <PageFrame>
      <SEOHead title={service.seoTitle} description={service.seoDescription} path={`/services/${service.slug}`} />
      <PageIntro eyebrow={service.eyebrow} title={service.title} highlight={service.highlight}>
        {service.description}
      </PageIntro>
      <main className="container pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Built around a clear <span className="text-gradient">purpose.</span></h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-white/65">{service.intro}</p>
            <div className="mt-10 border-t border-white/10 pt-7">
              <h3 className="font-mono-acc text-[11px] uppercase tracking-[0.2em] text-white/45">What we handle</h3>
              <ul className="mt-5 space-y-4">
                {service.bullets.map(item => <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white/75"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4CC9F0]" />{item}</li>)}
              </ul>
            </div>
          </div>
          <aside className="self-start rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#EC12D8]">Who it is for</div>
            <p className="mt-5 text-[17px] leading-relaxed text-white/75">{service.audience}</p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#4CC9F0]">The outcome</div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">{service.outcome}</p>
            </div>
            <MagneticButton href={waLink(`Hi ${BRAND.name}, I would like to talk about ${service.title.toLowerCase()} ${service.highlight}`)} target="_blank" rel="noopener noreferrer" className="mt-8 w-full justify-center">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </aside>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
          <Link href="/results" className="text-sm font-semibold text-white underline decoration-[#EC12D8] underline-offset-4">See our results</Link>
          <Link href="/services" className="text-sm text-white/55 transition hover:text-white">Back to all services</Link>
        </div>
      </main>
    </PageFrame>
  );
}
