
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-200 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-200 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="w-12 h-12 text-blue-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frost Hospitality<br />
              Experience
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We believe life's finest moments are meant to be savored. We are here to inspire, uplift, and show that it's okay to expect the best. Every experience we create is crafted to leave a lasting impression—because memories made with us are memories that last a lifetime.
            </p>
            
            <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors">
              Explore
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dbfc8dfc-104a-4346-aac4-f1dd2142926e.png" 
                alt="Professional hospitality service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
