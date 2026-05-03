// Letzimpact — Neon Atelier
// Page composition. Style commitments enforced everywhere:
// - Background: deep night #07060B; foreground off-white #EDEAF1
// - Brand gradient: #EC12D8 → #A250E3 → #4CC9F0
// - Display font: Space Grotesk, body: Inter, mono accents: Space Mono
// - Glass surfaces, magnetic buttons, ease [0.22, 1, 0.36, 1]
// - Asymmetric layout, no purple-gradient spam, no Inter as display.

import { CursorGlow } from "@/components/CursorGlow";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteNav } from "@/components/SiteNav";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { FAQ } from "@/components/sections/FAQ";
import { Founders } from "@/components/sections/Founders";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#07060B] text-[#EDEAF1] selection:bg-[#EC12D8]/40">
      <CursorGlow />
      <SiteNav />

      <main className="relative">
        <Hero />
        <Services />
        <Process />
        <Packages />
        <Founders />
        <FAQ />
        <ContactFooter />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}
