import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { FadeUp } from './ui/animations/FadeUp';
import { FadeIn } from './ui/animations/FadeIn';
import { PremiumImage } from './ui/PremiumImage';

export default function Experience() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const physicsY = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Disable parallax on mobile or if reduced motion is preferred
  const y = (shouldReduceMotion || isMobile) ? 0 : physicsY;

  return (
    <section ref={ref} className="relative py-20 lg:py-48 overflow-hidden bg-primary flex items-center justify-center min-h-[60vh]">
      <FadeIn duration={1.5} className="absolute inset-0 z-0 w-full h-full bg-primary overflow-hidden">
        <motion.div style={{ y, height: "116%" }} className="absolute -top-[8%] left-0 w-full origin-center">
          <PremiumImage 
            src="/images/salon/salon-interior.jpg"
            alt="Sagar Salon Interior"
            className="w-full h-full opacity-40"
            hover={false}
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
      </FadeIn>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <FadeUp distance={30} duration={1}>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-cream leading-tight max-w-5xl mx-auto italic">
            "MORE THAN A HAIRCUT."
          </h2>
        </FadeUp>
      </div>
    </section>
  );
}
