
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BusinessProcess from '@/components/BusinessProcess';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <BusinessProcess />
      <ContactSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
