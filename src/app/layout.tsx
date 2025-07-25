//*** */ src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Kodigo Music",
  description: "App musical inspirada en Spotify",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
