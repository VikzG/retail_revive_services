import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import SmoothScroll from "./components/SmoothScroll";
import { Providers } from "./providers";

const roasterThinFont = localFont({
  src: '/fonts/Roaster-Thin.woff',  // Chemin vers la police
  variable: '--font-roaster-thin', // Variable CSS pour la police
  weight: '100',                    // Poids correspondant (adaptez si nécessaire)
  style: 'normal',                  // Style (normal, italic, etc.)
});

const roasterLightFont = localFont({
  src: '/fonts/Roaster-Light.ttf',  // Chemin vers la police
  variable: '--font-roaster-light', // Variable CSS pour la police
  weight: '300',                    // Poids correspondant (adaptez si nécessaire)
  style: 'normal',                  // Style (normal, italic, etc.)
});

const archivo = Archivo({ subsets: ['latin'] });

const poppins = Poppins({ weight: ['300'], subsets: ['latin'] });


export const metadata: Metadata = {
  metadataBase: new URL("https://retailreviveservices.com"),
  title: "Retail Revive Services",
  description: "Nous propulsons les entreprises vers l’innovation & le succès sur le continent africain",
  openGraph: {
    title: "Retail Revive Services",
    description: "Nous propulsons les entreprises vers l’innovation & le succès sur le continent africain",
    url: "https://test-retail-revive-services.netlify.app/",
    images: [
      {
        url:"favicon_rrs.png",
        width: 30,
        height: 30,
        alt: "Image de prévisualisation pour Retail Revive Services",
      },
    ],
    siteName: "Retail Revive Services",
  },
};


// Les deux langues sont générées au build et servies directement par le CDN
export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Attendre que la promesse de `params` soit résolue
  const { locale } = await params;

  return (
    <html lang={locale} className={`${roasterThinFont.variable} ${roasterLightFont.variable}`}>
      <body>
        <Providers locale={locale}>
          <SmoothScroll />
          {children}
           <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}