import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogosMarquee from "@/components/LogosMarquee";
import Solutions from "@/components/Solutions";
import Bento from "@/components/Bento";
import Toolkit from "@/components/Toolkit";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <LogosMarquee />
        <Solutions />
        <Bento />
        <Toolkit />
        <Process />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
