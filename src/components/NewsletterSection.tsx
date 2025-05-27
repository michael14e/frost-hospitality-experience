
const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div 
          style={{
            backgroundImage: 'url(/lovable-uploads/c9020f5c-be55-4fae-8f7a-078172edeec4.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} 
          className="rounded-lg p-8 relative overflow-hidden px-[40px]"
        >
          <div className="flex items-center justify-between">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sign up for our newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know about releases and industry news and insights.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-80" 
                />
                <button className="bg-gray-800 text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We care about your data in our privacy policy.
              </p>
            </div>
          </div>
          
          <div className="absolute right-8 bottom-8 w-16 h-16 opacity-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
