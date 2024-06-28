import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}
