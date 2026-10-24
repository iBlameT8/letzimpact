import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { BRAND, waLink } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { copy } = useI18n();

  return (
    <PageFrame footer={false}>
      <PageIntro eyebrow="Start a conversation / 04" title="Let’s make your next" highlight="move visible.">
        Tell us where your brand is going, what is not working yet, and what you want to achieve. We will come back with a clear next step.
      </PageIntro>
      <section className="container pb-24 sm:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-[#0B0913] p-7 ring-1 ring-white/10 sm:p-10">
            <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/45">Direct line</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-5xl">No long forms. Just a useful first conversation.</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">WhatsApp is the fastest way to reach us. Send a short note about your company and we will take it from there.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={waLink()} target="_blank" rel="noopener noreferrer" ariaLabel={copy.nav.whatsapp}>
                {copy.nav.talk} <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton variant="ghost" href={`mailto:${BRAND.email}`}>
                Email us <Mail className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[28px] bg-white/[0.03] p-7 ring-1 ring-white/10 sm:p-10">
            <div>
              <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/45">LëtzImpact / Luxembourg</p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">Social media, digital design, websites and content production for brands that want to look as serious as they are.</p>
            </div>
            <div className="mt-12 space-y-4 text-white/80">
              <a className="flex items-center gap-3 hover:text-white" href={`tel:+${BRAND.whatsappNumber}`}><Phone className="h-4 w-4 text-[#4CC9F0]" />{BRAND.phoneDisplay}</a>
              <a className="flex items-center gap-3 hover:text-white" href={`mailto:${BRAND.email}`}><Mail className="h-4 w-4 text-[#EC12D8]" />{BRAND.email}</a>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
