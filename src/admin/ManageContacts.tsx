import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine, RiEyeLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const contacts = [
  { id: 1, name: 'John Smith', email: 'john@example.com', service: 'Web Development', budget: '$15,000 – $50,000', status: 'New', date: 'Jun 3, 2026' },
  { id: 2, name: 'Emma Wilson', email: 'emma@corp.io', service: 'AI Systems', budget: '$50,000 – $100,000', status: 'In Review', date: 'Jun 2, 2026' },
  { id: 3, name: 'Carlos Mendez', email: 'carlos@startup.co', service: 'Mobile App', budget: '< $5,000', status: 'Contacted', date: 'Jun 1, 2026' },
  { id: 4, name: 'Lisa Park', email: 'lisa@company.com', service: 'SaaS Development', budget: '$100,000+', status: 'New', date: 'May 31, 2026' },
  { id: 5, name: 'Ahmed Hassan', email: 'ahmed@bizdev.ae', service: 'UI/UX Design', budget: '$5,000 – $15,000', status: 'Closed', date: 'May 28, 2026' },
];

const statusColors: Record<string, string> = {
  'New': 'bg-blue-50 text-blue-700',
  'In Review': 'bg-amber-50 text-amber-700',
  'Contacted': 'bg-green-50 text-green-700',
  'Closed': 'bg-gray-100 text-gray-500',
};

export default function ManageContacts() {
  const [search, setSearch] = useState('');

  const filtered = contacts.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
      <motion.div variants={fadeUp}>
        <h2 className="text-xl font-bold text-primary">Contact Requests</h2>
        <p className="text-text-muted text-sm">{contacts.length} total inquiries</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-xs">
            <RiSearchLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input type="text" placeholder="Search requests..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-9 py-2 text-xs" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                {['Name', 'Service', 'Budget', 'Status', 'Date', ''].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-text-dark">{c.name}</p>
                    <p className="text-xs text-text-muted">{c.email}</p>
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">{c.service}</td>
                  <td className="px-5 py-4 text-text-muted text-xs">{c.budget}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusColors[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">{c.date}</td>
                  <td className="px-5 py-4">
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                      <RiEyeLine size={16} className="text-text-muted" />
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
