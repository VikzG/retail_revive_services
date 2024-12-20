import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Retail Revive Services",
  description: "Nous propulsons les entreprises vers l’innovation & le succès sur le continent africain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${roasterThinFont.variable} ${roasterLightFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
