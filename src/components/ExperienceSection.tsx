const ExperienceSection = () => {
  return <section className="bg-gradient-to-br from-cyan-50 to-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are here to touch the lives of everyone around us and show them<br />
          it is okay to expect the best life has to offer.
        </p>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-400 leading-tight">
          Experiences make memories and memories last a lifetime.
        </h2>
      </div>
    </section>;
};
export default ExperienceSection;