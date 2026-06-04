import { motion } from 'framer-motion';
import { RiProjectorLine, RiTimeLine, RiMessage2Line, RiBellLine, RiArrowUpLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const overviewCards = [
  { label: 'Active Projects', value: '3', icon: RiProjectorLine, change: '+1 this month', color: 'bg-blue-50 text-blue-600' },
  { label: 'Pending Requests', value: '2', icon: RiTimeLine, change: 'Awaiting review', color: 'bg-amber-50 text-amber-600' },
  { label: 'Messages', value: '7', icon: RiMessage2Line, change: '3 unread', color: 'bg-green-50 text-green-600' },
  { label: 'Notifications', value: '4', icon: RiBellLine, change: 'New updates', color: 'bg-red-50 text-red-600' },
];

const recentProjects = [
  { name: 'E-Commerce Platform', status: 'In Progress', progress: 65, dueDate: 'Jun 20, 2026' },
  { name: 'Mobile App Redesign', status: 'Review', progress: 90, dueDate: 'Jun 10, 2026' },
  { name: 'AI Integration Module', status: 'Planning', progress: 20, dueDate: 'Jul 5, 2026' },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Review': 'bg-amber-100 text-amber-700',
  'Planning': 'bg-gray-100 text-gray-700',
  'Completed': 'bg-green-100 text-green-700',
};

export default function DashboardOverview() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Overview</h2>
        <p className="text-text-muted text-sm">Welcome back! Here's what's happening with your projects.</p>
      </motion.div>

      {/* Cards */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-white rounded-xl p-5 shadow-card">
              <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon size={18} />
              </div>
              <p className="text-2xl font-bold text-primary">{card.value}</p>
              <p className="text-xs font-medium text-text-dark mt-0.5">{card.label}</p>
              <p className="text-xs text-text-muted mt-1">{card.change}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Recent Projects */}
      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-primary text-sm">Recent Projects</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {recentProjects.map((project) => (
            <div key={project.name} className="px-6 py-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm text-text-dark truncate">{project.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-text-muted flex-shrink-0">{project.progress}%</span>
                </div>
              </div>
              <p className="text-xs text-text-muted flex-shrink-0 hidden sm:block">Due {project.dueDate}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
