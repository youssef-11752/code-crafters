import { motion } from 'framer-motion';
import { RiProjectorLine, RiCalendarLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const projects = [
  { id: 1, name: 'E-Commerce Platform', status: 'In Progress', progress: 65, dueDate: 'Jun 20, 2026', budget: '$24,000', type: 'Web App' },
  { id: 2, name: 'Mobile App Redesign', status: 'Review', progress: 90, dueDate: 'Jun 10, 2026', budget: '$12,000', type: 'UI/UX' },
  { id: 3, name: 'AI Integration Module', status: 'Planning', progress: 20, dueDate: 'Jul 5, 2026', budget: '$35,000', type: 'AI/ML' },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-100 text-blue-700',
  'Review': 'bg-amber-100 text-amber-700',
  'Planning': 'bg-gray-100 text-gray-700',
  'Completed': 'bg-green-100 text-green-700',
};

export default function MyProjects() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary">My Projects</h2>
          <p className="text-text-muted text-sm">{projects.length} active engagements</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-primary">{project.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <RiProjectorLine size={12} /> {project.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <RiCalendarLine size={12} /> Due {project.dueDate}
                  </span>
                </div>
              </div>
              <span className="font-semibold text-primary text-sm flex-shrink-0">{project.budget}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-xs text-text-muted">{project.progress}% complete</span>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
