const OurVision = () => {
  const visionPoints = [
    "Simplify Process",
    "Improve Services", 
    "Give Opportunities",
    "Showcase Offerings",
    "Social Responsibility"
  ];

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/1dc5281f-df03-4ae7-984f-33c877b0b13a.png')`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              To master the Texas luxury multifamily housing industry and expand our tailored experience across the U.S.
            </p>
            
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-md">
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
