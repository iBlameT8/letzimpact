// LëtzImpact — Digital Design showcase
// Compact two-client portfolio stage with focused neon lighting.

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/sections/Services";
import { useI18n } from "@/lib/i18n";

const ASSET_ROOT =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663909699797";

const PROJECT_ASSETS = [
  {
    brand: "EMESA Construction",
    accent: "#F36A2D",
    disciplineIndex: 0,
    items: [
      {
        src: `${ASSET_ROOT}/fudhYgMKSPPApcwN.jpg`,
        altIndex: 0,
        className: "lg:col-span-7",
        imageClassName:
          "h-full w-full object-contain px-3 py-4 sm:px-6 sm:py-5",
        heightClass: "h-[210px] sm:h-[250px] lg:h-[230px]",
        position: "center",
      },
      {
        src: `${ASSET_ROOT}/tpVTJtlyKUVWPqMV.jpg`,
        altIndex: 1,
        className: "lg:col-span-5 lg:row-span-2",
        imageClassName:
          "h-full w-full object-contain px-2 py-4 sm:px-4 sm:py-5",
        heightClass: "h-[300px] sm:h-[360px] lg:h-auto lg:min-h-[476px]",
        position: "center 42%",
      },
      {
        src: `${ASSET_ROOT}/YnoaaWGnfAmgNQkj.jpg`,
        altIndex: 2,
        className: "lg:col-span-7",
        imageClassName:
          "h-full w-full object-contain px-2 py-3 sm:px-5 sm:py-4",
        heightClass: "h-[210px] sm:h-[250px] lg:h-[230px]",
        position: "center",
      },
    ],
  },
  {
    brand: "AM Construction",
    accent: "#D62E2E",
    disciplineIndex: 1,
    items: [
      {
        src: `${ASSET_ROOT}/aFhTZreqIlIraLnR.png`,
        altIndex: 3,
        className: "lg:col-span-6",
        imageClassName:
          "h-full w-full object-contain px-2 py-4 sm:px-5 sm:py-5",
        heightClass: "h-[235px] sm:h-[280px] lg:h-[300px]",
        position: "center",
      },
      {
        src: `${ASSET_ROOT}/inCuFodyvwXhdXNA.png`,
        altIndex: 4,
        className: "lg:col-span-6",
        imageClassName:
          "h-full w-full object-contain px-2 py-4 sm:px-5 sm:py-5",
        heightClass: "h-[235px] sm:h-[280px] lg:h-[300px]",
        position: "center",
      },
    ],
  },
] as const;

export function DigitalDesign() {
  const { copy } = useI18n();

  return (
    <section
      id="digital-design"
      aria-labelledby="digital-design-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-12 h-72 w-72 rounded-full bg-[#EC12D8]/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-1/3 h-72 w-72 rounded-full bg-[#4CC9F0]/10 blur-[130px]"
      />

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SectionLabel num="01.1" label={copy.digitalDesign.label} />
            <h2
              id="digital-design-heading"
              className="mt-5 max-w-3xl font-display text-[34px] font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-[56px]"
            >
              {copy.digitalDesign.heading}{" "}
              <span className="text-gradient">
                {copy.digitalDesign.highlight}
              </span>
              . {copy.digitalDesign.ending}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 lg:pb-1"
          >
            <p className="max-w-xl text-[15px] leading-relaxed text-white/62 sm:text-base">
              {copy.digitalDesign.intro}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {copy.digitalDesign.services.map(service => (
                <span
                  key={service}
                  className="rounded-full bg-white/[0.035] px-3 py-1.5 font-mono-acc text-[9px] uppercase tracking-[0.15em] text-white/52 ring-1 ring-white/10 sm:text-[10px]"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {PROJECT_ASSETS.map((project, projectIndex) => (
            <ProjectStage
              key={project.brand}
              project={project}
              projectIndex={projectIndex}
              discipline={
                copy.digitalDesign.projects[project.disciplineIndex].discipline
              }
              itemLabels={copy.digitalDesign.itemLabels}
              projectLabel={copy.digitalDesign.projectLabel}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 flex items-center gap-4 sm:mt-8"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          <p className="max-w-lg text-right font-mono-acc text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/38 sm:text-[10px]">
            {copy.digitalDesign.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

type Project = (typeof PROJECT_ASSETS)[number];

function ProjectStage({
  project,
  projectIndex,
  discipline,
  itemLabels,
  projectLabel,
}: {
  project: Project;
  projectIndex: number;
  discipline: string;
  itemLabels: readonly string[];
  projectLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: projectIndex * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[26px] bg-[#020204] p-3 ring-1 ring-white/10 sm:p-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-0 h-32 w-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[55px]"
        style={{ backgroundColor: project.accent }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-0 h-28 w-1/3 -translate-y-1/2 rounded-full bg-[#4CC9F0]/35 blur-[60px]"
      />

      <header className="relative flex flex-col gap-3 px-2 pb-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:px-3 sm:pb-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full shadow-[0_0_18px_currentColor]"
            style={{ color: project.accent, backgroundColor: project.accent }}
          />
          <div>
            <p className="font-mono-acc text-[8px] uppercase tracking-[0.18em] text-white/32 sm:text-[9px]">
              {projectLabel} / 0{projectIndex + 1}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
              {project.brand}
            </h3>
          </div>
        </div>
        <p className="font-mono-acc text-[9px] uppercase tracking-[0.14em] text-white/42 sm:text-right sm:text-[10px]">
          {discipline}
        </p>
      </header>

      <div className="relative grid gap-3 lg:grid-cols-12 lg:grid-flow-row-dense">
        {project.items.map((item, itemIndex) => (
          <ShowcaseItem
            key={item.src}
            item={item}
            label={itemLabels[item.altIndex]}
            accent={project.accent}
            delay={projectIndex * 0.08 + itemIndex * 0.055}
          />
        ))}
      </div>
    </motion.article>
  );
}

type ShowcaseAsset = Project["items"][number];

function ShowcaseItem({
  item,
  label,
  accent,
  delay,
}: {
  item: ShowcaseAsset;
  label: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative isolate overflow-hidden rounded-2xl bg-black ring-1 ring-white/[0.08] ${item.className} ${item.heightClass}`}
    >
      <div
        aria-hidden
        className="absolute inset-x-[12%] top-0 z-0 h-[55%] rounded-full opacity-25 blur-[38px] transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: accent }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(76,201,240,0.16),transparent_32%),radial-gradient(circle_at_88%_8%,rgba(236,18,216,0.14),transparent_34%)] mix-blend-screen"
      />
      <img
        src={item.src}
        alt={label}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`relative z-[1] transition-transform duration-300 ease-out group-hover:scale-[1.015] ${item.imageClassName}`}
        style={{ objectPosition: item.position }}
      />
      <figcaption className="absolute bottom-3 left-3 z-20 rounded-full bg-black/70 px-2.5 py-1 font-mono-acc text-[8px] uppercase tracking-[0.16em] text-white/52 backdrop-blur-md ring-1 ring-white/10 sm:bottom-4 sm:left-4 sm:text-[9px]">
        {label}
      </figcaption>
      <div
        aria-hidden
        className="absolute inset-0 z-20 rounded-2xl shadow-[inset_0_0_55px_rgba(0,0,0,0.35)]"
      />
    </motion.figure>
  );
}
