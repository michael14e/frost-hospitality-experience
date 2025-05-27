import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JobApplicationModal from '@/components/JobApplicationModal';
import ConnectWithUs from '@/components/about/ConnectWithUs';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobOpening = {
    title: "Concierge",
    location: "Austin, Texas",
    type: "Full-time",
    salary: "$45,000 - $55,000",
    description: "We're looking for a dedicated and personable Concierge to join our team."
  };

  const benefits = ["Comprehensive health insurance", "Dental and vision coverage", "401(k) with company match", "Paid time off and holidays", "Professional development opportunities", "Flexible work arrangements", "Employee wellness programs", "Career advancement opportunities"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: 'url(/lovable-uploads/34ad03b7-cebf-42f0-b609-6dc64a0d627b.png)'
        }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of a team that's dedicated to creating exceptional experiences and touching lives. 
              To join us, please contact us for more information.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{jobOpening.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="inline-block bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-sky-700">
                        • Customer Service
                      </span>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{jobOpening.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{jobOpening.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="mt-4 lg:mt-0 text-white px-8 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400">
                    Apply here
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">{jobOpening.description}</p>
              </div>
            </div>

            
          </div>
        </section>
      </main>

      <ConnectWithUs />
      <Footer />
      
      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={jobOpening.title} 
      />
    </div>
  );
};

export default Careers;
