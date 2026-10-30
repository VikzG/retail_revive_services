"use client";
import Link from "next/link";
import { useCurrentLocale } from "@/locales/client";
import Footer from "@/app/[locale]/components/Footer";
import { openCookieBanner } from "@/app/[locale]/components/CookieConsent";

// Informations de l'entreprise (source : annuaire-entreprises.data.gouv.fr, SIREN 104 208 681)
const COMPANY = {
  name: "Retail Revive Services",
  legalName: "RRS Global Distribution",
  capital: "1 000 €",
  address: "114 avenue de la République, 78500 Sartrouville, France",
  siren: "104 208 681",
  siret: "104 208 681 00015",
  vat: "FR02 104 208 681",
  director: "Claudia Malangue Kemabia",
  email: "contact@retailreviveservices.com",
};

const HOST = {
  name: "Netlify, Inc.",
  address: "512 2nd Street, Suite 200, San Francisco, CA 94107, USA",
  website: "https://www.netlify.com",
};

type Section = { title: string; content: React.ReactNode };

const content: Record<"fr" | "en", { title: string; back: string; updated: string; sections: Section[] }> = {
  fr: {
    title: "Mentions légales",
    back: "Retour au site",
    updated: "Dernière mise à jour : octobre 2026",
    sections: [
      {
        title: "Éditeur du site",
        content: (
          <>
            <p>
              Le site retailreviveservices.com est édité par <strong>{COMPANY.legalName}</strong>{" "}
              (nom commercial : {COMPANY.name}), société par actions simplifiée (SAS) au capital de{" "}
              {COMPANY.capital}.
            </p>
            <p>Siège social : {COMPANY.address}</p>
            <p>
              Immatriculée au Registre national des entreprises (RNE) sous le SIREN {COMPANY.siren}{" "}
              – SIRET {COMPANY.siret}
            </p>
            <p>N° TVA intracommunautaire : {COMPANY.vat}</p>
            <p>
              Email : <a className="footer_mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </>
        ),
      },
      {
        title: "Directeur de la publication",
        content: <p>{COMPANY.director}</p>,
      },
      {
        title: "Hébergement",
        content: (
          <>
            <p>Le site est hébergé par <strong>{HOST.name}</strong></p>
            <p>{HOST.address}</p>
            <p>{HOST.website}</p>
          </>
        ),
      },
      {
        title: "Propriété intellectuelle",
        content: (
          <p>
            L&apos;ensemble des contenus de ce site (textes, images, logos, vidéos, éléments graphiques)
            est la propriété exclusive de {COMPANY.name} ou de ses partenaires, sauf mention contraire.
            Les logos des marques clientes sont la propriété de leurs titulaires respectifs. Toute
            reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite
            préalable est interdite.
          </p>
        ),
      },
      {
        title: "Données personnelles",
        content: (
          <>
            <p>
              Les informations recueillies via les formulaires du site (contact, adhésion au club,
              inscription à la newsletter) sont utilisées uniquement pour répondre à vos demandes et
              vous adresser nos communications. Elles ne sont ni vendues ni cédées à des tiers.
            </p>
            <p>
              Ces données sont traitées par l&apos;intermédiaire de nos prestataires : EmailJS
              (envoi des formulaires) et Mailchimp (gestion de la newsletter).
            </p>
            <p>
              Conformément à la réglementation applicable en matière de protection des données
              (notamment le RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et d&apos;opposition au traitement de vos données. Pour l&apos;exercer,
              écrivez-nous à{" "}
              <a className="footer_mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Vous
              pouvez vous désinscrire de la newsletter à tout moment via le lien présent dans chaque
              email.
            </p>
          </>
        ),
      },
      {
        title: "Cookies",
        content: (
          <>
            <p>
              <strong>Cookie nécessaire :</strong> le cookie « Next-Locale » mémorise la langue
              choisie (français ou anglais). Il est indispensable au fonctionnement du site et ne
              nécessite pas votre consentement.
            </p>
            <p>
              <strong>Mailchimp (newsletter) :</strong> uniquement si vous l&apos;acceptez, le
              service Mailchimp (Intuit Inc., États-Unis) affiche notre formulaire d&apos;inscription
              à la newsletter. Pour cela, il dépose un cookie de session, enregistre des données dans
              votre navigateur et mesure vos visites (pages vues, interactions avec le formulaire).
              Votre choix est conservé dans votre navigateur.
            </p>
            <p>
              Vous pouvez modifier votre choix à tout moment :{" "}
              <button type="button" onClick={openCookieBanner} className="footer_mail text-blond">
                gérer les cookies
              </button>
              .
            </p>
          </>
        ),
      },
      {
        title: "Responsabilité",
        content: (
          <p>
            {COMPANY.name} s&apos;efforce de fournir des informations exactes et à jour, mais ne
            peut garantir l&apos;absence d&apos;erreurs. {COMPANY.name} ne saurait être tenue
            responsable de l&apos;utilisation faite de ces informations ni du contenu des sites
            externes vers lesquels des liens renvoient.
          </p>
        ),
      },
    ],
  },
  en: {
    title: "Legal notice",
    back: "Back to the website",
    updated: "Last updated: October 2026",
    sections: [
      {
        title: "Website publisher",
        content: (
          <>
            <p>
              The website retailreviveservices.com is published by <strong>{COMPANY.legalName}</strong>{" "}
              (trading as {COMPANY.name}), a French simplified joint-stock company (SAS) with a
              share capital of {COMPANY.capital}.
            </p>
            <p>Registered office: {COMPANY.address}</p>
            <p>
              Registered with the French National Business Register (RNE) under SIREN{" "}
              {COMPANY.siren} – SIRET {COMPANY.siret}
            </p>
            <p>EU VAT number: {COMPANY.vat}</p>
            <p>
              Email: <a className="footer_mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </>
        ),
      },
      {
        title: "Publication director",
        content: <p>{COMPANY.director}</p>,
      },
      {
        title: "Hosting",
        content: (
          <>
            <p>The website is hosted by <strong>{HOST.name}</strong></p>
            <p>{HOST.address}</p>
            <p>{HOST.website}</p>
          </>
        ),
      },
      {
        title: "Intellectual property",
        content: (
          <p>
            All content on this website (text, images, logos, videos, graphic elements) is the
            exclusive property of {COMPANY.name} or its partners, unless otherwise stated. Client
            brand logos remain the property of their respective owners. Any reproduction,
            representation or distribution, in whole or in part, without prior written consent is
            prohibited.
          </p>
        ),
      },
      {
        title: "Personal data",
        content: (
          <>
            <p>
              Information collected through the website forms (contact, club membership, newsletter
              sign-up) is used solely to answer your requests and send you our communications. It
              is never sold or transferred to third parties.
            </p>
            <p>
              This data is processed through our service providers: EmailJS (form delivery) and
              Mailchimp (newsletter management).
            </p>
            <p>
              In accordance with applicable data protection regulations (including the GDPR), you
              have the right to access, rectify, erase and object to the processing of your data.
              To exercise these rights, write to us at{" "}
              <a className="footer_mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. You
              can unsubscribe from the newsletter at any time using the link in each email.
            </p>
          </>
        ),
      },
      {
        title: "Cookies",
        content: (
          <>
            <p>
              <strong>Necessary cookie:</strong> the &quot;Next-Locale&quot; cookie remembers your
              chosen language (French or English). It is required for the website to work and does
              not need your consent.
            </p>
            <p>
              <strong>Mailchimp (newsletter):</strong> only if you accept it, the Mailchimp service
              (Intuit Inc., United States) displays our newsletter sign-up form. To do so, it sets a
              session cookie, stores data in your browser and measures your visits (page views,
              interactions with the form). Your choice is stored in your browser.
            </p>
            <p>
              You can change your choice at any time:{" "}
              <button type="button" onClick={openCookieBanner} className="footer_mail text-blond">
                manage cookies
              </button>
              .
            </p>
          </>
        ),
      },
      {
        title: "Liability",
        content: (
          <p>
            {COMPANY.name} strives to provide accurate and up-to-date information but cannot
            guarantee it is free of errors. {COMPANY.name} cannot be held liable for any use made of
            this information or for the content of external websites linked from this site.
          </p>
        ),
      },
    ],
  },
};

export default function MentionsLegales() {
  const locale = useCurrentLocale();
  const c = content[locale === "en" ? "en" : "fr"];

  return (
    <div className="bg-light_beige min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href={`/${locale}`} aria-label="Retail Revive Services">
          <span role="img" aria-label="Logo RRS" className="retail_revive_svg" />
        </Link>
        <Link href={`/${locale}`} className="nav_anchor text-black">
          ← {c.back}
        </Link>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12">
        <h1 className="grand_titre_xs text-dark_brown_grey mb-2">{c.title}</h1>
        <p className="body_text text-dark_brown_grey/60 mb-12">{c.updated}</p>

        {c.sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="sous_titre text-blond mb-4">{section.title}</h2>
            <div className="body_text text-dark_brown_grey flex flex-col gap-2">
              {section.content}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
