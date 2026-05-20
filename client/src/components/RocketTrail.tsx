// Letzimpact — static neon rocket layer inspired by the supplied reference image.
// The rocket does not move; only the glow intensity animates while full-height fumes frame the page.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg className="rocket-smoke-field" viewBox="0 0 100 130" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fumeCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A9FFF5" />
            <stop offset="0.5" stopColor="#4CC9F0" />
            <stop offset="1" stopColor="#7BE7FF" />
          </linearGradient>
          <linearGradient id="fumeMagenta" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6AF7" />
            <stop offset="0.5" stopColor="#EC12D8" />
            <stop offset="1" stopColor="#A250E3" />
          </linearGradient>
        </defs>

        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--left"
          d="M8 -10 C18 7 10 20 20 34 C31 50 20 65 31 82 C42 99 29 116 40 140"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--center-left"
          d="M34 -8 C42 12 34 28 43 45 C53 63 46 82 55 100 C63 116 58 128 66 140"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--center-right"
          d="M60 -10 C52 10 66 27 58 45 C48 65 62 83 54 101 C47 117 52 130 44 140"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--right"
          d="M92 -10 C78 8 90 25 78 40 C64 58 77 75 66 91 C54 110 69 123 58 140"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--vertical"
          d="M52 -6 C52 16 52 36 52 58 C52 82 52 108 52 140"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--diagonal-one"
          d="M20 -8 C32 18 46 42 56 66 C66 90 75 113 88 140"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--diagonal-two"
          d="M82 -8 C68 18 55 43 44 68 C34 91 24 115 13 140"
        />
      </svg>

      <div className="logo-rocket-flight">
        <svg className="logo-rocket" viewBox="0 0 112 156" role="img" aria-label="Letzimpact rocket">
          <defs>
            <linearGradient id="rocketStroke" x1="20" y1="130" x2="92" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4CC9F0" />
              <stop offset="0.48" stopColor="#7A69F6" />
              <stop offset="1" stopColor="#EC12D8" />
            </linearGradient>
            <radialGradient id="rocketWindowGlow" cx="50%" cy="50%" r="70%">
              <stop offset="0" stopColor="#F9FDFF" stopOpacity="0.94" />
              <stop offset="0.38" stopColor="#7BE7FF" stopOpacity="0.9" />
              <stop offset="1" stopColor="#A250E3" stopOpacity="0.72" />
            </radialGradient>
            <linearGradient id="rocketBeam" x1="56" y1="92" x2="56" y2="154" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7A69F6" stopOpacity="0.35" />
              <stop offset="0.2" stopColor="#BBF9FF" stopOpacity="0.92" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.72" />
            </linearGradient>
          </defs>

          <path
            className="logo-rocket-beam"
            d="M49 93 C49 111 43 132 35 155 L77 155 C69 132 63 111 63 93 Z"
          />
          <path
            className="logo-rocket-outline logo-rocket-outline--halo"
            d="M56 10 L84 42 C91 50 94 59 94 70 L94 93 L105 104 L105 126 L81 126 L81 144 M56 10 L28 42 C21 50 18 59 18 70 L18 93 L7 104 L7 126 L31 126 L31 144 M56 91 L56 144"
          />
          <path
            className="logo-rocket-outline"
            d="M56 10 L84 42 C91 50 94 59 94 70 L94 93 L105 104 L105 126 L81 126 L81 144 M56 10 L28 42 C21 50 18 59 18 70 L18 93 L7 104 L7 126 L31 126 L31 144 M56 91 L56 144"
          />
          <circle className="logo-rocket-window logo-rocket-window--halo" cx="56" cy="64" r="18" />
          <circle className="logo-rocket-window" cx="56" cy="64" r="13" />
          <circle className="logo-rocket-window-core" cx="56" cy="64" r="6.5" />
        </svg>
      </div>
    </div>
  );
}
