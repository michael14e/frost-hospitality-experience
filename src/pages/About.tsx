
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import WhoWeAre from '@/components/about/WhoWeAre';
import OurVision from '@/components/about/OurVision';
import WhyChooseFrost from '@/components/about/WhyChooseFrost';
import InstagramSection from '@/components/about/InstagramSection';
import TeamMembers from '@/components/about/TeamMembers';
import ConnectWithUs from '@/components/about/ConnectWithUs';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <WhoWeAre />
      <OurVision />
      <WhyChooseFrost />
      <InstagramSection />
      <TeamMembers />
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default About;
