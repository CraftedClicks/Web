import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesGrid from '@/components/home/IndustriesGrid';
import ContactCTA from '@/components/home/ContactCTA';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import StatsCounter from '@/components/home/StatsCounter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <AboutSection />
      <IndustriesGrid />
      <ContactCTA />
      <WhyChooseUs />
      <Testimonials />
      <StatsCounter />
    </>
  );
}
