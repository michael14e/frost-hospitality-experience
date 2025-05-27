import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navigateWithScroll } from '../utils/navigation';

const Footer = () => {
  const navigate = useNavigate();

  return <footer className="pt-24 pb-8 relative overflow-hidden bg-white">
    {/* Background decorative elements */}



    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/lovable-uploads/c31e7116-252d-44f0-ac70-0494852bdc96.png" alt="Frost Hospitality Experience" className="h-12" />
        </div>

        <div className="flex space-x-8 text-sm text-gray-600 mb-4 md:mb-0">
          <div onClick={() => navigateWithScroll(navigate, '/')} className="hover:text-blue-500 cursor-pointer">Home</div>
          <div onClick={() => navigateWithScroll(navigate, '/about')} className="hover:text-blue-500 cursor-pointer">About</div>
          <div onClick={() => navigateWithScroll(navigate, '/experiences')} className="hover:text-blue-500 cursor-pointer">Experience</div>
          <div onClick={() => navigateWithScroll(navigate, '/contact')} className="hover:text-blue-500 cursor-pointer">Contact</div>
        </div>

        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-blue-500">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/frosthospitalityexperience/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
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
          <div onClick={() => navigateWithScroll(navigate, '/terms')} className="hover:text-blue-500 cursor-pointer">Terms</div>
          <div onClick={() => navigateWithScroll(navigate, '/privacy')} className="hover:text-blue-500 cursor-pointer">Privacy</div>
          <div onClick={() => navigateWithScroll(navigate, '/cookies')} className="hover:text-blue-500 cursor-pointer">Cookies</div>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
