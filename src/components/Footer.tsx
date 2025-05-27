
import { Phone, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
          <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
        </svg>
      </div>

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
              <Phone className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Call us</h3>
                <p className="text-gray-600">757-800-5289</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Message us</h3>
                <p className="text-gray-600">hi@frostlifestyle.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sign up for our newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know about releases and industry news and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="bg-gray-800 text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We care about your data in our privacy policy.
            </p>
          </div>
          
          <div className="absolute right-8 bottom-8 w-16 h-16 opacity-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-300 w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 text-blue-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-semibold">Frost</div>
              <div>Hospitality</div>
              <div>Experience</div>
            </div>
          </div>

          <div className="flex space-x-8 text-sm text-gray-600 mb-4 md:mb-0">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/experiences" className="hover:text-blue-500">Experience</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>

          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p>© 2024 Frost Lifestyle Experience. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">Terms</a>
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
