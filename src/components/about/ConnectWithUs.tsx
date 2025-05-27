import { useState, useEffect } from 'react';
import { removeBackground } from '@/utils/backgroundRemoval';

const ConnectWithUs = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        // Create an image element to load the original image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = async () => {
          try {
            console.log('Image loaded, starting background removal...');
            const blob = await removeBackground(img);
            const url = URL.createObjectURL(blob);
            setProcessedImageUrl(url);
            setIsProcessing(false);
          } catch (error) {
            console.error('Background removal failed:', error);
            // Fallback to original image if background removal fails
            setProcessedImageUrl('/lovable-uploads/3b879294-875d-4b1d-9270-7d3b6f32236c.png');
            setIsProcessing(false);
          }
        };
        
        img.onerror = () => {
          console.error('Failed to load image');
          setProcessedImageUrl('/lovable-uploads/3b879294-875d-4b1d-9270-7d3b6f32236c.png');
          setIsProcessing(false);
        };
        
        img.src = '/lovable-uploads/3b879294-875d-4b1d-9270-7d3b6f32236c.png';
      } catch (error) {
        console.error('Error in processImage:', error);
        setProcessedImageUrl('/lovable-uploads/3b879294-875d-4b1d-9270-7d3b6f32236c.png');
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <img src="/lovable-uploads/962b037e-f6db-450a-83e5-10d2318f4fb2.png" alt="Frost Hospitality Experience Logo" className="w-32 h-16 object-contain" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect with us!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to experience exceptional property management? Contact us today to learn more about our services and how we can help you maximize your property investment.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
          <div className="aspect-[4/3] bg-transparent rounded-lg overflow-hidden">
            {isProcessing ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-gray-500">Processing image...</div>
              </div>
            ) : (
              <img 
                alt="Handshake" 
                src={processedImageUrl} 
                className="w-full h-full object-contain" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
