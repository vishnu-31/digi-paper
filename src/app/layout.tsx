import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';

import { cn } from "@/lib/utils"
import NavBar from "@/components/navbar";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DigiPaper",
  description: "Digital Paper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>      
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
            ) }
        >
          <NavBar/>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
