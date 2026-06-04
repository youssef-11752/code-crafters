import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../../utils/animations';

const projects = [
  {
    title: 'Enterprise Analytics Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'SaaS',
  },
  {
    title: 'FinTech Mobile Dashboard',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'iOS / Android',
  },
  {
    title: 'AI Document Intelligence',
    category: 'AI System',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'LLM',
  },
  {
    title: 'E-Commerce Redesign',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Design',
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              990+ Featured Projects
            </h2>
            <p className="text-text-muted text-sm mt-2">
              A curated selection of our most complex engineering challenges and creative triumphs.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            View All Projects <RiArrowRightLine size={16} />
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-secondary text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {project.tag}
                </span>
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 md:hidden">
          <Link to="/portfolio" className="btn-primary w-full justify-center">
            View All Projects <RiArrowRightLine size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
