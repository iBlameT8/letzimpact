import { Founders } from "@/components/sections/Founders";
import { Process } from "@/components/sections/Process";
import { PageFrame, PageIntro } from "@/components/PageFrame";

export default function About() {
  return (
    <PageFrame>
      <PageIntro eyebrow="The studio / 03" title="A young team with a" highlight="serious standard.">
        LëtzImpact is a Luxembourg social media and digital production studio. We combine sharp creative work with the structure, speed and accountability needed to make it perform.
      </PageIntro>
      <Founders />
      <Process />
    </PageFrame>
  );
}
