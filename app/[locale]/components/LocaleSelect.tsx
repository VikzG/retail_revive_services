"use client"
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSelect = () => {
    const locale = useCurrentLocale(); // Récupère la langue courante
    const changeLocale = useChangeLocale(); // Fonction pour changer la langue

    // Fonction pour gérer le changement de langue
    const handleLocaleChange = (newLocale: "en" | "fr") => { // Spécifie que newLocale peut seulement être 'en' ou 'fr'
        changeLocale(newLocale);
    };

    return (
        <div>
            <button 
                className="nav_anchor"
                onClick={() => handleLocaleChange(locale === "fr" ? "en" : "fr")} // Change entre 'fr' et 'en'
                style={{
                    padding: '5px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: "500",
                    marginRight: "1rem",
                    fontFamily: "Archivo, sans-serif"
                }}
            >
                {locale === "fr" ? "Website in English" : "Site en Français"}
            </button>
        </div>
    );
};
