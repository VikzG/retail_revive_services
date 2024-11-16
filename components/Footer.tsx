import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from 'react';


export default function Footer() {

  const [isMobile, setIsMobile] = useState(false); // Initialiser avec une valeur par défaut côté serveur

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
          <p className="footer_text text-white">mentions legales</p>
          <p className="footer_text text-white">© 2024 retail revive services</p>
          <p className="footer_text text-white">tous droits réservés</p>
        </div>
        
        {/* Right Column: Social Media Icons */}
        <div className="flex flex-row items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
            <p className="footer_text text-white">© 2024 retail revive services - tous droits réservés</p>
            <div className="flex flex-row items-center gap-4">
                <p className="footer_text text-white">contact@retailreviveservices.com</p>
                <p className="footer_text text-white">mentions legales</p>
                <div className="flex items-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-white text-2xl" />
                </a>
            </div>
            </div>
            </div>
        </footer>
    )}