const InstagramSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ON INSTAGRAM</h2>
          <a href="https://www.instagram.com/frosthospitalityexperience/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">@frosthospitalityexperience</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://www.instagram.com/p/DDzzjmepllX/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/ig-frost-1.jpg"
                alt="Instagram post 1"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </a>
          <a href="https://www.instagram.com/p/CzB0Zv3utls/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/ig-frost-2.jpg"
                alt="Instagram post 2"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </a>
          <a href="https://www.instagram.com/p/Ci-qxqwLq9C/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/ig-frost-3.jpg"
                alt="Instagram post 3"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
