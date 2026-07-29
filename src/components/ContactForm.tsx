import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/info';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cx0mgcb';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uvc7ai9';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Lq6Tq85EXL_aku_KQ';

interface ContactFormProps {
  onToast: (title: string, desc?: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Prajwal G N',
        },
        EMAILJS_PUBLIC_KEY
      );

      onToast('Message Sent Successfully!', `Thank you ${formData.name}. Your message has been sent directly to Prajwal's inbox.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error: any) {
      console.error('EmailJS transmission error:', error);
      onToast('Message Failed to Send', error?.text || error?.message || 'Could not send email via EmailJS. Please check your network or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Contact Information & Map Bento Card */}
      <div className="lg:col-span-5 flex flex-col justify-between px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            Get In Touch
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Let's Connect & Build Together</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            I am available for full-time Full Stack Web Developer opportunities, frontend/backend roles, and QA software testing positions. Reach out directly!
          </p>
        </div>

        {/* Info Rows */}
        <div className="space-y-3">
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-slate-500">Email Address</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-slate-500">Phone & WhatsApp</p>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-purple-600 dark:text-purple-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-slate-500">Location</p>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Interactive Simulated Map Box */}
        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1 font-mono"><Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Bengaluru, KA</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase">Open to relocation</span>
          </div>

          <div className="w-full h-24 rounded-xl bg-slate-900 overflow-hidden relative border border-slate-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
            <div className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-slate-700 shadow-xl">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-white">Silicon Valley of India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Bento Card */}
      <div className="lg:col-span-7 px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                  errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {errors.name && <p className="text-[10px] text-rose-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                  errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                }`}
              />
              {errors.email && <p className="text-[10px] text-rose-500">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject *</label>
            <input
              type="text"
              value={formData.subject}
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Job Opportunity / Project Inquiry"
              className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {errors.subject && <p className="text-[10px] text-rose-500">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message *</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi Prajwal, I reviewed your portfolio and would love to discuss..."
              className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {errors.message && <p className="text-[10px] text-rose-500">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Direct Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
