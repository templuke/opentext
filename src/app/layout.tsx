import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Sticky Notes",
  description: "Sticky notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#b8feff] p-5">
      <body className={inter.className }>
        <div className="max-w-3xl mx-auto p-4 bg-[#a7dcdd] shadow-xl m-5 mt-24 rounded-lg">
        
          <Header />

          {children}

        </div>
      </body>
    </html>
  );
}
