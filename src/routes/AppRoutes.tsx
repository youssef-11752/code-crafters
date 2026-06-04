import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AdminLayout from '../layouts/AdminLayout';
import { useAuth } from '../context/AuthContext';

// Public pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Auth pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Dashboard pages
import DashboardOverview from '../dashboard/Overview';
import MyProjects from '../dashboard/MyProjects';
import Messages from '../dashboard/Messages';
import Profile from '../dashboard/Profile';
import DashboardSettings from '../dashboard/Settings';

// Admin pages
import AdminDashboard from '../admin/AdminDashboard';
import ManageClients from '../admin/ManageClients';
import ManageProjects from '../admin/ManageProjects';
import ManageContacts from '../admin/ManageContacts';
import Analytics from '../admin/Analytics';
import AdminSettings from '../admin/AdminSettings';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user?.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Client Dashboard */}
      <Route
        path="/dashboard"
        element={<RequireAuth><DashboardLayout /></RequireAuth>}
      >
        <Route index element={<DashboardOverview />} />
        <Route path="projects" element={<MyProjects />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>

      {/* Admin */}
      <Route
        path="/admin"
        element={<RequireAdmin><AdminLayout /></RequireAdmin>}
      >
        <Route index element={<AdminDashboard />} />
        <Route path="clients" element={<ManageClients />} />
        <Route path="projects" element={<ManageProjects />} />
        <Route path="contacts" element={<ManageContacts />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
