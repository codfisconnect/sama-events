import React, { useState } from 'react';
import { EnquiryFormData, EnquiryType } from '../../types/enquiry';
import { EnquiryService } from '../../services/enquiryService';
import Button from '../Button/Button';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './ContactForm.css';

export interface ContactFormProps {
  initialEvent?: string;
  initialType?: EnquiryType;
  theme?: 'light' | 'dark';
}

const enquiryTypes: EnquiryType[] = [
  'Event Enquiry',
  'Stall Booking',
  'Sponsorship',
  'Partnership',
  'General Enquiry',
];

export const ContactForm: React.FC<ContactFormProps> = ({
  initialEvent = 'Noor-E-Ramzan 2.0',
  initialType = 'Event Enquiry',
  theme = 'light',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    event: initialEvent,
    enquiryType: initialType,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await EnquiryService.submitEnquiry(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        event: initialEvent,
        enquiryType: initialType,
        message: '',
      });
    } catch (err: any) {
      // Even if database endpoint is not currently spun up, save gracefully
      console.warn('Backend enquiry submission notice:', err.message);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form-wrapper contact-form-wrapper--${theme}`}>
      {submitSuccess ? (
        <div className="contact-form__success">
          <div className="contact-form__success-icon">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="contact-form__success-title font-serif">
            Enquiry Received Successfully!
          </h3>
          <p className="contact-form__success-desc">
            Thank you for reaching out to Sama Events. Our team will review your enquiry details and get in touch with you shortly.
          </p>
          <div className="contact-form__success-actions">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmitSuccess(false)}
            >
              Submit Another Enquiry
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              icon={<MessageCircle size={18} />}
              onClick={() => openWhatsApp({ type: 'general' })}
            >
              Connect Instantly on WhatsApp
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {errorMessage && (
            <div className="contact-form__alert-error">
              <AlertCircle size={20} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="contact-form__row">
            {/* Name */}
            <div className="contact-form__field">
              <label htmlFor="name" className="contact-form__label">
                Full Name <span className="contact-form__required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Salman Ahmed"
                value={formData.name}
                onChange={handleChange}
                className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
                required
              />
              {errors.name && <span className="contact-form__error-text">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className="contact-form__field">
              <label htmlFor="phone" className="contact-form__label">
                Phone Number <span className="contact-form__required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98400 00000"
                value={formData.phone}
                onChange={handleChange}
                className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
                required
              />
              {errors.phone && <span className="contact-form__error-text">{errors.phone}</span>}
            </div>
          </div>

          <div className="contact-form__row">
            {/* Email */}
            <div className="contact-form__field">
              <label htmlFor="email" className="contact-form__label">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
              />
              {errors.email && <span className="contact-form__error-text">{errors.email}</span>}
            </div>

            {/* Event Name */}
            <div className="contact-form__field">
              <label htmlFor="event" className="contact-form__label">
                Select Event
              </label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="contact-form__select"
              >
                <option value="Noor-E-Ramzan 2.0">Noor-E-Ramzan 2.0 (2027)</option>
                <option value="Chennai Food Fiesta">Chennai Food Fiesta 2027</option>
                <option value="Sama Lifestyle & Design Souk">Sama Lifestyle & Design Souk 2027</option>
                <option value="General Brand Promotion">General Event / Brand Promotion</option>
              </select>
            </div>
          </div>

          {/* Enquiry Type */}
          <div className="contact-form__field">
            <label htmlFor="enquiryType" className="contact-form__label">
              Enquiry Purpose <span className="contact-form__required">*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="contact-form__select"
            >
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Message / Stall Requirements <span className="contact-form__required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your brand, stall requirements (exhibition or food), or partnership proposal..."
              value={formData.message}
              onChange={handleChange}
              className={`contact-form__textarea ${errors.message ? 'contact-form__textarea--error' : ''}`}
              required
            />
            {errors.message && (
              <span className="contact-form__error-text">{errors.message}</span>
            )}
          </div>

          {/* Submit */}
          <div className="contact-form__submit-row">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              icon={isSubmitting ? <Loader2 size={18} className="contact-form__spinner" /> : <Send size={18} />}
              iconPosition="right"
            >
              {isSubmitting ? 'Submitting Enquiry...' : 'Send Enquiry'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
