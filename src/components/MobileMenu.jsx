import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const links = [
  { name: 'HOME', href: '#', num: '01' },
  { name: 'ABOUT', href: '#about', num: '02' },
  { name: 'SERVICES', href: '#services', num: '03' },
  { name: 'LOOKBOOK', href: '#lookbook', num: '04' },
  { name: 'STYLISTS', href: '#stylists', num: '05' },
  { name: 'REVIEWS', href: '#reviews', num: '06' },
  { name: 'CONTACT', href: '#contact', num: '07' },
];

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    
    setTimeout(() => {
      if (window.lenis) {
        if (href === '#') {
          window.lenis.scrollTo(0);
        } else {
          const el = document.getElementById(href.substring(1));
          if (el) window.lenis.scrollTo(el, { offset: -80 });
        }
      }
    }, 600); // Wait for menu exit animation (0.5s) + small buffer
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[60] bg-emerald-dark/95 backdrop-blur-xl flex flex-col justify-center items-center"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-12 text-cream hover:text-gold-light transition-colors"
      >
        <X size={32} strokeWidth={1} />
      </button>

      <div className="flex flex-col items-start gap-6 md:gap-8 max-w-2xl w-full px-12">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            data-mobile-link="true"
            onClick={(e) => handleLinkClick(e, link.href)}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-6 group w-max"
          >
            <span className="font-sans text-[10px] md:text-xs text-gold-light tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
              {link.num}
            </span>
            <span className="relative font-serif text-5xl md:text-7xl text-cream group-hover:text-gold-light transition-colors italic">
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-[0.16,1,0.3,1]"></span>
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted">
          Sagar Hair Studio
        </span>
        <a 
          href="#book" 
          data-mobile-link="true"
          onClick={(e) => handleLinkClick(e, '#book')} 
          className="font-sans text-xs tracking-widest uppercase text-gold-light underline underline-offset-4"
        >
          Book Appointment
        </a>
      </motion.div>
    </motion.div>
  );
}
