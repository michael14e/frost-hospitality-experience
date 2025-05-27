
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return <footer className="pt-24 pb-8 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/lovable-uploads/c31e7116-252d-44f0-ac70-0494852bdc96.png" alt="Frost Hospitality Experience" className="h-12" />
          </div>

          <div className="flex space-x-8 text-sm text-gray-600 mb-4 md:mb-0">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/experiences" className="hover:text-blue-500">Experience</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>

          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Linkedin className="w-5 h-5" />
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
    </footer>;
};

export default Footer;
