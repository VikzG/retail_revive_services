"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import Expertise from "@/components/Expertise";
import Experts from "@/components/Experts";
import Opportunites from "@/components/Opportunites";
import Club from "@/components/Club";
import Actualites from "@/components/Actualités";
import Contact from "@/components/Contact";
import Presse from "@/components/Presse";
import Sub from "@/components/Sub";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SubForm from "@/components/subForm";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  const headerTitleRef = useRef(null);
  const headerSpanRef = useRef(null);

  const [isSubVisible, setIsSubVisible] = useState<boolean>(false);
  const subContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timeline GSAP pour enchaîner les animations
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      headerTitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .fromTo(
        headerSpanRef.current,
        { opacity: 0 },
        { opacity: 1,duration: 1 },
        "-=0.5"
      );
  }, []);

  const toggleSub = () => {
    setIsSubVisible(!isSubVisible);
  };

  const handleShowSub = () => {
    setIsSubVisible(true);
    setTimeout(() => {
      if (subContainerRef.current) {
        gsap.fromTo(
          subContainerRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }
    }, 0);
  };

  return (
    <div>
      <header className="bg-light_beige min-h-screen relative">
       <Nav isSubVisible={isSubVisible} setIsSubVisible={setIsSubVisible}/>
        <div className="banner_container relative h-screen w-full">
          <img
            className="brightness-50 w-full h-full object-cover"
            src="/banner/banner_rss.png"
            alt="banniere africa retail services"
          />
          <div ref={ headerTitleRef } >
          <div className="span_header_container absolute w-full flex justify-center p-4">
            <span className="sous_titre justify-center text-white">
              votre partenaire
            </span>
          </div>
          <h1 className="grand_titre text-center absolute inset-0 flex items-center justify-center text-white">
            expansion retail
            <br />
            en afrique
          </h1>
          </div>

          {/* Conteneur pour le paragraphe centré en bas */}
          <div className="banner_text_container absolute bottom-28 flex justify-center p-4">
            <p ref={ headerSpanRef } className="body_text text-center text-white max-w-4xl">
              Bienvenue sur <strong>Retail Revive Services</strong>, le cabinet
              panafricain qui accompagne les entreprises locales et
              internationales dans leur{" "}
              <strong>implantation et expansion en Afrique.</strong> Que vous
              soyez une marque à la recherche d'un marché porteur ou un
              distributeur désireux d’optimiser vos processus, nous sommes là
              pour vous aider à chaque étape.
            </p>
          </div>
          <div className="absolute bottom-8 w-full flex justify-center p-4">
            <button 
            className="btn_border_1 bouton_page_garde sous_titre">
              <a href="#services" >
              EN SAVOIR+
              </a>
            </button>
          </div>
        </div>
      </header>
      <section className="introduction min-h-[30vh] flex flex-row items-center justify-center overflow-hidden">
        <span className="citations text-black text-center w-3/6">
          Nous propulsons les entreprises vers{" "}
          <em className="text-blond">l’innovation & le succès </em>sur le
          continent africain
        </span>
      </section>
      <main>
        <Services setIsSubVisible={setIsSubVisible}/>
        {isSubVisible && <Sub />}
        <Expertise />
        <Experts setIsSubVisible={setIsSubVisible}/>
        <Opportunites />
        <Club setIsSubVisible={setIsSubVisible}/>
        <Actualites setIsSubVisible={setIsSubVisible}/>
        <Presse />
        <Contact />
      </main>
      <Footer />
      {isSubVisible && (
        <div ref={subContainerRef} className="fixed inset-0 z-20 bg-white">
          <Sub />
        </div>
      )}
    </div>
  );
}
