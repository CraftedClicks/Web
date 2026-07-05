import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesGrid from '@/components/home/IndustriesGrid';
import ContactCTA from '@/components/home/ContactCTA';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import StatsCounter from '@/components/home/StatsCounter';
import FAQSection from '@/components/home/FAQSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      
      <ScrollReveal>
        <PortfolioSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <IndustriesGrid />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
      
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal>
        <StatsCounter />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
    </>
  );
}
