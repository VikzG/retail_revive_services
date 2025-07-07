"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/app/[locale]/components/Nav";
import Expertise from "@/app/[locale]/components/Expertise";
import Experts from "@/app/[locale]/components/Experts";
import Opportunites from "@/app/[locale]/components/Opportunites";
import Club from "@/app/[locale]/components/Club";
import Actualites from "@/app/[locale]/components/Actualités";
import Contact from "@/app/[locale]/components/Contact";
import Presse from "@/app/[locale]/components/Presse";
import Sub from "@/app/[locale]/components/Sub";
import Services from "@/app/[locale]/components/Services";
import Footer from "@/app/[locale]/components/Footer";
import Loader from "@/app/[locale]/components/Loader";
import { useI18n } from "../../locales/client";
import ClientsSection from "./components/ClientsSection";
import { PageInterview } from "./components/PageInterview";

export default function Home() {
  const t = useI18n();
  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  const headerTitleRef = useRef(null);
  const headerSpanRef = useRef(null);
  const introductionRef = useRef<HTMLDivElement>(null);

  const [isSubVisible, setIsSubVisible] = useState<boolean>(false);
  const [isInterviewVisible, setIsInterviewVisible] = useState(false);
  const subContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      headerTitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    ).fromTo(
      headerSpanRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (introductionRef.current) {
      gsap.fromTo(
        introductionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introductionRef.current,
            start: "top 70%", // L'animation démarre lorsque 80% du viewport dépasse le trigger
            end: "top 30%", // L'animation est terminée lorsque le haut du trigger atteint 30% du viewport
            toggleActions: "play none none none", // Options pour démarrer l'animation
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <Loader />
      <header className="bg-light_beige min-h-screen relative">
        <Nav
          isSubVisible={isSubVisible}
          setIsSubVisible={setIsSubVisible}
          isInterviewVisible={isInterviewVisible}
          setIsInterviewVisible={setIsInterviewVisible}
        />
        <div className="banner_container relative h-screen w-full">
          <img
            className="brightness-50 w-full h-full object-cover"
            src="/banner/banner_rss.png"
            alt={t("bannerAlt")} // Traduction pour l'attribut alt
          />
          <div ref={headerTitleRef}>
            <div className="span_header_container absolute w-full flex justify-center p-4">
              <span className="sous_titre justify-center text-white">
                {t("partner")} {/* Traduction pour "votre partenaire" */}
              </span>
            </div>
            <h1 className="grand_titre text-center absolute inset-0 flex items-center justify-center text-white">
              {t("title")} {/* Traduction pour "expansion retail en afrique" */}
              {!isMobile && <br />}
              {t("title_2")} {isMobile && <br />}
              {t("title_3")}
            </h1>
          </div>

          {/* Conteneur pour le paragraphe centré en bas */}
          <div className="banner_text_container absolute bottom-28 flex justify-center p-4">
            <p
              ref={headerSpanRef}
              className="body_text text-center text-white max-w-4xl"
            >
              {t("welcome")} <strong>{t("welcome_2")}</strong> {t("welcome_3")}{" "}
              <strong>{t("welcome_4")}</strong> {t("welcome_5")}
            </p>
          </div>

          <div className="absolute bottom-8 w-full flex justify-center p-4">
            <button className="btn_border_1 bouton_page_garde sous_titre">
              <a href="#services">{t("learnMore")}</a>{" "}
              {/* Traduction pour "EN SAVOIR+" */}
            </button>
          </div>
        </div>
      </header>
      <section
        ref={introductionRef}
        className="introduction min-h-[30vh] flex flex-row items-center justify-around p-2 py-0"
      >
        <svg
          className="wave_left"
          width="86"
          height="96"
          viewBox="0 0 86 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 45.7676C0 30.6162 3.78295 19.2191 11.3544 11.5782C13.5089 9.40319 15.858 7.53708 18.3979 5.98168C25.7174 1.49934 33.0906 0.455048 41.1826 0.120435C59.5268 -0.638879 77.38 2.37448 86 4.05858C79.8254 10.0007 73.6508 15.9429 67.4761 21.885C62.5891 21.4107 45.0119 20.0005 34.1577 25.6669C31.4066 27.1028 29.8542 28.5184 29.0576 29.5333C26.3621 32.9714 25.0152 38.3858 25.0152 45.7676V96H0V45.7676Z"
            fill="#F4F2E9"
          />
          <path
            d="M49.7762 60.5255C56.9168 60.5255 62.7053 54.7808 62.7053 47.6944C62.7053 40.6079 56.9168 34.8632 49.7762 34.8632C42.6357 34.8632 36.8472 40.6079 36.8472 47.6944C36.8472 54.7808 42.6357 60.5255 49.7762 60.5255Z"
            fill="#F4F2E9"
          />
        </svg>

        <span className="citations text-center w-3/6 min-w-[335px]">
          {t("subtitle")} <em className="text-blond">{t("subtitle_2")} </em>
          {t("subtitle_3")}
        </span>
        <svg
          className="wave_right"
          width="86"
          height="96"
          viewBox="0 0 86 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86 50.2324C86 65.3838 82.2171 76.7809 74.6456 84.4218C72.4911 86.5968 70.142 88.4629 67.6021 90.0183C60.2826 94.5007 52.9094 95.5449 44.8174 95.8796C26.4732 96.6389 8.62001 93.6255 3.54812e-07 91.9414C6.17461 85.9993 12.3492 80.0571 18.5239 74.115C23.4109 74.5893 40.9881 75.9995 51.8423 70.3331C54.5934 68.8972 56.1458 67.4816 56.9424 66.4667C59.6379 63.0286 60.9848 57.6142 60.9848 50.2324L60.9848 -2.1869e-06L86 0L86 50.2324Z"
            fill="#F4F2E9"
          />
          <path
            d="M36.2235 35.4745C29.083 35.4745 23.2944 41.2192 23.2944 48.3056C23.2944 55.3921 29.083 61.1368 36.2235 61.1368C43.364 61.1368 49.1526 55.3921 49.1526 48.3056C49.1526 41.2192 43.364 35.4745 36.2235 35.4745Z"
            fill="#F4F2E9"
          />
        </svg>
      </section>
      <main>
        <Services setIsSubVisible={setIsSubVisible} />
        <Expertise />
        <Experts setIsSubVisible={setIsSubVisible} />
        <Opportunites />
        <Club setIsSubVisible={setIsSubVisible} />
        <ClientsSection />
        <Actualites
          setIsSubVisible={setIsSubVisible}
          setIsInterviewVisible={setIsInterviewVisible}
          isInterviewVisible={isInterviewVisible}
        />
        <Presse />
        <Contact />
        <Loader />
      </main>
      <Footer />
      <div
        ref={subContainerRef}
        className={`sub-container fixed min-h-screen overflow-hidden inset-0 z-20 bg-white ${
          isSubVisible ? "visible" : ""
        }`}
      >
        <Sub />
      </div>
      {/* 💬 Interview page */}
      {isInterviewVisible && (
        <PageInterview onClose={() => setIsInterviewVisible(false)} />
      )}
    </div>
  );
}
