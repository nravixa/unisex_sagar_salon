import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../Button';

export function TextReveal({ 
  text, 
  as: Component = 'div',
  className,
  delay = 0, 
  duration = 0.8,
  staggerDelay = 0.1,
  once = true,
  margin = "-100px"
}) {
  const shouldReduceMotion = useReducedMotion();

  // Handle strings with <br/> by splitting them or just splitting standard strings by newline
  const lines = typeof text === 'string' ? text.split(/<br\s*\/?>|\n/) : Array.isArray(text) ? text : [text];

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component className={cn("flex flex-col", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-1">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, margin }}
            transition={{ duration, delay: delay + (i * staggerDelay), ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
