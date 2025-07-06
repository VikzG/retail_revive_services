import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Card, CardContent } from "@/app/[locale]/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from "next/image";
import { useI18n } from '../../[locale]/../../locales/client'

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
  const sectionRef = useRef(null);
  const t = useI18n()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1250px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

 ({
    image: "/services/services_img_1.png",
    title: t('services.categories.consulting'),
    href: "",
    phrases: [
      <span><strong>{t('services.details.consulting.0.title')}</strong> {t('services.details.consulting.0.description')}</span>,
      <span><strong>{t('services.details.consulting.1.title')}</strong> {t('services.details.consulting.1.description')}</span>,
    ]
  });

  const services: Service[] = [
    {
      title: t('services.categories.consulting'),
      image: "/services/services_img_1.png",
      href: "",
      phrases: [
        <span><strong>{t('services.details.consulting.0.title')}</strong> {t('services.details.consulting.0.description')}</span>,
        <span><strong>{t('services.details.consulting.1.title')}</strong> {t('services.details.consulting.1.description')}</span>,
      ]
    },
    {
      title: t('services.categories.training'),
      image: "/services/services_img_2.png",
      href: "",
      phrases: [
        <span><strong>{t('services.details.training.0.title')}</strong> {t('services.details.training.0.description')}</span>,
        <span><strong>{t('services.details.training.1.title')}</strong> {t('services.details.training.1.description')}</span>,
        <span><strong>{t('services.details.training.2.title')}</strong> {t('services.details.training.2.description')}</span>,
      ]
    },
    {
      title: t('services.categories.distribution'),
      image: "/services/services_img_33.png",
      href: "",
      phrases: [
        <span><strong>{t('services.details.distribution.0.title')}</strong> {t('services.details.distribution.0.description')}</span>,
        <span><strong>{t('services.details.distribution.1.title')}</strong> {t('services.details.distribution.1.description')}</span>,
      ]
    },
  ];


  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const activeService = selectedService || hoveredService || services[0];
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

  useEffect(() => {
    if (isMobile && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isMobile]);

  if (isMobile) {
    // Code de la version mobile
    return (
      <section ref={sectionRef} id="services" className="flex flex-col items-center justify-center text-center min-h-screen p-6 bg-light_beige">
        <h2 className="grand_titre mb-4">            {t('services.sectionTitle.part1')} <br />
        {t('services.sectionTitle.part2')}</h2>
        <p className="body_text">
        {t('services.pre_intro')} <strong>{t('rrs')}</strong>, {t('services.intro')}<strong> {t('services.post_intro')}</strong> 
        </p>
        <Swiper
  pagination={{
    dynamicBullets: true,
  }}
  modules={[Pagination]}
  className="mySwiper w-full h-[60vh] max-w-[750px] mt-6 rounded-2xl overflow-hidden"
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
          <ul className="text-white text-start space-y-6 service_card_body_text">
            {service.phrases.map((phrase, i) => (
              <li key={`phrase-${i}`} className="flex items-start gap-2">
                {/* Point et phrase avec <strong> */}
                <span className="text-white font-bold">•</span>
                <span className="text-justify">
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
            <strong>{t('services.learnMore')}</strong><br/>
            <Link
               onClick={(e) => {
                e.preventDefault();
                setIsSubVisible(true);
              }}
    href="#"
    className="text-gold underline"
  >
    <strong>{t('services.cta')}</strong>
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
            {t('services.sectionTitle.part1')} <br />
            {t('services.sectionTitle.part2')}
          </h2>
          <div className="flex flex-col gap-5 w-4/6">
            <p ref={textServicesRef} className="text-black body_text">
            {t('services.pre_intro')} <strong>{t('rrs')}</strong>, {t('services.intro')}<strong> {t('services.post_intro')}</strong>.
            </p>
            <strong className="text-black body_text">
            {t('services.learnMore')}{" "}
              <Link href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSubVisible(true);
                }}
              >
                <span className="text-gold underline">
                {t('services.cta')}
                </span>
              </Link>
            </strong>
          </div>
        </div>

        <div className="flex flex-row gap-4">
        {services.map((service) => (
            <div
              key={service.title}
              className={`service_card gap-2 flex flex-col w-full cursor-pointer ${
                selectedService?.title === service.title ? " selected_service" : ""
              }`}
              onClick={() => setSelectedService(service)}
              onMouseEnter={() => setHoveredService(service)} 
              onMouseLeave={() => setHoveredService(null)}>
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
              <button
                className="service_bouton mt-2 w-full bg-white text-gold shadow-lg"
                onClick={() => setSelectedService(service)} // Mise à jour du service sélectionné
              >
                <span className="sous_titre">{t('services.ctaDiscover')}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="services_block_2 flex flex-col items-center justify-center w-1/2">
        <Card className="max-w-2xl w-3/4 h-5/6 overflow-hidden">
          <div className="relative">
          <Image
            src={activeService.image} // Image du service actif (sélectionné ou survolé)
            alt={activeService.title}
              width={600}
              height={400}
              className="services_big_card w-full brightness-90 object-cover object-[center_30%] h-[400px]"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="mt-72 citations text-white max-w-72 text-center">
              {activeService.title}
              </h2>
            </div>
          </div>
          <CardContent className="p-6 space-y-6 mt-2 flex flex-col items-center justify-between">
          <ul className="space-y-4 service_card_body_text">
            {activeService.phrases.map((phrase, i) => (
              <li key={`phrase-${i}`} className="flex gap-2 text-justify">
                <span className="text-primary font-bold">•</span>
                <span>{phrase}</span>
              </li>
            ))}
          </ul>

            <button className="service_bouton_2 w-[250px] py-2 sous_titre rounded-lg bg-gold text-white">
            <a href="#contact">{t('services.ctaContact')}</a> 
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
