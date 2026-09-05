import { motion } from 'framer-motion';
import { FadeUp } from './ui/animations/FadeUp';

export default function Trust() {
  const services = [
    { title: "Hair", subtitle: "Styling & Care" },
    { title: "Beauty", subtitle: "Skin & Esthetics" },
    { title: "Grooming", subtitle: "Precision Detail" },
    { title: "Nails", subtitle: "Care & Art" },
    { title: "Self Care", subtitle: "Complete Wellness" }
  ];

  return (
    <section className="py-16 bg-primary border-t border-b border-cream/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <FadeUp duration={1} className="text-center flex flex-col gap-8 w-full">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-light uppercase border border-gold-light/30 px-6 py-2 rounded-full mx-auto">
            PREMIUM BEAUTY SERVICES
          </span>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-center w-full max-w-5xl mx-auto mt-8">
            {services.map((item, index) => (
              <div 
                key={item.title}
                className={`flex flex-col gap-2 ${
                  index !== services.length - 1 ? 'lg:border-r border-cream/10' : ''
                } ${
                  index % 2 === 0 ? 'border-r sm:border-r-0 lg:border-r border-cream/10' : ''
                } ${
                  index === 4 ? 'col-span-2 sm:col-span-1 border-r-0' : ''
                }`}
              >
                <span className="font-serif text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-cream italic">{item.title}</span>
                <span className="font-sans text-[10px] tracking-widest text-cream/50 uppercase">{item.subtitle}</span>
              </div>
            ))}
          </div>
        </FadeUp>
        
      </div>
    </section>
  );
}
