import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { RiMapPinLine, RiMailLine, RiCheckLine, RiErrorWarningLine } from 'react-icons/ri';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { contactService } from '../services/api';

const services = [
  'Web Development', 'Mobile App', 'AI Systems', 'UI/UX Design',
  'SaaS Development', 'Cloud Solutions', 'Other',
];

const budgets = ['< $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000 – $100,000', '$100,000+'];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const validate = (data: FormData): FormErrors => {
  const errs: FormErrors = {};
  if (!data.fullName.trim()) errs.fullName = 'Full name is required.';
  if (!data.email.trim()) errs.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Please enter a valid email.';
  if (!data.message.trim()) errs.message = 'Message is required.';
  return errs;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await contactService.send(form);
      setStatus('success');
      setForm({ fullName: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Headline */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-14">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Let's craft your digital future.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-base max-w-xl leading-relaxed">
              Have a vision? We have the engineering expertise to bring it to life. Reach out and let's discuss how we can scale your business together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 card p-8"
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RiCheckLine size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-sm">We'll be in touch within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary mt-6">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="label">Full Name <span className="text-secondary">*</span></label>
                      <input
                        type="text"
                        placeholder="write your name"
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        className={`input-field ${errors.fullName ? 'border-secondary ring-1 ring-secondary/20' : ''}`}
                      />
                      {errors.fullName && <p className="text-secondary text-xs mt-1 flex items-center gap-1"><RiErrorWarningLine size={12} />{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="label">Email Address <span className="text-secondary">*</span></label>
                      <input
                        type="email"
                        placeholder="write your email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={`input-field ${errors.email ? 'border-secondary ring-1 ring-secondary/20' : ''}`}
                      />
                      {errors.email && <p className="text-secondary text-xs mt-1 flex items-center gap-1"><RiErrorWarningLine size={12} />{errors.email}</p>}
                    </div>
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="write the phone number"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="input-field appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="label">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update('budget', b)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                            form.budget === b
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-text-muted border-gray-200 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="label">Message <span className="text-secondary">*</span></label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`input-field resize-none ${errors.message ? 'border-secondary ring-1 ring-secondary/20' : ''}`}
                    />
                    {errors.message && <p className="text-secondary text-xs mt-1 flex items-center gap-1"><RiErrorWarningLine size={12} />{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="mb-4 flex items-center gap-2 text-secondary text-sm bg-secondary/5 px-3 py-2 rounded-lg">
                      <RiErrorWarningLine size={16} /> Failed to send. Please try again.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="btn-primary px-8 py-3.5 w-full sm:w-auto justify-center">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-5"
            >
              <div className="card overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team meeting"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <RiMapPinLine size={18} className="text-text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">Headquarters</p>
                      <p className="text-sm text-text-dark">Street 90, First Settlement</p>
                      <p className="text-sm text-text-dark">Suite 12,New Cairo city,Cairo Governorate</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6">
                <h4 className="font-bold text-white text-base mb-4">Direct Connect</h4>
                <a href="mailto:code.crafters.schools.team@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RiMailLine size={16} />
                  </div>
                  code.crafters.schools.team@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
