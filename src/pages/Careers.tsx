import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Clock, DollarSign } from 'lucide-react';
const Careers = () => {
  const jobOpenings = [{
    title: "Hospitality Experience Coordinator",
    location: "Virginia Beach, VA",
    type: "Full-time",
    salary: "$45,000 - $55,000",
    description: "Join our team as a Hospitality Experience Coordinator and help create exceptional experiences for our residents. You'll be responsible for managing daily operations, coordinating with vendors, and ensuring the highest level of service quality."
  }, {
    title: "Property Relations Manager",
    location: "Remote",
    type: "Full-time",
    salary: "$55,000 - $65,000",
    description: "Build and maintain relationships with property management companies while developing new business opportunities. This role requires excellent communication skills and a passion for hospitality excellence."
  }, {
    title: "Customer Experience Specialist",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$18 - $22 per hour",
    description: "Provide direct support to residents and ensure their needs are met with exceptional service. Perfect for someone who loves helping others and has a keen eye for detail."
  }];
  const benefits = ["Comprehensive health insurance", "Dental and vision coverage", "401(k) with company match", "Paid time off and holidays", "Professional development opportunities", "Flexible work arrangements", "Employee wellness programs", "Career advancement opportunities"];
  return <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16 py-0">
        <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/98d1d9b6-675e-4a2a-b6d8-4c89ebcab184.png)'
      }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Be part of a team that's dedicated to creating exceptional experiences and touching lives. 
To join us, please contact us for more information.</p>
          </div>
        </section>

        

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-blue-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-500 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>)}
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
    </div>;
};
export default Careers;