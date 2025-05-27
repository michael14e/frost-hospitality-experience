const AboutHero = () => {
  return <section className="relative">
      <div className="absolute top-8 left-8 z-10">
        
      </div>
      <div className="relative h-96 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/85bdcafe-b6d0-466d-87b7-026a97009eec.png" alt="Modern building" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">All About</h1>
            <h2 className="text-4xl font-bold text-gray-900">Frost Hospitality Experience</h2>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutHero;