import { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import FeaturedService from './components/FeaturedService';
import Lookbook from './components/Lookbook';
import BeforeAfter from './components/BeforeAfter';
import Stylists from './components/Stylists';
import Experience from './components/Experience';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    // Expose lenis globally for components like MobileMenu
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global anchor click listener
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#') && target.origin === window.location.origin) {
        e.preventDefault();
        
        // Let Mobile Menu handle its own scrolling so it can wait for transition
        if (target.hasAttribute('data-mobile-link')) return;

        const id = target.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          lenis.scrollTo(el, { offset: -80 }); // Account for navbar height
        } else if (target.hash === '#') {
          lenis.scrollTo(0);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div className="bg-primary min-h-screen selection:bg-gold-light/30 selection:text-gold-light">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <FeaturedService />
        <Lookbook />
        <BeforeAfter />
        <Stylists />
        <Experience />
        <Trust />
        <Testimonials />
        <InstagramGallery />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
