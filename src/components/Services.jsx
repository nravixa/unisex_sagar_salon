import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { FadeUp } from './ui/animations/FadeUp';
import { serviceCategories } from '../data/servicesData';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { PremiumImage } from './ui/PremiumImage';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [isRica, setIsRica] = useState(false);

  const getWhatsAppLink = (categoryName) => {
    const text = encodeURIComponent(`Hi SAGAR Hair Studio, I would like to book an appointment for ${categoryName}.`);
    return `https://wa.me/918329484163?text=${text}`;
  };

  const activeData = serviceCategories.find(c => c.id === activeCategory);

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="02" className="mb-16 md:mb-24">
          {["THE MENU", "OF SERVICES"]}
        </SectionHeading>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Desktop Left Nav */}
          <div className="hidden lg:flex flex-col w-1/3 sticky top-32 h-fit gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left py-4 px-6 border-l-2 transition-all duration-300 font-serif text-2xl group ${
                  activeCategory === category.id 
                    ? 'border-gold-light text-gold-light' 
                    : 'border-transparent text-cream/50 hover:text-cream hover:border-cream/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Right Content / Mobile Accordion */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-0">
            {/* Mobile View: Render all as accordions */}
            <div className="lg:hidden flex flex-col gap-4">
              {serviceCategories.map((category) => (
                <div key={category.id} className="bg-primary/50 border border-cream/10 overflow-hidden">
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-serif text-xl ${activeCategory === category.id ? 'text-gold-light' : 'text-cream'}`}>
                      {category.title}
                    </span>
                    <ChevronDown className={`transition-transform duration-300 ${activeCategory === category.id ? 'rotate-180 text-gold-light' : 'text-cream/50'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-cream/10">
                          <ServiceList category={category} isRica={isRica} setIsRica={setIsRica} getWhatsAppLink={getWhatsAppLink} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop View: Render only active */}
            <div className="hidden lg:block min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceList category={activeData} isRica={isRica} setIsRica={setIsRica} getWhatsAppLink={getWhatsAppLink} />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceList({ category, isRica, setIsRica, getWhatsAppLink }) {
  if (!category) return null;

  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* Category Banner Image */}
      {category.image && (
        <div className="w-full h-48 sm:h-64 lg:h-72 relative overflow-hidden hidden md:block border border-cream/10 bg-primary mb-2">
          <PremiumImage 
            src={category.image}
            alt={category.title}
            className="w-full h-full opacity-80"
            hover={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>
      )}

      {/* Mobile Inline Category Banner */}
      {category.image && (
        <div className="w-full h-48 relative overflow-hidden md:hidden bg-primary mb-2 -mt-4">
          <PremiumImage 
            src={category.image}
            alt={category.title}
            className="w-full h-full opacity-70"
            hover={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90 pointer-events-none"></div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-4">
        <div>
          <h3 className="hidden lg:block font-serif text-4xl text-cream mb-2">{category.title}</h3>
          <p className="font-sans text-sm tracking-widest text-muted uppercase">Premium Care</p>
        </div>
        
        {category.hasToggle && (
          <div className="flex bg-primary p-1 rounded-sm border border-cream/10 self-start sm:self-auto">
            {category.toggleLabels.map((label, idx) => {
              const isActive = (idx === 0 && !isRica) || (idx === 1 && isRica);
              return (
                <button
                  key={label}
                  onClick={() => setIsRica(idx === 1)}
                  className={`px-4 py-2 font-sans text-xs tracking-wider transition-colors duration-300 ${
                    isActive ? 'bg-secondary text-gold-light shadow-luxury' : 'text-cream/50 hover:text-cream'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col border-t border-cream/10">
        {/* Table Header */}
        <div className="flex items-center py-4 border-b border-cream/10 font-sans text-[10px] tracking-widest uppercase text-muted">
          <div className="flex-1">Service</div>
          {!category.singlePrice && (
            <div className="flex gap-8 md:gap-16 text-right">
              <div className="w-16 md:w-20">Gents</div>
              <div className="w-16 md:w-20">Ladies</div>
            </div>
          )}
          {category.singlePrice && (
            <div className="w-24 text-right">Price</div>
          )}
        </div>

        {/* Rows */}
        {category.services.map((svc, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center py-5 border-b border-cream/5 hover:bg-primary/20 transition-colors gap-2 sm:gap-0">
            <div className="flex-1 font-serif text-lg md:text-xl text-cream/90">{svc.name}</div>
            
            {!category.singlePrice && (
              <div className="flex gap-8 md:gap-16 text-right font-sans text-sm md:text-base text-gold-light self-end sm:self-auto">
                <div className="w-16 md:w-20">
                  {svc.isString ? `₹${svc.gents}` : `₹${isRica && svc.gentsRica ? svc.gentsRica : svc.gents}`}
                </div>
                <div className="w-16 md:w-20">
                  {svc.isString ? `₹${svc.ladies}` : `₹${isRica && svc.ladiesRica ? svc.ladiesRica : svc.ladies}`}
                </div>
              </div>
            )}
            
            {category.singlePrice && (
              <div className="w-24 text-right font-sans text-sm md:text-base text-gold-light self-end sm:self-auto">
                ₹{svc.price}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center lg:justify-start">
        <a 
          href={getWhatsAppLink(category.title)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-4 bg-transparent border border-cream/20 text-cream px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:border-gold-light hover:text-gold-light transition-all duration-500 w-full lg:w-auto"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
