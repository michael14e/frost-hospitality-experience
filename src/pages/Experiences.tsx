
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Experiences = () => {
  const lifestyleServices = [
    {
      icon: "👥",
      title: "Handling Prospective residents",
      description: "Guide prospects to understand us better, provide facts for more informed decisions about community and housing options"
    },
    {
      icon: "📦",
      title: "Package Management",
      description: "Organized delivery coordination, secure package handling, timely resident notifications for all incoming deliveries"
    },
    {
      icon: "✅",
      title: "Checking in vendors",
      description: "Professional vendor coordination, access management, work supervision to ensure quality service delivery"
    },
    {
      icon: "🔧",
      title: "Assisting maintenance request",
      description: "Prompt maintenance coordination, issue documentation, follow-up communication for timely resolution"
    },
    {
      icon: "☕",
      title: "Tidying up coffee/tea bar",
      description: "Regular amenity maintenance, supply restocking, cleanliness standards for optimal resident experience"
    },
    {
      icon: "🏢",
      title: "Amenity upkeep and management",
      description: "Comprehensive facility oversight, equipment maintenance, space optimization for community enjoyment"
    },
    {
      icon: "⭐",
      title: "Upholding the Overall well-being of the community",
      description: "Community wellness initiatives, resident engagement programs, positive environment cultivation"
    },
    {
      icon: "❤️",
      title: "Assisting with the everyday needs of our residents",
      description: "Personal assistance coordination, daily living support, responsive service for enhanced comfort and convenience"
    }
  ];

  const businessProcesses = [
    {
      title: "Build Relationships",
      description: "Initiate contact with property management. Build rapport and understand their needs and expectations to create meaningful partnerships."
    },
    {
      title: "Negotiate Agreement",
      description: "Discuss terms, pricing, and services offered. Reach consensus on contractual details ensuring mutual benefit and satisfaction."
    },
    {
      title: "Sign Contract",
      description: "Formalize agreement in a legally binding contract. Ensure all parties are satisfied with terms and conditions."
    },
    {
      title: "Onboard Vendor",
      description: "Facilitate smooth transition and integration. Begin collaborative work on agreed-upon terms with ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-20 h-20 opacity-15">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-blue-500 text-sm font-medium mb-4 block">OUR SERVICES</span>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Elevate your Experience</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              We stand apart by focusing on personalized concierge experiences tailored to each residential 
              property needs. Discover how our services complement and enhance a customer service.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </section>

        {/* Standard Experience Package */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-16 h-16 text-blue-400 opacity-30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/7a001561-348d-40d1-aac5-2f29c7494779.png" 
                    alt="Professional hospitality service" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 text-blue-400 opacity-30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 text-blue-500 mr-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Standard Experience Package</h2>
                </div>
                <p className="text-gray-600 mb-8">Every package is modeled to your community.</p>
                
                <div className="space-y-4">
                  {[
                    "Handling prospective residents",
                    "Package management", 
                    "Checking in vendors",
                    "Assisting maintenance request",
                    "Tidying up coffee/tea bar",
                    "Amenity upkeep and management",
                    "Upholding the Overall well-being of the community",
                    "Assisting with the everyday needs of our wonderful residents"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 mt-0.5 text-green-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Lifestyle<br />
                Team
              </h2>
              <div className="w-16 h-1 bg-blue-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Business Process
              </h2>
              <div className="w-16 h-1 bg-blue-500"></div>
            </div>

            <div className="space-y-16">
              {businessProcesses.map((process, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="text-6xl mb-4">👥</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      </div>
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="text-6xl mb-4">
                              {index === 1 ? '🤝' : index === 2 ? '📝' : '🏢'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;
