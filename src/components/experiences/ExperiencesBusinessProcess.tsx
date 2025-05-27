

const ExperiencesBusinessProcess = () => {
  const businessProcesses = [
    {
      number: "01",
      title: "Build Relationships",
      description: "Initiate contact with property management. Establish a reliable partnership with stakeholders to ensure smooth operations, and create a welcoming and trustworthy environment to encourage repeat business and build rapport and understand their needs.",
      image: "/lovable-uploads/ccf45900-1dcf-4301-8577-745f1a93bf03.png",
      imagePosition: "right"
    },
    {
      number: "02", 
      title: "Negotiate Agreement",
      description: "Reaching optimal terms, pricing, and services offered and establish agreements that ensure reliable service delivery and contribute to a superior partner experience while maintaining cost efficiency and operational effectiveness.",
      image: "/lovable-uploads/4cbfe354-109e-4586-87c1-c074e9aa0ed8.png",
      imagePosition: "left"
    },
    {
      number: "03",
      title: "Sign Contract", 
      description: "Formalize agreement in a legally binding contract. It signifies the commitment between parties to deliver agreed-upon services and products. This formalizes the legal framework for the partnership, detailing pricing, timelines, responsibilities, and service standards and ensure all parties are satisfied with terms.",
      image: "/lovable-uploads/f4f2f98a-7007-4873-8089-6d8ce2406fe9.png",
      imagePosition: "right"
    },
    {
      number: "04",
      title: "Onboard Vendor",
      description: "Essential for building effective partnerships that enhance service delivery. Facilitate smooth transition and integration. Begin collaborative work on agreed-upon terms.",
      image: "/lovable-uploads/9a23285f-47f9-4060-9655-b0043d76e02d.png", 
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-20 bg-white" style={{
      backgroundImage: 'url(/lovable-uploads/20067ff7-78b8-475e-9c7d-725ebb063d88.png)',
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
  );
};

export default ExperiencesBusinessProcess;

