import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../Button';

export function ImageReveal({ children, className, delay = 0, duration = 1.2, once = true, margin = "-100px", type = 'clip' }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once, margin }}
          transition={{ duration: 0.5, delay }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Two reveal options: clip-path inset (cinematic reveal from bottom) or scale+opacity
  if (type === 'clip') {
    return (
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once, margin }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
        className={cn("overflow-hidden", className)}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once, margin }}
          transition={{ duration: duration + 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full origin-bottom"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
