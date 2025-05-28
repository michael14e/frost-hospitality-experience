# EmailJS Setup Guide

This guide will help you set up EmailJS for the Frost Hospitality website to enable email functionality for contact forms, job applications (with file attachments), and newsletter subscriptions.

## 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account or log in if you already have one

## 2. Add Email Service

1. Navigate to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Templates

### Contact Form Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set the template name as "Contact Form"
4. Set the template ID as `template_contact_form`
5. Configure the template:

**Subject:** `New Contact Form Submission - {{subject}}`

**Content:**

```
Hello,

You have received a new contact form submission:

Name: {{firstName}} {{lastName}}
Email: {{email}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Frost Hospitality Website
```

**Email Settings:**

- **To Email:** `fhe@frostlifestyle.com`
- **From Name:** `Frost Hospitality Website`
- **Reply To:** `{{email}}`

### Job Application Template (with File Attachment Support)

1. Create another template for job applications
2. Set the template name as "Job Application"
3. Set the template ID as `template_job_application`
4. Configure the template:

**Subject:** `New Job Application - {{job_title}} - {{name}}`

**Content:**

```
Hello,

You have received a new job application:

Position: {{job_title}}
Location: {{job_location}}
Type: {{job_type}}
Application Date: {{application_date}}

Applicant Details:
Name: {{name}}
Email: {{email}}

Message:
{{message}}

Resume Information:
Has Resume: {{has_resume}}
Resume Filename: {{resume_filename}}
Resume Size: {{resume_size}}

Please review the attached resume if provided.

Best regards,
Frost Hospitality Careers System
```

**Email Settings:**

- **To Email:** `fhe@frostlifestyle.com`
- **From Name:** `Frost Hospitality Careers`
- **Reply To:** `{{email}}`
- **Enable Attachments:** Yes (Important for resume uploads)

### Newsletter Subscription Template

1. Create a third template for newsletter subscriptions
2. Set the template name as "Newsletter Subscription"
3. Set the template ID as `template_newsletter`
4. Configure the template:

**Subject:** `New Newsletter Subscription`

**Content:**

```
Hello,

You have received a new newsletter subscription:

Email: {{email}}
Subscription Type: {{subscription_type}}
Subscription Date: {{subscription_date}}

Please add this email to your newsletter mailing list.

Best regards,
Frost Hospitality Newsletter System
```

**Email Settings:**

- **To Email:** `fhe@frostlifestyle.com`
- **From Name:** `Frost Hospitality Newsletter`
- **Reply To:** `{{email}}`

## 4. Get Your Credentials

1. Go to **Account** in the dashboard
2. Copy your **Public Key** (e.g., `user_abc123xyz`)
3. Note down your **Service ID** from step 2
4. Note down your **Template IDs** from step 3

## 5. Update Configuration

Update the file `src/config/emailjs.ts` with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',
  NEWSLETTER_TEMPLATE_ID: 'template_newsletter',
  CONTACT_TEMPLATE_ID: 'template_contact_form',
  CAREER_TEMPLATE_ID: 'template_job_application',
};
```

## 6. Template Variable Mapping

Make sure your EmailJS templates use these variable names:

### Contact Form Variables:

- `{{firstName}}` - First name
- `{{lastName}}` - Last name
- `{{email}}` - Email address
- `{{company}}` - Company name
- `{{subject}}` - Subject line
- `{{message}}` - Message content

### Job Application Variables:

- `{{name}}` - Applicant name
- `{{email}}` - Applicant email
- `{{message}}` - Application message
- `{{job_title}}` - Job position title
- `{{job_location}}` - Job location
- `{{job_type}}` - Job type (Full-time, Part-time, etc.)
- `{{application_date}}` - Date of application submission
- `{{has_resume}}` - Whether a resume was attached (Yes/No)
- `{{resume_filename}}` - Name of the uploaded resume file
- `{{resume_size}}` - Size of the uploaded resume file

### Newsletter Subscription Variables:

- `{{email}}` - Subscriber email
- `{{subscription_type}}` - Type of subscription (Newsletter Subscription)
- `{{subscription_date}}` - Date of subscription

## 7. File Attachment Configuration

### For Job Applications:

The job application form supports file uploads with the following specifications:

- **Supported file types:** PDF, DOC, DOCX
- **Maximum file size:** 4MB
- **File validation:** Automatic validation for file type and size
- **EmailJS handling:** Files are automatically attached when using `emailjs.sendForm()`

### Important Notes for File Attachments:

1. **Enable attachments** in your EmailJS template settings
2. File attachments work only with `emailjs.sendForm()`, not `emailjs.send()`
3. The form automatically handles file validation and error messages
4. Users can preview selected files and remove them before submission
5. File information is included in the email template variables

## 8. Testing

1. Test the contact form by filling it out and submitting
2. Test job applications by applying to a position (with and without resume)
3. Test newsletter subscription by entering an email
4. Check your email inbox for the messages
5. Verify file attachments are received correctly
6. Check the EmailJS dashboard for delivery status

## 9. Troubleshooting

### Common Issues:

1. **Emails not sending:**

   - Check your Public Key, Service ID, and Template ID
   - Verify your email service is properly connected
   - Check the browser console for error messages

2. **Template variables not working:**

   - Ensure variable names match exactly (case-sensitive)
   - Check that form field names match template variables

3. **File attachments not working:**

   - Ensure attachments are enabled in your EmailJS template
   - Verify you're using `emailjs.sendForm()` for file uploads
   - Check file size and type restrictions
   - Ensure the form element has the correct file input

4. **File validation errors:**

   - Check file size (must be under 4MB)
   - Verify file type (PDF, DOC, DOCX only)
   - Ensure file is not corrupted

5. **Emails going to spam:**
   - Add your domain to your email provider's trusted senders
   - Consider using a custom domain for the "From" email

### Rate Limits:

- Free EmailJS accounts have a limit of 200 emails per month
- File attachments count towards your monthly quota
- Consider upgrading if you expect higher volume

## 10. Security Notes

- Never expose your Private Key in client-side code
- The Public Key is safe to use in frontend applications
- File uploads are validated on the client-side for user experience
- Consider implementing server-side validation for production
- Monitor your EmailJS usage to prevent abuse
- File attachments are temporarily stored by EmailJS during transmission

## 11. Additional Features

You can enhance the setup by:

- Adding email auto-replies for job applications
- Setting up email templates with better styling
- Adding CAPTCHA for spam protection
- Creating different templates for different types of inquiries
- Setting up email automation for newsletter management
- Implementing file type restrictions based on job requirements
- Adding resume parsing capabilities
- Setting up automated acknowledgment emails for applicants

## 12. File Upload Best Practices

1. **User Experience:**

   - Provide clear file type and size requirements
   - Show upload progress for large files
   - Allow users to preview and remove selected files
   - Display helpful error messages for invalid files

2. **Performance:**

   - Validate files on the client-side before submission
   - Compress large files when possible
   - Consider implementing file preview functionality

3. **Security:**
   - Validate file types both by MIME type and extension
   - Implement file size limits
   - Consider virus scanning for production environments
   - Monitor for suspicious upload patterns

---

For more detailed information, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).
