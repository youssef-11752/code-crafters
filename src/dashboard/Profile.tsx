import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { staggerContainer, fadeUp } from '../utils/animations';

export default function Profile() {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: '', company: '', bio: '' });

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Profile</h2>
        <p className="text-text-muted text-sm">Manage your account information.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-100">
          <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            {user?.name?.[0] ?? 'U'}
          </div>
          <div>
            <h3 className="font-bold text-primary">{user?.name}</h3>
            <p className="text-text-muted text-sm">{user?.email}</p>
            <span className="inline-block mt-1 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full capitalize">
              {user?.role ?? 'client'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Full Name', field: 'name', type: 'text', placeholder: 'Your name' },
            { label: 'Email Address', field: 'email', type: 'email', placeholder: 'your@email.com' },
            { label: 'Phone Number', field: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
            { label: 'Company', field: 'company', type: 'text', placeholder: 'Your company' },
          ].map(({ label, field, type, placeholder }) => (
            <div key={field}>
              <label className="label">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[field as keyof typeof form]}
                onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                className="input-field"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="label">Bio</label>
            <textarea
              rows={3}
              placeholder="Tell us about yourself..."
              value={form.bio}
              onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
              className="input-field resize-none"
            />
          </div>
        </div>

        <div className="mt-5">
          <button className="btn-primary">Save Changes</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
