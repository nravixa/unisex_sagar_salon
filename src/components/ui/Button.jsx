import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MagneticButton } from './MagneticButton';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ children, className, variant = 'primary', icon = false, href, magnetic = true, ...props }) => {
  const baseClasses = "group relative overflow-hidden inline-flex items-center justify-center font-sans uppercase tracking-widest text-[10px] sm:text-xs transition-all duration-[600ms] ease-[0.16,1,0.3,1] focus-ring min-h-[44px] min-w-[44px]";
  
  const variants = {
    primary: "border border-cream/20 bg-transparent text-cream hover:border-gold-light hover:bg-gold-light/5 px-8 py-4",
    outline: "border border-cream/30 bg-transparent text-cream hover:border-gold-light hover:text-gold-light px-8 py-4",
    ghost: "text-cream hover:text-gold-light py-2",
  };

  const isPrimary = variant === 'primary';

  const innerContent = (
    <span className="relative z-10 flex items-center gap-3">
      <span className="relative">
        {children}
        {/* Animated Underline for primary and ghost */}
        {(isPrimary || variant === 'ghost') && (
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[600ms] ease-[0.16,1,0.3,1]"></span>
        )}
      </span>
      {icon && (
        <motion.span
          className="text-gold-light"
          variants={{
            initial: { x: 0 },
            hover: { x: 8 }
          }}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
        >
          <ArrowRight size={16} strokeWidth={1} />
        </motion.span>
      )}
    </span>
  );

  const ButtonElement = href ? motion.a : motion.button;
  const buttonProps = href ? { href, ...props } : props;

  const buttonCore = (
    <ButtonElement 
      className={cn(baseClasses, variants[variant], className)}
      whileHover="hover"
      initial="initial"
      {...buttonProps}
    >
      {innerContent}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gold-light/10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms]"
        />
      )}
    </ButtonElement>
  );

  if (magnetic) {
    return <MagneticButton>{buttonCore}</MagneticButton>;
  }
  return buttonCore;
};
