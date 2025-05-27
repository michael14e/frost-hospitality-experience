
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/5067fe7b-8ed7-49ea-8ad6-19033bcf23b2.png)'
    }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Contact Info Badge */}
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-white text-blue-400 rounded-full text-sm font-medium border border-blue-200">
              CONTACT INFO
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Join Together</h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
            Be part of something bigger. When we join together, we create a community where ideas flourish and success is shared.
          </p>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 24/7 Service Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/lovable-uploads/f8199ec8-6175-47bf-9ecb-d6b1c9dad58c.png" alt="Phone" className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">24/7 Service</h3>
              <p className="text-blue-400 font-medium mb-4">Call us on</p>
              <div className="text-gray-600">
                <p className="font-medium">Mobile</p>
                <p>737-600-5289</p>
              </div>
            </div>
            
            {/* Drop a mail Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/lovable-uploads/0654d768-e8d1-4f1a-95c1-1908bd0e4f31.png" alt="Email" className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Drop a mail</h3>
              <p className="text-blue-400 font-medium mb-4">Mail Address</p>
              <div className="text-gray-600">
                <p className="font-medium">Email Address</p>
                <p>fhe@frostlifestyle.com</p>
              </div>
            </div>
            
            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/lovable-uploads/dbbb9b6a-fac0-4135-a052-4bdd3fafe55d.png" alt="Clock" className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Office Hours</h3>
              <p className="text-blue-400 font-medium mb-4">Opening Time</p>
              <div className="text-gray-600">
                <p className="font-medium">Sat-Sun:</p>
                <p>6 am - 7 pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/c4445486-d6a2-47bc-95cf-d330aa78d1de.png)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to answer your questions and help you create exceptional experiences. 
                  Reach out to us through any of the methods below.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
                </div>

                <button type="submit" className="w-full text-white px-6 py-3 rounded-lg font-medium transition-colors bg-sky-500 hover:bg-sky-400">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>;
};

export default Contact;
