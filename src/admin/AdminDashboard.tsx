import { motion } from 'framer-motion';
import { RiTeamLine, RiProjectorLine, RiMailLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const kpis = [
  { label: 'Total Clients', value: '47', change: '+3 this month', icon: RiTeamLine, color: 'text-blue-600 bg-blue-50' },
  { label: 'Active Projects', value: '12', change: '4 due this week', icon: RiProjectorLine, color: 'text-green-600 bg-green-50' },
  { label: 'New Inquiries', value: '9', change: '3 unread', icon: RiMailLine, color: 'text-amber-600 bg-amber-50' },
  { label: 'Monthly Revenue', value: '$87k', change: '+12% vs last month', icon: RiMoneyDollarCircleLine, color: 'text-primary bg-primary/10' },
];

const recentActivity = [
  { text: 'New contact request from TechStartup Inc.', time: '5 min ago', dot: 'bg-amber-400' },
  { text: 'Project "FinDash" moved to Review stage.', time: '1h ago', dot: 'bg-blue-400' },
  { text: 'Client Priya Nair registered a new account.', time: '3h ago', dot: 'bg-green-400' },
  { text: 'Invoice #1042 paid by DataPilot.', time: '5h ago', dot: 'bg-green-400' },
  { text: 'Project "AI Module" kicked off.', time: 'Yesterday', dot: 'bg-primary/40' },
];

export default function AdminDashboard() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Admin Dashboard</h2>
        <p className="text-text-muted text-sm">Platform overview and key metrics.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="bg-white rounded-xl p-5 shadow-card">
              <div className={`w-10 h-10 ${kpi.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon size={18} />
              </div>
              <p className="text-2xl font-bold text-primary">{kpi.value}</p>
              <p className="text-xs font-medium text-text-dark mt-0.5">{kpi.label}</p>
              <p className="text-xs text-text-muted mt-1">{kpi.change}</p>
            </div>
          );
        })}
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-primary text-sm">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {recentActivity.map((item, i) => (
            <div key={i} className="px-6 py-3.5 flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
              <p className="flex-1 text-sm text-text-dark">{item.text}</p>
              <span className="text-xs text-text-muted flex-shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
