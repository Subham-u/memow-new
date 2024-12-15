import "@/styles/globals.css";
import MainNav from "@/components/navbar/main-nav";
import Footer from "@/components/footer/footer";

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
