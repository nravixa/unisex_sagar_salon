import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/Button';
import { PremiumImage } from './ui/PremiumImage';

export default function FeaturedService() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="py-16 lg:py-0 bg-primary overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto">
        
        {/* Image Side */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden order-2 lg:order-1">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
            <PremiumImage 
              src="/images/services/massage.jpg"
              alt="Full Body Massage" 
              className="w-full h-full"
              hover={false}
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none z-10"></div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 order-1 lg:order-2 bg-secondary">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 max-w-lg"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-light">
              Featured Experience
            </span>
            
            <h2 className="font-serif text-fluid-heading leading-tight">
              FULL BODY <span className="italic text-muted">MASSAGE</span>
            </h2>
            
            <p className="font-sans text-xl text-cream/80 font-light tracking-wide">
              Complete relaxation and rejuvenation.
            </p>
            
            <div className="w-12 h-[1px] bg-gold-light/40 my-4"></div>
            
            <p className="font-sans text-sm text-muted font-light leading-relaxed">
              Escape the stress of daily life with our signature 60-minute full body massage. Using premium essential oils and expert techniques tailored to your body's needs, we help release tension, improve circulation, and restore your inner balance.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <Button href="https://wa.me/917038009048?text=Hello%20SAGAR%20Hair%20Studio%20%26%20Unisex%20Salon%2C%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AMy%20Requirements%3A%0AName%3A%0AService%20Required%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0APlease%20let%20me%20know%20the%20available%20slot.%20Thank%20you." target="_blank" rel="noopener noreferrer" icon>Book Now</Button>
              <span className="font-sans text-xs tracking-widest text-gold-light">
                ₹1500 · 60 MINUTES
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
