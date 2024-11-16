
'use client'
import { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";

export default function Expertise() {
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

  const sectors = [
    {
      number: "01",
      title: "GRANDE DISTRIBUTION",
      description: "Des stratégies de distribution efficaces pour les produits de grande consommation.",
    },
    {
      number: "02",
      title: "RETAIL DE LUXE",
      description: "Accompagnement des marques haut de gamme dans leur implantation et leur développement sur le continent.",
    },
    {
      number: "03",
      title: "FMCG",
      description: "Optimisation des chaînes de distribution pour les biens de consommation courante.",
    },
    {
      number: "04",
      title: "HOSPITALITY",
      description: "Amélioration de l'expérience client dans les secteurs hôteliers et de la restauration.",
    },
    {
      number: "05",
      title: "LOGISTIQUE ET SUPPLY CHAIN",
      description: "Partenariats pour répondre aux divers défis logistiques du retail en Afrique.",
    },
  ];
  const expertiseTitle = useRef(null);
  const expertiseIntro = useRef(null);
  const expertiseList = useRef(null);

  
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: expertiseTitle.current, // Déclenchement sur le titre
        start: "top 95%", // Commence quand l'élément atteint 70% du viewport
        toggleActions: "play none none none", // Joue une seule fois
      },
    });
  
    timeline
      .fromTo(
        [expertiseTitle.current, expertiseIntro.current], // Anime les deux en même temps
        { opacity: 0, }, // Point de départ
        { opacity: 1, duration: 0.6, stagger: 0 }, // Point d'arrivée, aucun délai entre les deux
      )
      .fromTo(
        expertiseList.current, // Anime la liste après un délai
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "+=0.5" // Ajoute un délai de 0.5s après la fin des animations précédentes
      );
  }, []);

  if (isMobile) {
    // Code de la version mobile
  return (
    <section id="expertise" className="expertise flex flex-col items-center bg-dark_brown_grey text-white px-6 py-12">
      <div className="text-center mb-8">
        <h1 ref={expertiseTitle} className="expertise_titre mb-4">EXPERTISE</h1>
        <p ref={expertiseIntro} className="citations text-end">
          Nos secteurs clés pour<br/>répondre aux <span className="text-gold">besoins<br/>du marché africain</span>.
        </p>
      </div>

      <div ref={expertiseList} className="flex flex-col items-center gap-10">
        {sectors.map((sector,index) => (
            <div
            key={sector.number}
            className={`${
              index === 0 || index === 2 || index === 4 ? "self-start text-left" : "self-end text-right"
            }`}
          >
            <h3 className="text-gold grand_titre_s_expertise">{sector.number}</h3>
            <h4 className="sous_titre">{sector.title}</h4>
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
        Nous intervenons dans les <span className="text-gold">secteurs clés du retail </span> 
        pour répondre <br/> <span className="text-gold">aux besoins spécifiques</span> du marché africain.</p>
      </div>

      <div ref={expertiseList} className={`${isMobile ? "flex-col" : "flex"} flex-wrap justify-center gap-8 mb-8`}>
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
      <h1 ref={expertiseTitle} className="expertise_titre mb-4">EXPERTISE</h1>
    </section>
  );
}