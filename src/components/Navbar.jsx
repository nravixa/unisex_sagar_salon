import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { Button } from './ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-cream/10 ${
          scrolled ? 'bg-primary/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left */}
          <div className="flex-1">
            <a href="#" className="font-serif text-2xl tracking-widest text-cream">
              SAGAR
            </a>
          </div>

          {/* Center (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <span className="font-sans text-[10px] tracking-[0.3em] text-cream/70 uppercase">
              Hair Studio & Unisex Salon
            </span>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-end items-center gap-8">
            <button 
              onClick={() => setMenuOpen(true)}
              className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors group"
              aria-label="Open menu"
            >
              MENU
              <div className="w-4 flex flex-col gap-[3px] group-hover:gap-[4px] transition-all">
                <span className="w-full h-[1px] bg-current"></span>
                <span className="w-3/4 h-[1px] bg-current self-end"></span>
              </div>
            </button>
            <div className="hidden md:block">
              <Button href="#book">Book Appointment</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-cream"
              onClick={() => setMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} strokeWidth={1} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
