// Letzimpact — integrated neon rocket layer.
// The rocket artwork has a transparent background, while organic fumes continue through the page.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
      <svg
        className="rocket-smoke-field"
        viewBox="0 0 120 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fumeCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#A9FFF5" stopOpacity="0.18" />
            <stop offset="0.24" stopColor="#4CC9F0" stopOpacity="0.58" />
            <stop offset="0.68" stopColor="#42A8E8" stopOpacity="0.34" />
            <stop offset="1" stopColor="#7BE7FF" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="fumeMagenta" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6AF7" stopOpacity="0.18" />
            <stop offset="0.32" stopColor="#EC12D8" stopOpacity="0.56" />
            <stop offset="0.72" stopColor="#A250E3" stopOpacity="0.34" />
            <stop offset="1" stopColor="#EC12D8" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="fumeWhite" cx="50%" cy="0%" r="95%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.52" />
            <stop offset="0.42" stopColor="#BBF9FF" stopOpacity="0.28" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <filter id="softSmoke" x="-40%" y="-8%" width="180%" height="116%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--left"
          d="M48 0 C24 42 57 82 31 135 C8 183 51 225 27 283 C4 340 44 391 23 451 C3 511 39 574 19 636 C-2 701 38 760 18 829 C5 876 30 935 12 1012"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--cyan rocket-fume-ribbon--center-left"
          d="M58 0 C43 48 73 92 50 150 C29 205 63 251 43 314 C24 371 61 421 42 486 C23 552 55 609 38 675 C21 743 59 803 40 870 C28 916 48 965 33 1012"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--center-right"
          d="M68 0 C89 46 55 95 79 151 C104 210 65 255 88 318 C111 381 72 431 94 493 C116 557 81 615 101 681 C122 750 84 809 103 874 C116 920 96 968 111 1012"
        />
        <path
          className="rocket-fume-ribbon rocket-fume-ribbon--magenta rocket-fume-ribbon--right"
          d="M77 0 C109 41 74 87 103 141 C132 197 91 249 113 309 C137 374 99 425 118 489 C139 557 101 615 121 682 C142 754 101 812 122 884 C136 930 113 971 127 1012"
        />
        <path
          className="rocket-fume-core"
          d="M61 0 C52 54 67 111 57 174 C47 237 65 302 55 369 C46 430 62 490 53 555 C44 623 61 681 51 749 C42 819 60 882 50 950 C47 973 45 993 43 1012 L86 1012 C76 957 88 902 77 841 C66 776 85 714 73 651 C62 590 80 531 69 467 C58 403 76 339 66 275 C56 209 72 148 62 88 C60 55 61 26 61 0 Z"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--cyan"
          cx="42"
          cy="78"
          rx="26"
          ry="46"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--magenta"
          cx="84"
          cy="104"
          rx="28"
          ry="52"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--cyan"
          cx="37"
          cy="158"
          rx="29"
          ry="58"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--magenta"
          cx="88"
          cy="194"
          rx="31"
          ry="62"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--cyan"
          cx="39"
          cy="265"
          rx="30"
          ry="55"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--magenta"
          cx="91"
          cy="330"
          rx="34"
          ry="66"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--cyan"
          cx="34"
          cy="535"
          rx="27"
          ry="70"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--magenta"
          cx="87"
          cy="610"
          rx="31"
          ry="74"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--cyan"
          cx="43"
          cy="815"
          rx="29"
          ry="82"
        />
        <ellipse
          className="rocket-fume-puff rocket-fume-puff--magenta"
          cx="83"
          cy="875"
          rx="32"
          ry="88"
        />
      </svg>

      <div className="logo-rocket-flight">
        <img
          className="logo-rocket-image"
          src="/brand/letzimpact-rocket-new.png"
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
}
