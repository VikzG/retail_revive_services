export default function Sub() {
    return (
      <div className="h-screen bg-light_beige flex justify-center items-center">
        <h1 className="grand_titre_xl w-full text-center text-blond flex flex-col gap-56">
          <span className="text-start ms-28">CLUB</span>
          <span className="text-end me-28">RETAIL</span>
          <span className="text-start ms-28">AFRICA</span>
        </h1>
        <div className="sticker absolute h-1/2 w-[800px] shadow rounded-xl bg-white opacity-90 p-12 flex">
          {/* Colonne gauche - Contenu textuel */}
          <div className="w-1/2 flex flex-col gap-8 justify-start items-start">
          <div>
            <h2 className="sous_titre">DEVENEZ MEMBRE DU</h2>
            <h3 className="grand_titre_xs">CLUB RETAIL AFRICA</h3>
            </div>
  
            <div>
              <p className="body_text underline mb-4">Tarifs valables jusqu'au 31 Octobre :</p>
  
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
  
          {/* Colonne droite - Liste des avantages et bouton */}
          <div className="w-1/2 flex flex-col gap-4 body_text justify-center items-start">
            <div className="flex flex-col border-b border-black pb-2 w-full">
              <strong>2 dîners par an</strong>
              <span>aux côtés des décideurs influents du retail.</span>
            </div>
  
            <div className="flex flex-col border-b border-black pb-2">
            <strong>Une étude annuelle</strong>
              <span>sur l'évolution du marché et les tendances de consommation en Afrique.</span>
            </div>
  
            <div className="flex flex-col border-b border-black pb-2 w-full">
            <strong>"La Brève Confidentielle du Retail"</strong>
              <span>par RRS, envoyée chaque semestre.</span>
            </div>
  
            <div className="flex flex-col pb-2">
            <strong>Accès exclusif à nos événements</strong>
              <span>Workshops, séminaires thématiques et rencontres stratégiques.</span>
            </div>
  
            {/* Bouton centré à droite */}
            <button className="sub_bouton sous_titre bg-gold text-white px-8 py-2 rounded-md self-start mt-4">
              INSCRIPTION
            </button>
          </div>
        </div>
      </div>
    );
  }
  