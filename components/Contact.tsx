import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

export default function Contact() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useIsMobile(900);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true); // Change l'état pour afficher le message de confirmation
    setTimeout(() => setIsSubmitted(false), 3000);  // Masque le message après 3 secondes
  };

  if (isMobile) {
    // Code de la version mobile
  return (
    <section id="contact" className="flex flex-col bg-dark_brown_grey text-white">
    {/* Top Block: Contact Information with Brown Background */}
    <div className="w-full py-20 px-4 bg-dark-brown flex flex-col items-center text-center gap-8">
      <h2 className="grand_titre_s">CONTACTEZ<br/>NOUS</h2>
      <p className="w-5/6 sous_titre">
        VOUS AVEZ UN PROJET ? UNE QUESTION ?<br />
        CONTACTEZ-NOUS ET LAISSEZ-NOUS VOUS ACCOMPAGNER DANS VOTRE TRANSFORMATION RETAIL EN AFRIQUE.
      </p>
    </div>

    {/* Bottom Block: Form with Background Image */}
    <div 
      className="w-full py-8 px-4 bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/contact/contact_img.png')" }} // Replace with the correct path
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg space-y-4">
        {/* Subject Input */}
        <input 
          type="text"
          placeholder="Selectionner un sujet*"
          className="w-full p-3 placeholder-gold bg-white border border-gold rounded-xl text-gold"
          required
        />

        {/* Name and Email Fields */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row gap-2">
          <input 
            type="text" 
            placeholder="Votre nom*" 
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
            required 
          />
          <input 
            type="email" 
            placeholder="Votre email*" 
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
            required 
          />
          </div>
        </div>

        {/* Message Textarea */}
        <textarea 
          placeholder="Votre message*" 
          className="w-full min-h-[200px] p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
          required 
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="contact_bouton w-2/6 sous_titre bg-gold text-white py-3 rounded-xl"
          >
            ENVOYER
          </button>
        </div>
      </form>

      {/* Submission Confirmation */}
      {isSubmitted && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center">
          <div className="p-8 bg-white text-black text-center rounded-md shadow-lg">
            <p className="text-xl font-semibold">Votre message a bien été envoyé</p>
          </div>
        </div>
      )}
    </div>
  </section>
  )
}
  return (
    <section id="contact" className="h-screen flex flex-row bg-dark_brown_grey text-white">   
      {/* Colonne 1 : Image */}
      <div className="w-2/5 h-screen flex-shrink-0">
        <img 
          src="/contact/contact_img.png" 
          alt="Sculpture en terre cuite" 
          className="w-full h-screen object-cover"  // Supprimé h-full, l'image sera ajustée en largeur et hauteur
        />
      </div>

      {/* Colonne 2 : Formulaire de Contact */}
      <div className="w-3/4 flex flex-col items-center gap-20 justify-center px-4">
        <h2 className="grand_titre_s">CONTACTEZ-NOUS</h2>
        <p className="w-3/4 sous_titre text-center">
          VOUS AVEZ UN PROJET ? UNE QUESTION ?<br />
          CONTACTEZ-NOUS ET LAISSEZ-NOUS VOUS ACCOMPAGNER DANS VOTRE TRANSFORMATION RETAIL EN AFRIQUE.
        </p>

        <form className="w-full max-w-md space-y-4">
          {/* Champ de sélection */}
          <input 
            type="text"
            placeholder="Selectionner un sujet*"
            className="w-full p-3 placeholder-gold bg-white border border-gold rounded-xl text-gold"
            required
          >
          </input>

          {/* Nom et Email */}
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Votre nom*" 
              className="flex-1 p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
              required 
            />
            <input 
              type="email" 
              placeholder="Votre email*" 
              className="flex-1 p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
              required 
            />
          </div>

          {/* Zone de texte pour le message */}
          <textarea 
            placeholder="Votre message*" 
            className="w-full min-h-[200px] p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
            required 
          ></textarea>

          {/* Bouton Envoyer */}
          <div className="flex justify-center">
            {/* Bouton Envoyer */}
            <button 
              type="submit" 
              className="contact_bouton w-2/6 sous_titre bg-gold text-white py-3 rounded-xl"
            >
              ENVOYER
            </button>
          </div>
        </form>
        {isSubmitted && (
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center">
            <div className="p-8 bg-white text-black text-center rounded-md shadow-lg">
              <p className="text-xl font-semibold">Votre message a bien été envoyé</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
