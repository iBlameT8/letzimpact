// LëtzImpact — Neon Atelier
// FAQ accordion. Tone: friendly direct, slightly playful, never robotic.

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

export function FAQ() {
  const { copy } = useI18n();

  return (
    <section id="faq" className="relative py-20 sm:py-28 lg:py-36">
      <div className="container">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel num="05" label={copy.faq.label} />
            <h2 className="mt-5 font-display text-[32px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              {copy.faq.heading}{" "}
              <span className="text-gradient">{copy.faq.highlight}</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-[16px]">
              {copy.faq.intro}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full">
              {copy.faq.items.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="font-display py-5 text-left text-[16px] font-semibold tracking-tight text-white hover:no-underline sm:py-6 sm:text-[20px]">
                    <span className="flex items-center gap-3 sm:gap-4">
                      <span className="font-mono-acc text-xs text-white/35">
                        0{i + 1}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[14.5px] leading-relaxed text-white/65 sm:pb-7 sm:text-[15px]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
