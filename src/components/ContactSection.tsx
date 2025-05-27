const ContactSection = () => {
  return <section className="pt-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-blue-400 text-sm font-medium">Contact Info</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-2">
              Let's connect.
            </h2>
            <p className="text-2xl text-gray-900 mb-8">
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-3">
              <img src="/lovable-uploads/9260ad39-05fb-4c9f-9c08-efba56d76ec9.png" alt="Phone" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Call us</h3>
                <p className="text-gray-600">757-800-5289</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <img src="/lovable-uploads/6cfcd3a8-bffe-4fa1-a708-d706d36c6912.png" alt="Message" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Message us</h3>
                <p className="text-gray-600">fhe@frostlifestyle.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;