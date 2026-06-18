// Brand commitments: Space Grotesk display, off-white body, glass surfaces,
// brand gradient (#EC12D8 → #A250E3 → #4CC9F0), magenta primary CTA.
//
// RecentWork: compact floating, vertical reel tiles between the hero copy and
// the partner strip. Reels stay poster-only until visitors choose to play them,
// keeping the initial page load light. Playback remains muted and pauses when
// offscreen to save CPU and mobile data.

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Reel = {
  brand: string;
  label: string;
  description: string;
  src: string;
  poster: string;
  // tiny per-tile float offsets, gives the "floating" feeling without animation overload
  offsetClass: string;
  rotateClass: string;
};

const REELS: Reel[] = [
  {
    brand: "Oasis",
    label: "Café · product cut",
    description:
      "Ein kurzer Café-Clip für Oasis mit warmem, cleanem Food-&-Drink-Look.",
    src: "/videos/oasis.mp4",
    poster: "/videos/posters/oasis.jpg",
    offsetClass: "lg:-translate-y-5 xl:-translate-y-6",
    rotateClass: "lg:-rotate-[1.4deg]",
  },
  {
    brand: "AmHome",
    label: "Real estate · villa tour",
    description:
      "Ein Immobilien-Reel mit ruhigen Bewegungen und hochwertiger Raumwirkung.",
    src: "/videos/amhome.mp4",
    poster: "/videos/posters/amhome.jpg",
    offsetClass: "lg:translate-y-4 xl:translate-y-5",
    rotateClass: "lg:rotate-[0.8deg]",
  },
  {
    brand: "Salonkee",
    label: "App · salon booking",
    description:
      "Salonkee ist eine Salon-Buchungs-App, hier umgesetzt als kurzer Social Cut.",
    src: "/videos/salonkee.mp4",
    poster: "/videos/posters/salonkee.jpg",
    offsetClass: "lg:-translate-y-2 xl:-translate-y-3",
    rotateClass: "lg:rotate-[1.2deg]",
  },
  {
    brand: "AM Construction",
    label: "Construction · company reel",
    description:
      "Ein Clip für AM Construction, eine Baufirma, mit klarer Baustellen-Ästhetik.",
    src: "/videos/am-construction.mp4",
    poster: "/videos/posters/am-construction.jpg",
    offsetClass: "lg:translate-y-6 xl:translate-y-7",
    rotateClass: "lg:-rotate-[0.9deg]",
  },
  {
    brand: "Sannany",
    label: "Gardening · service reel",
    description:
      "Ein Reel für Sannany, eine Gärtner-Firma, mit natürlichem Outdoor-Fokus.",
    src: "/videos/sannany.mp4",
    poster: "/videos/posters/sannany.jpg",
    offsetClass: "lg:-translate-y-4 xl:-translate-y-5",
    rotateClass: "lg:rotate-[1.5deg]",
  },
  {
    brand: "Oasis",
    label: "Café · stop motion detail",
    description:
      "Ein weiterer Oasis-Café-Cut mit kurzem, aufmerksamkeitsstarkem Detailmoment.",
    src: "/videos/oasis-stop.mp4",
    poster: "/videos/posters/oasis-stop.jpg",
    offsetClass: "lg:translate-y-3 xl:translate-y-4",
    rotateClass: "lg:-rotate-[1.1deg]",
  },
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(containerRef, {
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  const [isPlaying, setIsPlaying] = useState(false);

  // Pause videos when offscreen so a manually started reel does not keep running.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || inView) return;
    v.pause();
    setIsPlaying(false);
  }, [inView]);

  const togglePlayback = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.muted = true;
      const playPromise = v.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => setIsPlaying(false));
      }
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const haloBackgrounds = [
    "radial-gradient(closest-side, rgba(236,18,216,0.28), transparent 70%)",
    "radial-gradient(closest-side, rgba(76,201,240,0.26), transparent 70%)",
    "radial-gradient(closest-side, rgba(162,80,227,0.28), transparent 70%)",
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative min-w-0 ${reel.offsetClass} ${reel.rotateClass}`}
    >
      {/* Soft halo behind tile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[24px] opacity-45 blur-2xl"
        style={{ background: haloBackgrounds[index % haloBackgrounds.length] }}
      />

      {/* Tile body */}
      <div className="relative min-w-0 overflow-hidden rounded-[24px] bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="relative aspect-[9/16] w-full">
          <video
            ref={videoRef}
            src={reel.src}
            poster={reel.poster}
            muted
            loop
            playsInline
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            aria-label={`${isPlaying ? "Pause" : "Play"} ${reel.brand} video`}
            onClick={togglePlayback}
            className={`absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-[0_0_30px_rgba(236,18,216,0.25)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-[#EC12D8] focus:ring-offset-2 focus:ring-offset-black sm:h-14 sm:w-14 ${
              isPlaying
                ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                : "opacity-100"
            }`}
          >
            {isPlaying ? (
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-4 w-1.5 rounded-full bg-white sm:h-5" />
                <span className="h-4 w-1.5 rounded-full bg-white sm:h-5" />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="ml-1 h-0 w-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-white sm:border-y-[11px] sm:border-l-[17px]"
              />
            )}
          </button>

          {/* gradient frame — subtle brand outline that brightens on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[24px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 52px rgba(236,18,216,0.06)",
            }}
          />

          {/* bottom caption strip with brand */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex min-w-0 items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 sm:p-4">
            <div>
              <div className="font-display max-w-full truncate text-[13px] font-semibold leading-tight tracking-tight text-white sm:text-[14px]">
                {reel.brand}
              </div>
              <div className="mt-0.5 max-w-full truncate font-mono-acc text-[9px] uppercase tracking-[0.16em] text-white/65 sm:text-[10px]">
                {reel.label}
              </div>
            </div>
            <span
              aria-hidden
              className="relative inline-flex h-2 w-2 shrink-0 rounded-full bg-[#EC12D8]"
            >
              <span className="absolute inset-0 rounded-full bg-[#EC12D8] opacity-60 animate-ping" />
            </span>
          </div>
        </div>
      </div>

      <p className="mt-3 max-w-full break-words text-[12px] leading-relaxed text-white/55 sm:text-[13px]">
        {reel.description}
      </p>
    </motion.div>
  );
}

export function RecentWork() {
  return (
    <section
      id="recent-work"
      aria-label="Recent work"
      className="relative isolate mt-14 overflow-hidden sm:mt-20"
    >
      <div className="container">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-7 bg-white/20 sm:w-10" />
          <span className="font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-[11px] sm:tracking-[0.22em]">
            Recent work / latest weeks
          </span>
        </div>
        <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display min-w-0 max-w-full text-[26px] font-bold leading-[1.05] tracking-tight sm:text-[34px] lg:text-[42px]">
            Ein paar Arbeiten aus den{" "}
            <span className="text-gradient">letzten Wochen.</span>
          </h2>
          <p className="min-w-0 max-w-md break-words text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
            Sechs kurze Cuts aus App, Real Estate, Construction, Gardening und
            Café — alle im gleichen kompakten Reel-Look.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 items-start gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6 xl:grid-cols-6 xl:gap-5">
          {REELS.map((reel, i) => (
            <ReelCard key={`${reel.brand}-${reel.src}`} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
