'use client';
import React from "react";
import { GallerySection } from "./GallerySection";
import { InterviewSection } from "./InterviewSection";

type PageInterviewProps = {
  onClose: () => void;
};


export const PageInterview = ({ onClose }: PageInterviewProps) : JSX.Element => {
  return (
        <div className="relative min-h-screen bg-white">
      <button 
        onClick={onClose} 
        className="absolute top-16 z-30 right-5 bg-black text-white px-4 py-2 rounded"
      >
        Fermer
      </button>
    <div className="bg-[#f4f2e9] flex flex-row justify-center w-full">
      <div className="bg-alabaster w-full relative">
        <div className="flex flex-col w-full">
          <InterviewSection />
          <GallerySection />
        </div>
      </div>
    </div>
       </div>
  );
};
