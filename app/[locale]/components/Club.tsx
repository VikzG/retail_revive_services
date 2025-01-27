import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { useI18n } from "../../[locale]/../../locales/client";

type ClubProps = {
  setIsSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Club({ setIsSubVisible }: ClubProps) {
  const clubSectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  const clubRefMobile = useRef<HTMLDivElement>(null);
  const t = useI18n();

  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Animation d'opacité pour la section entière en mobile uniquement
      if (clubRefMobile.current) {
        gsap.fromTo(
          clubRefMobile.current,
          { opacity: 0 },
          {
            opacity: 1,
            delay: 0.5,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: clubRefMobile.current,
              start: "top 50%", // Déclenchement au défilement
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, [isMobile]);

  useEffect(() => {
    {
      // Animation pour club_section_anim
      gsap.fromTo(
        clubSectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: clubSectionRef.current,
            start: "top 60%", // Déclenche quand le haut de la section atteint 80% de la fenêtre
            toggleActions: "play none none none",
          },
        }
      );

      // Animation pour les étoiles une par une
      starsRef.current.forEach((star, index) => {
        if (star) {
          gsap.fromTo(
            star,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              delay: index * 0.2, // Délai progressif
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: clubSectionRef.current, // Animation synchronisée avec la section
                start: "top 70%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section
        id="club"
        className="pb-0 text-center flex flex-col items-center"
      >
        {/* Image at the top */}
        <div className="w-full h-48 relative mb-6">
          <Image
            src="/club/club_img.png" // Replace with the actual image path
            alt="Club Retail Africa"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Main Content */}
        <div className="w-full" ref={clubRefMobile}>
          <div className="text-center mb-6 px-4 pt-6">
            <h2 className="citations">{t("club.sectionTitle")}</h2>
            <h1 className="text-gold grand_titre_s mt-1">
              {t("club.clubName")}
            </h1>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6 mb-6 px-4">
            <p className="body_text border-b w-4/6 m-auto pb-4 border-black">
              <strong>{t("club.benefits.0.title")}</strong>
              <br />
              {t("club.benefits.0.description")}
            </p>
            <p className="body_text border-b w-4/6 m-auto pb-4 border-black">
              <strong>{t("club.benefits.1.title")}</strong>
              <br />
              {t("club.benefits.1.description")}
            </p>
            <p className="body_text border-b w-4/6 m-auto pb-4 border-black">
              <strong>{t("club.benefits.2.title")}</strong>
              <br />
              {t("club.benefits.2.description")}
            </p>
            <p className="body_text w-4/6 m-auto pb-4 mb-6">
              <strong>{t("club.benefits.3.title")}</strong>
              <br />
              {t("club.benefits.3.description")}
            </p>
          </div>

          {/* Signup Button */}
          <div className="bg-blond p-6 w-full text-center">
            <p className="body_text text-white py-4">
              <strong>{t("club.ctaDescription")}</strong>{" "}
              {t("club.ctaDescription_2")}
              <br/><br/>
              <strong> {t("club.ctaDescription_3")}<br/></strong>
              {t("club.ctaDescription_4")}
            </p>
            <button
              className="btn_border_2 bouton_page_garde sous_titre text-center p-4"
              onClick={(e) => {
                e.preventDefault();
                setIsSubVisible(true);
              }}
            >
              {t("club.ctaButton")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      id="club"
      className="bg-light_beige min-h-screen text-dark_brown_grey flex"
    >
      {/* Colonne gauche - Image prenant 40% de la largeur */}
      <div className="w-2/5 h-screen relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/club/club_img.png" // Remplacez avec le bon chemin d'image
          alt="Luxury Building"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      {/* Colonne droite - Texte et informations prenant 60% de la largeur */}
      <div className="min-w-[900px] w-3/5 flex flex-col justify-between pt-12">
        <div className="flex flex-row px-16">
          <div ref={clubSectionRef} className="club_section_anim flex flex-col">
            <h1 className="sur_titre_club text-black">
              {t("club.sectionTitle")} <br />
              <span className="grand_titre_s text-gold">
                {t("club.clubName")}
                <br />
                {t("club.clubName_2")}
              </span>
            </h1>

            {/* Bloc Avis Client en dessous */}
            <div className="bg-white w-3/4 rounded-xl shadow-lg p-6 space-y-4 mt-8">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-gold">
                  {t("club.customerReviewTitle")}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i}>
                      <Star fill="#B69F61" className="w-5 h-5 text-gold" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="avis_body_text italic text-dark_brown_grey">
                {t("club.customerReview")}
              </p>
            </div>
          </div>

          {/* Conteneur flex pour le titre et la liste des avantages à droite */}
          <div className="flex flex-col justify-center">
            {/* Liste des avantages avec séparation par une ligne noire */}
            <ul className="space-y-6 w-80 body_text text-dark_brown_grey">
              <li className="border-b border-black pb-4 last:border-b-0">
                <strong>{t("club.benefits.0.title")}</strong> <br />
                {t("club.benefits.0.description")}
              </li>
              <li className="border-b border-black pb-4 last:border-b-0">
                <strong>{t("club.benefits.1.title")}</strong> <br />
                {t("club.benefits.1.description")}
              </li>
              <li className="border-b border-black pb-4 last:border-b-0">
                <strong>{t("club.benefits.2.title")}</strong>
                <br /> {t("club.benefits.2.description")}
              </li>
              <li className="pb-2 last:border-b-0">
                <strong>{t("club.benefits.3.title")}</strong>
                <br />
                {t("club.benefits.3.description")}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-around bg-blond h-60">
          <div className="flex flex-col gap-8 w-1/2">
            <p className="sous_titre text-white">{t("club.ctaTitle")}</p>
            <p className="body_text text-white">
              {" "}
              <strong>{t("club.ctaDescription")}</strong>{" "}
              {t("club.ctaDescription_2")}<br/><br/>
              <strong> {t("club.ctaDescription_3")}<br/></strong>
              {t("club.ctaDescription_4")}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSubVisible(true);
            }}
            className="btn_border_2 bouton_page_garde sous_titre text-center p-4"
          >
            {t("club.ctaButton_desktop")}
            <br />
            {t("club.ctaButton_desktop_2")}
          </button>
        </div>
      </div>
    </div>
  );
}
