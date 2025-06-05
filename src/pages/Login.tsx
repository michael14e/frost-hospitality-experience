import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  useDocumentTitle('Login - Frost Hospitality');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic here
    console.log('Login attempt:', formData);
    // For now, just redirect to home page
    navigate('/');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigation />

      <div className='flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-6 sm:mb-8'>
            <img 
              src='/lovable-uploads/46b03407-4b85-45af-8054-059eaecca4a0.png' 
              alt='Frost Hospitality Experience' 
              className='h-12 sm:h-14 md:h-16 mx-auto mb-4 sm:mb-6' 
            />
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2'>Welcome Back</h1>
            <p className='text-sm sm:text-base text-gray-600'>Sign in to your account to continue</p>
          </div>

          <Card className='shadow-lg'>
            <CardHeader className='pb-4 sm:pb-6'>
              <CardTitle className='text-xl sm:text-2xl text-center'>Sign In</CardTitle>
              <CardDescription className='text-center text-sm sm:text-base'>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div className='space-y-1 sm:space-y-2'>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input id='email' name='email' type='email' required value={formData.email} onChange={handleInputChange} placeholder='Enter your email' className='w-full' />
                </div>

                <div className='space-y-1 sm:space-y-2'>
                  <Label htmlFor='password'>Password</Label>
                  <div className='relative'>
                    <Input id='password' name='password' type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleInputChange} placeholder='Enter your password' className='w-full pr-10' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600'>
                      {showPassword ? <EyeOff className='h-4 w-4 sm:h-5 sm:w-5' /> : <Eye className='h-4 w-4 sm:h-5 sm:w-5' />}
                    </button>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0'>
                  <div className='flex items-center'>
                    <input id='remember-me' name='remember-me' type='checkbox' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm'>
                    <a href='#' className='font-medium text-blue-600 hover:text-blue-500'>
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <Button type='submit' className='w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors'>
                  Sign In
                </Button>
              </form>

              <div className='mt-4 sm:mt-6 text-center'>
                <p className='text-xs sm:text-sm text-gray-600'>
                  Don't have an account?{' '}
                  <a href='#' className='font-medium text-blue-600 hover:text-blue-500'>
                    Contact us to get started
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
