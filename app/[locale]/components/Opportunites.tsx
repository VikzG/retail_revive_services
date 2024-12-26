import Image from "next/image"
import { useEffect, useRef,useState } from "react";
import { Star } from "lucide-react"
import { gsap } from "gsap";
import { useI18n } from '../../[locale]/../../locales/client';


export default function Opportunites() {
  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1050px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const t = useI18n()
  const clubRef = useRef(null);
  const retailRef = useRef(null);
  const africaRef = useRef(null);
  const animationRef = useRef(null);
  const opportuniteRef = useRef(null);
  const clubRefMobile = useRef(null);
  const retailRefMobile = useRef(null);
  const africaRefMobile = useRef(null);
  const opportuniteTitleRef = useRef(null);


  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".opportunite_titre", // Point de déclenchement
        start: "top 70%", // Position de départ
        end: "bottom top", // Position de fin
        scrub: false, // L'animation suit le défilement
      },
    });

    // Animations pour chaque mot
    timeline
      .fromTo(
        clubRef.current,
        { x: "-100%", opacity: 0 }, // CLUB : Part de la gauche avec opacité 0
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        retailRef.current,
        { x: "100%", opacity: 0 }, // RETAIL : Part de la droite avec opacité 0
        { x: "0%", opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.5" // Commence légèrement avant la fin de CLUB
      )
      .fromTo(
        africaRef.current,
        { x: "-100%", opacity: 0 }, // AFRICA : Part de la gauche avec opacité 0
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.1" // Commence légèrement avant la fin de RETAIL
      )
      .fromTo(
        animationRef.current,
        { opacity: 0 }, // Valeur initiale
        { opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" } // Valeur finale avec durée et easing
      );

  }, []);

  useEffect(() => {
    // Vérifier si nous sommes en mobile
    if (isMobile) {
      // Créer la timeline GSAP
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".opportunite_mobile",
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });
  
      // Ajouter les animations
      timeline
        .fromTo(
          clubRefMobile.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(
          retailRefMobile.current,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          africaRefMobile.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.2"
        );
  
      // Nettoyage : détruire la timeline et le ScrollTrigger associé
      return () => {
        timeline.kill();
      };
    }
  }, [isMobile]);


  useEffect(() => {
    if (isMobile && opportuniteRef.current) {
      gsap.fromTo(
        opportuniteRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay:1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: opportuniteRef.current,
            start: "top 60%", // Animation déclenchée quand l'élément est visible à 90% dans le viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && opportuniteTitleRef.current) {
      gsap.fromTo(
        opportuniteTitleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay:1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: opportuniteTitleRef.current,
            start: "top 60%", // Animation déclenchée quand l'élément est visible à 90% dans le viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isMobile]);

 if (isMobile) {
  return (
    <section className="opportunite_mobile bg-dark_brown_grey text-white p-6 flex flex-col items-center text-center py-16 space-y-6">
 
    {/* Main Title */}
    <h1 className="grand_titre flex flex-col w-[400px]">
      <span ref={clubRefMobile} className="text-start ps-11">CLUB</span>        

           <div ref={retailRefMobile} className="relative"><span className="text-end ps-10 ms-8">RETAIL</span> 
            <Star className="star_mobile_opportunite absolute bottom-14 right-24 w-5 h-5 fill-current text-gold" />
            </div> 
            <span ref={africaRefMobile} className="text-start ps-12">AFRICA</span>
            <span className="absolute right-10 sous_titre_opportunite_mobile uppercase text-gold">{t('opportunities.sectionTitle')}</span>
          </h1>
    
    {/* Subtitle/Description Text */}
    <p ref={opportuniteTitleRef} className="sous_titre text-end">
    {t('opportunities.intro.part_1')}<br/>{t('opportunities.intro.part_2')}
    </p>
    
    {/* Description Paragraph */}
    <p ref={opportuniteRef} className="body_text text-white px-2">
    {t('opportunities.description.part_1')} <span className="font-semibold">{t('opportunities.description.part_2')}</span> {t('opportunities.description.part_3')}
      <span className="font-semibold"> {t('opportunities.description.part_4')}</span> {t('opportunities.description.part_5')} {t('opportunities.description.part_6')}
    </p>
    
    {/* Image */}
    <div className="w-full flex flex-col items-center justify-center">
      <img
        src="/opportunites/opportunite_img.png" // Update this path to your image source
        alt="Club Retail Africa"
        className="w-48 h-auto rounded-t-full"
      />
                  <button 
              className="opportunite_bouton z-10 bg-gold text-white sous_titre uppercase py-3 px-8 rounded-xl"
            >
             <a href="#club">{t('opportunities.ctaRevealBenefits')}</a> 
            </button>
    </div>
    
    {/* Button */}

  </section>
  )
 }

  return (
    <div className="min-h-[1000px] bg-dark_brown_grey text-white relative overflow-hidden">
      {/* Top right corner badge */}
      <div className="absolute top-12 right-12 flex items-center gap-2 text-gold">
        <Star className="w-11 h-11 fill-current stroke-none text-gold" />
        <span className="sous_titre uppercase text-gold">{t('opportunities.sectionTitle')}</span>
      </div>

      {/* Main content container */}
      <div className="max-h-screen mx-auto px-4 py-12 grid gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-8 p-14">
          <h1 className="opportunite_titre flex flex-col w-[1400px]">
            <span ref={clubRef} className="text-start ms-12">CLUB</span>
            <span ref={retailRef} className="text-center me-14">RETAIL</span>
            <span ref={africaRef} className="text-start ms-12">AFRICA</span>
          </h1>
          <div ref={animationRef} className="opportunite_animation">
          <div className="flex flex-row gap-32 ms-12">
            <p className="sous_titre">
            {t('opportunities.intro.part_1')}<br/>{t('opportunities.intro.part_2')}
            </p>
            <button 
              className="opportunite_bouton z-10 bg-gold text-white sous_titre uppercase py-3 px-8 rounded-xl"
            >
            <a href="#club"> {t('opportunities.ctaRevealBenefits')}</a> 
            </button>
          </div>
          <div className="absolute bottom-10">
          <p className="body_text w-3/6">
            {t('opportunities.description.part_1')} <strong>{t('opportunities.description.part_2')}</strong> {t('opportunities.description.part_3')} <strong className="body_text">{t('opportunities.description.part_4')}</strong> {t('opportunities.description.part_5')}{" "}
            <strong className="body_text">{t('opportunities.description.part_6')}</strong>
          </p>
        </div>
        </div>

        {/* Right column - Image positioned to the right */}
        <div className="opportunite_img_container relative bottom-36 w-[350px] h-[550px] ml-[65vw]">
          <div className="absolute inset-0 overflow-hidden rounded-t-full">
            <Image
              src="/opportunites/opportunite_img.png"
              alt="Elegant meeting space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
