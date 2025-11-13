import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ['latin'],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://melisabdn.netlify.app"),
  title: "Melisa B. Díaz - UX/UI Designer & Frontend Developer Jr",
  description: "Diseñadora UX/UI especializada en diseños modernos y minimalistas, enfocado en la investigación de usuarios e innovación digital con un diseño centrado en el usuario.",

  openGraph: {
    title: "Melisa B. Díaz - UX/UI Designer & Frontend Developer Jr",
    description: "Diseñadora UX/UI especializada en diseños modernos y minimalistas, enfocado en la investigación de usuarios e innovación digital con un diseño centrado en el usuario.",
    url: "https://melisabdiaz.com",
    siteName: "Melisa B. Díaz Portfolio",
    images: [
      {
        url: "/open_graph/open-graph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Melisa B. Díaz",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="es">
          <body
            className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
          >
            <NavBar />
            <main>
              {children}
            </main>
            <Footer />
          </body>
      </html>
  );
}
