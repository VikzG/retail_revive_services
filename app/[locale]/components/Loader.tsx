import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => setShowLoader(false),
    });

    // Animation de fin du loader
    timeline.to(loaderRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.6,
      ease: "power1.inOut",
    });

    // On laisse le logo visible au moins 0.8s, puis on part dès que la page
    // est chargée (au plus tard après 2s pour ne jamais bloquer le visiteur)
    const start = Date.now();
    const hide = () => {
      const wait = Math.max(0, 800 - (Date.now() - start));
      setTimeout(() => timeline.play(), wait);
    };
    const maxTimer = setTimeout(() => timeline.play(), 2000);
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });

    return () => {
      clearTimeout(maxTimer);
      window.removeEventListener("load", hide);
      timeline.kill();
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div
      ref={loaderRef}
      className="loader_container fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white z-50"
    >
      <video
        src="/RRS_logo_anim.mp4"
        autoPlay
        muted
        playsInline
        className="w-1/3 h-1/3 object-contain"
      />
    </div>
  );
};

export default Loader;
