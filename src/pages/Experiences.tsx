
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExperiencesHero from '@/components/experiences/ExperiencesHero';
import StandardExperience from '@/components/experiences/StandardExperience';
import LifestyleTeam from '@/components/experiences/LifestyleTeam';
import ExperiencesBusinessProcess from '@/components/experiences/ExperiencesBusinessProcess';

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        <ExperiencesHero />
        <StandardExperience />
        <LifestyleTeam />
        <ExperiencesBusinessProcess />
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;
