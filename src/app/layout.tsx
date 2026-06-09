import type { Metadata } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sakshisaini.com"),
  title: "Sakshi Saini | Software Engineer & Traveler",
  description:
    "Portfolio of Sakshi Saini — Software Engineer, QA specialist, and solo traveler passionate about teaching, social sciences, and building with AI.",
  openGraph: {
    title: "Sakshi Saini | Software Engineer & Traveler",
    description:
      "Portfolio of Sakshi Saini — Software Engineer, QA specialist, and solo traveler.",
    url: "https://www.sakshisaini.com",
    siteName: "Sakshi Saini",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
