// Letzimpact — rocket flight layer inspired by the agency logo.
// The rocket stays around the hero area while brand-colored smoke paths move dynamically across the site.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg className="rocket-smoke-field" viewBox="0 0 100 130" preserveAspectRatio="none">
        <path
          className="rocket-fume-core rocket-fume-core--wide"
          d="M 82 20 C 80 32, 78 43, 75 55 C 72 70, 67 83, 60 96 C 54 108, 48 119, 43 132"
        />
        <path
          className="rocket-fume rocket-fume--magenta"
          d="M 82 20 C 79 31, 75 42, 70 53 C 64 66, 57 78, 49 91 C 42 103, 37 117, 32 132"
        />
        <path
          className="rocket-fume rocket-fume--purple"
          d="M 82 20 C 83 33, 81 46, 78 59 C 75 74, 70 87, 63 101 C 57 113, 54 123, 50 132"
        />
        <path
          className="rocket-fume rocket-fume--cyan"
          d="M 82 20 C 86 31, 88 44, 87 57 C 86 72, 81 85, 73 98 C 66 110, 61 121, 57 132"
        />
        <path
          className="rocket-fume-spark rocket-fume-spark--one"
          d="M 82 24 C 76 38, 73 49, 66 62 C 58 77, 54 92, 47 106"
        />
        <path
          className="rocket-fume-spark rocket-fume-spark--two"
          d="M 83 25 C 87 39, 84 52, 80 66 C 76 82, 70 96, 65 111"
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
