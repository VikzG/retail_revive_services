import Image from "next/image";
import {gsap} from "gsap";
import { useEffect, useRef,useState } from "react";
import { Star } from "lucide-react";

export default function Club() {

  const clubSectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);

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
            start: "top 95%", // Déclenche quand le haut de la section atteint 80% de la fenêtre
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
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: clubSectionRef.current, // Animation synchronisée avec la section
                start: "top 80%",
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

      <section id="club" className="pb-0 text-center flex flex-col items-center">
      {/* Image at the top */}
      <div className="w-full h-48 relative mb-6">
        <Image
          src="/club/club_img.png" // Replace with the actual image path
          alt="Club Retail Africa"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Main Content */}
      <div className="text-center mb-6 px-4 pt-6">
        <h2 className="citations">Pourquoi rejoindre le</h2>
        <h1 className="text-gold grand_titre_s mt-1">CLUB RETAIL AFRICA ?</h1>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 mb-6 px-4">
        <p className="body_text border-b w-4/6 m-auto pb-4 border-black"><strong>2 dîners par an</strong><br />aux côtés des décideurs influents du retail.</p>
        <p className="body_text border-b w-4/6 m-auto pb-4 border-black"><strong>Une étude annuelle</strong><br />sur l’évolution du marché et les tendances de consommation en Afrique.</p>
        <p className="body_text border-b w-4/6 m-auto pb-4 border-black"><strong>“La Brève Confidentielle du Retail”</strong><br />par RRS, envoyée chaque semestre.</p>
        <p className="body_text w-4/6 m-auto pb-4 mb-6"><strong>Accès exclusif à nos événements</strong><br />Workshops, séminaires thématiques et rencontres stratégiques.</p>
      </div>

      {/* Signup Button */}
      <div className="bg-blond p-6 w-full text-center">
        <p className="body_text text-white py-4">
          Rejoignez le Club Retail Africa dès aujourd'hui pour propulser<br/> votre entreprise vers l'excellence en accédant aux bons partenaires et à des informations stratégiques.
        </p>
        <button className="btn_border_2 bouton_page_garde sous_titre text-center p-4">formulaire
        d’inscription</button>
      </div>
    </section>
    )
  }

  return (
    <div id="club" className="bg-light_beige min-h-screen text-dark_brown_grey flex">
      {/* Colonne gauche - Image prenant 40% de la largeur */}
      <div className="w-2/5 h-screen relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/club/club_img.png" // Remplacez avec le bon chemin d'image
          alt="Luxury Building"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Colonne droite - Texte et informations prenant 60% de la largeur */}
      <div className="w-3/5 flex flex-col justify-between pt-12">
      <div className="flex flex-row px-16">
        <div ref={clubSectionRef} className="club_section_anim flex flex-col">
          <h1 className="sur_titre_club text-black">
            Pourquoi rejoindre le <br />
            <span className="grand_titre_s text-gold">
              CLUB RETAIL
              <br /> AFRICA ?
            </span>
          </h1>

          {/* Bloc Avis Client en dessous */}
          <div className="bg-white w-3/4 rounded-xl shadow-lg p-6 space-y-4 mt-8">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-gold">AVIS CLIENT</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                    >
                      <Star fill="#B69F61" className="w-5 h-5 text-gold" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="avis_body_text italic text-dark_brown_grey">
              "Rejoindre le Club Retail Africa a été une décision déterminante pour notre marque. Grâce aux échanges privilégiés et aux événements organisés par le Club, nous avons pu affiner notre stratégie locale et créer des partenariats clés!”
              </p>
            </div>
          </div>

        {/* Conteneur flex pour le titre et la liste des avantages à droite */}
        <div className="flex flex-col justify-center lg:flex-row lg:items-start lg:justify-between">
          {/* Liste des avantages avec séparation par une ligne noire */}
          <ul className="space-y-6 w-80 body_text text-dark_brown_grey lg:w-1/2 lg:ml-10">
            <li className="border-b border-black pb-4 last:border-b-0">
              <strong>2 dîners par an</strong> <br/>aux côtés des décideurs influents
              du retail.
            </li>
            <li className="border-b border-black pb-4 last:border-b-0">
              <strong>Une étude annuelle</strong> <br/>sur l’évolution du marché et
              les tendances de consommation en Afrique.
            </li>
            <li className="border-b border-black pb-4 last:border-b-0">
              <strong>“La Brève Confidentielle du Retail”</strong><br/> par RRS,
              envoyée chaque semestre.
            </li>
            <li className="pb-2 last:border-b-0">
              <strong>Accès exclusif à nos événements</strong><br/>Workshops,
              séminaires thématiques et rencontres stratégiques.
            </li>
          </ul>
        </div>
        </div>
        <div className="flex flex-row w-full items-center justify-around bg-blond h-60">
            <div className="flex flex-col gap-8 w-1/2">
            <p className="sous_titre text-white">
            Vous souhaitez faire partie<br/>
            de ce réseau d’exception ?
            </p>
                <p className="body_text text-white"> <strong>Rejoignez le Club Retail Africa </strong>dès aujourd'hui pour propulser votre entreprise vers l'excellence en vous connectant aux bons partenaires et en accédant à des informations stratégiques.
                </p>
                </div>
                <button className="btn_border_2 bouton_page_garde sous_titre text-center p-4">accéder au formulaire<br/>
                d’inscription</button>
        </div>
      </div>
    </div>
  );
}
