import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/5" />
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to craft your next masterpiece?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Let's discuss how our technical expertise can accelerate your business growth.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-primary bg-secondary px-8 py-4 text-sm"
          >
            Start Your Project <RiArrowRightLine size={16} />
          </Link>
          <Link to="/portfolio" className="btn-outline-white px-8 py-4 text-sm">
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
