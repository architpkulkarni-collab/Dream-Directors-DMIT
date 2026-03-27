import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Dream Directors DMIT — Fingerprint-Based Career & Personality Guidance",
  description:
    "Discover your child's true potential with scientific fingerprint analysis (DMIT). Career, education, and personality guidance for all age groups by certified counselors Mrudul & Piyush Kulkarni.",
  keywords: [
    "DMIT",
    "fingerprint analysis",
    "career guidance",
    "parenting coach",
    "personality test",
    "Dream Directors",
    "Mrudul Kulkarni",
    "Piyush Kulkarni",
    "counseling",
  ],
  authors: [{ name: "Dream Directors DMIT" }],
  openGraph: {
    title: "Dream Directors DMIT — Unlock Your Child's True Potential",
    description:
      "Scientific fingerprint analysis for career, education, and personality guidance. Schedule your session today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
