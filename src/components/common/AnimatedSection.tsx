import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
