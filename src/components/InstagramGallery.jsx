import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { instagramFeed } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { PremiumImage } from './ui/PremiumImage';

export default function InstagramGallery() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <SectionHeading subtitle="@SAGARHAIRSTUDIO">
          FOLLOW <br />
          <span className="italic text-gold-light">THE LOOK</span>
        </SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href="#" variant="ghost" icon>
            Follow on Instagram
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 w-full">
        {instagramFeed.map((imgSrc, i) => (
          <motion.a
            href="#"
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-square overflow-hidden block bg-secondary"
          >
            <PremiumImage 
              src={imgSrc} 
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-500 flex items-center justify-center z-20 pointer-events-none">
              <Camera className="text-cream opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" size={32} strokeWidth={1} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
