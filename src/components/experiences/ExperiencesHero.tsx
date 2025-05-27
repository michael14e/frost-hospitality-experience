
const ExperiencesHero = () => {
  return (
    <section className="py-20 overflow-hidden" style={{
      backgroundImage: 'url(/lovable-uploads/b2edc674-2040-471a-a14e-fa728cbeb7a7.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
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
  );
};

export default ExperiencesHero;
