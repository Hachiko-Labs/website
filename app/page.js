import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import WhoIsItFor from "@/components/WhoIsItFor";
import WhyUs from "@/components/WhyUs";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <WhyUs />
      <HowItWorks />
      <WhoIsItFor />
      <Pricing />
      <WorkWithUs />
      <Footer />
    </main>
  );
}
