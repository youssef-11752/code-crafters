import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from '../../utils/animations';

export default function Hero() {
  return (
    <section className="min-h-screen bg-bg flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Engineering Excellence
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-primary leading-[1.1] mb-6">
              Empowering Progress Through{' '}
              <span className="text-secondary">Precision</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base text-text-muted leading-relaxed mb-8">
              At CODE CRAFTERS, we blend innovative startup energy with corporate stability.
              We architect digital solutions that scale with your ambition.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-sm">
                Start Project
                <RiArrowRightLine size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Get Proposal
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=60',
                  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=60',
                  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=60'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-text-dark">Trusted by 15+ clients</p>
                <p className="text-xs text-text-muted">99% satisfaction rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Code Crafters team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm">20+</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Projects</p>
                  <p className="text-sm font-semibold text-primary">Delivered</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-text-dark">Available for Projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
