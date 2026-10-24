import { DigitalDesign } from "@/components/sections/DigitalDesign";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { useI18n } from "@/lib/i18n";

export default function ServicesPage() {
  const { copy } = useI18n();

  return (
    <PageFrame>
      <PageIntro eyebrow={copy.services.pageEyebrow} title={copy.services.pageTitle} highlight={copy.services.pageHighlight}>
        {copy.services.pageIntro}
      </PageIntro>
      <Services />
      <DigitalDesign />
      <Process />
      <Packages />
    </PageFrame>
  );
}
