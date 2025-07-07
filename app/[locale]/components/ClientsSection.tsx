import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brandLogosSlide1 = [
  "/clients/logos_marques/123_logo.svg",
  "/clients/logos_marques/be_sport_logo.svg",
  "/clients/logos_marques/TH_logo.svg",
  "/clients/logos_marques/aldo_logo.svg",
  "/clients/logos_marques/logo_mango.svg",
  "/clients/logos_marques/celio_logo.svg",
  "/clients/logos_marques/occitane_logo.svg",
  "/clients/logos_marques/hugo_boss_logo.svg",
  "/clients/logos_marques/city_sport.svg",
  "/clients/logos_marques/courir_logo.svg",
  "/clients/logos_marques/guess_logo.svg",
  "/clients/logos_marques/call_it_spring.svg",
  "/clients/logos_marques/lovisa_logo.svg",
  "/clients/logos_marques/levis_logo.svg",
];

const brandLogosSlide2 = [
  "/clients/logos_marques/scensoria_logo.svg",
  "/clients/logos_marques/FATALES_LOGO.svg",
];

const brandLogosSlide2Mobile = [
  "/clients/logos_m/slide_2/scensoria_noir.png",
  "/clients/logos_m/slide_2/fatales.png",
];

const testimonials = [
  {
    quote:
      "Une formation concrète, parfaitement adaptée à nos équipes terrain. Nos managers sont repartis avec des outils clairs et une nouvelle énergie pour piloter la performance en magasin.",
    author: {
      name: "Cynthia B",
      title: "Directrice des ventes chez SPCA",
    },
    slide: "/clients/clients_team_img.png",
    logo: "/clients/logo_retail_smart.svg",
    category: "Retail Revive Smart - Formation",
    sliderCenterImg: "/clients/logos_marques/logo_SPCA.svg",
    logosSlide: brandLogosSlide1,
  },
  {
    quote:
      "Retail Revive Connect a été un vrai tremplin pour ma marque. Grâce à l’accompagnement, Tatiana B est désormais distribuée chez Scensoria, une belle vitrine pour toucher une clientèle affinée. Une collaboration fluide, professionnelle et porteuse de vraies opportunités.",
    author: {
      name: "Tatiana B",
      title: "Fondatrice de la marque",
    },
    slide: "/clients/tatiana_b_img.png",
    logo: "/clients/logo_retail_connect.svg",
    category: "Retail Revive Connect - Distribution",
    sliderCenterImg: "/clients/logos_marques/tatianab_center.svg",
    logosSlide: brandLogosSlide2,
    logosSlideMobile: brandLogosSlide2Mobile,
  },
  {
    quote:
      "Une formation dynamique et directement applicable sur le terrain. Nos équipes ont particulièrement apprécié les mises en situation et les échanges concrets autour des enjeux du management en point de vente.",
    author: {
      name: "Helena B",
      title: "Directrice des ventes chez Scensoria",
    },
    slide: "/clients/scensoria_img.png",
    logo: "/clients/logo_retail_smart.svg",
    category: "Retail Revive Smart - Formation",
    sliderCenterImg: "/clients/logos_marques/scensoria_center.svg",
    logosSlide: [],
  },
  {
    quote: "",
    author: { name: "", title: "" },
    slide: "/clients/logos_marques/sephora_gold_card.png",
    logo: "/clients/logo_retail_smart.svg",
    category: "Retail Revive Services - Evenement",
    sliderCenterImg: "",
    logosSlide: [],
    title_1: "Objectif Client",
    description_1:
      "Organisation de leurs soirées VIP (pour leurs clients GOLD)",
    title_2: "Accompagnement",
    description_2:
      "Coordination et animations impeccables pour faire de leurs événements une expérience mémorable.",
    type: "event",
  },
];

