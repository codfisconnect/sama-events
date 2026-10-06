import React, { useState } from 'react';
import { EnquiryFormData, EnquiryType } from '../../types/enquiry';
import { EnquiryService } from '../../services/enquiryService';
import Button from '../Button/Button';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './ContactForm.css';

export interface ContactFormProps {
  initialType?: EnquiryType;
  theme?: 'light' | 'dark';
}

const enquiryTypes: EnquiryType[] = [
  'General Enquiry',
  'Event Enquiry',
  'Stall Enquiry',
  'Partnership',
];

export const ContactForm: React.FC<ContactFormProps> = ({
  initialType = 'General Enquiry',
  theme = 'light',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
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
      newErrors.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
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
    if (isSubmitting) return;

    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await EnquiryService.submitEnquiry({
        ...formData,
        event: 'General / Sama Events',
      });

      if (response && response.success !== false) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          enquiryType: initialType,
          message: '',
        });
      } else {
        setSubmitSuccess(false);
        setErrorMessage(
          response?.error || 'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.'
        );
      }
    } catch {
      setSubmitSuccess(false);
      setErrorMessage(
        'Unable to submit your enquiry right now. Please try again or contact us on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form-wrapper contact-form-wrapper--${theme}`}>
      {submitSuccess ? (
        <div className="contact-form__success">
          <div className="contact-form__success-icon">
            <CheckCircle2 size={44} />
          </div>
          <h3 className="contact-form__success-title font-serif">
            Thank you. We'll get back to you soon.
          </h3>
          <p className="contact-form__success-desc">
            Your enquiry has been received. Our team will review your message and reach out shortly.
          </p>
          <div className="contact-form__success-action">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmitSuccess(false)}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {errorMessage && (
            <div className="contact-form__alert-error">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="contact-form__row">
            {/* Name */}
            <div className="contact-form__field">
              <label htmlFor="name" className="contact-form__label">
                Name <span className="contact-form__required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
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
                Phone <span className="contact-form__required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98843 66030"
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
                Email
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

            {/* Enquiry Type */}
            <div className="contact-form__field">
              <label htmlFor="enquiryType" className="contact-form__label">
                Enquiry Type <span className="contact-form__required">*</span>
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
          </div>

          {/* Message */}
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Message <span className="contact-form__required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your requirements or question..."
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
              {isSubmitting ? 'Sending Enquiry...' : 'SEND ENQUIRY'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
