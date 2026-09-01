import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../Button';

export function FadeIn({ children, className, delay = 0, duration = 0.8, once = true, margin = "-100px" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
