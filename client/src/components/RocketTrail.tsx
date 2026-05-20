// Letzimpact — static neon rocket layer using the supplied reference artwork.
// The supplied rocket/fume image is anchored at the top while generated fumes continue down the page.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg className="rocket-smoke-field" viewBox="0 0 100 170" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fumeCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A9FFF5" stopOpacity="0.3" />
            <stop offset="0.38" stopColor="#4CC9F0" stopOpacity="0.72" />
            <stop offset="1" stopColor="#7BE7FF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="fumeMagenta" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6AF7" stopOpacity="0.28" />
            <stop offset="0.48" stopColor="#EC12D8" stopOpacity="0.72" />
            <stop offset="1" stopColor="#A250E3" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--left"
          d="M18 6 C9 20 24 36 14 54 C3 75 22 94 12 116 C3 136 18 151 8 178"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--center-left"
          d="M38 0 C26 22 47 41 34 61 C20 84 45 102 32 126 C22 145 36 160 28 178"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--center-right"
          d="M63 0 C76 20 54 40 68 63 C83 87 57 105 70 128 C81 148 66 162 74 178"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--right"
          d="M84 7 C96 25 79 42 90 60 C102 80 82 98 93 119 C104 140 88 155 98 178"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--vertical"
          d="M51 -4 C50 26 51 54 50 83 C49 113 51 144 50 178"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--diagonal-one"
          d="M35 2 C50 31 62 57 68 84 C75 113 86 143 96 178"
        />
        <path
          className="rocket-fume-stream rocket-fume-stream--diagonal-two"
          d="M68 2 C51 31 40 59 32 87 C24 115 16 145 5 178"
        />
      </svg>

      <div className="logo-rocket-flight">
        <img className="logo-rocket-image" src="/brand/neon-rocket-fumes.png" alt="" draggable="false" />
      </div>
    </div>
  );
}
