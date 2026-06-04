import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiCodeSSlashLine, RiSmartphoneLine, RiBrainLine, RiPenNibLine,
  RiCloudLine, RiDashboardLine, RiArrowRightLine,
} from 'react-icons/ri';
import { staggerContainer, fadeUp, slideInLeft } from '../utils/animations';
import CTASection from '../components/home/CTASection';
import SectionHeader from '../components/common/SectionHeader';

const services = [
  {
    icon: RiCodeSSlashLine,
    color: 'bg-primary',
    title: 'Web Development',
    subtitle: 'Enterprise-Grade Web Apps',
    description: 'We build high-performance, scalable web applications using React, Next.js, Node.js, and modern cloud infrastructure. From startups to Fortune 500 companies, our web solutions power millions of daily active users.',
    features: ['React / Next.js', 'Node.js / Express', 'PostgreSQL / MongoDB', 'AWS / GCP Deployment'],
  },
  {
    icon: RiSmartphoneLine,
    color: 'bg-secondary',
    title: 'Mobile Development',
    subtitle: 'iOS & Android Solutions',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences. We use React Native and Flutter to ship beautiful, fast apps across all major platforms from a single codebase.',
    features: ['React Native', 'Flutter', 'iOS / Android', 'App Store Optimization'],
  },
  {
    icon: RiBrainLine,
    color: 'bg-primary',
    title: 'AI Systems',
    subtitle: 'Intelligent Automation',
    description: 'Custom AI and machine learning solutions that transform your data into competitive advantage. From LLM integration to predictive analytics, we build AI that works in production.',
    features: ['LLM Integration', 'Custom ML Models', 'Data Pipelines', 'Computer Vision'],
  },
  {
    icon: RiPenNibLine,
    color: 'bg-secondary',
    title: 'UI/UX Design',
    subtitle: 'Human-Centered Design',
    description: 'Strategic design systems that balance visual aesthetics with conversion performance. We create digital experiences that users love and that drive measurable business outcomes.',
    features: ['Design Systems', 'User Research', 'Prototyping', 'Usability Testing'],
  },
  {
    icon: RiDashboardLine,
    color: 'bg-primary',
    title: 'SaaS Development',
    subtitle: 'Product-Led Growth',
    description: 'End-to-end SaaS platform development with multi-tenancy, subscription billing, analytics dashboards, and all the infrastructure your product needs to scale.',
    features: ['Multi-tenancy', 'Stripe Integration', 'Analytics Dashboard', 'API Development'],
  },
  {
    icon: RiCloudLine,
    color: 'bg-secondary',
    title: 'Cloud Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Cloud architecture design, migration, and management across AWS, GCP, and Azure. We optimize for performance, cost, and reliability at every layer of your stack.',
    features: ['Cloud Migration', 'DevOps / CI-CD', 'Microservices', 'Performance Optimization'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="section-tag mb-5 inline-flex">
              What We Build
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-heading mb-6">
              Full-Stack Engineering Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-base leading-relaxed">
              From concept to production, we cover every technical discipline your business needs to dominate the digital landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.005 }}
                  className="card p-8 flex flex-col md:flex-row gap-8 items-start group"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1 block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((f) => (
                        <span key={f} className="bg-gray-50 border border-gray-100 text-text-dark text-xs px-3 py-1 rounded-full font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Start This Service <RiArrowRightLine size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
