import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export default function BookingCTA() {
  return (
    <section id="book" className="py-32 bg-[#050706] border-t border-b border-cream/10 relative overflow-hidden flex justify-center items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gold-light/30"></div>
      
      {/* Large decorative gold symbol behind the heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" className="text-gold-light w-full h-full">
          <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-light border border-gold-light/30 px-6 py-2 rounded-full">
            Your next look starts here.
          </span>
          
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-cream">
            LET'S CREATE <br />
            <span className="italic text-muted">YOUR SIGNATURE.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto">
            <Button icon className="w-full sm:w-auto">Book An Appointment</Button>
            <Button href="tel:8329484163" variant="outline" className="w-full sm:w-auto">
              CALL 83294 84163
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gold-light/30"></div>
    </section>
  );
}
