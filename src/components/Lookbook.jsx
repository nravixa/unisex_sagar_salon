import { ArrowUpRight } from 'lucide-react';
import { gallery } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { ImageReveal } from './ui/animations/ImageReveal';
import { PremiumImage } from './ui/PremiumImage';

export default function Lookbook() {
  // Helper to determine the aspect ratio and grid placement for each item
  const getGridClasses = (index) => {
    switch (index) {
      case 0: return "md:col-span-8 md:row-span-2 aspect-[4/3] md:aspect-auto"; // Large landscape/portrait
      case 1: return "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto"; // Tall editorial
      case 2: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto"; // Square
      case 3: return "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto"; // Tall editorial
      case 4: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto"; // Square
      case 5: return "md:col-span-8 md:row-span-1 aspect-[16/9] md:aspect-auto"; // Landscape
      case 6: return "md:col-span-6 md:row-span-2 aspect-[4/3] md:aspect-auto"; // Balanced split
      case 7: return "md:col-span-6 md:row-span-2 aspect-[3/4] md:aspect-auto"; // Balanced split
      default: return "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto";
    }
  };

  return (
    <section id="lookbook" className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="03" subtitle="A collection of cuts, colour and transformations." className="mb-16 md:mb-24">
          THE <br />
          <span className="italic text-gold-light">LOOKBOOK</span>
        </SectionHeading>

        {/* Asymmetric CSS Grid: single column on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[auto] md:auto-rows-[300px]">
          {gallery.map((item, i) => (
            <div key={item.id} className={`relative group overflow-hidden ${getGridClasses(i)}`}>
              <ImageReveal type="clip" delay={i * 0.1} className="w-full h-full">
                <div className="relative w-full h-full overflow-hidden bg-secondary">
                  <PremiumImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full"
                    hover={true}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 z-20 pointer-events-none">
                    <div className="self-end opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms] ease-[0.16,1,0.3,1] delay-100">
                      <ArrowUpRight className="text-gold-light" size={28} strokeWidth={1} />
                    </div>
                    
                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[600ms] ease-[0.16,1,0.3,1] delay-100">
                      <span className="font-sans text-[10px] tracking-widest text-gold-light uppercase mb-2 block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-2xl text-cream">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </ImageReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
