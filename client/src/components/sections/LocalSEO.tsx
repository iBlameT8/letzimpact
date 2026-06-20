import { motion } from "framer-motion";
import { MapPin, Search, UsersRound, Video } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/sections/Services";

const icons = [Search, Video, UsersRound, MapPin];

export function LocalSEO() {
  const { copy } = useI18n();

  return (
    <section id="luxembourg-seo" className="relative py-18 sm:py-24 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-white/[0.035] p-6 ring-1 ring-white/10 sm:p-8 lg:p-10"
        >
          <div aria-hidden className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#EC12D8]/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#4CC9F0]/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionLabel num="04" label={copy.localSeo.label} />
              <h2 className="mt-5 font-display text-[32px] font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {copy.localSeo.heading} <span className="text-gradient">{copy.localSeo.highlight}</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/66 sm:text-lg">
                {copy.localSeo.intro}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {copy.localSeo.cards.map((card, index) => {
                  const Icon = icons[index] ?? Search;
                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10"
                    >
                      <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                        <Icon className="h-4 w-4 text-[#4CC9F0]" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/62">{card.body}</p>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-black/20 p-5 ring-1 ring-white/10">
                <p className="font-mono-acc text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {copy.localSeo.keywordLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {copy.localSeo.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-white/[0.045] px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
