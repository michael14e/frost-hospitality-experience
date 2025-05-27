
const AboutHero = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      {/* Decorative elements on the sides */}
      <div className="absolute left-0 top-0 w-32 h-full opacity-20">
        <div className="text-blue-300 text-8xl font-bold transform -rotate-12 mt-20">
          FROST
        </div>
      </div>
      <div className="absolute right-0 top-0 w-32 h-full opacity-20">
        <div className="text-blue-300 text-8xl font-bold transform rotate-12 mt-20">
          FROST
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading text at the top */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">All About</h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Frost Hospitality Experience</h2>
        </div>
        
        {/* Image below the heading */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/6e6bf168-ab2e-4e9f-be8d-0c57383db95d.png" 
            alt="Modern glass buildings with blue sky" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
