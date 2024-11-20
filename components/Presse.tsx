import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Presse() {
  const [currentArticle, setCurrentArticle] = useState(0);
  const containerRef = useRef(null);

  type Article = {
    id: number;
    title: string;
    phrase: string;
    imgSrc: string;
    imgLogo: string;
    link: string;
  };

  // Liste fictive d'articles de presse
  const articles: Article[] = [
    {
      id: 1,
      title: '"Dîner-Débat des décideurs"',
      phrase:
        "Le 10 octobre 2024, La Résidence Abidjan a accueilli le tout premier Dîner-Débat des Décideurs, un événement exclusif organisé par Retail Revive Services (RRS), un cabinet panafricain spécialisé...",
      imgSrc: "/presse/presse_1.png",
      imgLogo: "/presse/logo_elle.png",
      link: "https://www.ellecotedivoire.com/diner-debat-des-decideurs-vers-un-retail-africain-de-1000-milliards-de-dollars",
    },
    {
      id: 2,
      title:
        '"Retail en Afrique"',
      phrase:
        "Organisé par Retail Revive Services (RRS), le cabinet panafricain spécialisé dans la transformation des organisations retail, cet événement visait à poser les bases de la stratégie future du retail africain...",
      imgSrc: "/presse/presse_2.png",
      imgLogo: "/presse/logo_ivorian.png",
      link: "https://www.agenceecofin.com/reflexion/0411-123112-retail-en-afrique-vers-un-marche-a-1000-milliards-de-dollars",
    },
    {
      id: 3,
      title:
        '"Vision collective et transformation"',
      phrase:
        "En Afrique, le secteur du retail connaît une transformation rapide, avec un marché estimé à près de 1000 milliards de dollars d’ici 2030. D’après les dernières analyses du Baromètre Retail en Afrique de Deloitte...",
      imgSrc: "/presse/presse_3.png",
      imgLogo: "/presse/ecofin_logo.png",
      link: "https://www.ivorian.net/actualites/vision-collective-et-transformation-du-retail-en-afrique-vers-un-marche-a-1000-milliards-dedollars",
    },
  ];

  // Gestion du changement automatique des articles
  useEffect(() => {
    const interval = setInterval(() => {
      // Animation de sortie
      gsap.to(containerRef.current, {
        opacity: 0.5,
        duration: 0.5,
        onComplete: () => {
          // Changer l'article après l'animation de sortie
          setCurrentArticle((prev) => (prev + 1) % articles.length);

          // Animation d'entrée
          gsap.to(containerRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 3000); // Changement toutes les 3 secondes
    return () => clearInterval(interval);
  }, [articles.length]);

  const handleDotClick = (index: number) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentArticle(index);
        gsap.to(containerRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  const current = articles[currentArticle];

  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      {/* Image de fond */}
      <Image
        ref={containerRef} 
        src={current.imgSrc}
        alt={current.title}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay avec contenu */}
      <div className="absolute gap-8 top-16 left-[50%] translate-x-[-50%] bg-light_beige opacity-90 w-[850px] h-2/3 flex flex-row justify-center items-center text-white p-8 rounded-2xl text-center">
      <div className="w-2/5 flex flex-col-reverse gap-8">
        <div className="mb-4">
          <Image
            src={current.imgLogo}
            alt="Logo Presse"
            width={200}
            height={70}
            className="mx-auto"
          />
        </div>
        <h3 className="sous_titre text-black uppercase tracking-widest">
          Ils parlent de nous
        </h3>
        </div>
        <div className="flex flex-col">
        <h1 className="citations text-start text-black my-2">{current.title}</h1>
        <p className="text-start body_text text-black max-w-2xl mx-auto my-4">
          {current.phrase}
        </p>
        <div className="flex flex-row justify-between">
        <button
              onClick={() => window.open(current.link, "_blank")}
              className="border-x border-y mt-2 sous_titre text-black px-8 py-2 bg-transparent border-black rounded-lg"
            ><strong>
              Voir l'article complet</strong>
            </button>
            {/* Points radio */}
            <div className="flex gap-2 me-6 items-center justify-center">
  {articles.map((_, index: number) => (
    <button
      key={index}
      onClick={() => handleDotClick(index)}
      className={`w-3 h-3 rounded-full border-x border-y border-black ${
        index === currentArticle ? "bg-gold" : "bg-transparent"
      }`}
      aria-label={`Article ${index + 1}`}
    ></button>
  ))}
</div>
        </div>
      </div>
      </div>
    </section>
  );
}
