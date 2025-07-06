
'use client'
import { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import { useI18n } from '../../[locale]/../../locales/client'

export default function Expertise() {
  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur
  const t = useI18n()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const expertiseTitle = useRef(null);
  const expertiseIntro = useRef(null);
  const expertiseList = useRef(null);
  const expertiseRef = useRef(null);
  const expertiseListMobile = useRef<(HTMLDivElement | null)[]>([]);

  const sectors = [
    {
      number: "01",
      title: t('expertise.sectors.0.title'),
      description: t('expertise.sectors.0.description'),
    },
    {
      number: "02",
      title: t('expertise.sectors.1.title'),
      description: t('expertise.sectors.1.description'),
    },
    {
      number: "03",
      title: t('expertise.sectors.2.title'),
      description: t('expertise.sectors.2.description'),
    },
    {
      number: "04",
      title: t('expertise.sectors.3.title'),
      description: t('expertise.sectors.3.description'),
    },
    {
      number: "05",
      title: t('expertise.sectors.4.title'),
      description: t('expertise.sectors.4.description'),
    },
  ];

  
  useEffect(() => {
    if (isMobile) return; // Ne pas exécuter si mobile

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: expertiseIntro.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });

    timeline
      .fromTo(
        [expertiseTitle.current, expertiseIntro.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0 }
      )
      .fromTo(
        expertiseList.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "+=0.5"
      );

  }, [isMobile]);

useEffect(() => {
  if (isMobile && expertiseRef.current) {
    gsap.fromTo(
      expertiseRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay:0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top 90%", // Animation déclenchée quand l'élément est visible à 90% dans le viewport
          toggleActions: "play none none none",
        },
      }
    );
  }
}, [isMobile]);

  useEffect(() => {
    if (!isMobile) return; // Ne pas exécuter si desktop

    const animations = expertiseListMobile.current.map((el, index) => {
      if (el) {
        const isLeft = index % 2 === 0;
        return gsap.fromTo(
          el,
          { opacity: 0, x: isLeft ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Nettoyage
    return () => animations.forEach((animation) => animation?.kill());
  }, [isMobile]);

  if (isMobile) {
    // Code de la version mobile
  return (
    <section id="expertise" className="expertise flex flex-col items-center bg-dark_brown_grey text-white px-6 py-12">
      <div ref={expertiseRef} className="text-end mb-8 flex flex-col w-full">
        <h1 className="expertise_titre">{t('expertise.sectionTitle')}</h1>
        <p className="citations text-end">
        {t('expertise.intro')}<br/>{t('expertise.intro_2')} <strong><span className="text-gold">{t('expertise.post_intro')}<br/>{t('expertise.post_intro_2')}.</span></strong>
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        {sectors.map((sector,index) => (
            <div
            key={sector.number}
            ref={(el) => {
              if (el) {
                expertiseListMobile.current[index] = el;
              }
            }}
            className={`${
              index === 0 || index === 2 || index === 4 ? "self-start text-left w-4/6" : "self-end text-right w-4/6"
            }`}
          >
            <h3 className="text-gold grand_titre_s_expertise mb-2">{sector.number}</h3>
            <h4 className="sous_titre mb-4">{sector.title}</h4>
            <p className="text-white body_text">{sector.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
// Code de la version desktop
  return (
    <section id="expertise" className="expertise flex flex-col items-center justify-center gap-4 bg-dark_brown_grey text-white px-6 py-10">
      <div className="text-center mb-8">
        <p ref={expertiseIntro} className="citations text-center text-sm">
        {t('expertise.pre_intro')} <span className="text-gold">{t('expertise.intro')} </span> 
        {t('expertise.intro_2')} <br/> <span className="text-gold">{t('expertise.post_intro')}</span> {t('expertise.post_intro_2')}.</p>
      </div>

      <div ref={expertiseList} className={`${isMobile ? "flex-col" : "flex"} justify-center gap-8 mb-8`}>
        {sectors.map((sector,index) => (
          <div
          key={sector.number}
          className={`max-w-xs w-48 ${
            index === 0 ? "text-left" : index === sectors.length - 1 ? "text-right" : "text-center"
          }`}
        >
            <h3 className="text-gold grand_titre_s_expertise mb-2">
              {sector.number}
            </h3>
            <h4 className="sous_titre mb-2">{sector.title}</h4>
            <p className="text-white body_text">
              {sector.description}
            </p>
          </div>
        ))}
      </div>
      <h1 ref={expertiseTitle} className="expertise_titre mb-4">{t('expertise.sectionTitle')}</h1>
    </section>
  );
}