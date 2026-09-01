import { motion } from 'framer-motion';
import { cn } from './Button';
import { TextReveal } from './animations/TextReveal';
import { FadeUp } from './animations/FadeUp';

export const SectionHeading = ({ children, className, subtitle, number }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {number && (
        <FadeUp delay={0} duration={0.8} distance={20} className="text-gold-light font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          {number}
        </FadeUp>
      )}
      
      {subtitle && (
        <FadeUp delay={0.1} duration={0.8} distance={20} className="text-muted font-sans uppercase tracking-[0.2em] text-[10px] sm:text-xs">
          {subtitle}
        </FadeUp>
      )}

      <TextReveal 
        text={children}
        as="h2"
        delay={0.2}
        duration={1.2}
        className="text-fluid-heading font-serif leading-none tracking-tight"
      />
    </div>
  );
};
