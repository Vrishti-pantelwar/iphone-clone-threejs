import Features from "@/components/features";
import Footer from "@/components/footer";
import { HeroSections } from "@/components/hero-sections";
import { Highlights } from "@/components/highlights";
import HowItWorks from "@/components/how-it-works";
import { Model } from "@/components/model";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSections />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
