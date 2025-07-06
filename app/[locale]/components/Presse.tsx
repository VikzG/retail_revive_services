import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useI18n } from '../../[locale]/../../locales/client'

export default function Presse() {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const t = useI18n()

  type Article = {
    id: number;
    title: string;
    phrase: string;
    imgSrc: string;
    imgLogo: string;
    link: string;
  };

  const articles: Article[] = [
    {
      id: 1,
      title: t('Presse.articles.0.title'),
      phrase:t('Presse.articles.0.phrase'),
      imgSrc: "/presse/presse_11.jpg",
      imgLogo: "/presse/logo_elle.png",
      link: "https://www.ellecotedivoire.com/diner-debat-des-decideurs-vers-un-retail-africain-de-1000-milliards-de-dollars",
    },
    {
      id: 2,
      title: t('Presse.articles.1.title'),
      phrase:t('Presse.articles.1.phrase'),
      imgSrc: "/presse/presse_22.jpg",
      imgLogo: "/presse/logo_ivorian.png",
      link: "https://www.ivorian.net/actualites/vision-collective-et-transformation-du-retail-en-afrique-vers-un-marche-a-1000-milliards-dedollars",
    },
    {
      id: 3,
      title: t('Presse.articles.2.title'),
      phrase:t('Presse.articles.2.phrase'),
      imgSrc: "/presse/photo-33.png",
      imgLogo: "/presse/ecofin_logo.png",
      link: "https://www.agenceecofin.com/reflexion/0411-123112-retail-en-afrique-vers-un-marche-a-1000-milliards-de-dollars",
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const current = articles[currentArticle];
  if (isMobile) {
    // Code de la version mobile
    return (
      <section className="relative w-full bg-light_beige px-4 py-6 flex flex-col items-center">
      <div className="w-full h-[450px] relative rounded-2xl shadow-lg overflow-hidden">
        {/* Slider */}
        <div className="flex flex-row transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentArticle * 100}%)` }}>
          {articles.map((article, index) => (
            <div 
            key={index} 
            className="flex-shrink-0 w-full h-full relative flex flex-col items-center justify-center">
              <div className="relative w-full h-[450px]">
                {/* Image principale */}
                <Image
                ref={containerRef} 
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="absolute w-full top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-2 py-8 rounded-t-lg shadow-lg flex flex-col items-center">
                <p className="sous_titre mb-2 text-black">{t('Presse.cta.title')}</p>
                <Image
                  src={article.imgLogo} 
                  alt={`Logo article ${index + 1}`}
                  width={150}
                  height={40}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Titre et description */}
      <div className="mt-8 w-full text-center">
        <h1 className="citations text-black">{current.title}</h1>
        <p className="body_text text-black mt-8 px-2">{current.phrase}</p>
      </div>

      {/* Bouton et points radio */}
      <div className="mt-6 w-full flex flex-col items-center">
        <button
          onClick={() => window.open(current.link, "_blank")}
          className="border-x border-y sous_titre text-black px-8 py-2 bg-transparent border-black rounded-lg"
        >
          {t('Presse.cta.buttonText')}
        </button>
        <div className="flex mt-6 mb-4 space-x-2">
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
    </section>
    );
  }

  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      {/* Image de fond */}
      <Image
        ref={containerRef} 
        src={current.imgSrc}
        alt={current.title}
        fill
        style={{ objectFit: "cover" }}
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
        {t('Presse.cta.title')}
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
              className="presse_bouton border-x border-y mt-2 sous_titre text-black px-8 py-2 bg-transparent border-black rounded-lg"
            ><strong>
              {t('Presse.cta.buttonText')}</strong>
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