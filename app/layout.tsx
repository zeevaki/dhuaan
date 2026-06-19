import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhuaan — دھواں",
  description: "Where the heart burns, the smoke rises. A space for cigars, chai, hookah and the Sufi soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
