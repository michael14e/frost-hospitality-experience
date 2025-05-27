
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "Our services encompass handling prospective residents, managing package deliveries, coordinating vendor check-ins, assisting with maintenance requests, tidying the coffee/tea bar, maintaining amenities, upholding the community's well-being, and offering everyday support to residents. These services work together to ensure a smooth, comfortable, and well-managed living environment for everyone in the community."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, upgrades to your plans are always possible. These changes will be incorporated into your existing arrangements, and a new contractual agreement will be updated to reflect any modifications."
    },
    {
      question: "Where is your company located?",
      answer: "Our company is located in Austin, Texas. We operate from this vibrant city, which is known for its innovative tech scene, rich culture, and diverse community."
    },
    {
      question: "What industry does Frost Hospitality Experience help?",
      answer: "Frost Hospitality Experience operates within the hospitality industry, focusing on enhancing guest experiences through various services related to accommodations, food and beverage, event planning, and tourism."
    },
    {
      question: "What makes Frost Hospitality Experience different?",
      answer: "Frost Hospitality Experience stands out by blending innovation, personalization, and community focus to deliver exceptional guest experiences. At Frost Hospitality Experience, we don't just host events; we craft stories that connect, inspire, and leave a lasting impression."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
