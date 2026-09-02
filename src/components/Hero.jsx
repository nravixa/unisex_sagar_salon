import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button } from './ui/Button';
import { useRef } from 'react';
import { TextReveal } from './ui/animations/TextReveal';
import { FadeUp } from './ui/animations/FadeUp';
import { Sparkles } from 'lucide-react';
import heroImage from '../assets/Images/herosection.png';

export default function Hero() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero-section" ref={containerRef} className="relative w-full min-h-[85svh] md:min-h-[85dvh] lg:min-h-screen h-auto overflow-hidden bg-primary flex flex-col pt-20 md:pt-32 pb-8 lg:pb-8">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        initial={{ scale: shouldReduceMotion ? 1 : 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={shouldReduceMotion ? {} : { y, opacity }}
          className="w-full h-full relative bg-primary"
        >
          <motion.img
            src={heroImage}
            alt="SAGAR Hair Studio Luxury Experience"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[#07110D] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col items-center justify-start text-center mt-2 md:mt-8">

        {/* Eyebrow */}
        <FadeUp delay={0.4} duration={1} distance={20} className="flex items-center gap-2 mb-7 md:mb-5">
          <Sparkles className="text-gold-light w-4 h-4" />
          <span className="font-sans text-[9px] md:text-[11px] tracking-[0.3em] text-gold-light uppercase font-medium">
            WELCOME TO SAGAR HAIR STUDIO
          </span>
        </FadeUp>

        {/* Main Title - Mobile (Visible only on small screens) */}
        <div className="flex md:hidden flex-col items-center w-full max-w-5xl mx-auto mb-7">
          <TextReveal
            text={[
              "WHERE",
              "ELEGANCE",
              "MEETS",
              <span key="3" className="italic text-gold-light">TIMELESS</span>,
              <span key="4" className="italic text-gold-light">BEAUTY</span>
            ]}
            as="h1"
            className="font-serif text-fluid-hero-mobile tracking-normal drop-shadow-2xl z-20 flex flex-col items-center text-cream gap-2"
            delay={0.6}
            staggerDelay={0.15}
            duration={1.2}
          />
        </div>

        {/* Main Title - Desktop/Tablet (Visible on md and up) */}
        <div className="hidden md:flex flex-col items-center w-full max-w-5xl mx-auto mb-8">
          <TextReveal
            text={[
              "WHERE ELEGANCE MEETS",
              <span key="3" className="italic text-gold-light">TIMELESS BEAUTY</span>
            ]}
            as="h1"
            className="font-serif text-fluid-hero tracking-tighter drop-shadow-2xl z-20 flex flex-col items-center text-cream gap-2 lg:gap-4"
            delay={0.6}
            staggerDelay={0.15}
            duration={1.2}
          />
        </div>

        {/* Subtitle */}
        <FadeUp delay={1.4} duration={1} distance={20} className="w-[88%] max-w-[360px] sm:max-w-md md:max-w-xl mx-auto mb-7 md:mb-10">
          <p className="font-sans text-[13px] sm:text-[14px] md:text-base text-cream/90 font-light leading-[1.65]">
            Luxury salon experience for Men, Women & Children with professional hairstyling, skincare, makeup, and premium beauty treatments.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={1.6} duration={1} distance={20} className="flex flex-col gap-[14px] w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] mx-auto">
          <Button
            href="https://wa.me/918329484163?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you."
            target="_blank"
            rel="noopener noreferrer"
            magnetic={false}
            className="w-full bg-[#c9a66b] hover:bg-cream hover:border-cream !text-primary font-semibold py-4 md:py-5 text-[11px] md:text-[12px] tracking-widest uppercase flex justify-center items-center text-center"
          >
            Book Appointment
          </Button>
          <Button
            href="#services"
            variant="outline"
            magnetic={false}
            className="w-full border-[#c9a66b]/40 !text-[#c9a66b] hover:bg-[#c9a66b]/10 hover:border-[#c9a66b] py-4 md:py-5 text-[11px] md:text-[12px] tracking-widest uppercase flex justify-center items-center text-center"
          >
            Explore Services
          </Button>
        </FadeUp>

      </div>
    </section>
  );
}
