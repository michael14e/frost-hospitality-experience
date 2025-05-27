
const OurVision = () => {
  const visionPoints = [
    "Integrity Promise",
    "Premium Services", 
    "Elite Opportunities",
    "Wellness Environment",
    "Social Responsibility"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              To redefine property management by bringing reliability and transparency into the hospitality experience.
            </p>
            
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
                alt="Modern building exterior"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center"
                alt="Business meeting"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center"
                alt="Office space"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop&crop=center"
                alt="Modern workspace"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
