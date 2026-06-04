import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';

export default function DashboardSettings() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Settings</h2>
        <p className="text-text-muted text-sm">Manage your notification and security preferences.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary mb-4 pb-4 border-b border-gray-100">Notifications</h3>
        <div className="space-y-4">
          {[
            { label: 'Project updates', desc: 'Receive notifications when project milestones change.' },
            { label: 'New messages', desc: 'Be notified when you receive a new message.' },
            { label: 'Invoice reminders', desc: 'Get notified about upcoming invoice due dates.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-sm text-text-dark">{item.label}</p>
                <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary mb-4 pb-4 border-b border-gray-100">Change Password</h3>
        <div className="space-y-4">
          {['Current Password', 'New Password', 'Confirm New Password'].map((label) => (
            <div key={label}>
              <label className="label">{label}</label>
              <input type="password" placeholder="••••••••" className="input-field" />
            </div>
          ))}
          <button className="btn-primary">Update Password</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