const ClientsSection = () => {
  const brandsRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // vérifie au montage
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const renderLogos = () => {
    if (testimonialIndex === 0) {
      return (
<div className="absolute bottom-0 left-0 w-full bg-white">
  <div
    className={`flex h-full ${
      isMobile ? "gap-2 py-2" : "min-h-[170px] gap-8 py-4"
    } px-2 justify-center items-center flex-wrap`}
  >
    {brandLogosSlide1.map((logo, index) => (
      <div
        key={`row1-${index}`}
        className={`relative ${
          isMobile ? "w-[40px] h-[40px]" : "w-[120px] h-[40px]"
        }`}
      >
        <Image
          src={logo}
          alt={`brand-${index}`}
          fill
          className="object-contain"
          sizes={isMobile ? "40px" : "120px"}
          priority
        />
      </div>
    ))}
  </div>
</div>
      );
} else if (testimonialIndex === 1) {
  const logos = isMobile
    ? testimonials[testimonialIndex].logosSlideMobile
    : testimonials[testimonialIndex].logosSlide;

  return (
    <div
      className={`absolute flex items-center justify-center bottom-0 ${
        isMobile ? "min-h-[80px]" : "min-h-[170px]"
      } left-0 w-full bg-white`}
    >
      <div
        className={`flex justify-center items-center h-full ${
          isMobile ? "gap-4" : "gap-32"
        }`}
      >
        {(logos ?? []).map((logo, index) => (
          <div
            key={`slide2-logo-${index}`}
            className={`relative ${
              isMobile ? "w-40 h-14" : "w-[250px] h-[150px]"
            }`}
          >
            <Image
              src={logo}
              alt={`brand-${index}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
    return null;
  };

  return (
<div className={`bg-[#1C1816] text-white ${isMobile ? "px-10 py-10" : "px-16 py-16"}`}>
      <div className={`flex gap-10 ${isMobile ? "flex-col" : "flex-row"}`}>
        {/* Left content */}
<div
  className={`flex flex-col h-full ${
    isMobile ? "items-center text-center" : "max-w-[35%] min-w-[530px]"
  }`}
>
          {/* Partie haute : logo + texte */}
          <div>
            <div className={`${isMobile ? "text-center" : "flex flex-row gap-10"}`}>
              <img
                className={`self-end ${isMobile ? "hidden" : "block"}`}
                src={testimonials[testimonialIndex].logo}
              />
              <div className="flex flex-col justify-between">
                <h2 className={`sous_titre text-white bg-gold text-center py-2 uppercase ${isMobile ? "hidden" : "block"}`}>
                  {testimonials[testimonialIndex].category}
                </h2>
                <h1 className="grand_titre">NOS CLIENTS</h1>
              </div>
            </div>

            {/* Texte à gauche : quote OU version événement */}
            {testimonials[testimonialIndex].type === "event" ? (
              <div className={`mt-4 ${isMobile ? "text-center" : "text-left"}`}>
                <h3 className="text-gold sous_titre mt-20 mb-4 uppercase">
                  {testimonials[testimonialIndex].title_1}
                </h3>
                <p className="mb-10 body_text text-white">
                  <strong>
                    {testimonials[testimonialIndex].description_1}
                  </strong>
                </p>
                <h3 className="text-gold sous_titre mb-4 uppercase">
                  {testimonials[testimonialIndex].title_2}
                </h3>
                <p className="citations_clients">
                  {testimonials[testimonialIndex].description_2}
                </p>
              </div>
            ) : (
              <>
                <p
                  className={`citations_clients mt-20 transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  “{testimonials[testimonialIndex].quote}”
                </p>
                <p
                  className={`text-gold lowercase sous_titre mt-10 transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <strong>{testimonials[testimonialIndex].author.name}</strong>,{" "}
                  {testimonials[testimonialIndex].author.title}
                </p>
              </>
            )}
          </div>

          {/* Partie basse : radio dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  idx === testimonialIndex
                    ? "bg-gold border-gold"
                    : "bg-transparent border-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right image slider synced with testimonial */}
        <div className={`relative w-full ${isMobile ? "h-[400px]" : "h-[600px]"} rounded-xl overflow-hidden`}>
          <Image
            src={testimonials[testimonialIndex].slide}
            alt={`slide-${testimonialIndex}`}
            width={800}
            height={450}
            className={`object-cover w-full h-full transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          {testimonials[testimonialIndex].sliderCenterImg && (
            <div
              className={`absolute transition-opacity duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={testimonials[testimonialIndex].sliderCenterImg}
                alt={`center-logo-${testimonialIndex}`}
                width={
                  testimonialIndex === 0
                    ? 100
                    : testimonialIndex === 1
                    ? 300
                    : 450
                }
                height={120}
                className="object-contain"
              />
            </div>
          )}
          {renderLogos()}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
