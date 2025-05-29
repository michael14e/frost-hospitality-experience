
const ServicesSection = () => {
  const services = ["Handling prospective residents", "Package management", "Checking in vendors", "Assisting maintenance request", "Tidying up coffee/tea bar", "Amenity upkeep and management", "Upholding the Overall well-being of the community", "Assisting with the everyday needs of our wonderful residents"];
  return <section className="py-20 relative overflow-hidden" style={{
    backgroundImage: 'url(/lovable-uploads/54822b8c-0a8d-448d-b67f-e8fbbb5a76bf.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 "></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Services card now spans full width */}
        <div className="bg-white rounded-lg p-8 w-full">
          <div className="mb-6">
            <span className="text-sm font-medium text-cyan-500">Our Services</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Standard Experience Package
            </h3>
          </div>
          
          <div className="space-y-4 flex flex-col gap-4">
            {services.map((service, index) => <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-0.5 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/lovable-uploads/c6d94a75-4654-4935-8dec-842c3393c95a.png" 
                    alt="Service icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed -mt-0.5 ">{service}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;
