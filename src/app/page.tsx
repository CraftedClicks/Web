import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesGrid from '@/components/home/IndustriesGrid';
import ContactCTA from '@/components/home/ContactCTA';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import StatsCounter from '@/components/home/StatsCounter';
import BlogPreview from '@/components/home/BlogPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <IndustriesGrid />
      <ContactCTA />
      <WhyChooseUs />
      <Testimonials />
      <StatsCounter />
      <BlogPreview />
    </>
  );
}
