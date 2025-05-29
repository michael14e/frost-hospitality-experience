
import { Snowflake } from 'lucide-react';

const StandardExperience = () => {
  const services = [
    "Handling prospective residents",
    "Package management", 
    "Checking in vendors",
    "Assisting maintenance request",
    "Tidying up coffee/tea bar",
    "Amenity upkeep and management",
    "Upholding the Overall well-being of the community",
    "Assisting with the everyday needs of our wonderful residents"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img 
                alt="Professional hospitality service" 
                src="/lovable-uploads/211d03fa-2dba-42e7-a5d0-6999482f62f6.png" 
                className="w-full h-full bg-white object-contain" 
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Standard Experience Package</h2>
            </div>
            <p className="text-gray-600 mb-8">Every package is modeled to your community.</p>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 text-sky-500 flex items-center justify-center flex-shrink-0">
                    <Snowflake className="w-full h-full" />
                  </div>
                  <span className="text-gray-700 -mt-0.5">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardExperience;
