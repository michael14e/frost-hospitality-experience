import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Snowflake } from 'lucide-react';

const Experiences = () => {
  const lifestyleServices = [{
    icon: "/lovable-uploads/53abc9e2-8052-4f91-b260-704e154ecec6.png",
    title: "Handling Prospective Residents",
    description: "Explore available residences, schedule tours, and receive personalized assistance throughout your application process."
  }, {
    icon: "/lovable-uploads/9933943b-7dff-4326-9a2d-aefa3af890c2.png",
    title: "Package Management",
    description: "Ensures that your deliveries are securely received and easily accessible. Enjoy convenient notifications, secure storage, and hassle-free pickup, making package retrieval a breeze."
  }, {
    icon: "/lovable-uploads/f32d5d69-2e38-4823-80e1-26550a2ab9f1.png",
    title: "Checking in vendors",
    description: "Ensures quick and secure check-in for all vendors, enhancing efficiency and fostering positive partnerships."
  }, {
    icon: "/lovable-uploads/ede92397-1bc7-418c-86cb-7deaa9939d23.png",
    title: "Assisting maintenance request",
    description: "Promptly address all your maintenance needs. Submit requests easily and receive timely updates, ensuring your home stays comfortable."
  }, {
    icon: "/lovable-uploads/e9c70aba-7d39-48d1-b41b-3e0b78330f75.png",
    title: "Tidying up coffee/tea bar",
    description: "Ensure a clean and inviting coffee and tea bar, ready to serve you. Enjoy a tidy space with fresh supplies and a welcoming atmosphere."
  }, {
    icon: "/lovable-uploads/a4867c31-99e5-4103-88f3-5564516d6ac5.png",
    title: "Amenity upkeep and management",
    description: "We prioritize the maintenance and management of amenities. Enjoy a well-kept environment that enhances your living experience."
  }, {
    icon: "/lovable-uploads/e36f16d2-751c-4aad-9604-a8348c2780c0.png",
    title: "Upholding the Overall well-being of the community",
    description: "Dedicated to fostering a healthy, vibrant community through supportive programs, resources, and events."
  }, {
    icon: "/lovable-uploads/adb341f3-4eb5-431a-a334-a34be1f1fc8c.png",
    title: "Assisting with the everyday needs of our residents",
    description: "Committed to meeting the daily needs of our residents with friendly support and helpful resources, ensuring a comfortable and enjoyable living experience."
  }];
  const businessProcesses = [{
    number: "01",
    title: "Build Relationships",
    description: "Initiate contact with property management. Establish a reliable partnership with stakeholders to ensure smooth operations, and create a welcoming and trustworthy environment to encourage repeat business and build rapport and understand their needs.",
    image: "/lovable-uploads/29ab8710-7f56-4ba2-ab16-9d5131fd55c8.png",
    imagePosition: "right"
  }, {
    number: "02",
    title: "Negotiate Agreement",
    description: "Reaching optimal terms, pricing, and services offered and establish agreements that ensure reliable service delivery and contribute to a superior partner experience while maintaining cost efficiency and operational effectiveness.",
    image: "/lovable-uploads/29ab8710-7f56-4ba2-ab16-9d5131fd55c8.png",
    imagePosition: "left"
  }, {
    number: "03",
    title: "Sign Contract",
    description: "Formalize agreement in a legally binding contract. It signifies the commitment between parties to deliver agreed-upon services and products. This formalizes the legal framework for the partnership, detailing pricing, timelines, responsibilities, and service standards and ensure all parties are satisfied with terms.",
    image: "/lovable-uploads/29ab8710-7f56-4ba2-ab16-9d5131fd55c8.png",
    imagePosition: "right"
  }, {
    number: "04",
    title: "Onboard Vendor",
    description: "Essential for building effective partnerships that enhance service delivery. Facilitate smooth transition and integration. Begin collaborative work on agreed-upon terms.",
    image: "/lovable-uploads/29ab8710-7f56-4ba2-ab16-9d5131fd55c8.png",
    imagePosition: "left"
  }];
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16 py-0">
        {/* Hero Section */}
        <section className="py-20 overflow-hidden" style={{
        backgroundImage: 'url(/lovable-uploads/b2edc674-2040-471a-a14e-fa728cbeb7a7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
            
          </div>
          <div className="absolute top-20 right-20 w-20 h-20 opacity-15">
            
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-sm font-medium mb-4 block text-cyan-500">OUR SERVICES</span>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Elevate your Experience</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              We stand apart by focusing on personalized concierge experiences tailored to each residential 
              property needs. Discover how our services complement and enhance a customer service.
            </p>
            <button className="text-white px-8 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400">
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
                  
                </div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <img alt="Professional hospitality service" src="/lovable-uploads/211d03fa-2dba-42e7-a5d0-6999482f62f6.png" className="w-full h-full bg-white object-contain" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 text-blue-400 opacity-30">
                  
                </div>
              </div>

              {/* Right side - Content */}
              <div>
                <div className="flex items-center mb-6">
                  
                  <h2 className="text-3xl font-bold text-gray-900">Standard Experience Package</h2>
                </div>
                <p className="text-gray-600 mb-8">Every package is modeled to your community.</p>
                
                <div className="space-y-4">
                  {["Handling prospective residents", "Package management", "Checking in vendors", "Assisting maintenance request", "Tidying up coffee/tea bar", "Amenity upkeep and management", "Upholding the Overall well-being of the community", "Assisting with the everyday needs of our wonderful residents"].map((service, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 mt-0.5 text-sky-500">
                        <Snowflake className="w-full h-full" />
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Header Card */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Lifestyle<br />
                  Team
                </h2>
                <div className="w-16 h-1 bg-cyan-500"></div>
              </div>

              {/* Service Cards */}
              {lifestyleServices.map((service, index) => <div key={index} className="text-white p-6 rounded-lg" style={{
              backgroundImage: 'url(/lovable-uploads/c86d78a9-9d1a-4870-bde9-9b3158cf8411.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <img src={service.icon} alt="" className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-cyan-50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Business Process Section */}
        <section className="py-20 bg-white" style={{
          backgroundImage: 'url(/lovable-uploads/e36ae1a3-0a48-4898-b5b5-a40f0adcc456.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Business Process
              </h2>
              <div className="w-16 h-1 bg-cyan-500"></div>
            </div>

            <div className="space-y-24">
              {businessProcesses.map((process, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {process.imagePosition === "right" ? (
                    <>
                      {/* Text Content - Left Side */}
                      <div className="order-1 lg:order-1">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white text-lg font-bold">{process.number}</span>
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{process.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{process.description}</p>
                      </div>
                      
                      {/* Image - Right Side */}
                      <div className="order-2 lg:order-2">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={process.image} 
                            alt={process.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image - Left Side */}
                      <div className="order-2 lg:order-1">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={process.image} 
                            alt={process.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Text Content - Right Side */}
                      <div className="order-1 lg:order-2">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white text-lg font-bold">{process.number}</span>
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{process.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{process.description}</p>
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
    </div>;
};

export default Experiences;
