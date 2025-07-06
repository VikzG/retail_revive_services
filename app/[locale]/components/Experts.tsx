import Image from "next/image";
import { gsap } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useI18n } from '../../[locale]/../../locales/client'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type ExpertProps = {
  setIsSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Experts({ setIsSubVisible }: ExpertProps) {
  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const t = useI18n()

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
    if (isMobile && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%", // Animation déclenchée quand l'élément est visible à 90% dans le viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isMobile]);

  const topTeam = [
    {
      name: "BAKA",
      role: t('team.roles.BAKA'),
      image: "/experts/experte_img.jpg",
    },
    {
      name: "NELLY",
      role: t('team.roles.NELLY'),
      image: "/experts/nelly_img.png",
    },
    {
      name: "LESLIE",
      role: t('team.roles.LESLIE'),
      image: "/experts/leslie_img.png",
    },
    {
      name: "ANGÉLIQUE",
      role: t('team.roles.ANGÉLIQUE'),
      image: "/experts/angelique_img.png",
    },
    {
      name: "CLAUDIA",
      role: t('team.roles.CLAUDIA'),
      image: "/experts/claudia_img.png",
    },
  ];

  const experts = [
    {
      name: "STEVE",
      role: t('team.roles.STEVE'),
      image: "/experts/steve_img.png",
    },
    {
      name: "DOMINIQUE",
      role: t('team.roles.DOMINIQUE'),
      image: "/experts/dominique_img.png",
    },
    {
      name: "EVA",
      role: t('team.roles.EVA'),
      image: "/experts/eva_img.png",
    },
    {
      name: "SANDRA",
      role: t('team.roles.SANDRA'),
      image: "/experts/sandra_img.png",
    },
    {
      name: "KAREN",
      role: t('team.roles.KAREN'),
      image: "/experts/karen_img.png",
    },
  ];

  const topSlider = useRef(null);
  const bottomSlider = useRef(null);

  const team = [...experts, ...topTeam.reverse()];
  const claudiaIndex = team.findIndex((expert) => expert.name === "CLAUDIA");

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: topSlider.current, // Déclencheur
        start: "top 90%", // Commence quand le slider haut atteint 80% du viewport
        end: "bottom top", // Animation active jusqu'à ce que l'élément sorte du viewport
        scrub: false, // Synchronise avec le défilement
      },
    });

    // Animation du slider du haut (gauche à droite)
    timeline
      .fromTo(
        topSlider.current,
        { x: "-100%", display: "none" }, // Départ hors écran à gauche
        { x: "0%", duration: 2, display: "flex", ease: "power2.out" } // Arrivée à sa position finale
      )
      .fromTo(
        ".top-slider-content", // Classe cible pour le contenu
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }, // Opacité après 1000ms
        "-=1.5" // Chevauchement avec le mouvement
      );

    // Animation du slider du bas (droite à gauche)
    timeline
      .fromTo(
        bottomSlider.current,
        { x: "100%", display: "none" }, // Départ hors écran à droite
        { x: "0%", duration: 2, display: "flex", ease: "power2.out" }, // Arrivée à sa position finale
        "-=1.5" // Déclenchement légèrement après le début de l'animation du haut
      )
      .fromTo(
        ".bottom-slider-content", // Classe cible pour le contenu
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }, // Opacité après 1000ms
        "-=1.5" // Chevauchement avec le mouvement
      );
  }, []);
  if (isMobile) {
    // Code de la version mobile

    return (
      <section ref={sectionRef} className="experts bg-light_beige text-center py-10 px-4">
        <h2 className="grand_titre_s">
        {t('team.sectionTitle.part1_mobile')} <br /> {t('team.sectionTitle.part2')}
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          initialSlide={claudiaIndex}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={false}
          spaceBetween={20}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {team.map((expert, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center py-8"
            >
              <div className="w-6/6 h-3/5 overflow-hidden rounded-xl m-auto mb-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <h3 className="citations text-center text-dark_brown_grey">
                {expert.name}
              </h3>
              <p className="text-sm text-dark_brown_gr">{expert.role}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="citations text-center py-8 pt-0">
          "{t('team.intro_phrase')}{" "}
          <span className="text-gold">{t('team.intro_phrase_2')}</span> {t('team.intro_phrase_3')}{" "}
          <span className="text-gold">{t('team.intro_phrase_4')}</span>."
        </h2>
        <div className="body_text mb-4">
        {t('team.ctaText')}{" "}
          <strong>
            <span>{t('team.ctaText_2')}</span>? {t('team.ctaText_4')}?
          </strong>
        </div>

        <div className="flex justify-center gap-4 py-2">
          <button className="experts_bouton_2 px-4 py-2 rounded-md sous_titre text-gold bg-white">
            <a href="#contact">{t('team.ctaContact')}</a>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSubVisible(true);
            }}
            className="experts_bouton px-4 py-2 rounded-md sous_titre bg-gold text-white"
          >
            {t('team.ctaJoin')}
          </button>
        </div>
      </section>
    );
  }
  // Code de la version desktop
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light_beige py-12 px-8">
      <div className="mx-auto">
        {/* Top Team Section */}
        <div className="mb-20">
          {/* Flex container to align images and text side by side */}
          <div className="flex justify-between items-center mb-8">
            {/* Images de la Top Team */}
            <div ref={topSlider} className="experts_slider flex gap-3 mb-8">
              {topTeam.reverse().map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative shadow-lg bg-white border-4 border-white rounded-lg w-40 h-52 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg experts-img"
                    />
                  </div>
                  <h3 className="sous_titre">{member.name}</h3>
                  <p className="body_text w-40">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Texte à côté des images */}
            <div className="flex flex-col ms-10 justify-center gap-6 space-y-4 max-w-md">
              <h2 className="top-slider-content citations text-end">
                "{t('team.intro_phrase')}{" "}
                <span className="text-gold">{t('team.intro_phrase_2')}</span> {t('team.intro_phrase_3')}{" "}
                <span className="text-gold">{t('team.intro_phrase_4')}</span>."
              </h2>
              <div className="space-y-2 flex flex-col items-end">
                <p className="body_text">
                {t('team.ctaText')}{" "}
                  <strong className="body_text">{t('team.ctaText_2')}</strong> {t('team.ctaText_3')}{" "}
                  <strong className="body_text">{t('team.ctaText_4')}</strong>{" "}
                  ?
                </p>
                <div className="flex justify-center gap-4">
                  <button className="experts_bouton_2 bg-white text-gold rounded-lg sous_titre py-2 w-44">
                    <a href="#contact">{t('team.ctaJoin')}</a>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSubVisible(true);
                    }}
                    className="bg-gold experts_bouton text-white sous_titre rounded-lg py-2 w-48"
                  >
                    {t('team.ctaJoin_desktop')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="bottom-slider-content flex flex-col items-start text-center space-y-4 me-8 max-w-md">
            <h2 className="citations mb-2">{t('team.pre_intro')}</h2>
            <p className="equipe_experts_bottom text-start">
            {t('team.sectionTitle.part1')} {t('team.sectionTitle.part1_2')}
              <span className="text-gold">{t('team.sectionTitle.part2')}</span>
            </p>
          </div>
          <div ref={bottomSlider} className="experts_slider flex gap-3 mb-8">
            {experts.slice(0, 5).map((expert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-4 bg-white w-40 h-52 shadow-lg border-4 border-white rounded-lg ">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="experts-img rounded-lg"
                  />
                </div>
                <h3 className="sous_titre">{expert.name}</h3>
                <p className="body_text w-40">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div className="flex justify-between gap-8">
            {experts.slice(5).map((expert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="body_text">{expert.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
