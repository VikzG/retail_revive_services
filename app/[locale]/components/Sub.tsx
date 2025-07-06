import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import MultiStepForm from "./subForm";
import { useI18n } from '../../[locale]/../../locales/client';

export default function Sub() {
  const [showForm, setShowForm] = useState(false);
  const [stickerStep, setStickerStep] = useState(1);
  const [name, setName] = useState(""); // État pour stocker le nom
  const [error, setError] = useState("");
  const [isCompleted, setIsCompleted] = useState(false); // Nouvel état pour gérer la fin de l'inscription

  const t = useI18n()
  const clubRef = useRef(null);
  const retailRef = useRef(null);
  const africaRef = useRef(null);

  // Fonction pour animer la sortie des mots (ensemble)
  const animateOut = () => {
    const timeline = gsap.timeline();
    const targets = [clubRef.current, retailRef.current, africaRef.current]; // Grouping
    timeline.to(targets, {
      x: (i) => (i === 1 ? "100%" : "-100%"), // Déplace à gauche/droite selon l'index
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      stagger: 0, // Pas de délai entre les animations
    });
  };

  // Fonction pour ramener les mots au centre (ensemble)
  const animateBackToCenter = () => {
    const timeline = gsap.timeline();
    const targets = [clubRef.current, retailRef.current, africaRef.current]; // Grouping
    timeline.to(targets, {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0, // Pas de délai entre les animations
    });
  };

  const handleShowForm = () => {
    animateOut(); // Animer la sortie des mots
    setTimeout(() => {
      setShowForm(true); // Afficher le formulaire après l'animation
    }, 1500); // Temps synchronisé avec la durée de l'animation
  };

  const handleFormComplete = () => {
    setShowForm(false); // Ferme le formulaire
    setIsCompleted(true); // Marque l'inscription comme terminée
    animateBackToCenter(); // Ramène les mots au centre
  };

  const handleBack = () => {
    setShowForm(false); // Ferme le formulaire lorsque l'utilisateur clique sur "Retour"
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (name.trim() === "") {
      setError(t('sub.form_error_empty_name')); // Affiche une erreur si le champ est vide
    } else {
      setError(""); // Efface l'erreur si le champ est valide
      setStickerStep(2); // Passe à l'étape suivante
    }
  };


  return (
    <div className="min-h-screen min-w-full bg-light_beige flex justify-center items-center overflow-hidden">
      <h1 className="cra_sub grand_titre_xl min-w-[1450px] text-center text-blond flex flex-col gap-40">
        <span ref={clubRef} className="text-start ms-28">CLUB</span>
        <span ref={retailRef} className="text-end me-28">RETAIL</span>
        <span ref={africaRef} className="text-start ms-28">AFRICA</span>
      </h1>

      {/* Contenu de "sticker" */}
      {stickerStep === 1 ? (
        // Contenu de Step 1
        <div className="sticker absolute h-[500px] w-[950px] shadow rounded-xl bg-white opacity-90 p-12 flex">
          <div className="timbre_container absolute top-0 right-0 h-[150px] w-[130px] border-4 border-white m-4">
          <Image
            className=" drop-shadow"
            src="/sub/timbre_rss.png"
            alt="Timbre"
            layout="fill"
          />
          </div>
          <div className="flex flex-col justify-center items-center w-full text-center">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg flex flex-col justify-center items-center gap-8"
            >
              <label htmlFor="name" className="sous_titre"></label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="border min-w-[180px] w-1/2 body_text text-center border-gray-300 p-1 px-4 rounded-md"
                placeholder={t('sub.form_name_placeholder')}
                required
              />
              <h2 className="sous_titre_sub">
              {t('sub.invitation_message')}
                <br />
                {t('sub.invitation_message_2')}
              </h2>
              <button
                type="submit"
                className="sub_bouton sous_titre w-[150px] bg-gold text-white px-8 py-2 rounded-md"
              >
                {t('sub.button_accept')}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="sticker absolute h-[500px] w-[950px] shadow rounded-xl bg-white opacity-90 p-12 flex">
          {isCompleted ? (
            // Message affiché après l'inscription
            <div className="flex flex-col justify-center items-center w-full text-center">
              <div className="timbre_container absolute top-0 right-0 h-[150px] w-[130px] border-4 border-white m-4">
          <Image
            className=" drop-shadow"
            src="/sub/timbre_rss.png"
            alt="Timbre"
            layout="fill"
          />
          </div>
              <h2 className="sous_titre_sub">
              {t('sub.form_complete_message')}
                <br /> {t('sub.form_complete_message_2')}
              </h2>
            </div>
          ) : (
            // Contenu initial
            <>
              {/* Colonne gauche */}
              <div className="sticker_left w-1/2 flex flex-col gap-8 justify-start items-start">
                <div>
                  <h2 className="sous_titre">{t('sub.section_membership.title')}</h2>
                  <h3 className="grand_titre_xxs">{t('sub.section_membership.subtitle')}</h3>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold">{t('sub.section_membership.solo_offer')}</h4>
                      <p className="body_text">
                      {t('sub.section_membership.solo_price')}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold">{t('sub.section_membership.company_offer')}</h4>
                      <ul className="list-disc list-inside body_text max-w-[400px]">
                        <li>
                        {t('sub.section_membership.company_pricing.group_5_9')}
                        </li>
                        <li>{t('sub.section_membership.company_pricing.group_10_plus')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne droite */}
              <div className="sticker_right w-1/2 flex flex-col gap-4 body_text justify-center items-start">
                <div className="flex flex-col border-b border-black pb-2 w-full">
                  <strong>{t('sub.benefits.dinners.title')}</strong>
                  <span>{t('sub.benefits.dinners.description')}</span>
                </div>
                <div className="flex flex-col border-b border-black pb-2">
                  <strong>{t('sub.benefits.annual_study.title')}</strong>
                  <span>
                  {t('sub.benefits.annual_study.description')}
                  </span>
                </div>
                <div className="flex flex-col border-b border-black pb-2 w-full">
                  <strong>{t('sub.benefits.newsletter.title')}</strong>
                  <span>{t('sub.benefits.newsletter.description')}</span>
                </div>
                <div className="flex flex-col pb-2">
                  <strong>{t('sub.benefits.events.title')}</strong>
                  <span>
                  {t('sub.benefits.events.description')}
                  </span>
                </div>
                <button
                  onClick={handleShowForm}
                  className="sub_bouton sous_titre bg-gold text-white px-8 py-2 rounded-md self-start mt-4"
                >
                  {t('sub.button_register')}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Formulaire */}
      {showForm && !isCompleted && (
        <div className="fixed inset-0 z-30">
          <MultiStepForm onComplete={handleFormComplete} onBack={handleBack} />
        </div>
      )}
    </div>
  );
}
