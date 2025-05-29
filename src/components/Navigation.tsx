import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navigateWithScroll } from '../utils/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className='bg-white shadow-sm relative z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <div onClick={() => navigateWithScroll(navigate, '/')} className='cursor-pointer'>
                <img 
                  src='/lovable-uploads/FROST-LOGO-1.png' 
                  alt='Frost Hospitality Experience' 
                  className='h-10 md:h-14 w-auto object-contain max-w-full' 
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <div key={item.name} onClick={() => navigateWithScroll(navigate, item.href)} className='text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium transition-colors cursor-pointer'>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Join Us Button */}
          <div className='hidden md:flex items-center space-x-3'>
            <div onClick={() => navigateWithScroll(navigate, '/login')} className='border border-gray-800 text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors cursor-pointer'>
              Login
            </div>
            <div onClick={() => navigateWithScroll(navigate, '/careers')} className='bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors cursor-pointer'>
              Join Us
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-600 hover:text-gray-900'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    navigateWithScroll(navigate, item.href);
                    setIsMenuOpen(false);
                  }}
                  className='text-gray-600 hover:text-blue-500 block px-3 py-2 text-base font-medium cursor-pointer'
                >
                  {item.name}
                </div>
              ))}
              <div className='flex flex-col space-y-2 mt-4'>
                <div
                  onClick={() => {
                    navigateWithScroll(navigate, '/login');
                    setIsMenuOpen(false);
                  }}
                  className='w-full border border-gray-800 text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors block text-center cursor-pointer'
                >
                  Login
                </div>
                <div
                  onClick={() => {
                    navigateWithScroll(navigate, '/careers');
                    setIsMenuOpen(false);
                  }}
                  className='w-full bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors block text-center cursor-pointer'
                >
                  Join Us
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
