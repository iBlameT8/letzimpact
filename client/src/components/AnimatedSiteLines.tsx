// Letzimpact — site-wide animated neon line field.
// Runs behind all sections so individual static line textures are no longer needed.

export function AnimatedSiteLines() {
  return (
    <div className="animated-site-lines" aria-hidden>
      <span className="animated-site-line animated-site-line--one" />
      <span className="animated-site-line animated-site-line--two" />
      <span className="animated-site-line animated-site-line--three" />
    </div>
  );
}
