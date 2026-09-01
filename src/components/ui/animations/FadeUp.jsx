import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../Button';

export function FadeUp({ children, className, delay = 0, duration = 0.8, distance = 40, once = true, margin = "-100px" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
