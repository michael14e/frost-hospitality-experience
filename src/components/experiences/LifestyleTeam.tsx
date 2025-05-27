
const LifestyleTeam = () => {
  const lifestyleServices = [
    {
      icon: "/lovable-uploads/53abc9e2-8052-4f91-b260-704e154ecec6.png",
      title: "Handling Prospective Residents",
      description: "Explore available residences, schedule tours, and receive personalized assistance throughout your application process."
    },
    {
      icon: "/lovable-uploads/9933943b-7dff-4326-9a2d-aefa3af890c2.png",
      title: "Package Management",
      description: "Ensures that your deliveries are securely received and easily accessible. Enjoy convenient notifications, secure storage, and hassle-free pickup, making package retrieval a breeze."
    },
    {
      icon: "/lovable-uploads/f32d5d69-2e38-4823-80e1-26550a2ab9f1.png",
      title: "Checking in vendors",
      description: "Ensures quick and secure check-in for all vendors, enhancing efficiency and fostering positive partnerships."
    },
    {
      icon: "/lovable-uploads/ede92397-1bc7-418c-86cb-7deaa9939d23.png",
      title: "Assisting maintenance request",
      description: "Promptly address all your maintenance needs. Submit requests easily and receive timely updates, ensuring your home stays comfortable."
    },
    {
      icon: "/lovable-uploads/e9c70aba-7d39-48d1-b41b-3e0b78330f75.png",
      title: "Tidying up coffee/tea bar",
      description: "Ensure a clean and inviting coffee and tea bar, ready to serve you. Enjoy a tidy space with fresh supplies and a welcoming atmosphere."
    },
    {
      icon: "/lovable-uploads/a4867c31-99e5-4103-88f3-5564516d6ac5.png",
      title: "Amenity upkeep and management",
      description: "We prioritize the maintenance and management of amenities. Enjoy a well-kept environment that enhances your living experience."
    },
    {
      icon: "/lovable-uploads/e36f16d2-751c-4aad-9604-a8348c2780c0.png",
      title: "Upholding the Overall well-being of the community",
      description: "Dedicated to fostering a healthy, vibrant community through supportive programs, resources, and events."
    },
    {
      icon: "/lovable-uploads/adb341f3-4eb5-431a-a334-a34be1f1fc8c.png",
      title: "Assisting with the everyday needs of our residents",
      description: "Committed to meeting the daily needs of our residents with friendly support and helpful resources, ensuring a comfortable and enjoyable living experience."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Header Card */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lifestyle<br />
              Team
            </h2>
            <div className="w-16 h-1 bg-cyan-500"></div>
          </div>

          {/* Service Cards */}
          {lifestyleServices.map((service, index) => (
            <div key={index} className="text-white p-6 rounded-lg" style={{
              backgroundImage: 'url(/lovable-uploads/c86d78a9-9d1a-4870-bde9-9b3158cf8411.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <img src={service.icon} alt="" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
              </div>
              <p className="text-cyan-50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleTeam;
