
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Experiences = () => {
  const experiencePackages = [
    {
      title: "Standard Experience Package",
      features: [
        "Handling prospective residents",
        "Package management",
        "Checking in vendors",
        "Assisting maintenance request",
        "Tidying up coffee/tea bar",
        "Amenity upkeep and management",
        "Upholding the Overall well-being of the community",
        "Assisting with the everyday needs of our wonderful residents"
      ]
    },
    {
      title: "Premium Experience Package",
      features: [
        "All Standard Package features",
        "Concierge services",
        "Event planning and coordination",
        "Personal shopping assistance",
        "Pet care services",
        "Dry cleaning pickup/delivery",
        "Restaurant reservations",
        "24/7 resident support"
      ]
    },
    {
      title: "Luxury Experience Package",
      features: [
        "All Premium Package features",
        "Personal assistant services",
        "Custom lifestyle management",
        "Travel planning and booking",
        "Home organization services",
        "Private chef coordination",
        "Wellness and fitness support",
        "Exclusive member benefits"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Experiences</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our carefully crafted experience packages designed to enhance your lifestyle and create lasting memories.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {experiencePackages.map((package_, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{package_.title}</h3>
                  <div className="space-y-4">
                    {package_.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 mt-0.5 text-blue-400">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 bg-blue-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Our Experiences?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Every experience we create is crafted to leave a lasting impression—because memories made with us are memories that last a lifetime.
            </p>
            <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experiences;
