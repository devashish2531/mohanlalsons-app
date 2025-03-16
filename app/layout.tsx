import type React from "react";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohan Lal Sons - Premium Paint Store in Pataudi",
  description:
    "Your one-stop destination for all your painting needs. We offer a wide range of Asian Paints products and services in Pataudi, Haryana.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          {children}
          <Footer />
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
