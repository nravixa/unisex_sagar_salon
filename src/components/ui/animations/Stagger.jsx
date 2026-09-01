import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../Button';

export function Stagger({ 
  children, 
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
  once = true,
  margin = "-100px"
}) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
