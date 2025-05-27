
import { Users, MessageSquare, FileText, Building, ArrowRight } from 'lucide-react';

const BusinessProcess = () => {
  const processes = [
    {
      icon: Users,
      title: "Build Relationships",
      description: "Initiate contact with property management. Build rapport and understand their needs."
    },
    {
      icon: MessageSquare,
      title: "Negotiate Agreement",
      description: "Discuss terms, pricing, and services offered. Reach consensus on contractual details."
    },
    {
      icon: FileText,
      title: "Sign Contract",
      description: "Formalize agreement in a legally binding contract. Ensure all parties are satisfied with terms."
    },
    {
      icon: Building,
      title: "Onboard Vendor",
      description: "Facilitate smooth transition and integration. Begin collaborative work on agreed-upon terms."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Business Process
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Streamline your operations with our proven processes. Discover efficient solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processes.map((process, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <process.icon className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div 
            className="rounded-lg p-6 text-white relative overflow-hidden"
            style={{
              backgroundImage: 'url(/lovable-uploads/dc1ec2dc-e200-42d5-9fea-d31f8580ec2c.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute top-4 right-4">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-4 leading-tight">
              Learn more about<br />
              Frost Hospitality<br />
              Experience
            </h3>
            <div className="absolute bottom-4 right-4 w-12 h-12 opacity-30">
              <img 
                src="/lovable-uploads/8451aacc-981d-4fe9-a09d-caa1d0f3a0bd.png" 
                alt="Frost icon" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
