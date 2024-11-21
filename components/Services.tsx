import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from "next/image";

type Service = {
  title: string;
  image: string;
  href: string;
  phrases: JSX.Element[]; // phrases contenant des éléments JSX
};

type ServicesProps = {
  setIsSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Services({ setIsSubVisible }: ServicesProps) {
  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const [hoveredService, setHoveredService] = useState<Service>({
    image: "/services/services_img_1.png",
    title: "CONSEIL & STRATEGIE",
    href: "",
    phrases: [
      <span><strong>Études de marché détaillées</strong> pour comprendre les comportements des consommateurs urbains et identifier les opportunités de croissance.</span>,
      <span><strong>Stratégie d'implantation</strong> et en mise pour les marques souhaitant entrer sur le marché africain avec une approche agile et rentable.</span>,
      <span><strong>Optimisation de l'expérience client</strong> pour aider les entreprises à répondre aux attentes changeantes des consommateurs locaux.</span>
    ]
  });

  const services: Service[] = [
    {
      title: "CONSEIL & STRATEGIE",
      image: "/services/services_img_1.png",
      href: "",
      phrases: [
        <span><strong>Études de marché détaillées</strong> pour comprendre les comportements des consommateurs urbains et identifier les opportunités de croissance.</span>,
        <span><strong>Stratégie d'implantation</strong> et en mise pour les marques souhaitant entrer sur le marché africain avec une approche agile et rentable.</span>,
        <span><strong>Optimisation de l'expérience client</strong> pour aider les entreprises à répondre aux attentes changeantes des consommateurs locaux.</span>,
      ]
    },
    {
      title: "FORMATION & RECRUTEMENT",
      image: "/services/services_img_2.png",
      href: "",
      phrases: [
        <span><strong>Audit des compétences</strong> pour évaluer et développer les talents de vos équipes retail.</span>,
        <span><strong>Formations spécialisées</strong> pour les équipes de vente pour maximiser les performances commerciales.</span>,
        <span><strong>Recrutement de talents stratégiques</strong> pour les postes clés du secteur retail.</span>,
      ]
    },
    {
      title: "DISTRIBUTION & IMPLANTATION",
      image: "/services/services_img_3.png",
      href: "",
      phrases: [
        <span><strong>Go-to-Market sur mesure</strong> pour les marques internationales cherchant à s'établir en Afrique.</span>,
        <span><strong>Mise en réseau stratégique</strong> pour faciliter les partenariats locaux et accéder aux financements nécessaires à votre succès.</span>,
        <span><strong>Gestion clé en main de l’implantation</strong> pour vous accompagner dans toutes les phases, de l'ouverture à la mise en marché.</span>,
      ]
    },
  ];



  const h2ServicesRef = useRef(null);
  const textServicesRef = useRef(null);

  useEffect(() => {
    // Animation de GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h2ServicesRef.current, // L'élément qui déclenche l'animation
        start: "top 60%", // L'animation commence lorsque l'élément atteint 80% du viewport
        toggleActions: "play none none none", // Joue l'animation à l'entrée, aucune action pour les autres
      },
    });

    tl.fromTo(
      h2ServicesRef.current,
      { opacity: 0 },
      { opacity: 1,duration: 0.5}
    )
      .fromTo(
        textServicesRef.current,
        { opacity: 0, },
        { opacity: 1, duration: 0.5 },
      );
  }, []);

  if (isMobile) {
    // Code de la version mobile
    return (
      <section id="services" className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-light_beige">
        <h2 ref={h2ServicesRef} className="grand_titre mb-4">NOS SERVICES</h2>
        <p ref={textServicesRef} className="body_text">
          Chez <strong>Retail Revive Services</strong>, nous croyons en des solutions personnalisées pour la transformation des organisations retail en Afrique. Nous vous aidons dans 4 domaines clés.
        </p>
        <Swiper
  pagination={{
    dynamicBullets: true,
  }}
  modules={[Pagination]}
  className="mySwiper w-full h-[60vh] mt-6 rounded-2xl overflow-hidden"
>
  {services.flatMap((service, index) => {
    const slides = [
      // Slide 1 : Titre du service
      <SwiperSlide key={`${service.title}-${index}-title`} className="relative w-full h-full">
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center border-xl">
          <h3 className="text-white text-center citations_services max-w-64">{service.title}</h3>
        </div>
      </SwiperSlide>,

      // Slide 2 : Phrases du service (avec icône enveloppe)
      <SwiperSlide key={`${service.title}-${index}-phrases`} className="relative w-full h-full">
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        {/* Icône d'enveloppe uniquement pour ce slide */}
        <Link 
        href="#contact"
        className="absolute top-4 right-4 rounded-full shadow-xl z-10">
        <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="38" height="32" rx="13.5" fill="black" fillOpacity="0.15" stroke="white"/>
        <path d="M7.94434 8.94446L17.9973 17.3219C18.739 17.94 19.8163 17.94 20.558 17.3219L30.611 8.94446" stroke="white" strokeLinejoin="round"/>
        <path d="M7.94434 24.0556L12.6666 20.2778L17.3888 16.5" stroke="white" strokeLinejoin="round"/>
        <path d="M30.6113 24.0556L25.8891 20.2778L21.1669 16.5" stroke="white" strokeLinejoin="round"/>
        <rect x="7.5" y="8.5" width="23.5556" height="16" rx="1.5" stroke="white"/>
        </svg>
        </Link>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center px-4 text-center">
          <ul className="text-white text-start space-y-6 body_text">
            {service.phrases.map((phrase, i) => (
              <li key={`phrase-${i}`} className="flex items-start gap-2">
                {/* Point et phrase avec <strong> */}
                <span className="text-white font-bold">•</span>
                <span>
                  {phrase}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SwiperSlide>,
    ];

    return slides;
  })}
</Swiper>

          <p className="text-sm mt-4">
            <strong>Vous souhaitez aller encore plus loin ?</strong><br/>
            <Link
               onClick={(e) => {
                e.preventDefault();
                setIsSubVisible(true);
              }}
    href="#"
    className="text-gold underline"
  >
    <strong>Découvrez le Club Retail Africa.</strong>
  </Link>
          </p>
      </section>
    );
  }

  // Code de la version desktop
  return (
    <section id="services" className="nos_services min-h-[1000px] py-8 flex flex-row gap-4 bg-light_beige">
      <div className="services_block_1 flex flex-col justify-around ps-12 w-1/2">
        <div className="flex flex-col gap-14 text-start">
          <h2 ref={h2ServicesRef} className="grand_titre">
            NOS <br />
            SERVICES
          </h2>
          <div className="flex flex-col gap-5 w-4/6">
            <p ref={textServicesRef} className="text-black body_text">
              Chez <strong>Retail Revive Services</strong>, nous croyons en des solutions sur mesure pour accompagner la transformation des organisations retail en Afrique. Grâce à des solutions personnalisées pour répondre aux divers besoins, nos experts vous accompagnent dans <strong>quatre domaines clés</strong>.
            </p>
            <strong className="text-black body_text">
              Vous souhaitez aller encore plus loin ?{" "}
              <Link href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSubVisible(true);
                }}
              >
                <span className="text-gold underline">
                  Découvrez le Club Retail Africa
                </span>
              </Link>
            </strong>
          </div>
        </div>

        <div className="flex flex-row gap-4">
        {services.map((service) => (
            <div
              key={service.title}
              className="service_card gap-2 flex flex-col w-full"
              onMouseEnter={() => setHoveredService(service)} 
              onMouseLeave={() => setHoveredService({
                image: "/services/services_img_1.png",
                title: "CONSEIL & STRATEGIE",
                href:"",
                phrases: [
                  <span><strong>Études de marché détaillées</strong> pour comprendre les comportements des consommateurs urbains et identifier les opportunités de croissance.</span>,
                  <span><strong>Stratégie d'implantation</strong> et en mise pour les marques souhaitant entrer sur le marché africain avec une approche agile et rentable.</span>,
                  <span><strong>Optimisation de l'expérience client</strong> pour aider les entreprises à répondre aux attentes changeantes des consommateurs locaux.</span>
                ]
              })}
            >
              <div className="services_image relative overflow-hidden rounded-lg shadow-lg flex-grow h-[300px] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-full"
                />
                <div className="service_card_effect absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-4 flex items-center justify-center">
                  <h3 className="text-white text-center sous_titre">
                    {service.title}
                  </h3>
                </div>
              </div>
              <button className="service_bouton mt-2 w-full bg-white text-gold shadow-lg">
                <Link className="sous_titre" href={"#expertise"}>
                  DECOUVRIR
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="services_block_2 flex flex-col items-center justify-center w-1/2">
        <Card className="max-w-2xl w-3/4 h-5/6 overflow-hidden">
          <div className="relative">
          <Image
              src={hoveredService.image}
              alt={hoveredService.title}
              width={600}
              height={400}
              className="services_big_card w-full object-cover h-[450px]"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="mt-72 citations text-white max-w-72 text-center">
              {hoveredService.title}
              </h2>
            </div>
          </div>
          <CardContent className="p-6 space-y-6 mt-5 flex flex-col items-center justify-center gap-2">
          <ul className="space-y-4 body_text">
  {hoveredService.title === "CONSEIL & STRATEGIE" && (
    <>
      <li className="flex gap-2">
        <span className="text-primary fon">•</span>
        <span>
          <strong>Études de marché détaillées</strong> pour comprendre les comportements des consommateurs urbains et identifier les opportunités de croissance
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Stratégie d'implantation clé en main</strong> pour les marques souhaitant entrer sur le marché africain avec une approche agile et rentable
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Optimisation de l'expérience client</strong> pour les marques souhaitant entrer sur le marché africain avec une feuille de route claire et réalisable.
        </span>
      </li>
    </>
  )}
  {hoveredService.title === "FORMATION & RECRUTEMENT" && (
    <>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Audit des compétences</strong> pour évaluer et développer les talents de vos équipes retail.
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Formations spécialisées pour les équipes de vente</strong> pour maximiser les performances commerciales.
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Recrutement de talents stratégique</strong> pour les postes clés du secteur retail.
        </span>
      </li>
    </>
  )}
  {hoveredService.title === "DISTRIBUTION & IMPLANTATION" && (
    <>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Go-to-Market sur mesure</strong> pour les marques internationales cherchant à s'établir en Afrique.
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Mise en réseau stratégique</strong> pour faciliter les partenariats locaux et accéder aux financements nécessaires à votre succès.
        </span>
      </li>
      <li className="flex gap-2">
        <span className="text-primary font-bold">•</span>
        <span>
          <strong>Gestion clé en main de l’implantation</strong> pour vous accompagner dans toutes les phases, de l'ouverture à la mise en marché.
        </span>
      </li>
    </>
  )}
</ul>

            <Button className="service_bouton_2 w-3/6 sous_titre bg-gold text-white">
            <a href="#contact"> JE SUIS INTÉRESSÉ(E)</a> 
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
