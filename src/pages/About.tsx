import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RiRocketLine, RiEyeLine, RiFlashlightLine, RiUserLine,
  RiShieldCheckLine, RiComputerLine,
} from 'react-icons/ri';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import CTASection from '../components/home/CTASection';
import SectionHeader from '../components/common/SectionHeader';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Lead Architect',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=200',
  },
  {
    name: 'Sophia Lee',
    role: 'Head of Design',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=200',
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Backend Engineer',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=200',
  },
  {
    name: 'Priya Sharma',
    role: 'AI/ML Specialist',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200',
  },
];

const timeline = [
  { year: '2019', title: 'Founded', desc: 'Started as a two-person team focused on web excellence.' },
  { year: '2020', title: 'First Major Client', desc: 'Landed our first enterprise SaaS project worth $200k.' },
  { year: '2021', title: 'Team Expansion', desc: 'Grew to 5 engineers and launched our AI practice.' },
  { year: '2022', title: '50+ Projects', desc: 'Crossed 50 delivered projects with 99% client retention.' },
  { year: '2023', title: 'International Reach', desc: 'Expanded to serve clients across 12 countries.' },
  { year: '2024', title: '1000+ Deliveries', desc: 'Celebrating over 1000 feature deliveries in production.' },
];

const values = [
  { icon: RiFlashlightLine, title: 'Fast Delivery', desc: 'Optimized workflows that cut time-to-market without compromising quality.' },
  { icon: RiComputerLine, title: 'Modern Solutions', desc: 'Leveraging cutting-edge stacks to build future-proof architectures.' },
  { icon: RiUserLine, title: 'Professional Support', desc: 'Dedicated experts available to guide your technical journey 24/7.' },
  { icon: RiShieldCheckLine, title: 'Secure Systems', desc: 'Security-first development approach protecting your vital data assets.' },
];

function PageHero() {
  return (
    <section className="pt-32 pb-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="section-tag mb-5 inline-flex">
              Our Journey
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-heading mb-6">
              Building the Future of Digital Excellence
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-muted text-base leading-relaxed mb-8">
              We bridge the gap between visionary concepts and technical reality, delivering bespoke engineering solutions that scale with your ambitions.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="btn-primary">
                Learn More About Our Mission
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern tech office"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Code Crafters was born from a simple observation: the tech world often forces a choice between the rapid, innovative energy of a startup and the rigorous stability of an enterprise. We believed businesses shouldn't have to choose.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Our team is composed of elite architects and creative designers who have spent years honing their craft in high-stakes environments. We blend meticulous engineering precision with a relentless drive for innovation, ensuring every line of code we write serves a long-term strategic purpose.
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]"
          >
            <img
              src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Office interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              icon: RiRocketLine,
              title: 'Our Mission',
              desc: 'To empower global organizations by crafting resilient, scalable, and aesthetically refined digital products that solve complex business challenges through engineering excellence.',
            },
            {
              icon: RiEyeLine,
              title: 'Our Vision',
              desc: "To be the world's most trusted partner for digital transformation, setting the standard for quality and craftsmanship in the software development industry.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} className="card p-8">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader tag="" title="Why Choose Us" />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">{v.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader tag="Our Journey" title="Milestones That Define Us" />
        <div ref={ref} className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`card p-5 inline-block text-left max-w-xs`}>
                    <span className="text-secondary font-bold text-lg">{item.year}</span>
                    <h4 className="font-bold text-primary mt-1 mb-1">{item.title}</h4>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader tag="The Team" title="The Architects Behind the Excellence" subtitle="Elite engineers and designers united by a passion for precision." />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp} whileHover={{ y: -4 }} className="card p-5 text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4"
              />
              <h4 className="font-bold text-sm text-primary">{member.name}</h4>
              <p className="text-xs text-text-muted mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero />
      <OurStory />
      <MissionVision />
      <WhyChooseUs />
      <Timeline />
      <TeamSection />
      <CTASection />
    </>
  );
}
