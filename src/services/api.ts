import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('cc_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('cc_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const authService = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),
};

// Contact
export const contactService = {
  send: (data: {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    message: string;
  }) => api.post('/contact', data),
};

// Projects
export const projectService = {
  getAll: () => api.get('/projects'),
  getById: (id: string) => api.get(`/projects/${id}`),
};

// Profile
export const profileService = {
  get: () => api.get('/profile'),
  update: (data: unknown) => api.put('/profile', data),
};

// Messages
export const messageService = {
  getAll: () => api.get('/messages'),
  getById: (id: string) => api.get(`/messages/${id}`),
};

// Admin
export const adminService = {
  getClients: () => api.get('/admin/clients'),
  getProjects: () => api.get('/admin/projects'),
  getContacts: () => api.get('/admin/contacts'),
  getAnalytics: () => api.get('/admin/analytics'),
};

export default api;
