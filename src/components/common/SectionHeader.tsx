import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp } from '../../utils/animations';

interface SectionHeaderProps {
  tag?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
          light ? 'bg-white/15 text-white' : 'bg-secondary/10 text-secondary'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-secondary'}`} />
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
