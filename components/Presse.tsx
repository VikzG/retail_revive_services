import { useState,useEffect } from "react";
import gsap from "gsap";

export default function Presse() {

  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Liste fictive d'articles de presse
  const articles = [
    {
      id: 1,
      title: "RETAIL EN AFRIQUE : VERS UN MARCHÉ À 1000 MILLIARDS DE DOLLARS",
      imgSrc: "/presse/ecofin_logo.png",
      link: "https://www.agenceecofin.com/reflexion/0411-123112-retail-en-afrique-vers-un-marche-a-1000-milliards-de-dollars",
    },
    {
      id: 2,
      title: "VISION COLLECTIVE ET TRANSFORMATION DU RETAIL EN AFRIQUE VERS UN MARCHE A 1000 MILLIARDS DE DOLLARS",
      imgSrc: "/presse/logo_ivorian.png",
      link: "https://www.ivorian.net/actualites/vision-collective-et-transformation-du-retail-en-afrique-vers-un-marche-a-1000-milliards-dedollars",
    },
    {
      id: 3,
      title: "LE DINER DEBAT DES DECIDEURS : VERS UN RETAIL AFRICAIN A 1000 MILLIARDS DE DOLLARS",
      imgSrc: "/presse/logo_elle.png",
      link: "https://www.ellecotedivoire.com/diner-debat-des-decideurs-vers-un-retail-africain-de-1000-milliards-de-dollars",
    },
  ];

  useEffect(() => {
    gsap.utils.toArray('.card').forEach(card => {
      gsap.fromTo(
        ".article_presse_animation", 
        { opacity: 0, y: 100 },  // Commence avec une opacité de 0 et une position Y décalée
        {
          opacity: 1,           // Opacité finale
          y: 0,                 // Position finale sur l'axe Y
          duration: 1, 
          stagger:0.1,     // Durée de l'animation
          ease: "power2.out",   // Courbe d'accélération
          scrollTrigger: {    // Le déclencheur de l'animation est chaque carte
            start: "top 60%",    // Quand l'élément entre dans la fenêtre à 80%
            toggleActions: "play none none none", // Animation qui ne se joue qu'une fois
          }
        }
      );
    });
  }, []);

  return (
    <section className="flex items-center justify-between bg-light_beige text-black p-10">
      {/* Texte "PRESSE" sur le côté gauche */}
      {!isMobile && (
        <div className="rotate-text">
          <p className="grand_titre_s text-dark_brown_grey">PRESSE</p>
        </div>
      )}

      {/* Cartes d'articles de presse */}
      <div className={`flex-1 flex justify-around items-center ${isMobile ? 'flex-col' : ''}`}>
        {isMobile && (
          <h2 className="grand_titre_s">Presse</h2>
        )}
        {articles.map((article) => (
          <div key={article.id} className="article_presse_animation card bg-transparent text-center p-6 mx-4">
            <img 
              src={article.imgSrc} 
              alt={`Agence Ecofin ${article.id}`} 
              className="mb-4 w-44 h-auto min-w-[130px]" 
            />
            <p className="body_text mb-4 text-lg">
              “{article.title}”
            </p>
            <button className="presse_bouton px-8 py-2 border sous_titre border-black rounded-lg">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                VOIR L'ARTICLE
              </a>
            </button>
          </div>
        ))}
      </div>

      {/* Texte "PRESSE" sur le côté droit */}
      {!isMobile && (
        <div className="rotate-text-2">
          <p className="grand_titre_s text-dark_brown_grey">PRESSE</p>
        </div>
      )}

      <style jsx>{`
        .rotate-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin: 0 20px;
        }
        .rotate-text-2 {
          writing-mode: vertical-rl;
          transform: rotate(360deg);
          margin: 0 20px;
        }
        .card {
          width: 30%; /* Élargi la carte */
          height: auto; /* Ajuste la hauteur automatiquement */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px; /* Augmente l'espace interne de la carte */
        }
      `}</style>
    </section>
  );
}
