import { useEffect, useState } from 'react';
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
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
        
        // Let Mobile Menu handle its own scrolling so it can wait for transition
        if (target.hasAttribute('data-mobile-link')) return;

        // If we are not on the home page, we need to route back to home first
        if (window.location.pathname !== '/') {
          e.preventDefault();
          window.history.pushState({}, '', '/' + target.hash);
          window.dispatchEvent(new Event('popstate'));
          // Wait for render before scrolling
          setTimeout(() => {
            const el = document.getElementById(target.hash.substring(1));
            if (el && window.lenis) {
              window.lenis.scrollTo(el, { offset: -80 });
            }
          }, 100);
          return;
        }

        e.preventDefault();
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

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Create an observer to track Hero and Footer visibility
    const observer = new IntersectionObserver((entries) => {
      let isHeroOrFooterVisible = false;
      
      // Check if Hero or Footer is intersecting
      const hero = document.getElementById('hero-section');
      const footer = document.getElementById('footer-section');
      
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
          isHeroOrFooterVisible = true;
        }
      }
      
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
          isHeroOrFooterVisible = true;
        }
      }

      setShowWhatsApp(!isHeroOrFooterVisible && currentPath === '/');
    }, {
      root: null,
      threshold: 0,
      rootMargin: "0px"
    });

    // Instead of relying purely on the observer callback which might not trigger smoothly on fast scrolls,
    // we can attach a scroll listener that checks the bounds of Hero and Footer.
    const handleScrollForWA = () => {
      let isHidden = false;
      
      const hero = document.getElementById('hero-section');
      const footer = document.getElementById('footer-section');
      
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // If hero is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isHidden = true;
        }
      }
      
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // If footer is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isHidden = true;
        }
      }
      
      // If we are not on the main page, we can show it everywhere, or hide it everywhere?
      // "I want the WhatsApp floating button to be visible throughout the website EXCEPT in these two sections"
      // If we are on Privacy Policy, there is no hero or footer. Wait, there IS a footer!
      setShowWhatsApp(!isHidden);
    };

    window.addEventListener('scroll', handleScrollForWA);
    handleScrollForWA(); // Initial check

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', handleScrollForWA);
    };
  }, [currentPath]);

  return (
    <div className="bg-primary min-h-screen selection:bg-gold-light/30 selection:text-gold-light">
      <Navbar />
      
      {currentPath === '/privacy-policy' ? (
        <PrivacyPolicy />
      ) : (
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
          <BookingCTA />
          <Contact />
        </main>
      )}

      <Footer />
      {showWhatsApp && <FloatingWhatsApp />}
    </div>
  );
}

export default App;
