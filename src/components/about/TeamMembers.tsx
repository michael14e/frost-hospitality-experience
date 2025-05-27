
import { Card, CardContent } from '@/components/ui/card';

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c18cf1fd?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Olivia Rhye", 
      role: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Olivia Rhye",
      role: "Founder & CEO", 
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c18cf1fd?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Meet our Expert Team Members</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {teamMembers.slice(0, 3).map((member) => (
            <Card key={member.id} className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.imageUrl}
                    alt={`Team member ${member.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(3, 6).map((member) => (
            <Card key={member.id} className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.imageUrl}
                    alt={`Team member ${member.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
