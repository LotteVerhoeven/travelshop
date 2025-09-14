'use client';
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { RootLayoutProps } from "./types";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Navbar from "./components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
});

export default function RootLayout({children}: RootLayoutProps) {
  const [qc] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <QueryClientProvider client={qc}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
