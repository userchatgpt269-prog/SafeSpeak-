import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustStrip from "@/components/truststrip";
import ProblemSection from "@/components/problemsection";
import HowItWorks from "@/components/howitworks";
import ProductDemo from "@/components/productdemo";
import FeaturesSection from "@/components/featuressection";
import OptionalFeatures from "@/components/optionalfeatures";
import SafetySection from "@/components/safetysection";
import ResponsibleAi from "@/components/responsibleai";
import PrivacySection from "@/components/privacysection";
import FinalCta from "@/components/finalcta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <HowItWorks />
        <ProductDemo />
        <FeaturesSection />
        <OptionalFeatures />
        <SafetySection />
        <ResponsibleAi />
        <PrivacySection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
