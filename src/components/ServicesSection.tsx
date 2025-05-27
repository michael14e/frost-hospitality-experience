
const ServicesSection = () => {
  const services = ["Handling prospective residents", "Package management", "Checking in vendors", "Assisting maintenance request", "Tidying up coffee/tea bar", "Amenity upkeep and management", "Upholding the Overall well-being of the community", "Assisting with the everyday needs of our wonderful residents"];
  
  return (
    <section className="py-20 relative overflow-hidden" style={{
      backgroundImage: 'url(/lovable-uploads/b1cd9b45-09b6-4154-b2f9-714548d0f896.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          {/* Centered card with constrained width to match reference image */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl w-full mx-8">
            <div className="mb-6">
              <span className="text-sm font-medium text-cyan-500">Our Services</span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                Standard Experience Package
              </h3>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 text-blue-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
