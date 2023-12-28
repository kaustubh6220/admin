import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentor Mentee App",
  description: "A Mentor Mentee application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    

    
      <html lang='en'>
        <body className={inter.className}>

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
          </main>

        </body>
      </html>
    
  );
}