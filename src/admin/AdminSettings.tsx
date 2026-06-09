import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';

export default function AdminSettings() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Admin Settings</h2>
        <p className="text-text-muted text-sm">Configure platform and notification settings.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary mb-4 pb-4 border-b border-gray-100">Company Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Company Name', placeholder: 'Code Crafters' },
            { label: 'Support Email', placeholder: 'code.crafters.schools.team@gmail.com' },
            { label: 'Phone', placeholder: '+20 01275884187 - 01119055745' },
            { label: 'Website', placeholder: 'https://codecrafters.io' },
          ].map((field) => (
            <div key={field.label}>
              <label className="label">{field.label}</label>
              <input type="text" placeholder={field.placeholder} className="input-field" />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button className="btn-primary">Save Settings</button>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary mb-4 pb-4 border-b border-gray-100">Admin Notifications</h3>
        <div className="space-y-4">
          {['New contact requests', 'New client registrations', 'Project status changes', 'Payment received'].map((label) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-text-dark">{label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
