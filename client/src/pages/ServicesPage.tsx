import { DigitalDesign } from "@/components/sections/DigitalDesign";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { useI18n } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "wouter";
import { SERVICE_PILLARS } from "@/pages/ServiceDetail";

export default function ServicesPage() {
  const { copy } = useI18n();

  return (
    <PageFrame>
      <SEOHead title="Social Media, Marketing & Digital Design Services Luxembourg | LëtzImpact" description="Social media management, video production, digital advertising, websites and digital design services for businesses in Luxembourg." path="/services" />
      <PageIntro eyebrow={copy.services.pageEyebrow} title={copy.services.pageTitle} highlight={copy.services.pageHighlight}>
        {copy.services.pageIntro}
      </PageIntro>
      <section className="container pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_PILLARS.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.07]">
              <div className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[#EC12D8]">0{index + 1}</div>
              <h2 className="mt-5 font-display text-xl font-semibold leading-tight">{service.title} <span className="text-gradient">{service.highlight}</span></h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{service.description}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-white underline decoration-[#4CC9F0] underline-offset-4">Explore service</span>
            </Link>
          ))}
        </div>
      </section>
      <Services />
      <DigitalDesign />
      <Process />
      <Packages />
    </PageFrame>
  );
}
