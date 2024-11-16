import { useState } from 'react';
import MultiStepForm from './subForm';

export default function Sub() {
  const [showForm, setShowForm] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // Nouvel état pour gérer la fin de l'inscription

  const handleFormComplete = () => {
    setIsCompleted(true); // Marque l'inscription comme terminée
    setShowForm(false); // Ferme le formulaire
  };

  return (
    <div className="h-screen bg-light_beige flex justify-center items-center overflow-hidden">
      <h1 className="grand_titre_xl w-full text-center text-blond flex flex-col gap-56">
        <span className="text-start ms-28">CLUB</span>
        <span className="text-end me-28">RETAIL</span>
        <span className="text-start ms-28">AFRICA</span>
      </h1>

      {/* Contenu de "sticker" */}
      <div className="sticker absolute h-3/4 shadow rounded-xl bg-white opacity-90 p-12 flex">
        {isCompleted ? (
          // Message affiché après l'inscription
          <div className="flex flex-col justify-center items-center w-full text-center">
            <h2 className="sous_titre">Votre inscription<br/> a bien été prise en compte !</h2>
          </div>
        ) : (
          // Contenu initial
          <>
            {/* Colonne gauche */}
            <div className="sticker_left w-1/2 flex flex-col gap-8 justify-start items-start">
              <div>
                <h2 className="sous_titre">DEVENEZ MEMBRE DU</h2>
                <h3 className="grand_titre_xs">CLUB RETAIL AFRICA</h3>
              </div>
              <div>
                <p className="body_text underline mb-4">
                  Tarifs valables jusqu'au 31 Octobre :
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold">OFFRE SOLO</h4>
                    <p className="body_text">1 200 000 CFA HT / an / personne</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold">OFFRE ENTREPRISES</h4>
                    <ul className="list-disc list-inside body_text">
                      <li>Pour 5 à 9 pers : 900 000 CFA HT / an / personne</li>
                      <li>Pour 10+ pers : 790 000 CFA HT / an / personne</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="sticker_right w-1/2 flex flex-col gap-4 body_text justify-center items-start">
              <div className="flex flex-col border-b border-black pb-2 w-full">
                <strong>2 dîners par an</strong>
                <span>aux côtés des décideurs influents du retail.</span>
              </div>
              <div className="flex flex-col border-b border-black pb-2">
                <strong>Une étude annuelle</strong>
                <span>
                  sur l'évolution du marché et les tendances de consommation en
                  Afrique.
                </span>
              </div>
              <div className="flex flex-col border-b border-black pb-2 w-full">
                <strong>"La Brève Confidentielle du Retail"</strong>
                <span>par RRS, envoyée chaque semestre.</span>
              </div>
              <div className="flex flex-col pb-2">
                <strong>Accès exclusif à nos événements</strong>
                <span>
                  Workshops, séminaires thématiques et rencontres stratégiques.
                </span>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="sub_bouton sous_titre bg-gold text-white px-8 py-2 rounded-md self-start mt-4"
              >
                INSCRIPTION
              </button>
            </div>
          </>
        )}
      </div>

      {/* Formulaire */}
      {showForm && !isCompleted && (
        <div className="fixed inset-0 z-30">
          <MultiStepForm onComplete={handleFormComplete} />
        </div>
      )}
    </div>
  );
}
