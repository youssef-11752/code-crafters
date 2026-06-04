import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const revenue = [32, 45, 38, 60, 72, 87];
const maxRevenue = Math.max(...revenue);

const topServices = [
  { name: 'Web Development', pct: 38, value: '$124k' },
  { name: 'SaaS Development', pct: 28, value: '$91k' },
  { name: 'AI Systems', pct: 20, value: '$65k' },
  { name: 'Mobile Apps', pct: 14, value: '$45k' },
];

export default function Analytics() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Analytics</h2>
        <p className="text-text-muted text-sm">Revenue and performance overview.</p>
      </motion.div>

      {/* Revenue Chart */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary text-sm mb-5">Monthly Revenue (2026)</h3>
        <div className="flex items-end gap-3 h-40">
          {months.map((month, i) => {
            const height = (revenue[i] / maxRevenue) * 100;
            return (
              <div key={month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-text-muted">${revenue[i]}k</span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`w-full rounded-t-lg ${i === months.length - 1 ? 'bg-secondary' : 'bg-primary/20'}`}
                />
                <span className="text-xs text-text-muted">{month}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Top Services */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card p-6">
        <h3 className="font-semibold text-primary text-sm mb-5">Revenue by Service</h3>
        <div className="space-y-4">
          {topServices.map((service) => (
            <div key={service.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-text-dark">{service.name}</span>
                <span className="text-sm font-semibold text-primary">{service.value}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${service.pct}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
                <span className="text-xs text-text-muted w-8 text-right">{service.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
