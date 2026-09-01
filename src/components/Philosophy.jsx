import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="font-sans text-xs text-gold-light tracking-widest">01</span>
              <div className="w-12 h-[1px] bg-gold-light/40"></div>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted">Our Philosophy</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter"
            >
              STYLE IS <br />
              <span className="italic text-gold-light">PERSONAL.</span>
            </motion.h2>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-32 flex flex-col gap-12">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-cream/80 font-light leading-relaxed max-w-xl"
            >
              "At SAGAR Hair Studio, every cut, colour and transformation is designed around the person wearing it."
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pl-6 border-l border-gold-light/30"
            >
              <p className="font-serif italic text-3xl md:text-4xl text-cream">
                "Your hair should feel like you."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
