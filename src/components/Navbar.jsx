import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { Button } from './ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const WA_LINK = "https://wa.me/918329484163?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hardware back button for menu
  useEffect(() => {
    const handlePopState = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);
    window.history.pushState({ menu: true }, '');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    if (window.history.state?.menu) {
      window.history.back();
    }
  };

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
          {/* Left - Logo */}
          <div className="flex-1">
            <a href="#" className="font-serif text-2xl tracking-widest text-gold-light">
              SAGAR
            </a>
          </div>

          {/* Center - Subtitle (Tablet) & Nav Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            {/* Tablet Only Subtitle */}
            <span className="lg:hidden font-sans text-[10px] tracking-[0.3em] text-cream/70 uppercase">
              Hair Studio & Unisex Salon
            </span>
            
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
              <a href="#" className="font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors uppercase">Home</a>
              <a href="#about" className="font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors uppercase">About</a>
              <a href="#services" className="font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors uppercase">Services</a>
              <a href="#lookbook" className="font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors uppercase">Gallery</a>
              <a href="#contact" className="font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors uppercase">Contact</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-sans text-xs tracking-widest text-gold-light hover:text-white transition-colors uppercase">Booking</a>
            </div>
          </div>

          {/* Right - Menu Toggle & Booking */}
          <div className="flex-1 flex justify-end items-center gap-6 xl:gap-8">
            {/* Tablet Menu Button */}
            <button 
              onClick={openMenu}
              className="hidden md:flex lg:hidden items-center gap-2 font-sans text-xs tracking-widest text-cream hover:text-gold-light transition-colors group"
              aria-label="Open menu"
            >
              MENU
              <div className="w-4 flex flex-col gap-[3px] group-hover:gap-[4px] transition-all">
                <span className="w-full h-[1px] bg-current"></span>
                <span className="w-3/4 h-[1px] bg-current self-end"></span>
              </div>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-cream"
              onClick={openMenu}
              aria-label="Open mobile menu"
            >
              <Menu size={24} strokeWidth={1} />
            </button>
            
            {/* Tablet Booking Button (hidden on Desktop and Mobile) */}
            <div className="hidden md:block lg:hidden">
              <Button href={WA_LINK} target="_blank" rel="noopener noreferrer">Book Appointment</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
