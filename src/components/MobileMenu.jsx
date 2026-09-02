import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/Button';

const links = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'GALLERY', href: '#lookbook' },
  { name: 'CONTACT', href: '#contact' },
];

const BOOKING_LINK = 'https://wa.me/918329484163?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you.';

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    // 1. Strict Scroll Lock
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    // Stop Lenis smooth scroll if it's running
    if (window.lenis) {
      window.lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      // Restore natural scrolling exactly as it was
      document.body.style.overflow = originalStyle;
      
      if (window.lenis) {
        window.lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleLinkClick = (e, link) => {
    if (link.external) {
      onClose();
      return; // Browser handles external link
    }
    
    e.preventDefault();
    onClose();
    
    // If we are not on the home page, route to home first
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/' + link.href);
      window.dispatchEvent(new Event('popstate'));
      
      setTimeout(() => {
        if (window.lenis) {
          if (link.href === '#') {
            window.lenis.scrollTo(0);
          } else {
            const el = document.getElementById(link.href.substring(1));
            if (el) window.lenis.scrollTo(el, { offset: -80 });
          }
        }
      }, 700);
      return;
    }

    setTimeout(() => {
      if (window.lenis) {
        if (link.href === '#') {
          window.lenis.scrollTo(0);
        } else {
          const el = document.getElementById(link.href.substring(1));
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
      {/* Top Center Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-12 md:top-16 flex flex-col items-center gap-1 text-center"
      >
        <h2 className="font-serif text-2xl tracking-widest text-gold-light">
          SAGAR
        </h2>
        <span className="font-sans text-[9px] tracking-[0.3em] text-cream/70 uppercase">
          Hair Studio & Unisex Salon
        </span>
      </motion.div>

      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-12 text-cream hover:text-gold-light transition-colors z-10"
      >
        <X size={32} strokeWidth={1} />
      </button>

      <div className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl w-full px-12 mt-8">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            data-mobile-link="true"
            onClick={(e) => handleLinkClick(e, link)}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-4 md:gap-6 group w-max text-center"
          >
            <span className="font-sans text-[10px] md:text-xs text-gold-light tracking-[0.2em] transition-opacity opacity-60 group-hover:opacity-100">
              •
            </span>
            <span className="relative font-serif text-4xl sm:text-5xl md:text-7xl text-cream group-hover:text-gold-light transition-colors italic">
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-[0.16,1,0.3,1]"></span>
            </span>
          </motion.a>
        ))}

        {/* Booking CTA Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 + (links.length * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 w-full max-w-[280px]"
        >
          <Button 
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-[#c9a66b] hover:bg-cream hover:border-cream !text-primary font-semibold py-4 md:py-5 text-[11px] md:text-[12px] tracking-widest uppercase"
          >
            Book Appointment
          </Button>
        </motion.div>
      </div>

    </motion.div>
  );
}
