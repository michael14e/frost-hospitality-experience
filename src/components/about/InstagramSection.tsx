
const InstagramSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ON INSTAGRAM</h2>
          <p className="text-gray-600">@frosthospitalityexperience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=face"
              alt="Instagram post 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&crop=face"
              alt="Instagram post 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <img src="/lovable-uploads/89c2c92d-7209-4041-b20b-2263304f1b3a.png" alt="Frost Logo" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold">FROST HOSPITALITY</h3>
              <p className="text-lg">EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
