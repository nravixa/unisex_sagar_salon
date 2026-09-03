import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import logoImg from '../assets/Images/logo.png';

const links = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'GALLERY', href: '#lookbook' },
  { name: 'CONTACT', href: '#contact' },
];

const BOOKING_LINK = 'https://wa.me/917038009048?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you.';

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
      className="fixed inset-0 z-[60] bg-emerald-dark/95 backdrop-blur-xl flex flex-col justify-center items-center overflow-y-auto py-12"
    >
      {/* Top Center Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 md:top-10 flex flex-col items-center gap-1 text-center px-4"
      >
        <img 
          src={logoImg} 
          alt="SAGAR Hair Studio & Unisex Salon Logo" 
          className="h-[58px] sm:h-[66px] md:h-[78px] w-auto object-contain shrink-0 drop-shadow-md" 
          width="200"
          height="78"
        />
      </motion.div>

      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-12 text-cream hover:text-gold-light transition-colors z-10"
        aria-label="Close menu"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 max-w-2xl w-full px-6 mt-20 sm:mt-16">
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
            className="flex items-baseline gap-3 sm:gap-4 md:gap-6 group w-max text-center"
          >
            <span className="font-sans text-[10px] md:text-xs text-gold-light tracking-[0.2em] transition-opacity opacity-60 group-hover:opacity-100">
              •
            </span>
            <span className="relative font-serif text-3xl sm:text-4xl md:text-6xl text-cream group-hover:text-gold-light transition-colors italic">
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 ease-[0.16,1,0.3,1]"></span>
            </span>
          </motion.a>
        ))}

        {/* Booking CTA Button & Phone Call Link */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 + (links.length * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 w-full max-w-[280px] flex flex-col items-center gap-3"
        >
          <Button 
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            magnetic={false}
            className="w-full bg-[#c9a66b] hover:bg-cream hover:border-cream !text-primary font-semibold py-3.5 md:py-4 text-[11px] md:text-[12px] tracking-widest uppercase flex justify-center items-center text-center"
          >
            Book Appointment
          </Button>

          <a 
            href="tel:7038009048" 
            className="flex items-center gap-2 text-gold-light hover:text-white transition-colors py-2 px-4 rounded-full border border-gold-light/30 bg-gold-light/10 font-sans text-xs tracking-widest uppercase font-medium"
          >
            <Phone size={14} className="text-gold-light" />
            <span>Call: 7038009048</span>
          </a>
        </motion.div>
      </div>

    </motion.div>
  );
}
