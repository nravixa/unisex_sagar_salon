import { motion } from 'framer-motion';
import { FadeUp } from './ui/animations/FadeUp';

export default function Trust() {
  return (
    <section className="py-24 bg-primary border-t border-b border-cream/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <FadeUp duration={1} className="text-center flex flex-col gap-8 w-full">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-light uppercase border border-gold-light/30 px-6 py-2 rounded-full mx-auto">
            PREMIUM BEAUTY SERVICES
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full max-w-4xl mx-auto mt-8">
            <div className="flex flex-col gap-2 border-r border-cream/10 last:border-0 md:border-r">
              <span className="font-serif text-3xl md:text-5xl text-cream italic">Hair</span>
              <span className="font-sans text-[10px] tracking-widest text-cream/50 uppercase">Styling & Care</span>
            </div>
            
            <div className="flex flex-col gap-2 border-r-0 md:border-r border-cream/10">
              <span className="font-serif text-3xl md:text-5xl text-cream italic">Beauty</span>
              <span className="font-sans text-[10px] tracking-widest text-cream/50 uppercase">Skin & Esthetics</span>
            </div>
            
            <div className="flex flex-col gap-2 border-r border-cream/10 md:border-r">
              <span className="font-serif text-3xl md:text-5xl text-cream italic">Grooming</span>
              <span className="font-sans text-[10px] tracking-widest text-cream/50 uppercase">Precision Detail</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-serif text-3xl md:text-5xl text-cream italic">Self Care</span>
              <span className="font-sans text-[10px] tracking-widest text-cream/50 uppercase">Complete Wellness</span>
            </div>
          </div>
        </FadeUp>
        
      </div>
    </section>
  );
}
