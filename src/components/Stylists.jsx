import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { stylists } from '../data/content';
import { PremiumImage } from './ui/PremiumImage';

export default function Stylists() {
  return (
    <section id="stylists" className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          number="05" 
          subtitle="Crafted by people who understand the art of personal style."
          className="mb-16 md:mb-24"
        >
          THE <br />
          <span className="italic text-gold-light">ARTISTS</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary">
                <PremiumImage 
                  src={stylist.image} 
                  alt={stylist.name}
                  className="w-full h-full"
                />
                
                {/* Hover Reveal */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                  <motion.div 
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-light">
                      Bio
                    </span>
                    <p className="font-serif italic text-xl text-cream">
                      {stylist.bio}
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <h3 className="font-serif text-3xl text-cream uppercase tracking-wider">
                  {stylist.name}
                </h3>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted">
                  {stylist.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
