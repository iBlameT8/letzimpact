import { DigitalDesign } from "@/components/sections/DigitalDesign";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { PageFrame, PageIntro } from "@/components/PageFrame";

export default function ServicesPage() {
  return (
    <PageFrame>
      <PageIntro eyebrow="Capabilities / 02" title="Everything your brand needs to" highlight="move forward.">
        From strategy and content to websites, digital design and ongoing social media management, we build the system behind consistent attention.
      </PageIntro>
      <Services />
      <DigitalDesign />
      <Process />
      <Packages />
    </PageFrame>
  );
}
