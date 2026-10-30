"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n, useCurrentLocale } from "@/locales/client";
import MailchimpScripts from "./MailchimpScript";

type Consent = "accepted" | "refused" | null;

const STORAGE_KEY = "rrs-cookie-consent";
// Événement pour rouvrir le bandeau depuis un lien "Gérer les cookies"
export const OPEN_COOKIE_BANNER = "rrs:open-cookie-banner";

export function openCookieBanner() {
  window.dispatchEvent(new Event(OPEN_COOKIE_BANNER));
}

function readConsent(): Consent {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "refused" ? value : null;
  } catch {
    return null;
  }
}

// Supprime ce que Mailchimp a déposé (cookies + localStorage)
function clearMailchimpData() {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("mcforms"))
      .forEach((key) => localStorage.removeItem(key));
  } catch {}
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("mcforms")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
}

export default function CookieConsent() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [consent, setConsent] = useState<Consent>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setIsOpen(stored === null);

    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_COOKIE_BANNER, open);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER, open);
  }, []);

  const choose = (value: "accepted" | "refused") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setIsOpen(false);

    if (value === "refused") {
      clearMailchimpData();
      // Le script Mailchimp déjà chargé ne peut pas être retiré : on recharge la page
      if (consent === "accepted") window.location.reload();
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" && <MailchimpScripts />}

      {isOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t("cookies.manage")}
          className="cookie_banner fixed bottom-4 right-4 z-40 bg-dark_brown_grey text-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
        >
          <p className="body_text">
            {t("cookies.message")}{" "}
            <Link href={`/${locale}/mentions-legales`} className="footer_mail text-gold">
              {t("cookies.learn_more")}
            </Link>
          </p>
          <div className="flex flex-row gap-3">
            <button
              onClick={() => choose("refused")}
              className="cookie_bouton flex-1 border border-white text-white sous_titre px-6 py-2 rounded-lg"
            >
              {t("cookies.refuse")}
            </button>
            <button
              onClick={() => choose("accepted")}
              className="cookie_bouton flex-1 border border-gold bg-gold text-white sous_titre px-6 py-2 rounded-lg"
            >
              {t("cookies.accept")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
