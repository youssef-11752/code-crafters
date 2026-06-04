import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiExternalLinkLine } from 'react-icons/ri';
import { staggerContainer, fadeUp, scaleIn } from '../utils/animations';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/home/CTASection';

const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'UI/UX', 'SaaS'];

const projects = [
  { id: 1, title: 'Enterprise Analytics Suite', category: 'Web App', client: 'TechCorp Inc.', year: '2024', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'A comprehensive BI platform processing 10M+ daily transactions with real-time dashboards.' },
  { id: 2, title: 'FinTech Mobile Wallet', category: 'Mobile', client: 'PayStream', year: '2024', image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Cross-platform payment app with biometric auth serving 500k+ active users.' },
  { id: 3, title: 'AI Document Intelligence', category: 'AI/ML', client: 'DocuAI', year: '2023', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'GPT-4 powered document processing system reducing manual review time by 80%.' },
  { id: 4, title: 'E-Commerce Redesign', category: 'UI/UX', client: 'RetailBrand', year: '2023', image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Full redesign that increased conversion rate by 60% and reduced cart abandonment.' },
  { id: 5, title: 'HR Management SaaS', category: 'SaaS', client: 'PeopleOps', year: '2024', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Multi-tenant HR platform with payroll, attendance, and performance management.' },
  { id: 6, title: 'Real Estate Platform', category: 'Web App', client: 'PropTech', year: '2023', image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Property listing platform with AI-powered search and virtual tours.' },
  { id: 7, title: 'Health & Fitness App', category: 'Mobile', client: 'FitLife', year: '2023', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Personalized fitness coaching app with ML-driven workout recommendations.' },
  { id: 8, title: 'Design System Library', category: 'UI/UX', client: 'DesignCo', year: '2022', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Comprehensive 200+ component design system used across 5 product teams.' },
];

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  desc: string;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <RiCloseLine size={18} />
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-text-muted text-xs">{project.year}</span>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
          <p className="text-text-muted text-sm mb-4">Client: {project.client}</p>
          <p className="text-text-dark text-sm leading-relaxed mb-6">{project.desc}</p>
          <button
            className="btn-primary"
            onClick={onClose}
          >
            <RiExternalLinkLine size={14} />
            View Live Project
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span variants={fadeUp} className="section-tag mb-5 inline-flex">Our Work</motion.span>
            <motion.h1 variants={fadeUp} className="section-heading mb-4">
              Engineering Triumphs
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-base leading-relaxed">
              A curated selection of our most complex challenges and creative solutions across every industry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-16 z-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 text-text-muted hover:bg-gray-100 hover:text-text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            ref={ref}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedProject(project)}
                  className="card cursor-pointer overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-text-muted text-xs">{project.year}</span>
                    </div>
                    <h3 className="font-bold text-primary text-base mb-1">{project.title}</h3>
                    <p className="text-text-muted text-xs">{project.client}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
