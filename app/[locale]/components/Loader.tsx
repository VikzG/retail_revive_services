import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setShowLoader(false),
    });

    // Animation de fin du loader (tu peux adapter la durée ici)
    timeline.to(loaderRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
      delay: 2.4, // correspond à environ le même temps que ton ancienne timeline
      ease: "power1.inOut",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div
      ref={loaderRef}
      className="loader_container fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-light_beige z-50"
    >
      <video
        src="/RRS_logo_anim.mp4" // ← Modifie ce chemin selon ton projet
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Loader;
