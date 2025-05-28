import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Upload, FileText, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { JobOpening } from '@/types/jobTypes';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobOpening | null;
}

const JobApplicationModal = ({ isOpen, onClose, job }: JobApplicationModalProps) => {
  const form = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null as File | null,
  });

  // File validation constants
  const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
  const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return 'File size must be less than 4MB';
    }

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      // Fallback to extension check for better compatibility
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        return 'Only PDF, DOC, and DOCX files are allowed';
      }
    }

    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        toast.error(validationError, {
          position: 'bottom-right',
          duration: 4000,
        });
        // Clear the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({
      ...prev,
      resume: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current || !job) return;

    // Validate required fields
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields', {
        position: 'bottom-right',
        duration: 3000,
      });
      return;
    }

    // Validate file if provided
    if (formData.resume) {
      const validationError = validateFile(formData.resume);
      if (validationError) {
        toast.error(validationError, {
          position: 'bottom-right',
          duration: 4000,
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init({
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });

      // Send email using EmailJS sendForm (handles both with and without attachments)
      const result = await emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.CAREER_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });

      console.log('Job application sent successfully:', result);

      // Show success toast
      toast.success('Application submitted successfully!', {
        description: 'We will review your application and get back to you soon.',
        position: 'bottom-right',
        duration: 3000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        resume: null,
      });

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Failed to send job application:', error);

      // Show error toast
      toast.error('Failed to submit application', {
        description: 'Please try again or contact us directly.',
        position: 'bottom-right',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto p-0'>
        <div className='flex'>
          {/* Left side - Job Details */}
          <div className='flex-1 p-8 bg-white'>
            <div className='flex items-center justify-between mb-6'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>{job.title}</h2>
                <div className='flex items-center gap-4 mt-2'>
                  <span className='inline-block bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-medium'>• {job.category}</span>
                  <span className='flex items-center text-gray-600 text-sm'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full mr-2'></span>
                    {job.type}
                  </span>
                  <span className='text-gray-600 text-sm'>{job.location}</span>
                </div>
              </div>
              <Button variant='ghost' size='icon' onClick={onClose} className='text-gray-400 hover:text-gray-600'>
                <X className='h-6 w-6' />
              </Button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>About the position</h3>
                <p className='text-gray-600 leading-relaxed'>{job.aboutPosition}</p>
              </div>

              <div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Qualifications</h3>
                <ul className='space-y-3 text-gray-600'>
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Application Form */}
          <div className='w-96 bg-gray-50 p-8'>
            <h3 className='text-2xl font-bold mb-6 text-cyan-500'>Apply Now</h3>

            <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
              {/* Hidden fields for job information */}
              <input type='hidden' name='job_title' value={job.title} />
              <input type='hidden' name='job_location' value={job.location} />
              <input type='hidden' name='job_type' value={job.type} />

              <div>
                <Label htmlFor='name' className='text-gray-700 font-medium mb-2 block'>
                  Name *
                </Label>
                <Input id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your name' className='w-full' required disabled={isSubmitting} />
              </div>

              <div>
                <Label htmlFor='email' className='text-gray-700 font-medium mb-2 block'>
                  E-mail Address *
                </Label>
                <Input id='email' name='email' type='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email' className='w-full' required disabled={isSubmitting} />
              </div>

              <div>
                <Label htmlFor='message' className='text-gray-700 font-medium mb-2 block'>
                  Message
                </Label>
                <textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder="Tell us why you're interested in this position..." rows={4} className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100' disabled={isSubmitting} />
              </div>

              <div>
                <Label htmlFor='resume' className='text-gray-700 font-medium mb-2 block'>
                  Resume
                </Label>

                {/* Always include the file input for EmailJS to detect */}
                <input ref={fileInputRef} id='resume' name='resume' type='file' onChange={handleFileChange} accept='.pdf,.doc,.docx' className='hidden' disabled={isSubmitting} />

                {!formData.resume ? (
                  <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sky-400 transition-colors'>
                    <label htmlFor='resume' className={`cursor-pointer ${isSubmitting ? 'pointer-events-none opacity-50' : ''}`}>
                      <Upload className='w-6 h-6 text-blue-500 mx-auto mb-2' />
                      <p className='font-medium text-sky-500'>Browse or drag and drop</p>
                      <p className='text-xs text-gray-500 mt-1'>Max. file size: 4MB (PDF, DOC, DOCX)</p>
                    </label>
                  </div>
                ) : (
                  <div className='border border-gray-300 rounded-lg p-4 bg-white'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-3'>
                        <FileText className='w-8 h-8 text-blue-500' />
                        <div>
                          <p className='font-medium text-gray-900 text-sm'>{formData.resume.name}</p>
                          <p className='text-xs text-gray-500'>{formatFileSize(formData.resume.size)}</p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Button type='button' variant='ghost' size='sm' onClick={() => fileInputRef.current?.click()} className='text-blue-500 hover:text-blue-700 hover:bg-blue-50' disabled={isSubmitting}>
                          Change
                        </Button>
                        <Button type='button' variant='ghost' size='sm' onClick={handleRemoveFile} className='text-red-500 hover:text-red-700 hover:bg-red-50' disabled={isSubmitting}>
                          <X className='w-4 h-4' />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className='mt-2 flex items-start space-x-2'>
                  <AlertCircle className='w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0' />
                  <p className='text-xs text-gray-600'>Supported formats: PDF, DOC, DOCX. Maximum file size: 4MB. Resume attachment is optional but recommended.</p>
                </div>
              </div>

              <Button type='submit' disabled={isSubmitting} className='w-full text-white py-3 rounded-lg font-medium bg-sky-500 hover:bg-sky-400 disabled:bg-gray-400 disabled:cursor-not-allowed'>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
