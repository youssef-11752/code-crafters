import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  RiCodeSSlashLine, RiSmartphoneLine, RiBrainLine, RiPenNibLine,
  RiCloudLine, RiDashboardLine,
} from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeader from '../common/SectionHeader';

const services = [
  {
    icon: RiCodeSSlashLine,
    title: 'Web Development',
    description: 'High-performance React and Next.js applications built for scale and speed.',
    color: 'bg-primary',
  },
  {
    icon: RiSmartphoneLine,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love to touch.',
    color: 'bg-secondary',
  },
  {
    icon: RiBrainLine,
    title: 'AI Systems',
    description: 'Custom LLM integration and machine learning pipelines for data-driven growth.',
    color: 'bg-primary',
  },
  {
    icon: RiPenNibLine,
    title: 'UI/UX Design',
    description: 'Strategic design systems that balance aesthetics with conversion goals.',
    color: 'bg-secondary',
  },
  {
    icon: RiDashboardLine,
    title: 'SaaS Development',
    description: 'End-to-end SaaS platforms with multi-tenancy, billing, and analytics built in.',
    color: 'bg-primary',
  },
  {
    icon: RiCloudLine,
    title: 'Cloud Solutions',
    description: 'Infrastructure design and deployment on AWS, GCP, and Azure at any scale.',
    color: 'bg-secondary',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="What We Do"
          title={<>1290+ Projects Delivered<br />with Precision</>}
          subtitle="We provide end-to-end technical craftsmanship for modern enterprises and ambitious founders."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="card p-6 cursor-pointer group"
              >
                <div className={`w-11 h-11 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-base text-primary mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-secondary text-xs font-semibold mt-4 group-hover:gap-2 transition-all duration-200">
                  Learn More →
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
