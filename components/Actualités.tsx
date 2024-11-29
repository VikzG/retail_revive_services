import Link from "next/link";
import Image from "next/image";
import { useState,useEffect,useRef } from "react";
import { gsap } from "gsap";

type ClubProps = {
  setIsSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Actualites({ setIsSubVisible }: ClubProps) {
  const [isMobile, setIsMobile] = useState(false);
  const actualitesRef = useRef(null);
  const actualitesRefDesktop = useRef(null);

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
      gsap.fromTo(
        actualitesRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: actualitesRef.current,
            start: "top 10%",
            end: "bottom 20%",
            scrub: false,
            once: true,
          },
        }
      );
    }
    if (!isMobile) {
      gsap.fromTo(
        actualitesRefDesktop.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: actualitesRefDesktop.current,
            start: "top 50%",
            end: "bottom 20%",
            scrub: false,
            once: true,
          },
        }
      );
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="actualites" className="bg-white py-10 text-center flex flex-col items-center">
      {/* Header */}
      <div ref={actualitesRef} >
      <div className="mb-4">
        <h2 className="grand_titre_s">NOS ACTUALITÉS</h2>
        <Link className="text-gold underline body_text" href="#">
           <strong>Téléchargez notre étude annuelle gratuite sur<br/> le retail en Afrique</strong> 
        </Link>
      </div>

      {/* Description */}
      <div className="text-sm mb-4 px-4">
        <p className="body_text">
        <strong>Inscrivez-vous dès maintenant à nos courriers exclusifs</strong> pour rester informé(e) des dernières tendances du retail en Afrique et des projets innovants portés par Retail Révie Services et ses partenaires, à travers des études de cas et témoignages d’entreprises.
        </p>
      </div>
      </div>

      {/* Subscription Form */}
      <div className="flex flex-col items-center mb-6 w-full">
        <div className="flex flex-row gap-2 px-4 py-6">
        <input
          type="text"
          placeholder="Votre nom"
          className="border border-[#D5C5A6] rounded-md p-2 mb-2 w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="border border-[#D5C5A6] rounded-md p-2 mb-2 w-full max-w-xs"
        />
        </div>
        <button 
              type="submit" 
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
      </div>

      {/* Image Section */}
      <div className="w-full h-48 relative mb-6">
        <Image
          src="/actualites/debat_img.png" // Replace with the actual image path
          alt="Dernier événement"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Event Description */}
      <div className="px-4">
        <p className="sous_titre py-4">
         <strong> DERNIER ÉVÉNEMENT </strong>: <br /> LE DÎNER-DÉBAT DES DÉCIDEURS
        </p>
        <p className="mt-2 body_text">
          Vous souhaitez participer aux événements et être au cœur de l’innovation du retail en Afrique ?<strong>Inscrivez-vous à nos dîners privés et accédez aux dernières tendances, études et opportunités du marché.</strong> 
        </p>
      </div>

      {/* Join Button */}
      <div className="mt-6">
      <Link 
           onClick={(e) => {
            e.preventDefault();
            setIsSubVisible(true);
          }}
          href="/club"
          className="inline-block actualite_bouton sous_titre bg-white text-gold px-6 py-2 rounded-lg border-gold border-solid border-2"
          >
              REJOINDRE LE CLUB
          </Link>
      </div>
    </section>
    )
  }
  return (
    <section id="actualites" className="actualites_animation min-h-[80vh] max-h-screen py-16 px-4 bg-white">
      <div ref={actualitesRefDesktop} className="actualites_trigger grid grid-cols-3 gap-10 p-8">
        
        {/* Colonne 1 : Nos Actualités */}
        <div className="p-6">
          <h2 className="grand_titre_s text-dark_brown_grey mb-6">NOS <br/>ACTUALITÉS</h2>
          <p className="text-gold sous_titre mt-16 underline uppercase mb-2">
            TÉLÉCHARGEZ NOTRE ÉTUDE ANNUELLE GRATUITE SUR LE RETAIL EN AFRIQUE.
          </p>
          <p className="body_text text-gray-700 mb-8">
            <strong>Inscrivez-vous dès maintenant</strong> à nos courriers exclusifs pour rester informé(e) 
            des dernières tendances du retail en Afrique et des projets innovants portés 
            par Retail Revive Services et ses partenaires, à travers des études de cas et 
            témoignages d'entreprises.
          </p>
          
          {/* Formulaire d'inscription */}
          <form className="flex flex-row gap-2 mt-14 space-y-4">
            <input 
              type="text" 
              placeholder="Votre nom" 
              className="border border-gray-300 p-2 mt-4 rounded-lg w-full"
            />
            <input 
              type="email" 
              placeholder="Votre email" 
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
            <button 
              type="submit" 
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </form>
        </div>

        {/* Colonne 2 : Images */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative h-48 w-5/6">
            <Image
              src="/actualites/presse_img_1.png"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 w-5/6">
            <Image
              src="/actualites/presse_img_2.png"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 w-5/6">
            <Image
              src="/actualites/presse_img_3.png"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* Colonne 3 : Dernier Événement */}
        <div className="flex flex-col justify-between">
          <h3 className="sous_titre underline mb-2">
            DERNIER ÉVÉNEMENT : LE DÎNER-DÉBAT DES DÉCIDEURS
          </h3>
          <div>
          <p className="body_text mb-4">
            Nous organisons régulièrement des <span className="font-bold">événements exclusifs</span> dédiés 
            aux décideurs et <span className="font-bold">acteurs du retail en Afrique.</span> Chaque événement organisé 
            par Retail Revive Services est une opportunité de partage, d'apprendre et de collaborer pour 
            faire avancer l'industrie du retail en Afrique.
          </p>
          <p className="body_text">
            Vous souhaitez participer à nos événements et être au cœur de l'innovation dans le retail en Afrique ? 
            <span className="font-bold"> Inscrivez-vous à nos dîners privés et accédez aux dernières tendances, études 
            et opportunités du marché.</span>
          </p>
          </div>
          <Link 
                               onClick={(e) => {
                                e.preventDefault();
                                setIsSubVisible(true);
                              }}
          href="/club"
          className="inline-block actualite_bouton sous_titre bg-white w-[230px] text-gold px-6 py-2 rounded-lg border-gold border-solid border-2"
          >
              REJOINDRE LE CLUB
          </Link>
          <h2 className="grand_titre_s mt-10 text-dark_brown_grey uppercase text-end mb-6">réseau <br/>& événements</h2>
        </div>
      </div>
    </section>
  );
}
