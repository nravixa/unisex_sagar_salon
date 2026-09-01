import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button } from './ui/Button';
import { useRef } from 'react';
import { TextReveal } from './ui/animations/TextReveal';
import { FadeUp } from './ui/animations/FadeUp';
import { FadeIn } from './ui/animations/FadeIn';

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
    <section ref={containerRef} className="relative w-full h-[100vh] lg:h-[95vh] overflow-hidden bg-primary flex flex-col pt-24 pb-8 lg:pb-12">
      {/* Background Image / Video */}
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
            src="/images/hero/hero-bg.jpg"
            alt="SAGAR Hair Studio Luxury Experience"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
          {/* Dark overlay that fades from 0.75 to 0.45 */}
          <motion.div 
            initial={{ opacity: 0.75 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[#07110D] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Top Header Grid */}
        <div className="flex justify-between items-start mt-8">
          {/* TOP LEFT */}
          <FadeUp delay={0.4} duration={1} distance={20} className="flex flex-col gap-1">
            <h2 className="font-sans text-xs md:text-sm tracking-[0.2em] text-cream uppercase">
              SAGAR HAIR STUDIO <br className="hidden md:block"/>& UNISEX SALON
            </h2>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-cream/70 uppercase mt-2">
              HAIR • BEAUTY • SELF CARE
            </span>
          </FadeUp>

          {/* TOP RIGHT */}
          <FadeUp delay={0.6} duration={1} distance={20} className="text-right flex flex-col gap-1">
            <span className="font-sans text-[10px] tracking-[0.3em] text-cream/70 uppercase">
              KOTHRUD <br/>
              PUNE <br/>
              2026
            </span>
          </FadeUp>
        </div>

        {/* Center/Left Grid */}
        <div className="flex-1 flex items-center relative mt-12 md:mt-0">
          
          {/* LEFT SIDE VERTICAL TEXT */}
          <FadeIn delay={0.8} duration={1.5} className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 font-sans text-[10px] tracking-[0.4em] uppercase text-gold-light -rotate-90 origin-left translate-x-4">
            <span>TRANSFORMATION</span>
            <span>BEAUTY</span>
            <span>HAIR STYLING</span>
          </FadeIn>

          {/* CENTER GIANT TEXT */}
          <div className="w-full flex justify-center lg:justify-start lg:pl-32">
            <div className="flex flex-col items-center lg:items-start w-full">
              <TextReveal 
                text={["CRAFTING", "YOUR", "SIGNATURE"]} 
                as="h1" 
                className="font-serif text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] tracking-tighter text-cream text-center lg:text-left drop-shadow-2xl z-20"
                delay={1.0}
                staggerDelay={0.15}
                duration={1.2}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeUp delay={1.4} duration={1} distance={20} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end border-t border-cream/10 pt-6 mt-12">
          
          <div className="flex flex-col gap-1 text-center md:text-left order-2 md:order-1 hidden md:flex">
            <span className="font-sans text-[10px] tracking-[0.2em] text-cream/70 uppercase">
              KOTHRUD • PUNE EST.
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-gold-light uppercase">
              PREMIUM BEAUTY EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col gap-4 items-center order-1 md:order-2 md:col-span-2 md:items-end w-full">
             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Button href="#book" icon className="w-full sm:w-auto text-[10px] md:text-xs">Book Appointment</Button>
               <Button href="#services" variant="outline" icon className="w-full sm:w-auto text-[10px] md:text-xs">Explore Services</Button>
             </div>
          </div>

        </FadeUp>

      </div>
    </section>
  );
}
