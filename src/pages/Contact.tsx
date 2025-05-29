import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  useDocumentTitle('Contact Us - Frost Hospitality');

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields', {
        position: 'bottom-right',
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you only need to do this once in your app)
      emailjs.init({
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });

      // Send email using EmailJS
      const result = await emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.CONTACT_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });

      console.log('Email sent successfully:', result);

      // Show success toast
      toast.success('Message sent successfully!', {
        description: 'We will get back to you soon.',
        position: 'bottom-right',
        duration: 3000,
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);

      // Show error toast
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.',
        position: 'bottom-right',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen'>
      <Navigation />

      <section
        className='py-20 bg-cover bg-center bg-no-repeat text-center'
        style={{
          backgroundImage: 'url(/lovable-uploads/5067fe7b-8ed7-49ea-8ad6-19033bcf23b2.png)',
        }}
      >
        {/* Contact Info Badge */}
        <div className='inline-block mb-8'>
          <span className='px-6 py-2 bg-white text-blue-400 rounded-full text-sm font-medium border border-blue-200'>CONTACT INFO</span>
        </div>

        {/* Main Heading */}
        <h1 className='text-6xl font-bold text-gray-900 mb-6'>Join Together</h1>

        {/* Subtitle */}
        <p className='text-xl text-gray-600 mb-16 max-w-4xl mx-auto'>Be part of something bigger. When we join together, we create a community where ideas flourish and success is shared.</p>

        {/* Contact Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {/* 24/7 Service Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto'>
              <img src='/lovable-uploads/f8199ec8-6175-47bf-9ecb-d6b1c9dad58c.png' alt='Phone' className='w-8 h-8' />
            </div>
            <h3 className='text-gray-900 font-semibold mb-2'>24/7 Service</h3>
            <p className='text-blue-400 font-medium mb-4'>Call us on</p>
            <div className='text-gray-600'>
              <p className='font-medium'>Mobile</p>
              <p>737-600-5289</p>
            </div>
          </div>

          {/* Drop a mail Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto'>
              <img src='/lovable-uploads/0654d768-e8d1-4f1a-95c1-1908bd0e4f31.png' alt='Email' className='w-8 h-8' />
            </div>
            <h3 className='text-gray-900 font-semibold mb-2'>Drop a mail</h3>
            <p className='text-blue-400 font-medium mb-4'>Mail Address</p>
            <div className='text-gray-600'>
              <p className='font-medium'>Email Address</p>
              <p>fhe@frostlifestyle.com</p>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto'>
              <img src='/lovable-uploads/dbbb9b6a-fac0-4135-a052-4bdd3fafe55d.png' alt='Clock' className='w-8 h-8' />
            </div>
            <h3 className='text-gray-900 font-semibold mb-2'>Office Hours</h3>
            <p className='text-blue-400 font-medium mb-4'>Opening Time</p>
            <div className='text-gray-600'>
              <p className='font-medium'>Sat-Sun:</p>
              <p>6 am - 7 pm</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-20 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/lovable-uploads/c4445486-d6a2-47bc-95cf-d330aa78d1de.png)',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Mobile and Tablet Layout - Single Column */}
          <div className='block xl:hidden'>
            {/* Contact Information */}
            <div className='space-y-8 mb-12'>
              <div className='text-center md:text-left'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
                <p className='text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0'>We're here to answer your questions and help you create exceptional experiences. Reach out to us through any of the methods below.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-3xl mx-auto'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center md:text-left'>Send us a Message</h3>
              <form ref={form} className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                      First Name *
                    </label>
                    <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                  </div>
                  <div>
                    <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                      Last Name *
                    </label>
                    <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email *
                  </label>
                  <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                    Company
                  </label>
                  <input type='text' id='company' name='company' value={formData.company} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                    Subject
                  </label>
                  <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea id='message' name='message' rows={6} value={formData.message} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'></textarea>
                </div>

                <button type='submit' disabled={isSubmitting} className='w-full text-white px-6 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400 disabled:bg-gray-400 disabled:cursor-not-allowed'>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Desktop Layout - Two Columns */}
          <div className='hidden xl:grid grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
                <p className='text-lg text-gray-600 leading-relaxed'>We're here to answer your questions and help you create exceptional experiences. Reach out to us through any of the methods below.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/90 backdrop-blur-sm rounded-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h3>
              <form ref={form} className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                      First Name *
                    </label>
                    <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                  </div>
                  <div>
                    <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                      Last Name *
                    </label>
                    <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email *
                  </label>
                  <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                    Company
                  </label>
                  <input type='text' id='company' name='company' value={formData.company} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                    Subject
                  </label>
                  <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea id='message' name='message' rows={6} value={formData.message} onChange={handleChange} required className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'></textarea>
                </div>

                <button type='submit' disabled={isSubmitting} className='w-full text-white px-6 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400 disabled:bg-gray-400 disabled:cursor-not-allowed'>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;
