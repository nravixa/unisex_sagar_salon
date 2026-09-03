import { ArrowUpRight } from 'lucide-react';
import { gallery } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { ImageReveal } from './ui/animations/ImageReveal';
import { PremiumImage } from './ui/PremiumImage';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 24, strokeWidth = 1.5, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Lookbook() {
  // Editorial masonry-inspired grid layout
  const getGridClasses = (index) => {
    switch (index) {
      case 0: return "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto min-h-[400px]"; // Large feature portrait
      case 1: return "md:col-span-5 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Square top right
      case 2: return "md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-auto min-h-[300px]"; // Landscape bottom right
      case 3: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Hair Spa
      case 4: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Manicure
      case 5: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Pedicure
      case 6: return "md:col-span-8 md:row-span-2 aspect-[16/9] md:aspect-auto min-h-[300px]"; // Large landscape span
      case 7: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Square
      case 8: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]"; // Square
      default: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto min-h-[300px]";
    }
  };

  const INSTAGRAM_URL = "https://www.instagram.com/sagarshairstudio?igsi=M3E1ZmZxc2Q3NHQ5";

  return (
    <section id="lookbook" className="py-12 md:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Gold Accent Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 border-b border-cream/10 pb-8">
          <div className="relative">
            <SectionHeading number="03" subtitle="A curated collection of transformations." className="mb-0">
              THE LOOKBOOK
            </SectionHeading>
            
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -top-4 md:-top-2 right-0 md:-right-16 text-gold-light hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Visit our Instagram"
            >
              <InstagramIcon size={32} strokeWidth={1.5} />
            </a>
          </div>
          
          <div className="hidden md:block">
            <p className="font-sans text-sm text-cream/60 max-w-xs text-right">
              Discover our signature cuts, bespoke coloring, and luxury styling experiences.
            </p>
          </div>
        </div>

        {/* Asymmetric CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[300px]">
          {gallery.map((item, i) => (
            <div key={item.id} className={`relative group border border-cream/5 w-full h-full ${getGridClasses(i)}`}>
              <ImageReveal type="fade" delay={i * 0.1} className="w-full h-full">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block bg-secondary overflow-hidden">
                  <motion.div 
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  >
                    <PremiumImage 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full"
                      hover={false}
                      priority={i < 2} // Preload the first two images in the lookbook
                    />
                  </motion.div>
                  
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/50 transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="self-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[600ms] ease-[0.16,1,0.3,1]">
                      <InstagramIcon className="text-gold-light drop-shadow-md" size={24} strokeWidth={1.5} />
                    </div>
                    
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-[600ms] ease-[0.16,1,0.3,1] delay-75">
                      <span className="font-sans text-[10px] tracking-widest text-gold-light uppercase mb-2 block drop-shadow-sm">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-2xl text-cream drop-shadow-md">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </a>
              </ImageReveal>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-20 flex justify-center">
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 group px-8 py-4 border border-cream/20 hover:border-gold-light/50 bg-secondary/30 hover:bg-secondary transition-all duration-300"
          >
            <InstagramIcon className="text-gold-light group-hover:scale-110 transition-transform duration-300" size={20} strokeWidth={1.5} />
            <span className="font-sans text-xs tracking-widest uppercase text-cream group-hover:text-gold-light transition-colors">
              Follow Us on Instagram
            </span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
