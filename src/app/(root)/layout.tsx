import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import MainNav from "@/components/navbar/main-nav";
import Footer from "@/components/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <MainNav />
        {children}
        <Footer />
     </>
  );
}
