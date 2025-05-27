const ConnectWithUs = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <img src="/lovable-uploads/a4f9b0d7-9641-42a8-87f7-1940bae73a2f.png" alt="Frost Hospitality Experience Logo" className="w-16 h-16" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect with us!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to experience exceptional property management? Contact us today to learn more about our services and how we can help you maximize your property investment.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            <img alt="Handshake" src="/lovable-uploads/d0cd10e2-c208-4071-a716-8a0d7e8c9a6e.png" className="w-full h-full object-fit" />
          </div>
        </div>
      </div>
    </section>;
};
export default ConnectWithUs;
