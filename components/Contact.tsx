'use client'

import { useState,useEffect } from "react"
import { useActionState } from "react"
import { submitContactForm } from "./actions"


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, formAction] = useActionState(submitContactForm, { message: '', errors: {} })

  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formAction(formData)
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <input 
        type="text"
        name="subject"
        placeholder="Selectionner un sujet*"
        className="w-full p-3 placeholder-gold bg-white border border-gold rounded-xl text-gold"
        required
      />
      {state.errors?.subject && <p className="text-red-500">{state.errors.subject}</p>}

      <div className="flex space-x-2">
        <div className="flex-1">
          <input 
            type="text" 
            name="name"
            placeholder="Votre nom*" 
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
            required 
          />
          {state.errors?.name && <p className="text-red-500">{state.errors.name}</p>}
        </div>
        <div className="flex-1">
          <input 
            type="email" 
            name="email"
            placeholder="Votre email*" 
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
            required 
          />
          {state.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
        </div>
      </div>

      <textarea 
        name="message"
        placeholder="Votre message*" 
        className="w-full min-h-[200px] p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold" 
        required 
      ></textarea>
      {state.errors?.message && <p className="text-red-500">{state.errors.message}</p>}

      <div className="flex justify-center">
        <button 
          type="submit" 
          className="contact_bouton w-2/6 sous_titre bg-gold text-white py-3 rounded-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'ENVOI...' : 'ENVOYER'}
        </button>
      </div>
    </form>
  )

  if (isMobile) {
    return (
      <section id="contact" className="flex flex-col bg-dark_brown_grey text-white">
        <div className="w-full py-20 px-4 bg-dark-brown flex flex-col items-center text-center gap-8">
          <h2 className="grand_titre_s">CONTACTEZ<br/>NOUS</h2>
          <p className="w-5/6 sous_titre">
            VOUS AVEZ UN PROJET ? UNE QUESTION ?<br />
            CONTACTEZ-NOUS ET LAISSEZ-NOUS VOUS ACCOMPAGNER DANS VOTRE TRANSFORMATION RETAIL EN AFRIQUE.
          </p>
        </div>

        <div 
          className="w-full py-8 px-4 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/contact/contact_img.png')" }}
        >
          {renderForm()}
        </div>

        {state.message && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
            <div className="p-8 bg-white text-black text-center rounded-md shadow-lg">
              <p className="text-xl font-semibold">{state.message}</p>
            </div>
          </div>
        )}
      </section>
    )
  }

  return (
    <section id="contact" className="h-screen flex flex-row bg-dark_brown_grey text-white">   
      <div className="w-2/5 h-screen flex-shrink-0">
        <img 
          src="/contact/contact_img.png" 
          alt="Sculpture en terre cuite" 
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="w-3/4 flex flex-col items-center gap-20 justify-center px-4">
        <h2 className="grand_titre_s">CONTACTEZ-NOUS</h2>
        <p className="w-3/4 sous_titre text-center">
          VOUS AVEZ UN PROJET ? UNE QUESTION ?<br />
          CONTACTEZ-NOUS ET LAISSEZ-NOUS VOUS ACCOMPAGNER DANS VOTRE TRANSFORMATION RETAIL EN AFRIQUE.
        </p>

        {renderForm()}

        {state.message && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
            <div className="p-8 bg-white text-black text-center rounded-md shadow-lg">
              <p className="text-xl font-semibold">{state.message}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}