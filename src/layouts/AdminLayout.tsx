import { useState, ReactNode } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiDashboardLine, RiTeamLine, RiProjectorLine, RiMailLine,
  RiBarChartLine, RiSettings4Line, RiLogoutBoxLine, RiMenu4Line, RiBellLine,
} from 'react-icons/ri';
import { useAuth } from '../context/AuthContext';

const sidebarLinks = [
  { icon: RiDashboardLine, label: 'Dashboard', path: '/admin' },
  { icon: RiTeamLine, label: 'Clients', path: '/admin/clients' },
  { icon: RiProjectorLine, label: 'Projects', path: '/admin/projects' },
  { icon: RiMailLine, label: 'Contact Requests', path: '/admin/contacts' },
  { icon: RiBarChartLine, label: 'Analytics', path: '/admin/analytics' },
  { icon: RiSettings4Line, label: 'Settings', path: '/admin/settings' },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <span className="font-bold text-white block text-sm">Code Crafters</span>
            <span className="text-white/40 text-xs">Admin Panel</span>
          </div>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={`sidebar-link ${active ? 'bg-white/15 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button onClick={logout} className="sidebar-link text-white/60 hover:text-white hover:bg-white/10 w-full">
          <RiLogoutBoxLine size={18} /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="hidden lg:flex lg:w-64 bg-primary flex-col flex-shrink-0">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: 'tween', duration: 0.25 }} className="fixed left-0 top-0 bottom-0 w-64 bg-primary z-50 lg:hidden">
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between flex-shrink-0">
          <button className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setSidebarOpen(true)}>
            <RiMenu4Line size={20} className="text-primary" />
          </button>
          <div className="hidden lg:flex items-center gap-2">
            <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2 py-0.5 rounded-full">ADMIN</span>
            <span className="text-sm font-semibold text-text-dark">
              {sidebarLinks.find((l) => l.path === pathname)?.label ?? 'Admin Panel'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors relative">
              <RiBellLine size={18} className="text-text-muted" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full" />
            </button>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">{user?.name?.[0] ?? 'A'}</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
