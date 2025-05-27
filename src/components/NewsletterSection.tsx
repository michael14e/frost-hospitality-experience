const NewsletterSection = () => {
  return <section className="py-0 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div style={{
        backgroundImage: 'url(/lovable-uploads/c9020f5c-be55-4fae-8f7a-078172edeec4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} className="rounded-lg p-8 relative overflow-hidden py-[4px] px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-[32px] px-[20px] sm:px-[40px] gap-6 lg:gap-0">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sign up for our newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know about releases and industry news and insights.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-full sm:w-80 mb-2 sm:mb-0" />
                <button className="bg-gray-800 text-white px-6 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gray-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We care about your data in our privacy policy.
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default NewsletterSection;