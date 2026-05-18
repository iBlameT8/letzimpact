// Brand commitments: Space Grotesk display, off-white body, glass surfaces,
// brand gradient (#EC12D8 → #A250E3 → #4CC9F0), magenta primary CTA.
//
// RecentWork: three floating, vertical reel tiles between the hero copy and
// the partner strip. Reels stay poster-only until visitors choose to play them,
// keeping the initial page load light. Playback remains muted and pauses when
// offscreen to save CPU and mobile data.

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Reel = {
  brand: string;
  label: string;
  src: string;
  poster: string;
  // tiny per-tile float offsets, gives the "floating" feeling without animation overload
  offsetClass: string;
  rotateClass: string;
};

const REELS: Reel[] = [
  {
    brand: "Oasis",
    label: "Product · short-form",
    src: "/videos/oasis.mp4",
    poster: "/manus-storage/oasis_c0b506da.jpg",
    offsetClass: "lg:-translate-y-6",
    rotateClass: "lg:-rotate-[1.4deg]",
  },
  {
    brand: "AmHome",
    label: "Real estate · villa tour",
    src: "/videos/amhome.mp4",
    poster: "/manus-storage/amhome_0ea282de.jpg",
    offsetClass: "lg:translate-y-2",
    rotateClass: "lg:rotate-[0.6deg]",
  },
  {
    brand: "Boxing event",
    label: "Live event · recap",
    src: "/videos/boxing-event.mp4",
    poster: "/manus-storage/boxing_12584a1f.jpg",
    offsetClass: "lg:-translate-y-4",
    rotateClass: "lg:rotate-[1.2deg]",
  },
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.35, margin: "0px 0px -10% 0px" });

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

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${reel.offsetClass} ${reel.rotateClass}`}
    >
      {/* Soft halo behind tile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] opacity-50 blur-2xl"
        style={{
          background:
            index === 0
              ? "radial-gradient(closest-side, rgba(236,18,216,0.28), transparent 70%)"
              : index === 1
              ? "radial-gradient(closest-side, rgba(76,201,240,0.26), transparent 70%)"
              : "radial-gradient(closest-side, rgba(162,80,227,0.28), transparent 70%)",
        }}
      />

      {/* Tile body */}
      <div className="relative overflow-hidden rounded-[26px] bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1.5">
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
            className={`absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-[0_0_30px_rgba(236,18,216,0.25)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-[#EC12D8] focus:ring-offset-2 focus:ring-offset-black ${
              isPlaying ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100" : "opacity-100"
            }`}
          >
            {isPlaying ? (
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-5 w-1.5 rounded-full bg-white" />
                <span className="h-5 w-1.5 rounded-full bg-white" />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white"
              />
            )}
          </button>

          {/* gradient frame — subtle brand outline that brightens on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[26px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 60px rgba(236,18,216,0.06)",
            }}
          />

          {/* bottom caption strip with brand */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
            <div>
              <div className="font-display text-[15px] font-semibold leading-tight tracking-tight text-white sm:text-[16px]">
                {reel.brand}
              </div>
              <div className="mt-0.5 font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/65">
                {reel.label}
              </div>
            </div>
            <span
              aria-hidden
              className="relative inline-flex h-2 w-2 shrink-0 rounded-full bg-[#EC12D8]"
            >
              <span className="absolute inset-0 rounded-full bg-[#EC12D8] ping-soft" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function RecentWork() {
  return (
    <section
      id="recent-work"
      aria-label="Recent work"
      className="relative isolate mt-14 sm:mt-20"
    >
      <div className="container">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-7 bg-white/20 sm:w-10" />
          <span className="font-mono-acc text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-[11px] sm:tracking-[0.22em]">
            Recent work / on-set
          </span>
        </div>
        <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[26px] font-bold leading-[1.05] tracking-tight sm:text-[34px] lg:text-[42px]">
            Some of what we've{" "}
            <span className="text-gradient">actually shipped.</span>
          </h2>
          <p className="max-w-md text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
            Three real cuts from recent shoots — product, real estate, live event.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-10">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.brand} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
