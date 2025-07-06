import Link from "next/link";
import Image from "next/image";
import { useState,useEffect,useRef } from "react";
import { gsap } from "gsap";
import emailjs from '@emailjs/browser';
import { PageInterview } from "./PageInterview";
import { useI18n } from '../../[locale]/../../locales/client'

type ClubProps = {
  setIsSubVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isInterviewVisible: boolean;
  setIsInterviewVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
  name: string;
  email: string;
  form_type: string;
};

type Errors = {
  name: string;
  email: string;
};

export default function Actualites({ setIsSubVisible, isInterviewVisible,setIsInterviewVisible }: ClubProps) {
  const [isMobile, setIsMobile] = useState(false);
  const actualitesRef = useRef(null);
  const actualitesRefDesktop = useRef(null);
  const t = useI18n()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    form_type: "Inscription newsletter"
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Errors = {
      name: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formData, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setIsSuccess(true);
            setFormData({ name: "", email: "" , form_type:"Inscription newsletter"});
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Une erreur est survenue.");
          }
        );
    }
  };
  

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
        <h2 className="grand_titre_s">{t('actualites.mobile.sectionTitle')}</h2>
        <Link className="text-gold underline body_text" href="#">
           <strong>{t('actualites.mobile.subheadingLink')}<br/> {t('actualites.mobile.subheadingLink_2')}</strong> 
        </Link>
      </div>

      {/* Description */}
      <div className="text-sm mb-4 px-4">
      <p className="body_text">
    <strong>{t('actualites.mobile.description')}</strong>
    <br />
    {t('actualites.mobile.description_2')}{" "}
  </p>
      </div>
      </div>

      {/* Subscription Form */}
      <div className="flex flex-col items-center mb-6 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6 w-full">
  <div className="flex flex-row gap-2 px-4 py-6 w-full max-w-xs">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder={t('actualites.mobile.subscriptionForm.namePlaceholder')}
      className={`border p-2 mb-2 rounded-md w-full ${
        errors.name ? 'border-red-500' : 'border-[#D5C5A6]'
      }`}
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder={t('actualites.mobile.subscriptionForm.emailPlaceholder')}
      className={`border p-2 mb-2 rounded-md w-full ${
        errors.email ? 'border-red-500' : 'border-[#D5C5A6]'
      }`}
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
  </div>

  <button 
    type="submit" 
    className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
  >
    OK
  </button>
