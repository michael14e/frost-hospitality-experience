
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseFrost = () => {
  const reasons = [
    {
      title: "Experience and Trust",
      description: "With years of experience in property management, we have built a reputation for reliability and excellence in service delivery."
    },
    {
      title: "Reliability", 
      description: "Owners, tenants can rely on us for prompt responses to their inquiries and efficient handling of property issues."
    },
    {
      title: "Customization Options",
      description: "Every property is unique, and we offer customized management solutions to meet the specific needs and goals of each property owner."
    },
    {
      title: "Experience and Trust",
      description: "High standard. We aim to deliver the premier management services to each client and tenant."
    },
    {
      title: "Customer Satisfaction",
      description: "Customer satisfaction is our top priority. We consistently strive to exceed expectations and maintain long-term relationships with our clients."
    },
    {
      title: "Competitive Pricing",
      description: "We offer competitive rates for the high-quality property management services we provide, ensuring excellent value for our clients."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">Speciality</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Why choose Frost Hospitality?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFrost;
