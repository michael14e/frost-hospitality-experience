/* keys are placed here temporarily, should be in .env for best practices */

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account page)
  PUBLIC_KEY: 'WcNBc6-P0BK2X7Xpf',

  // Your EmailJS Service ID (from Email Services page)
  SERVICE_ID: 'service_i0js149',

  // Your EmailJS Template ID (from Email Templates page)
  NEWSLETTER_TEMPLATE_ID: 'template_kwad81k',
  CONTACT_TEMPLATE_ID: 'template_gjy41vp',
  CAREER_TEMPLATE_ID: 'template_alnz64a',
};

// const DEFAULT_TO_EMAIL = 'fhe@frostlifestyle.com';
const DEFAULT_TO_EMAIL = 'barte.james@cogitate.io';

// Template variables that will be sent to EmailJS
// Make sure these match the variable names in your EmailJS template
export const CONTACT_EMAIL_TEMPLATE_PARAMS = {
  from_name: '{{firstName}} {{lastName}}',
  from_email: '{{email}}',
  company: '{{company}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: DEFAULT_TO_EMAIL, // Your receiving email
};

export const CAREER_EMAIL_TEMPLATE_PARAMS = {
  from_name: '{{name}}',
  from_email: '{{email}}',
  message: '{{message}}',
  job_title: '{{job_title}}',
  job_location: '{{job_location}}',
  job_type: '{{job_type}}',
  resume: '{{resume}}', // This is for the actual file attachment
  to_email: DEFAULT_TO_EMAIL, // Your receiving email
};

export const NEWSLETTER_EMAIL_TEMPLATE_PARAMS = {
  from_email: '{{email}}',
  to_email: DEFAULT_TO_EMAIL, // Your receiving email
};
