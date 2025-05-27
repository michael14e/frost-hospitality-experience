
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JobApplicationModal from '@/components/JobApplicationModal';
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

  const benefits = [
    "Comprehensive health insurance",
    "Dental and vision coverage", 
    "401(k) with company match",
    "Paid time off and holidays",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Employee wellness programs",
    "Career advancement opportunities"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16 py-0">
        <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: 'url(/lovable-uploads/12c80cb3-b942-4d54-b360-c7ef307eab0b.png)'
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
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
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
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 lg:mt-0 bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    Apply here
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">{jobOpening.description}</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Don't see a position that fits? We're always looking for talented individuals to join our team.
              </p>
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors">
                Send Us Your Resume
              </button>
            </div>
          </div>
        </section>
      </main>

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
