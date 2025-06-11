import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs"; // Import ContactUs
import OurProcess from "@/components/OurProcess";
import PortfolioPreview from "@/components/PortfolioPreview";
import Services from "@/components/Services";
import WhyTrustUsSection from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <PortfolioPreview />
      <WhyTrustUsSection />
      <OurProcess />
      <AboutSection />
      <ContactUs />
    </main>
  );
}