</form>
      {/* Pop-up de succès */}
      {isSuccess && (
        <div className="actualites_modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="sous_titre font-semibold text-gold">
            {t('actualites.mobile.setIsSuccess_1')}
            </h2>
            <p className="text-gray-600 body_text">
              <strong>
              {t('actualites.mobile.setIsSuccess_2')}
              </strong>
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
      </div>

      {/* Image Section */}
      <div className="w-full h-64 relative mb-6">
        <Image
        src="/actualites/img_top_actualites.png"
          alt="Dernier événement"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Event Description */}
      <div className="px-4">
        <p className="sous_titre py-4 text-gold flex flex-col">
         <strong> {t('actualites.mobile.eventDescription.title')} </strong> <br /> 
         <em className="citations text-black">{t('actualites.mobile.eventDescription.description')}</em>
        </p>
        <p className="mt-2 body_text">
        {t('actualites.mobile.eventDescription_bottom.description')}
        </p>
      </div>

      {/* Join Button */}
<div className="mt-6">
  <button 
    onClick={() => setIsInterviewVisible(true)} 
    className="mt-4 bg-gold text-white px-6 py-2 rounded-lg sous_titre shadow w-max"
  >
    LIRE L’ARTICLE
  </button>
</div>

{isInterviewVisible && (
  <div className="fixed top-0 left-0 w-full h-full z-[20] bg-transparent overflow-y-auto">
    <PageInterview onClose={() => setIsInterviewVisible(false)} />
  </div>
)}
    </section>
    )
  }
  return (
<section id="actualites" className="actualites_animation h-[700px] bg-beige">
  <div ref={actualitesRefDesktop} className="actualites_trigger grid grid-cols-[45%_55%] h-full">

    {/* Colonne de gauche : Texte + Formulaire */}
    <div className="flex flex-col bg-[#F4F2E9] items-center justify-center p-20">
      <div className="flex flex-col gap-8 w-[530px]">
        <h2 className="grand_titre text-dark_brown_grey mb-6 uppercase text-center">
          {t('actualites.desktop.sectionTitle')} {t('actualites.desktop.sectionTitle_2')}
        </h2>

        <p className="text-gold sous_titre underline uppercase mb-4">
          {t('actualites.desktop.columns.0.subheading')}
        </p>

        <p className="body_text text-gray-700">
          <strong>
Inscrivez-vous dès maintenant </strong> à nos courriers exclusifs pour rester informé(e) des dernières tendances du retail en Afrique et des projets innovants portés par Retail Revive Services et ses partenaires, à travers des études de cas et témoignages d'entreprises.

        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-row items-center gap-4 mt-12 w-[520px]">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={t('actualites.desktop.columns.0.subscriptionForm.namePlaceholder')}
          className={`border p-2 rounded-lg w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={t('actualites.desktop.columns.0.subscriptionForm.emailPlaceholder')}
          className={`border p-2 rounded-lg w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        <button
          type="submit"
          className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
        >
          OK
        </button>
      </form>

      {isSuccess && (
        <div className="actualites_modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="sous_titre font-semibold text-gold">
              {t('actualites.mobile.setIsSuccess_1')}
            </h2>
            <p className="text-gray-600 body_text">
              <strong>{t('actualites.mobile.setIsSuccess_2')}</strong>
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>

    {/* Colonne de droite : Articles en colonne */}
<div className="flex flex-col gap-6 justify-center">
  {/* Article 1 */}
  <div className="flex max-h-[300px] w-full py-8 px-16">
    {/* Image à gauche */}
    <div className="min-w-[262px] max-w-[262px]">
      <Image
        src="/actualites/img_top_actualites.png"
        alt="Marie Berthe et Khadija Gueye"
        width={262}
        height={234}
className="h-full w-full object-cover"
      />
    </div>

    {/* Texte à droite */}
    <div className="pl-6 flex flex-col justify-between">
      <div>
        <p className="text-gold sous_titre uppercase">Juillet 2025</p>
        <h3 className="citations mb-2">Interview exclusive</h3>
        <p className="body_text text-gray-700">
Elles dirigent trois enseignes complémentaires, entre franchise internationale et distribution locale. Rencontre avec <strong>Marie Berthe et Khadija Gueye</strong>, un duo à la vision affûtée et au sens du détail remarquable...
        </p>
      </div>
<button 
  onClick={() => setIsInterviewVisible(true)} 
  className="mt-4 bg-gold text-white px-6 py-2 rounded-lg sous_titre shadow w-max"
>
  LIRE L’ARTICLE
</button>
    </div>
  </div>

  {/* Article 2 */}
  <div className="flex max-h-[300px] w-full py-8 px-16">
    {/* Image à gauche */}
    <div className="min-w-[262px] max-w-[262px]">
      <Image
        src="/actualites/presse_img_1.png"
        alt="Dîner débat des décideurs"
        width={262}
        height={234}
className="h-full w-full object-cover"
      />
    </div>

    {/* Texte à droite */}
    <div className="pl-6 flex flex-col justify-between">
      <div>
        <p className="text-gold sous_titre uppercase">Octobre 2024</p>
        <h3 className="citations mb-2">Dîner-débat des décideurs</h3>
        <p className="body_text text-gray-700">
Découvrez les insights du Dîner-Débat des Décideurs Téléchargez le digest exclusif de notre dernier événement, centré sur le thème <strong>"Innovation & Diversification : Quels nouveaux standards pour un retail africain en pleine transformation ?</strong>”
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-row items-center gap-2 mt-4">
        <input
          type="email"
          name="email"
          placeholder={t('actualites.desktop.columns.0.subscriptionForm.emailPlaceholder')}
          value={formData.email}
          onChange={handleInputChange}
          className={`border p-2 rounded-lg w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        <button type="submit" className="bg-gold text-white px-6 py-2 rounded-lg sous_titre">
          OK
        </button>
      </form>
    </div>
  </div>
</div>
  </div>
      {isInterviewVisible && (
      <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[20] overflow-auto">
        <PageInterview onClose={() => setIsInterviewVisible(false)} />
      </div>
    )}
</section>

  );
}
