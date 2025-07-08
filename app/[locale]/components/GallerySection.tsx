"use client";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";

export const GallerySection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  // Nouveau : Champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // vérifie au montage
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Nouveau : Soumission du formulaire
  const handleSubmit = async () => {
    if (!name || !email) {
      setStatus("error");
      return;
    }

    try {
      // Simule une requête API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="flex flex-col gap-20 py-8 relative w-full h-full bg-[#F2F0E6]">
      {/* Banner image */}
      <img
        className="w-full h-auto object-cover"
        alt="Banniere rrs news"
        src="/interview/interview_banner.png"
      />

      <div className={`flex flex-col items-center gap-20 relative w-full px-4`}>
        {/* Left column - Logo section */}
        <div
          className={`flex flex-col items-center ${
            isMobile ? "gap-4 order-1" : "gap-[35px]"
          } ${isMobile ? "w-full" : "flex-1"}`}
        >
          <div
            className={`flex items-center justify-center ${
              isMobile ? "px-4" : "px-[65px]"
            } py-0 w-full`}
          >
            <h2 className="flex-1 citations text-center">Parue dans</h2>
          </div>

          <img
            className={`${
              isMobile ? "w-[200px] h-[77px]" : "w-[274px] h-[105px]"
            }`}
            alt="Logo"
            src="/interview/interview_logo_insights.svg"
          />
        </div>

        {/* Right column - Newsletter subscription */}
        <div
          className={`flex flex-col items-center ${
            isMobile ? "px-10 gap-6 order-3 w-full" : "px-20 gap-14 flex-1"
          }`}
        >
          {/* Texte d'inscription */}
          <div className="w-full max-w-[600px]">
            <p className="text-dark-grey-brown text-justify">
              <span className="body_text">
                <strong>Inscrivez-vous dès maintenant</strong>
              </span>
              <span className="body_text">
                {" "}
                à nos courriers exclusifs pour rester informé(e) des dernières
                tendances du retail en Afrique et des projets innovants portés
                par Retail Revive Services et ses partenaires, à travers des
                études de cas et témoignages d&#39;entreprises.
              </span>
            </p>
          </div>

          {/* Formulaire newsletter */}
          <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[600px]">
            {/* Input fields */}
            <div
              className={`flex ${
                isMobile ? "flex-row gap-2" : "flex-col gap-4"
              } items-center w-full`}
            >
              <div className="w-full h-[35px]">
                <div className="w-full h-full bg-white rounded-lg border border-solid border-[#b5b0a6]">
                  <input
                    className="h-full pt-2 border-none pl-[26px] font-body-regular text-[#b5b0a6] placeholder:text-[#b5b0a6] w-full"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full h-[35px]">
                <div className="w-full h-full bg-white rounded-xl border border-solid border-[#b5b0a6]">
                  <input
                    className="h-full pt-2 border-none pl-[26px] text-[#b5b0a6] placeholder:text-[#b5b0a6] w-full"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Subscribe button */}
            <button
              className="px-3 py-3 bg-gold hover:bg-gold/90 rounded-lg text-white sous_titre w-full max-w-[300px]"
              onClick={handleSubmit}
            >
              JE M&apos;ABONNE À LA NEWSLETTER
            </button>
            {/* Message de feedback */}
            {status === "success" && (
              <p className="text-green-600 sous_titre">Inscription réussie !</p>
            )}
            {status === "error" && (
              <p className="text-red-500 sous_titre">
                Veuillez remplir tous les champs correctement.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
