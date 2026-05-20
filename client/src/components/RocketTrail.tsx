// Letzimpact — rocket flight layer inspired by the agency logo.
// The rocket stays around the hero area while brand-colored smoke paths move dynamically across the site.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg className="rocket-smoke-field" viewBox="0 0 100 130" preserveAspectRatio="none">
        <path
          className="rocket-fume-core rocket-fume-core--wide"
          d="M82 20 C82 31 82 42 81 53 C80 68 77 82 72 95 C66 111 56 123 47 132"
        />
        <path
          className="rocket-fume rocket-fume--cyan"
          d="M82 20 C78 35 75 49 70 63 C63 82 54 101 43 132"
        />
        <path
          className="rocket-fume rocket-fume--purple"
          d="M82 20 C83 36 83 51 80 66 C77 86 70 107 62 132"
        />
        <path
          className="rocket-fume rocket-fume--magenta"
          d="M82 20 C87 36 90 51 88 67 C85 88 76 109 67 132"
        />
        <path
          className="rocket-logo-plume rocket-logo-plume--upper"
          d="M70 59 C70 50 76 44 82 44 C88 44 94 50 94 59"
        />
        <path
          className="rocket-logo-plume rocket-logo-plume--middle"
          d="M58 82 C58 70 68 62 80 62 C92 62 101 70 101 82"
        />
        <path
          className="rocket-logo-plume rocket-logo-plume--lower"
          d="M29 132 C31 114 45 101 62 101 C72 101 80 106 86 114 C89 106 94 102 100 101"
        />
        <path
          className="rocket-fume-spark rocket-fume-spark--one"
          d="M77 44 C72 55 67 64 61 74 C53 88 48 101 44 116"
        />
        <path
          className="rocket-fume-spark rocket-fume-spark--two"
          d="M88 45 C93 57 96 70 94 84 C92 98 86 111 80 124"
        />
      </svg>

      <div className="logo-rocket-flight">
        <svg className="logo-rocket" viewBox="0 0 96 128" role="img" aria-label="Letzimpact rocket">
          <defs>
            <linearGradient id="rocketStroke" x1="14" y1="112" x2="82" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4CC9F0" />
              <stop offset="0.52" stopColor="#A250E3" />
              <stop offset="1" stopColor="#EC12D8" />
            </linearGradient>
          </defs>
          <path
            className="logo-rocket-outline"
            d="M48 8 C62 19 75 35 75 54 L75 78 L86 86 L86 104 L68 104 L68 120 M48 8 C34 19 21 35 21 54 L21 78 L10 86 L10 104 L28 104 L28 120 M48 70 L48 120"
          />
          <circle className="logo-rocket-window" cx="48" cy="55" r="12" />
        </svg>
      </div>
    </div>
  );
}
