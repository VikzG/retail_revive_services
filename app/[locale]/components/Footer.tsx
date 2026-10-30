import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useI18n, useCurrentLocale } from '../../[locale]/../../locales/client'


export default function Footer() {

  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur
  const t = useI18n()
  const locale = useCurrentLocale()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Vérifie la condition dès que le composant est monté

    mediaQuery.addEventListener("change", handleResize); // Écoute les changements
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
if (isMobile) {
    return(
        <div className="w-full bg-blond px-6">
        <div className="flex flex-row items-center justify-between gap-4 py-8">
        {/* Left Column: Legal Mentions and Copyright */}
        <div className="flex flex-col">
          <a
            href={`mailto:${t('footer.email')}`}
            className="footer_text footer_mail text-white"
          >
            {t('footer.email')}
          </a>
          <Link href={`/${locale}/mentions-legales`} className="footer_text footer_mail text-white">{t('footer.legal_mentions')}</Link>
          <p className="footer_text text-white">{t('footer.copyright_mobile')}</p>
          <p className="footer_text text-white">{t('footer.copyright_mobile_2')}</p>
        </div>
        
        {/* Right Column: Social Media Icons */}
        <div className="flex flex-row items-center gap-4">
          <a href="https://fr.linkedin.com/posts/retail-revive-services_retail-revive-insights-sp%C3%A9cial-tendances-activity-7335575976904462337-mGgI" target="_blank" rel="noopener noreferrer" className="footer_social">
            <FaLinkedin className="text-white" />
          </a>
          <a href="https://www.instagram.com/retailrevive/" target="_blank" rel="noopener noreferrer" className="footer_social">
            <FaInstagram className="text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer_social">
            <FaXTwitter className="text-white" />
          </a>
        </div>
      </div>
      </div>
    )
}
    return(
        <footer>
            <div className="w-full bg-blond h-16 flex flex-row items-center justify-between px-12">
            <p className="footer_text text-white">{t('footer.copyright')}</p>
            <div className="flex flex-row items-center gap-4">
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="footer_text footer_mail text-white"
                >
                  {t('footer.email')}
                </a>
                <Link href={`/${locale}/mentions-legales`} className="footer_text footer_mail text-white">{t('footer.legal_mentions')}</Link>
                <div className="flex items-center gap-4">
                <a href="https://fr.linkedin.com/posts/retail-revive-services_retail-revive-insights-sp%C3%A9cial-tendances-activity-7335575976904462337-mGgI" target="_blank" rel="noopener noreferrer" className="footer_social">
                    <FaLinkedin className="text-white text-2xl" />
                </a>
                <a href="https://www.instagram.com/retailrevive/" target="_blank" rel="noopener noreferrer" className="footer_social">
                    <FaInstagram className="text-white text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer_social">
                    <FaXTwitter className="text-white text-2xl" />
                </a>
            </div>
            </div>
            </div>
        </footer>
    )}