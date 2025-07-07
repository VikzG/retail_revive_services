import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setShowLoader(false),
    });

timeline.to(loaderRef.current, {
  top: "-100%",       // Utilise position absolue ou relative
  duration: 0.5,
  delay: 1.6,
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
      className="loader_container fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white z-50"
    >
      <video autoPlay muted playsInline className="w-1/3 h-1/3 object-contain">
        <source src="/RRS_logo_anim.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default Loader;
