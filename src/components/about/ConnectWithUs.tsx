
const ConnectWithUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          Ready to create exceptional experiences together? We'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-400 transition-colors"
          >
            Get in Touch
          </a>
          <a 
            href="tel:737-600-5289" 
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
