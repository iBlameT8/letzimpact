import { useEffect, useState } from "react";

export function RocketTrail() {
  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    if (hasLaunched) {
      return;
    }

    const launchOffset = Math.max(
      360,
      Math.min(760, window.innerHeight * 0.62)
    );

    const handleScroll = () => {
      if (window.scrollY >= launchOffset) {
        setHasLaunched(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasLaunched]);

  return (
    <div
      className={`rocket-flyby-layer${hasLaunched ? " is-launched" : ""}`}
      aria-hidden="true"
    >
      <img
        className="rocket-flyby-image"
        src="/brand/letzimpact-scroll-rocket-integrated.png"
        alt=""
        draggable="false"
      />
    </div>
  );
}
