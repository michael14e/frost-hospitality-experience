
const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Frost Hospitality is not just your friendly property management company, we are a comprehensive service provider with a passion for excellence. We understand that managing properties can be time-consuming and stressful, which is why we're here to take care of every detail so our clients can focus on what matters most.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team consists of Frost Hospitality professionals who take pride in delivering exceptional service. From property maintenance to tenant relations, we ensure that your investment is in good hands. We believe that every property has the potential to be extraordinary, and we're committed to helping you achieve that vision.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center" 
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
