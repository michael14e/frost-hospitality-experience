
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/experiences');
  };

  return <section className="relative overflow-hidden" style={{
    backgroundImage: 'url(/lovable-uploads/98b70d22-72a6-4ebe-985d-1d71b804753e.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '110vh'
  }}>
      {/* Background decorative elements */}
      
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
        <img src="/lovable-uploads/ac475966-07f7-4364-9935-b46df135bd6d.png" alt="Decorative element" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="w-12 h-12 text-blue-400">
              <img src="/lovable-uploads/ac475966-07f7-4364-9935-b46df135bd6d.png" alt="Icon" className="w-full h-full" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frost Hospitality<br />
              Experience
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We believe life's finest moments are meant to be savored. We are here to inspire, uplift, and show that it's okay to expect the best. Every experience we create is crafted to leave a lasting impression—because memories made with us are memories that last a lifetime.
            </p>
            
            <button 
              onClick={handleExploreClick}
              className="text-white px-8 py-3 rounded-lg font-medium transition-colors bg-[4AB4E6] bg-sky-500 hover:bg-sky-400"
            >
              Explore
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img alt="Professional hospitality service" src="/lovable-uploads/7a001561-348d-40d1-aac5-2f29c7494779.png" className="w-full h-full object-cover rounded-tr-64px rounded-bl-64px" />
            </div>
          </div>
        </div>
        
        {/* Experience Section Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed pt-32">
            We are here to touch the lives of everyone around us and show them<br />
            it is okay to expect the best life has to offer.
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-cyan-500">Experiences make memories and memories 
last a lifetime.</h2>
        </div>
      </div>
    </section>;
};
export default Hero;
