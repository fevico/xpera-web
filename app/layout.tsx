import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xepera | The Journey Begins on the Road • Story-Driven Tourism in Nigeria",
  description:
    "Search iconic destinations, book curated tours, and get picked up at your doorstep. Trained chauffeur-storytellers bring Nigerian history to life before you arrive, followed by certified local guides.",
  keywords: [
    "Xepera",
    "Nigeria Tourism",
    "Storytelling Driver",
    "Lagos Tour",
    "Obudu Mountain",
    "Olumo Rock",
    "Badagry Tour",
    "Nigerian Heritage",
    "Tourism App Nigeria",
    "Uber for Tourism",
  ],
  authors: [{ name: "Xepera Technologies Inc." }],
  openGraph: {
    title: "Xepera | Where Every Journey Has a Story",
    description:
      "Doorstep ride pickup meets rich cultural storytelling and certified tour guides. Starting across Nigeria.",
    siteName: "Xepera",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#070c0e] text-slate-100 font-sans-luxury antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
