'use client';
import React, { useState, useEffect } from "react";

export const GallerySection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // vérifie au montage
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="flex flex-col items-center gap-[30px] py-0 pb-[120px] relative w-full bg-alabaster">
      {/* Banner image */}
      <img
        className="w-full h-auto object-cover"
        alt="Banniere rrs news"
        src="/interview/interview_banner.png"
      />

      <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} ${isMobile ? 'gap-8' : 'gap-[65px]'} relative w-full ${isMobile ? 'px-4' : ''}`}>
        {/* Left column - Logo section */}
        <div className={`flex flex-col items-center ${isMobile ? 'gap-4 order-1' : 'gap-[35px]'} ${isMobile ? 'w-full' : 'flex-1'}`}>
          <div className={`flex items-center justify-center ${isMobile ? 'px-4' : 'px-[65px]'} py-0 w-full`}>
            <h2 className="flex-1 citations text-center">
              Parue dans
            </h2>
          </div>

          <img 
            className={`${isMobile ? 'w-[200px] h-[77px]' : 'w-[274px] h-[105px]'}`} 
            alt="Logo" 
            src="/interview/interview_logo_insights.svg" 
          />
        </div>

        {/* Right column - Newsletter subscription */}
        <div className={`flex flex-col items-start ${isMobile ? 'gap-6 order-3 w-full' : 'gap-[35px] pr-[120px] flex-1'}`}>
          {/* Texte d'inscription */}
          <div className={`${isMobile ? 'order-2' : ''} w-full`}>
            <p className="text-dark-grey-brown text-justify">
              <span className="body_text">
                <strong>Inscrivez-vous dès maintenant</strong> 
              </span>
              <span className="body_text">
                {" "}
                à nos courriers exclusifs pour rester informé(e) des dernières
                tendances du retail en Afrique et des projets innovants portés par
                Retail Revive Services et ses partenaires, à travers des études de
                cas et témoignages d&#39;entreprises.
              </span>
            </p>
          </div>

          {/* Formulaire newsletter */}
          <div className={`flex flex-col items-center justify-center gap-5 w-full ${isMobile ? 'order-3' : ''}`}>
            {/* Input fields */}
            <div className="flex items-center gap-4 w-full">
              <div className={`${isMobile ? 'w-full' : 'flex-1'} h-[35px]`}>
                <div className="w-full h-[35px] bg-white rounded-lg border border-solid border-[#b5b0a6]">
                  <div className="p-0">
                    <input
                      className="h-full pt-2 border-none pl-[26px] font-body-regular text-[#b5b0a6] placeholder:text-[#b5b0a6] w-full"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
              </div>

              <div className={`${isMobile ? 'w-full' : 'flex-1'} h-[35px] ${isMobile ? '' : 'mr-[-2.00px]'}`}>
                <div className="w-full h-[35px] bg-white rounded-lg border border-solid border-[#b5b0a6]">
                  <div className="p-0">
                    <input
                      className="h-full pt-2 border-none pl-[26px] font-body-regular text-[#b5b0a6] placeholder:text-[#b5b0a6] w-full"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe button */}
            <button className={`${isMobile ? 'px-4 py-3 text-sm' : 'px-[30px] py-2.5'} bg-gold hover:bg-gold/90 rounded-lg text-white sous_titre w-full max-w-md`}>
              JE M&apos;ABONNE À LA NEWSLETTER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};