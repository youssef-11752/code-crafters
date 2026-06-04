import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine, RiMoreLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const clients = [
  { id: 1, name: 'Sarah Chen', company: 'NexaScale', email: 'sarah@nexascale.com', projects: 3, status: 'Active', joined: 'Jan 2024' },
  { id: 2, name: 'Marcus Webb', company: 'DataPilot', email: 'marcus@datapilot.io', projects: 2, status: 'Active', joined: 'Mar 2024' },
  { id: 3, name: 'Priya Nair', company: 'FinCo', email: 'priya@finco.com', projects: 1, status: 'Active', joined: 'Apr 2024' },
  { id: 4, name: 'James Torres', company: 'RetailSmart', email: 'james@retailsmart.com', projects: 4, status: 'Inactive', joined: 'Dec 2023' },
  { id: 5, name: 'Aisha Johnson', company: 'HealthTech', email: 'aisha@healthtech.io', projects: 2, status: 'Active', joined: 'May 2024' },
];

export default function ManageClients() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
      <motion.div variants={fadeUp} className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">Manage Clients</h2>
          <p className="text-text-muted text-sm">{clients.length} total clients</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-xs">
            <RiSearchLine size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="input-field pl-9 py-2 text-xs"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Client</th>
                <th className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Company</th>
                <th className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Projects</th>
                <th className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Joined</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginated.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                        {client.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-text-dark">{client.name}</p>
                        <p className="text-xs text-text-muted">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">{client.company}</td>
                  <td className="px-5 py-4 text-text-dark font-medium">{client.projects}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${client.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">{client.joined}</td>
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
        {totalPages > 1 && (
          <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-text-muted">Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, filtered.length)} of {filtered.length}</p>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-7 h-7 text-xs rounded-lg transition-colors ${page === i + 1 ? 'bg-primary text-white' : 'text-text-muted hover:bg-gray-100'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
