import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PremiumImage } from './ui/PremiumImage';
import artistImage from '../assets/Images/Image-20738.jpg.jpeg';

export default function Stylists() {
  return (
    <section id="stylists" className="py-16 lg:py-24 bg-primary border-t border-cream/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <SectionHeading 
          number="05" 
          subtitle="Crafted by someone who understands the art of personal style."
          className="mb-16 md:mb-24 w-full"
        >
          THE ARTIST
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl group cursor-pointer flex flex-col items-center"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-secondary border border-cream/10 shadow-luxury">
            <PremiumImage 
              src={artistImage} 
              alt="Sagar - Master Stylist"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
              hover={false}
            />
            
            {/* Elegant Hover Reveal */}
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8 z-20">
              <motion.div 
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 max-w-sm"
              >
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-light">
                  Founder
                </span>
                <p className="font-serif italic text-xl md:text-2xl text-cream leading-relaxed">
                  "With over 15 years in luxury hair design, I specialize in transformative cuts and bespoke colour tailored exclusively for you."
                </p>
                <div className="w-12 h-[1px] bg-gold-light mx-auto mt-4"></div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="font-serif text-4xl md:text-5xl text-cream uppercase tracking-widest drop-shadow-md">
              SAGAR
            </h3>
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-light/80">
              Master Stylist & Founder
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
