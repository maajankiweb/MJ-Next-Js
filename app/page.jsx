import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import About from "@/components/About";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";

import ProblemSection from "@/components/ProblemSection";
import LeadMagnet from "@/components/LeadMagnet";
import OfferStack from "@/components/OfferStack";
import CaseStudy from "@/components/CaseStudy";
import RiskReversal from "@/components/RiskReversal";
import ObjectionHandling from "@/components/ObjectionHandling";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import Features from "@/components/Features";


export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. TRUST SIGNALS */}
        <Clients />
        <Certifications />
        <TechStrip />

        {/* 3. ABOUT (Brand intro - yahi sahi place hai) */}
        <About />

        {/* 4. PROBLEM */}
        <ProblemSection />

        {/* 5. SOLUTION */}
        <Services />
        <Features />

        {/* 6. WHY US */}
        <WhyChooseUs />
        <StatsSection />

        {/* 7. SOCIAL PROOF */}
        <Testimonials />
        <CaseStudy />
        <Portfolio />

        {/* 8. PROCESS */}
        <ProcessSection />

        {/* 9. INDUSTRIES */}
        <Industries />

        {/* 10. OFFER */}
        <OfferStack />
        <LeadMagnet />

        {/* 11. PRICING */}
        <Pricing />
        <Comparison />
        <RiskReversal />

        {/* 12. OBJECTIONS */}
        <ObjectionHandling />

        {/* 13. TEAM */}
        <Team />

        {/* 14. FAQ */}
        <FAQ />

        {/* 15. CTA */}
        <CTASection />
        <Newsletter />

        {/* 16. CONTACT */}
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}