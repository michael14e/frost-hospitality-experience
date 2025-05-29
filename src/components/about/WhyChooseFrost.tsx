import { Card, CardContent } from '@/components/ui/card';

const WhyChooseFrost = () => {
  const reasons = [
    {
      title: "Experience and Trust",
      description: "Proven Track Record: Years of experience and a solid reputation in the industry.",
      icon: "/lovable-uploads/d8a7b9ef-436b-47c3-b3b7-0dbbeff8974e.png"
    },
    {
      title: "Security",
      description: "Secure Transactions: We use advanced encryption to protect your personal information.",
      icon: "/lovable-uploads/dd422844-c2f9-4826-bf9e-7af67afc284d.png"
    },
    {
      title: "Customization Option",
      description: "Personalized Solutions: We offer tailor-made solutions to meet your unique needs.",
      icon: "/lovable-uploads/f43b6d8b-9080-4def-9d02-db80f4605364.png"
    },
    {
      title: "Quality Assurance",
      description: "High standards: Our quality control is guaranteed excellence in every product/service.",
      icon: "/lovable-uploads/eb565e67-eaf9-4c0a-96ee-072e92bee1c7.png"
    },
    {
      title: "Customer Satisfaction",
      description: "Outstanding Service: Our dedicated customer service team is here to help you every step of the way.",
      icon: "/lovable-uploads/ed723cc8-0157-4fe7-a99e-4452620911d6.png"
    },
    {
      title: "Competitive Pricing",
      description: "Value for Money: We offer competitive prices without compromising on quality.",
      icon: "/lovable-uploads/e4699c01-b206-4b69-8bf6-2cbcf6caf49c.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-wide text-cyan-600">About Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Why choose Frost Hospitality?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <img src={reason.icon} alt={reason.title} className="w-full h-full object-contain" />
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
