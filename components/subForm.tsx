import { useState } from "react";

interface MultiStepFormProps {
  onComplete: () => void; // Définition du type pour onComplete
}

export default function MultiStepForm({ onComplete }: MultiStepFormProps) {
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


  const handleSelect = (value: string) => {
    setForfait(value);
  };

  const handleNext = () => {
    if (step === 1 && !forfait) {
      alert("Veuillez sélectionner un forfait.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validation globale avant soumission
    if (!forfait || !formData.nom || !formData.prenom || !formData.email || !formData.entreprise || !formData.secteur || !formData.fonction) {
      alert("Veuillez remplir tous les champs avant de soumettre.");
      return;
    }

    // Soumission des données (exemple : affichage dans une alerte)
    alert(`Formulaire soumis : ${JSON.stringify({ forfait, ...formData })}`);

    // Appeler la fonction `onComplete` pour désactiver le formulaire
    if (onComplete) {
      onComplete(); // Signale que le formulaire est terminé
    }
  };
  return (
    <div className="form-container flex flex-col justify-center items-center bg-light_beige h-screen w-full">
    <div className="max-w-xl min-w-[220px] p-6 bg-light_beige">
      {step === 1 && (
        <>
          <h1 className="citations text-center mb-4">
            1 - Sélectionnez votre forfait :
          </h1>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "1 personne"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("1 personne")}
          >
            1 personne - 1 200 000 CFA HT
          </button>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "5-9 personnes"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("5-9 personnes")}
          >
            5-9 personnes - 900 000 CFA HT
          </button>
          <button
            className={`body_text w-full py-3 px-4 my-2 text-black rounded-md transition-colors ${
              forfait === "10+ personnes"
                ? "bg-gold text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect("10+ personnes")}
          >
            10+ personnes - 790 000 CFA HT
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="citations text-center mb-4">
            2 - Vos coordonnées :
          </h1>
          <label htmlFor="nom" className="block text-gray-700">
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Nom"
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
            placeholder="Prénom"
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
            placeholder="Email"
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
            3 - Votre entreprise :
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
            placeholder="Nom de l'entreprise"
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
            placeholder="Secteur de l'entreprise"
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
            placeholder="Votre fonction"
            value={formData.fonction}
            onChange={handleChange}
            className="body_text w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </>
    )}

    {/* Pagination et navigation */}
    <div className="flex items-center justify-center gap-8 mt-6">
      {/* Bouton précédent */}
      {step > 1 && (
        <button
          className="sous_titre py-2 px-4 bg-white text-gold rounded-lg"
          onClick={handlePrevious}
        >
          Retour
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
        onClick={step === 3 ? handleSubmit : handleNext}
      >
        {step === 3 ? "Terminer" : "Suivant"}
      </button>
    </div>
  </div>
  </div>
);
}
