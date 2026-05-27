import { useEffect, useState } from "react";

const ROCKET_IMAGE = "/brand/letzimpact-scroll-rocket-integrated.png";

export function RocketTrail() {
  const [launched, setLaunched] = useState({ upper: false, lower: false });

  useEffect(() => {
    if (launched.upper && launched.lower) {
      return;
    }

    const getUpperLaunchOffset = () =>
      Math.max(360, Math.min(760, window.innerHeight * 0.62));

    const getLowerLaunchOffset = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      return Math.max(
        getUpperLaunchOffset() + window.innerHeight * 2.25,
        maxScroll - window.innerHeight * 1.25
      );
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const upperShouldLaunch = scrollY >= getUpperLaunchOffset();
      const lowerShouldLaunch = scrollY >= getLowerLaunchOffset();

      if (!upperShouldLaunch && !lowerShouldLaunch) {
        return;
      }

      setLaunched(current => ({
        upper: current.upper || upperShouldLaunch,
        lower: current.lower || lowerShouldLaunch,
      }));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [launched.lower, launched.upper]);

  return (
    <>
      <div
        className={`rocket-flyby-layer rocket-flyby-layer--upper${
          launched.upper ? " is-launched" : ""
        }`}
        aria-hidden="true"
      >
        <img
          className="rocket-flyby-image rocket-flyby-image--upper"
          src={ROCKET_IMAGE}
          alt=""
          draggable="false"
        />
      </div>
      <div
        className={`rocket-flyby-layer rocket-flyby-layer--lower${
          launched.lower ? " is-launched" : ""
        }`}
        aria-hidden="true"
      >
        <img
          className="rocket-flyby-image rocket-flyby-image--lower"
          src={ROCKET_IMAGE}
          alt=""
          draggable="false"
        />
      </div>
    </>
  );
}
