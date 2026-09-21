import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Systems from "@/components/Systems";
import Flow from "@/components/Flow";
import Dashboards from "@/components/Dashboards";
import Industries from "@/components/Industries";
import StackBuilder from "@/components/StackBuilder";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Systems />
        <Flow />
        <Dashboards />
        <Industries />
        <StackBuilder />
        <Process />
        <Why />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
