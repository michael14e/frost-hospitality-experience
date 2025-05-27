import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BusinessProcess from '@/components/BusinessProcess';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  useDocumentTitle('Home - Frost Hospitality');
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <BusinessProcess />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
