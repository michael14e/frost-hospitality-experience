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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Frost Hospitality Experience, we believe that our team members are our greatest asset. 
                  We're committed to providing a work environment where you can grow, learn, and make a meaningful impact.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join us in creating experiences that make memories and memories that last a lifetime.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center" alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits & Perks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-5 h-5 mt-0.5 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
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