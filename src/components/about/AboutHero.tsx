
const AboutHero = () => {
  return <section 
    className="relative py-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/lovable-uploads/69b5b210-f9b1-48e1-9a0e-517e4feb5c6c.png')`
    }}
  >
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
          <img alt="Modern glass buildings with blue sky" className="w-full h-auto object-cover" src="/lovable-uploads/9527b7de-4987-4f58-b05d-2e0b56752616.png" />
        </div>
      </div>
    </section>;
};
export default AboutHero;
