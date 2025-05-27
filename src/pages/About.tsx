import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Building Image */}
        <section className="relative">
          <div className="absolute top-8 left-8 z-10">
            <img src="/lovable-uploads/89c2c92d-7209-4041-b20b-2263304f1b3a.png" alt="Frost Logo" className="w-16 h-16" />
          </div>
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/85bdcafe-b6d0-466d-87b7-026a97009eec.png"
                alt="Modern building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-center w-full">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">All About</h1>
                <h2 className="text-4xl font-bold text-gray-900">Frost Hospitality Experience</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Frost Hospitality is not just your friendly property management company, we are a comprehensive service provider with a passion for excellence. We understand that managing properties can be time-consuming and stressful, which is why we're here to take care of every detail so our clients can focus on what matters most.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team consists of Frost Hospitality professionals who take pride in delivering exceptional service. From property maintenance to tenant relations, we ensure that your investment is in good hands. We believe that every property has the potential to be extraordinary, and we're committed to helping you achieve that vision.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-8">
                  To redefine property management by bringing reliability and transparency into the hospitality experience.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">Integrity Promise</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">Premium Services</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">Elite Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">Wellness Environment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">Social Responsibility</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
                    alt="Modern building exterior"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center"
                    alt="Business meeting"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center"
                    alt="Office space"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop&crop=center"
                    alt="Modern workspace"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Frost Hospitality Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">Speciality</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Why choose Frost Hospitality?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience and Trust</h3>
                  <p className="text-gray-600 text-sm">With years of experience in property management, we have built a reputation for reliability and excellence in service delivery.</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                  <p className="text-gray-600 text-sm">Owners, tenants can rely on us for prompt responses to their inquiries and efficient handling of property issues.</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customization Options</h3>
                  <p className="text-gray-600 text-sm">Every property is unique, and we offer customized management solutions to meet the specific needs and goals of each property owner.</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience and Trust</h3>
                  <p className="text-gray-600 text-sm">High standard. We aim to deliver the premier management services to each client and tenant.</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Satisfaction</h3>
                  <p className="text-gray-600 text-sm">Customer satisfaction is our top priority. We consistently strive to exceed expectations and maintain long-term relationships with our clients.</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">We offer competitive rates for the high-quality property management services we provide, ensuring excellent value for our clients.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">ON INSTAGRAM</h2>
              <p className="text-gray-600">@frosthospitalityexperience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=face"
                  alt="Instagram post 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&crop=face"
                  alt="Instagram post 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <img src="/lovable-uploads/89c2c92d-7209-4041-b20b-2263304f1b3a.png" alt="Frost Logo" className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">FROST HOSPITALITY</h3>
                  <p className="text-lg">EXPERIENCE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Meet our Expert Team Members</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[1, 2, 3].map((member) => (
                <Card key={member} className="text-center p-6 border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${member === 1 ? '1494790108755-2616c18cf1fd' : member === 2 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=200&h=200&fit=crop&crop=face`}
                        alt={`Team member ${member}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Olivia Rhye</h3>
                    <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
                    <p className="text-gray-600 text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[4, 5, 6].map((member) => (
                <Card key={member} className="text-center p-6 border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${member === 4 ? '1494790108755-2616c18cf1fd' : member === 5 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=200&h=200&fit=crop&crop=face`}
                        alt={`Team member ${member}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Olivia Rhye</h3>
                    <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
                    <p className="text-gray-600 text-sm">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Connect with us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <img src="/lovable-uploads/89c2c92d-7209-4041-b20b-2263304f1b3a.png" alt="Frost Logo" className="w-16 h-16" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect with us!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to experience exceptional property management? Contact us today to learn more about our services and how we can help you maximize your property investment.
                </p>
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&crop=center"
                  alt="Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
