// Letzimpact — integrated neon rocket layer.
// The rocket artwork has a transparent background and carries its own plume.

export function RocketTrail() {
  return (
    <div className="rocket-trail-layer" aria-hidden>
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
