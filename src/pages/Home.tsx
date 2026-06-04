import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
