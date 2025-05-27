import { Card, CardContent } from '@/components/ui/card';

const WhyChooseFrost = () => {
  const reasons = [
    {
      title: "Experience and Trust",
      description: "Proven Track Record: Years of experience and a solid reputation in the industry.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
    },
    {
      title: "Security",
      description: "Secure Transactions: We use advanced encryption to protect your personal information.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
    },
    {
      title: "Customization Option",
      description: "Personalized Solutions: We offer tailor-made solutions to meet your unique needs.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
    },
    {
      title: "Experience and Trust",
      description: "High standards: Our quality control is guaranteed excellence in every product/ service.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
    },
    {
      title: "Customer Satisfaction",
      description: "Outstanding Service: Our dedicated customer service team is here to help you every step of the way.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
    },
    {
      title: "Competitive Pricing",
      description: "Value for Money: We offer competitive prices without compromising on quality.",
      icon: "/lovable-uploads/f8c218ca-0ae5-4641-883a-7ca0de465e5a.png"
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
