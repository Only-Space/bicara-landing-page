import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Footer />
    </main>
  );
}
