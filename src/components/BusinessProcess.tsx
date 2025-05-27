
import { Users, MessageSquare, FileText, Building } from 'lucide-react';

const BusinessProcess = () => {
  const processes = [
    {
      icon: Users,
      title: "Build Relationships",
      description: "Value contact with property management allowing us to understand their needs."
    },
    {
      icon: MessageSquare,
      title: "Negotiate Agreement",
      description: "Start terms onsite and we service offered. Reach agreement on commercial details."
    },
    {
      icon: FileText,
      title: "Sign Contract",
      description: "Formalize agreement in a legally binding contract with terms we have satisfied with terms."
    },
    {
      icon: Building,
      title: "Onboard Vendor",
      description: "Facilitate smooth transition and implementation while collaborative work on specs and criteria."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Business Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Streamline your operations with our proven processes. Discover efficient solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <process.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {process.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-blue-400 rounded-lg p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Learn more about<br />
            Frost Hospitality<br />
            Experience
          </h3>
          <div className="w-12 h-12 mx-auto">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L13.09 8.26L18 7L14.74 12L18 17L13.09 15.74L12 22L10.91 15.74L6 17L9.26 12L6 7L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
