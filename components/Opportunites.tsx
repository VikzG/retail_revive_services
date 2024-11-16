import Image from "next/image"
import { useEffect, useRef,useState } from "react";
import { Star } from "lucide-react"
import { gsap } from "gsap";


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

  const clubRef = useRef(null);
  const retailRef = useRef(null);
  const africaRef = useRef(null);

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
      );
  }, []);

 if (isMobile) {
  return (
    <section className="bg-dark_brown_grey text-white p-6 flex flex-col items-center text-center py-16 space-y-6">
 
    {/* Main Title */}
    <h1 className="grand_titre flex flex-col w-[400px]">
      <span className="text-start ps-8">CLUB</span>        

           <div className="relative"><span className="text-end ps-10 ms-8">RETAIL</span> 
            <Star className="star_mobile_opportunite absolute bottom-14 right-24 me-2 w-5 h-5 fill-current text-gold" /></div> 
            <span className="text-start ps-10">AFRICA</span>
            <span className="absolute right-10 sous_titre_opportunite_mobile uppercase text-gold">Le coin des opportunités</span>
          </h1>
    
    {/* Subtitle/Description Text */}
    <p className="sous_titre text-end">
      VOUS OUVRE LES PORTES D'UN RÉSEAU<br/>EXCLUSIF DE LEADERS DU RETAIL EN AFRIQUE.
    </p>
    
    {/* Description Paragraph */}
    <p className="body_text text-white px-2">
      Le <span className="font-semibold">Club Retail Africa</span> est un réseau privilégié dédié aux
      acteurs clés du retail en Afrique, offrant à ses membres l’accès à des opportunités uniques.
      En rejoignant ce cercle exclusif, vous bénéficiez d’un environnement stimulant pour
      <span className="font-semibold"> accélérer la croissance de votre entreprise</span> et rester
      à la pointe des évolutions du marché africain.
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
             <a href="#club">Dévoiler les avantages</a> 
            </button>
    </div>
    
    {/* Button */}

  </section>
  )
 }

  return (
    <div className="min-h-screen bg-dark_brown_grey text-white relative overflow-hidden">
      {/* Top right corner badge */}
      <div className="absolute top-12 right-12 flex items-center gap-2 text-gold">
        <Star className="w-10 h-10 fill-current text-gold" />
        <span className="sous_titre uppercase text-gold">Le coin des opportunités</span>
      </div>

      {/* Main content container */}
      <div className="max-h-screen mx-auto px-4 py-12 grid gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-8 p-14">
          <h1 className="opportunite_titre flex flex-col w-[1400px]">
            <span ref={clubRef} className="text-start ms-12">CLUB</span>
            <span ref={retailRef} className="text-center">RETAIL</span>
            <span ref={africaRef} className="text-start ms-12">AFRICA</span>
          </h1>
          <div className="flex flex-row gap-32 ms-12">
            <p className="sous_titre">
              VOUS OUVRE LES PORTES D'UN RÉSEAU <br/>
              EXCLUSIF DE LEADERS DU RETAIL EN AFRIQUE.
            </p>
            <button 
              className="opportunite_bouton z-10 bg-gold text-white sous_titre uppercase py-3 px-8 rounded-xl"
            >
            <a href="#club"> Dévoiler les avantages</a> 
            </button>
          </div>
          <div className="absolute bottom-10">
          <p className="body_text w-3/6">
            Le <strong>Club Retail Africa</strong> est un réseau privilégié dédié aux acteurs clés du retail en Afrique,
            offrant à ses membres des opportunités uniques de collaboration, d'échange et d'accès à
            des ressources stratégiques. En rejoignant ce cercle exclusif, vous bénéficierez d'un
            environnement stimulant pour <strong className="body_text">accélérer la croissance de votre entreprise</strong> et{" "}
            <strong className="body_text">rester à la pointe des évolutions du marché africain.</strong>
          </p>
        </div>

        {/* Right column - Image positioned to the right */}
        <div className="relative bottom-36 w-[350px] h-[550px] justify-self-end">
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
