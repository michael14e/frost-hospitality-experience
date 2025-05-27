import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExperiencesHero from '@/components/experiences/ExperiencesHero';
import StandardExperience from '@/components/experiences/StandardExperience';
import LifestyleTeam from '@/components/experiences/LifestyleTeam';
import ExperiencesBusinessProcess from '@/components/experiences/ExperiencesBusinessProcess';

const Experiences = () => {
  useDocumentTitle('Experiences - Frost Hospitality');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ExperiencesHero />
      <StandardExperience />
      <LifestyleTeam />
      <ExperiencesBusinessProcess />
      <Footer />
    </div>
  );
};

export default Experiences;
