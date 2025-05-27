
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BusinessProcess from '@/components/BusinessProcess';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <BusinessProcess />
      <Footer />
    </div>
  );
};

export default Index;
