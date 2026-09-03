import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { Button } from './ui/Button';
import logoImg from '../assets/Images/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const WA_LINK = "https://wa.me/917038009048?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you.";

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
        document.documentElement.classList.remove('menu-open');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);
    document.documentElement.classList.add('menu-open');
    window.history.pushState({ menu: true }, '');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.documentElement.classList.remove('menu-open');
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-primary/90 backdrop-blur-md py-2 md:py-2.5' : 'bg-transparent py-2.5 md:py-3.5'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 md:px-12 flex justify-between items-center gap-2 sm:gap-4">
          {/* Left - Logo & Brand */}
          <div className="flex-1 min-w-0 flex items-center">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo(0, 0);
              }}
              className="flex items-center group shrink-0 max-w-full"
              aria-label="SAGAR Hair Studio & Unisex Salon Home"
            >
              <img 
                src={logoImg} 
                alt="SAGAR Hair Studio & Unisex Salon Logo" 
                className="h-[58px] sm:h-[64px] md:h-[72px] lg:h-[80px] xl:h-[86px] 2xl:h-[95px] w-auto object-contain shrink-0 max-w-full transition-transform duration-300 group-hover:scale-105" 
                width="200"
                height="95"
              />
            </a>
          </div>

          {/* Center - Nav Links (Desktop & Laptop) */}
          <div className="hidden lg:flex flex-[2] justify-center items-center">
            <div className="flex items-center justify-center gap-2 lg:gap-3 xl:gap-5 whitespace-nowrap overflow-visible">
              <a href="#" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">HOME</a>
              <span className="text-cream/30 text-[8px] lg:text-[9px]">|</span>
              <a href="#about" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">ABOUT</a>
              <span className="text-cream/30 text-[8px] lg:text-[9px]">|</span>
              <a href="#services" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">SERVICES</a>
              <span className="text-cream/30 text-[8px] lg:text-[9px]">|</span>
              <a href="#lookbook" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">GALLERY</a>
              <span className="text-cream/30 text-[8px] lg:text-[9px]">|</span>
              <a href="#contact" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">CONTACT</a>
              <span className="text-cream/30 text-[8px] lg:text-[9px]">|</span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-sans text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-cream hover:text-gold-light transition-colors uppercase">BOOKING</a>
            </div>
          </div>

          {/* Right - Contact Number & Menu Toggle & Booking */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 md:gap-5 xl:gap-6">
            {/* Clickable Phone Number */}
            <a 
              href="tel:7038009048" 
              className="flex items-center gap-1.5 font-sans text-[10px] sm:text-xs tracking-widest text-cream hover:text-gold-light transition-all duration-300 py-1.5 px-2.5 sm:px-3 rounded-full border border-gold-light/30 bg-gold-light/10 hover:bg-gold-light/20 shrink-0"
              aria-label="Call SAGAR Hair Studio at 7038009048"
            >
              <Phone size={13} className="text-gold-light shrink-0" strokeWidth={1.5} />
              <span className="font-medium whitespace-nowrap">7038009048</span>
            </a>
            
            {/* Mobile / Tablet Menu Button */}
            <button 
              className="lg:hidden text-cream p-1 rounded-md hover:text-gold-light transition-colors shrink-0"
              onClick={openMenu}
              aria-label="Open mobile menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
            
            {/* Desktop Booking Button */}
            <div className="hidden lg:block shrink-0">
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
