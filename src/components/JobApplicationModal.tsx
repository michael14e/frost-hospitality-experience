import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Upload } from 'lucide-react';
interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}
const JobApplicationModal = ({
  isOpen,
  onClose,
  jobTitle
}: JobApplicationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null as File | null
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="flex">
          {/* Left side - Job Details */}
          <div className="flex-1 p-8 bg-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{jobTitle}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <span className="inline-block bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                    • Customer Service
                  </span>
                  <span className="flex items-center text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    Full-time
                  </span>
                  <span className="text-gray-600 text-sm">Austin, Texas</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">About the position</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are seeking a dedicated and personable Concierge to join our team in providing exceptional guest services at our community. The ideal candidate will have a passion for hospitality and a commitment to ensuring that every guest has a memorable experience. As the first point of contact for guests, the Concierge will play a vital role in enhancing guest relations and delivering outstanding customer service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Qualifications</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Greet guests warmly upon arrival and assist with any resident needs.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide information about hotel amenities, local attractions, and dining options.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Make reservations for restaurants, transportation, and activities as requested by guests.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Address guest inquiries and resolve any issues promptly and professionally.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintain an organized front desk area and ensure all guest requests are logged accurately.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborate with other departments to fulfill special requests or accommodations for guests.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Uphold high standards of phone etiquette when handling calls from guests or external parties.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Assist in promoting community events and special residents incentives to enhance guest experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Application Form */}
          <div className="w-96 bg-gray-50 p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-500">Apply Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="w-full" required />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">E-mail Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="w-full" required />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Message</Label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter a description..." rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
              </div>

              <div>
                <Label htmlFor="resume" className="text-gray-700 font-medium mb-2 block">Resume</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sky-400 transition-colors">
                  <input id="resume" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                  <label htmlFor="resume" className="cursor-pointer">
                    <Upload className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="font-medium text-sky-500">Browse or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">Max. file size: 4mb (pdf, doc, docx)</p>
                  </label>
                  {formData.resume && <p className="mt-2 text-sm text-gray-600">Selected: {formData.resume.name}</p>}
                </div>
              </div>

              <Button type="submit" className="w-full text-white py-3 rounded-lg font-medium bg-sky-500 hover:bg-sky-400">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default JobApplicationModal;