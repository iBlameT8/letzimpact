// Letzimpact — rocket flight layer inspired by the agency logo.
// The rocket stays around the hero area while brand-colored smoke paths move dynamically across the site.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg className="rocket-smoke-field" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="rocket-smoke rocket-smoke--one"
          d="M 84 16 C 70 22, 77 37, 58 42 S 26 44, 35 61 S 70 67, 52 84 S 22 88, 11 98"
        />
        <path
          className="rocket-smoke rocket-smoke--two"
          d="M 78 20 C 55 27, 67 44, 40 50 S 10 60, 28 74 S 62 71, 71 91"
        />
        <path
          className="rocket-smoke rocket-smoke--three"
          d="M 88 22 C 91 38, 62 35, 63 53 S 87 68, 65 78 S 33 81, 18 94"
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
