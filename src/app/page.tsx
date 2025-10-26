
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    <Header/>
    <Hero/>
    <HowItWorks/>
    <PricingSection/>
    <CTA />
    <Footer/>
    </div>
  );
}
