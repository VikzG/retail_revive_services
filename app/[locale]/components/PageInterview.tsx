'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { InterviewSection } from "./InterviewSection";
import Footer from "./Footer";

type PageInterviewProps = {
  onClose: () => void;
};

export const PageInterview = ({ onClose }: PageInterviewProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation d'entrée
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // Animation de sortie
  const handleClose = () => {
    gsap.to(containerRef.current, {
      y: "100%",
      duration: 1,
      ease: "power3.in",
      onComplete: onClose, // Appelle la fonction seulement une fois l'animation terminée
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-transparent z-20"
    >
      <div className="bg-[#f4f2e9] flex flex-row justify-center w-full h-full overflow-y-auto">
        <div className="bg-alabaster w-full relative">
          <div className="flex flex-col w-full">
            <InterviewSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
