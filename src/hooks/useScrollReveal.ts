import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return { ref, isInView };
};

export const useCountUp = (end: number, duration = 2000, isInView = false) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      if (countRef.current) countRef.current.textContent = Math.floor(start).toString();
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return countRef;
};
