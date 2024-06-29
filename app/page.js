import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import WhoIsItFor from "@/components/WhoIsItFor";
import WhyUs from "@/components/WhyUs";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Projects />
      <WhyUs />
      <HowItWorks />
      <WhoIsItFor />
      <WorkWithUs />
      <Footer />
    </main>
  );
}
