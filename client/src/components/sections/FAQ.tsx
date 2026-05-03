// Letzimpact — Neon Atelier
// FAQ accordion. Tone: friendly-direct, slightly playful, never robotic.

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";

const FAQS = [
  {
    q: "How do we start working together?",
    a: "We jump on a 15-minute call (or WhatsApp) to figure out the brand, the goal and what good actually looks like for you. If it makes sense for both sides, we send a tailored proposal within a few days. No 14-step funnels.",
  },
  {
    q: "Do you handle everything, or just the filming?",
    a: "Both options exist depending on the package. The smaller plan is closer to managed presence, the bigger ones cover strategy, filming, editing, posting, community and reporting. You pick the level of \"hands off\" you want.",
  },
  {
    q: "Do you only work with Luxembourg-based brands?",
    a: "We're based in Luxembourg and most shoots happen here, but we work remotely with brands across the EU. As long as the calls happen and the shoots are organised, location isn't a blocker.",
  },
  {
    q: "How long until we see results?",
    a: "Honestly? Most accounts start moving in 30 to 60 days, and start hitting their stride around month 3. Anyone promising you viral results in week one is selling you a story, not a strategy.",
  },
  {
    q: "Can we start small and scale up later?",
    a: "Yes — most clients do. You can start on Starter, prove the system works, and move up to Growth or Authority once you want more output. We never lock you into long contracts.",
  },
  {
    q: "What makes you actually different?",
    a: "We're two founders, not a chain of account managers. The person planning your content is the same person filming, editing and replying to comments. That's why your account ends up sounding like a brand, not a bot.",
  },
  {
    q: "Do you also build websites?",
    a: "Yes — that's what you're looking at. Websites, social media and content shoots all sit under the same roof, which is the whole point of Letzimpact.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 lg:py-36">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel num="05" label="Questions, answered" />
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              The questions everyone asks. <span className="text-gradient">Answered honestly.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              Anything missing? Send it on WhatsApp — we usually answer faster than the FAQ loads.
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
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="py-6 text-left text-[18px] font-display font-semibold tracking-tight text-white hover:no-underline sm:text-[20px]">
                    <span className="flex items-center gap-4">
                      <span className="font-mono-acc text-xs text-white/35">
                        0{i + 1}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[15px] leading-relaxed text-white/65">
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
