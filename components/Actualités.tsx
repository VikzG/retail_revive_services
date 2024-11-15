import Link from "next/link";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function Actualites() {
  const isMobile = useIsMobile(1250);

  if (isMobile) {
    return (
      <section id="actualites" className="bg-white py-10 text-center flex flex-col items-center">
      {/* Header */}
      <div className="mb-4">
        <h2 className="grand_titre_s">NOS ACTUALITÉS</h2>
        <Link className="text-gold underline body_text"href="/etude-annuelle">
           <strong>Téléchargez notre étude annuelle gratuite sur<br/> le retail en Afrique</strong> 
        </Link>
      </div>

      {/* Description */}
      <div className="text-sm mb-4 px-4">
        <p className="body_text">
        <strong>Inscrivez-vous dès maintenant à nos courriers exclusifs</strong> pour rester informé(e) des dernières tendances du retail en Afrique et des projets innovants portés par Retail Révie Services et ses partenaires, à travers des études de cas et témoignages d’entreprises.
        </p>
      </div>

      {/* Subscription Form */}
      <div className="flex flex-col items-center mb-6 w-full">
        <div className="flex flex-row gap-2 px-4 py-6">
        <input
          type="text"
          placeholder="Votre nom"
          className="border border-[#D5C5A6] rounded-md p-2 mb-2 w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="border border-[#D5C5A6] rounded-md p-2 mb-2 w-full max-w-xs"
        />
        </div>
        <button 
              type="submit" 
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
      </div>

      {/* Image Section */}
      <div className="w-full h-48 relative mb-6">
        <Image
          src="/actualites/debat_img.png" // Replace with the actual image path
          alt="Dernier événement"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Event Description */}
      <div className="px-4">
        <p className="sous_titre py-4">
         <strong> DERNIER ÉVÉNEMENT </strong>: <br /> LE DÎNER-DÉBAT DES DÉCIDEURS
        </p>
        <p className="mt-2 body_text">
          Vous souhaitez participer aux événements et être au cœur de l’innovation du retail en Afrique ?<strong>Inscrivez-vous à nos dîners privés et accédez aux dernières tendances, études et opportunités du marché.</strong> 
        </p>
      </div>

      {/* Join Button */}
      <div className="mt-6">
      <Link 
          href="/club"
          className="inline-block actualite_bouton sous_titre bg-white text-gold px-6 py-2 rounded-lg border-gold border-solid border-2"
          >
              REJOINDRE LE CLUB
          </Link>
      </div>
    </section>
    )
  }
  return (
    <section id="actualites" className="max-h-screen py-16 px-4 lg:px-20 bg-white">
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-10 p-8">
        
        {/* Colonne 1 : Nos Actualités */}
        <div className="lg:col-span-1 p-6">
          <h2 className="grand_titre_s text-dark_brown_grey mb-6">NOS <br/>ACTUALITÉS</h2>
          <p className="text-gold sous_titre underline uppercase mb-2">
            TÉLÉCHARGEZ NOTRE ÉTUDE ANNUELLE GRATUITE SUR LE RETAIL EN AFRIQUE.
          </p>
          <p className="body_text text-gray-700 mb-8">
            <strong>Inscrivez-vous dès maintenant</strong> à nos courriers exclusifs pour rester informé(e) 
            des dernières tendances du retail en Afrique et des projets innovants portés 
            par Retail Revive Services et ses partenaires, à travers des études de cas et 
            témoignages d'entreprises.
          </p>
          
          {/* Formulaire d'inscription */}
          <form className="flex flex-row gap-2 mt-14 space-y-4">
            <input 
              type="text" 
              placeholder="Votre nom" 
              className="border border-gray-300 p-2 mt-4 rounded-lg w-full"
            />
            <input 
              type="email" 
              placeholder="Votre email" 
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
            <button 
              type="submit" 
              className="actualite_form_bouton bg-gold text-white shadow sous_titre px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </form>
        </div>

        {/* Colonne 2 : Images */}
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <div className="bg-gray-200 h-32 lg:h-40 w-full"></div>
          <div className="bg-gray-200 h-32 lg:h-40 w-full"></div>
          <div className="bg-gray-200 h-32 lg:h-40 w-full"></div>
        </div>

        {/* Colonne 3 : Dernier Événement */}
        <div className="lg:col-span-1">
          <h3 className="sous_titre underline mb-2">
            DERNIER ÉVÉNEMENT : LE DÎNER-DÉBAT DES DÉCIDEURS
          </h3>
          <p className="body_text mb-4">
            Nous organisons régulièrement des <span className="font-bold">événements exclusifs</span> dédiés 
            aux décideurs et <span className="font-bold">acteurs du retail en Afrique.</span> Chaque événement organisé 
            par Retail Revive Services est une opportunité de partage, d'apprendre et de collaborer pour 
            faire avancer l'industrie du retail en Afrique.
          </p>
          <p className="body_text mb-6">
            Vous souhaitez participer à nos événements et être au cœur de l'innovation dans le retail en Afrique ? 
            <span className="font-bold"> Inscrivez-vous à nos dîners privés et accédez aux dernières tendances, études 
            et opportunités du marché.</span>
          </p>
          <Link 
          href="/club"
          className="inline-block actualite_bouton sous_titre bg-white text-gold px-6 py-2 rounded-lg border-gold border-solid border-2"
          >
              REJOINDRE LE CLUB
          </Link>
          <h2 className="grand_titre_s mt-14 text-dark_brown_grey uppercase text-end mb-6">réseau <br/>& événements</h2>
        </div>
      </div>
    </section>
  );
}
