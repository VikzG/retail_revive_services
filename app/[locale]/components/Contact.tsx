'use client'
import { useState, useEffect, useRef } from "react"
import { useI18n } from '../../[locale]/../../locales/client'
import emailjs from '@emailjs/browser';
import gsap from "gsap/all"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactMobileTitle = useRef(null);
  const contactMobileText = useRef(null);
  const t = useI18n()
  
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
    company: '',
    form_type: "Formulaire de contact",
  })
  const [errors, setErrors] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
    company: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    // Animation avec GSAP : effet d'opacité de 0 à 1
    gsap.fromTo(
      '.contact-animation', // Cible de l'animation
      { opacity: 0 }, // Opacité initiale
      {
        opacity: 1, // Opacité finale
        duration: 1.5, // Durée de l'animation
        ease: "power2.out", // Courbe d'accélération
        scrollTrigger: {
          trigger: '.contact-animation', // Déclencheur de l'animation
          start: "top 60%", // L'animation commence quand l'élément est à 80% dans la fenêtre
          toggleActions: "play none none none", // L'animation ne se joue qu'une fois
        },
      }
    );
  }, []);

  useEffect(() => {
    if (isMobile && contactMobileTitle.current && contactMobileText.current) {
      // Timeline GSAP pour synchroniser les animations
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contactMobileTitle.current,
          start: "top 60%", // Animation déclenchée quand visible
          toggleActions: "play none none none",
        },
      });

      // Animation du titre
      timeline.fromTo(
        contactMobileTitle.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      // Animation du texte, avec un délai de 0.5s après le titre
      timeline.fromTo(
        contactMobileText.current,
        { opacity: 0, }, // Départ légèrement en bas
        {
          opacity: 1, // Fin à sa position initiale
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.5" // Délai de 0.5s après le titre
      );
    }
  }, [isMobile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation du formulaire
    const newErrors = {
        subject: formData.subject ? '' : t('contact.error_messages.subject'),
        name: formData.name ? '' : t('contact.error_messages.name'),
        email: formData.email ? '' : t('contact.error_messages.email'),
        message: formData.message ? '' : t('contact.error_messages.message'),
        company: formData.company ? '' : t('contact.error_messages.company'),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) {
        setIsSubmitting(false);
        return;
    }

    try {
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                subject: formData.subject,
                name: formData.name,
                email: formData.email,
                message: formData.message,
                company: formData.company,
                form_type: "Formulaire de contact"
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        console.log('Email envoyé avec succès :', result.text);
        setSuccessMessage("Nous avons bien reçu votre message !");
        setFormData({ subject: '', name: '', email: '', company:'', message: '', form_type : "Formulaire de contact" });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
    } finally {
        setIsSubmitting(false);
    }
};


  const renderForm = () => (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder={t('contact.form.subject_placeholder')}
        className="w-full p-3 placeholder-gold bg-white border border-gold rounded-xl text-gold"
        required
      />
      {errors.subject && <p className="text-red-500">{errors.subject}</p>}

      <div className="flex space-x-2">
        <div className="flex-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t('contact.form.name_placeholder')}
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold"
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="flex-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('contact.form.email_placeholder')}
            className="w-full p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold"
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
      </div>
      <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleInputChange}
  placeholder={t('contact.form.company_placeholder')}
  className="w-full p-3 placeholder-gold bg-white border border-gold rounded-xl text-gold"
  required
/>
{errors.company && <p className="text-red-500">{errors.company}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder={t('contact.form.message_placeholder')}
        className="w-full min-h-[200px] p-3 bg-white border border-gold rounded-xl text-blond placeholder-gold"
        required
      ></textarea>
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <div className="flex justify-center">
        <button
          type="submit"
          className="contact_bouton w-2/6 sous_titre bg-gold text-white py-3 rounded-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('contact.form.sending_status') : t('contact.form.submit_button')}
        </button>
      </div>
    </form>
  )

  if (isMobile) {
    return (
      <section id="contact" className="flex flex-col bg-dark_brown_grey text-white">
        <div className="w-full py-20 px-4 bg-dark-brown flex flex-col items-center text-center gap-8">
          <h2 ref={contactMobileTitle} className="grand_titre_s">{t('contact.title_mobile_1')}<br />{t('contact.title_mobile_2')}</h2>
          <p ref={contactMobileText} className="w-5/6 sous_titre">
          {t('contact.description')}<br />
          {t('contact.description_2')}
          </p>
        </div>

        <div
          className="w-full py-8 px-4 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/contact/contact_img.png')" }}
        >
          {renderForm()}
        </div>

        {successMessage && (
          <div className="fixed inset-0 transparent bg-opacity-90 flex items-center justify-center z-50">
            <div className="w-full px-10 py-44 bg-beige_grey text-black text-center rounded-md shadow-lg relative">
            <button
              onClick={() => setSuccessMessage("")}
              className="absolute top-3 right-3 text-xl"
            >
              &times;
            </button>
              <p className="citations">{t('contact.success_message.title')}<br/>{t('contact.success_message.title_2')}</p>
              <p className="body_text mt-4">{t('contact.success_message.description')}</p>
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

      <div className="contact-animation w-3/4 flex flex-col items-center gap-20 justify-center px-4 relative">
        <h2 className="grand_titre_s">{t('contact.title')}</h2>
        <p className="w-3/4 sous_titre text-center">
        {t('contact.description')}<br />
        {t('contact.description_2')}
        </p>

        {renderForm()}
        {successMessage && (
          <div className="absolute -bottom-[30%] left-1/2 transform -translate-x-1/2 -translate-y-full w-full bg-transparent text-white p-4 rounded-md flex justify-center items-center">
            <div className="py-36 px-20 bg-beige_grey  text-black text-center rounded-md shadow-lg relative">
            <button
               onClick={() => setSuccessMessage("")}
              className="absolute top-3 right-3 text-xl"
            >
              &times;
            </button>
              <p className="citations">{t('contact.success_message.title')}<br/>{t('contact.success_message.title_2')}</p>
              <p className="body_text mt-4">{t('contact.success_message.description')}</p>
            </div>
          </div>
          )}
      </div>
    </section>
  )
}

// desktop ---->
//{successMessage && (
//  <div className="inset-0 bg-opacity-90 flex items-center justify-center z-50">
//    <div className="p-8 bg-beige_grey  text-black text-center rounded-md shadow-lg">
//      <p className="citations">{successMessage}</p>
//      <p className="text_body">Un expert vous répondra dans les plus brefs délais.</p>
//    </div>
//  </div>
//)}

// mobile --->
//{successMessage && (
//  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
//    <div className="p-8 bg-white text-black text-center rounded-md shadow-lg">
//      <p className="text-xl font-semibold">{successMessage}</p>
//    </div>
//  </div>
//)}