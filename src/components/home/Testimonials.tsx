import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiStarFill, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeader from '../common/SectionHeader';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, NexaScale',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=80',
    quote: 'Code Crafters delivered our SaaS platform 3 weeks ahead of schedule. Their engineering precision and communication throughout the project was outstanding.',
    rating: 5,
  },
  {
    name: 'Marcus Webb',
    role: 'Founder, DataPilot',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=80',
    quote: 'Working with Code Crafters was a game-changer. They transformed our MVP into a production-ready product that handles 100k+ users daily.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'VP Product, FinCo',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80',
    quote: 'The AI integration they built for us has improved our data processing speed by 400%. Their technical depth is unparalleled in the industry.',
    rating: 5,
  },
  {
    name: 'James Torres',
    role: 'CEO, RetailSmart',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=80',
    quote: 'From design to deployment, every detail was crafted with care. Our conversion rate improved 60% after the redesign. Highly recommend.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Client Stories"
          title="What Our Clients Say"
          subtitle="Real feedback from real partners we've helped build remarkable things."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} className="card p-7">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <RiStarFill key={j} size={14} className="text-amber-400" />
                ))}
              </div>
              <p className="text-text-dark text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
