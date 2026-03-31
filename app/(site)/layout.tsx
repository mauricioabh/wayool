import { Footer } from "@/app/_components/Footer";
import { Navbar } from "@/app/_components/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Main content">
        {children}
      </main>
      <Footer />
    </>
  );
}
