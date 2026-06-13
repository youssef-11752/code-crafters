import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiStarFill } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeader from '../common/SectionHeader';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'CEO, Tech Vision',
    quote:
      'Code Crafters delivered our SaaS platform 3 weeks ahead of schedule. Their engineering precision and communication throughout the project was outstanding.',
    rating: 5,
  },
  {
    name: 'Sara Mohamed',
    role: 'Founder, DataFlow',
    quote:
      'Working with Code Crafters was a game-changer. They transformed our MVP into a production-ready product that handles 100k+ users daily.',
    rating: 5,
  },
  {
    name: 'Zien Ali',
    role: 'Product Manager, FinTech Pro',
    quote:
      'The AI integration they built for us has improved our data processing speed by 400%. Their technical depth is unparalleled in the industry.',
    rating: 5,
  },
  {
    name: 'Farida Khaled',
    role: 'CEO, Retail Plus',
    quote:
      'From design to deployment, every detail was crafted with care. Our conversion rate improved 60% after the redesign. Highly recommend.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current] = useState(0);

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
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="card p-7">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <RiStarFill key={j} size={14} className="text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-dark text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Avatar + Name + Role */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-900 text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>

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