import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine, RiMoreLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const projects = [
  { id: 1, name: 'Enterprise Analytics Suite', client: 'TechCorp', type: 'Web App', status: 'In Progress', progress: 65, value: '$45,000' },
  { id: 2, name: 'FinTech Mobile App', client: 'PayStream', type: 'Mobile', status: 'Review', progress: 90, value: '$28,000' },
  { id: 3, name: 'AI Document Intelligence', client: 'DocuAI', type: 'AI/ML', status: 'Completed', progress: 100, value: '$52,000' },
  { id: 4, name: 'HR Management SaaS', client: 'PeopleOps', type: 'SaaS', status: 'In Progress', progress: 40, value: '$38,000' },
  { id: 5, name: 'E-Commerce Redesign', client: 'RetailBrand', type: 'UI/UX', status: 'Planning', progress: 10, value: '$18,000' },
];

const statusColors: Record<string, string> = {
  'In Progress': 'bg-blue-50 text-blue-700',
  'Review': 'bg-amber-50 text-amber-700',
  'Completed': 'bg-green-50 text-green-700',
  'Planning': 'bg-gray-100 text-gray-600',
};

export default function ManageProjects() {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('name');

  const filtered = projects
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.client.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (a[sortField as keyof typeof a] as string).localeCompare(b[sortField as keyof typeof b] as string));

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Manage Projects</h2>
        <p className="text-text-muted text-sm">{projects.length} total projects</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <RiSearchLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input type="text" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-9 py-2 text-xs" />
          </div>
          <select value={sortField} onChange={(e) => setSortField(e.target.value)} className="input-field py-2 text-xs max-w-[140px]">
            <option value="name">Sort by Name</option>
            <option value="client">Sort by Client</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                {['Project', 'Client', 'Type', 'Progress', 'Status', 'Value', ''].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-text-dark">{p.name}</td>
                  <td className="px-5 py-4 text-text-muted text-xs">{p.client}</td>
                  <td className="px-5 py-4">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">{p.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-100 rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                      <span className="text-xs text-text-muted">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColors[p.status]}`}>{p.status}</span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-primary text-sm">{p.value}</td>
                  <td className="px-5 py-4">
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                      <RiMoreLine size={16} className="text-text-muted" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
