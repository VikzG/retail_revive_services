import { useState,useRef,useEffect } from "react";
import { useI18n } from '../../[locale]/../../locales/client';
import emailjs from '@emailjs/browser';
import gsap from "gsap";

interface MultiStepFormProps {
  onComplete: () => void;
  onBack: () => void;
}
export default function MultiStepForm({ onComplete, onBack }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [forfait, setForfait] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    entreprise: "",
    secteur: "",
    fonction: "",
  });
  const t = useI18n()

  const stepContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation de transition entre les étapes
    if (stepContainerRef.current) {
      gsap.fromTo(
        stepContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [step]);


  const handleSelect = (value: string) => {
    setForfait(value);
  };

  const isNextDisabled = () => {
    if (step === 1) return !forfait;
    if (step === 2) return !formData.nom || !formData.prenom || !formData.email;
    if (step === 3) return !formData.entreprise || !formData.secteur || !formData.fonction;
    return false;
  };

  const handleNext = () => {
    if (step === 1 && !forfait) {
      alert(t('subForm.step1Alert'));
      return;
    }
  
    if (step === 2) {
      if (!formData.nom || !formData.prenom || !formData.email) {
        alert(t('subForm.step2Alert'));
        return;
      }
    }
  
    if (step === 3) {
      if (!formData.entreprise || !formData.secteur || !formData.fonction) {
        alert(t('subForm.step3Alert'));
        return;
      }
    }
  
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      onBack(); // Appel de la prop pour retourner à l'écran précédent
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validation
    if (!forfait || !formData.nom || !formData.prenom || !formData.email || !formData.entreprise || !formData.secteur || !formData.fonction) {
      alert(t('subForm.formValidationAlert'));
      return;
    }

    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

    // Données à envoyer
    const templateParams = {
      forfait,
      ...formData,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_EMAILJS_TEMPLATE_ID_SUB!,
         templateParams,
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
      .then(() => {
        alert(t('subForm.formSuccessMessage'));
        onComplete(); // Signal que le formulaire est terminé
      })
      .catch((error) => {
        alert(t('subForm.formErrorMessage'));
        console.error("Erreur EmailJS:", error);
      });
  };

  return (
    <div className="form-container flex flex-col justify-center items-center bg-light_beige h-screen w-full">
    <div ref={stepContainerRef} className="max-w-xl min-w-[220px] p-6 bg-light_beige">
      {step === 1 && (
        <>
          <h1 className="citations text-center mb-4">
          {t('subForm.step1Title')}
          </h1>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "1 personne"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("1 personne")}
          >
            {t('subForm.step1Option1')}
          </button>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "5-9 personnes"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("5-9 personnes")}
          >
            {t('subForm.step1Option2')}
          </button>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "10+ personnes"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("10+ personnes")}
          >
            {t('subForm.step1Option3')}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="citations text-center mb-4">
          {t('subForm.step2Title')}
          </h1>
          <label htmlFor="nom" className="block text-gray-700">
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder={t('subForm.step2LabelLastName')}
            value={formData.nom}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            placeholder={t('subForm.step2LabelFirstName')}
            value={formData.prenom}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('subForm.step2LabelEmail')}
            value={formData.email}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="citations text-center mb-4">
          {t('subForm.step3Title')}
          </h1>
          <label
            htmlFor="entreprise"
            className="block text-sm font-medium text-gray-700"
          >
          </label>
          <input
            type="text"
            id="entreprise"
            name="entreprise"
            placeholder={t('subForm.step3LabelCompanyName')}
            value={formData.entreprise}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label
            htmlFor="secteur"
            className="block text-sm font-medium text-gray-700"
          >
          </label>
          <input
            type="text"
            id="secteur"
            name="secteur"
            placeholder={t('subForm.step3LabelSector')}
            value={formData.secteur}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="fonction" className="block text-sm font-medium text-gray-700">
          </label>
          <input
            type="text"
            id="fonction"
            name="fonction"
            placeholder={t('subForm.step3LabelPosition')}
            value={formData.fonction}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </>
    )}

    {/* Pagination et navigation */}
    <div className="flex items-center justify-between gap-8 mt-6">
      {/* Bouton précédent */}
      {step > 1 && (
        <button
          className="sous_titre py-2 px-4 bg-white text-gold rounded-lg"
          onClick={handlePrevious}
        >
          {t('subForm.buttonBack')}
        </button>
      )}

      {step === 1 && (
            <button
              className="sous_titre py-2 px-4 bg-white text-gold rounded-lg"
              onClick={onBack}
            >
              {t('subForm.buttonBack')}
            </button>
          )}

      {/* Pagination */}
      <div className="flex space-x-2">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              step === i ? "bg-gold" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Bouton suivant ou soumettre */}
      <button
        className={`py-2 px-4 sous_titre ${
          step === 3 ? "bg-gold text-white" : "bg-gold text-white"
        } text-white rounded-lg`}
        disabled={isNextDisabled()}
        onClick={step === 3 ? handleSubmit : handleNext}
      >
        {step === 3 ? t('subForm.buttonFinish') : t('subForm.buttonNext')}
      </button>
    </div>
  </div>
  </div>
);
}
