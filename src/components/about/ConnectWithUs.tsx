const ConnectWithUs = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <img src="/lovable-uploads/a4f9b0d7-9641-42a8-87f7-1940bae73a2f.png" alt="Frost Hospitality Experience Logo" className="w-32 h-16 object-contain" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect with us!</h2>
            <p className="text-lg text-gray-600 mb-8">Have questions or need assistance? Reach out to us— 
We're here to help!</p>
            <button className="text-white px-8 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400">
              Contact Us
            </button>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            <img alt="Handshake" src="/lovable-uploads/b1a95c45-7634-41a0-9d41-697ecf1bf5be.png" className="object-contain bg-white" />
          </div>
        </div>
      </div>
    </section>;
};
export default ConnectWithUs;