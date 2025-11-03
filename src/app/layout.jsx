import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMM Solution Automação",
  description: "Automação inteligente para residências e empresas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex">
          <SideBar />
          <main className="w-full h-[100vh]">{children}</main>
        </div>
      </body>
    </html>
  );
}
