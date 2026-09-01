import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PremiumImage } from './ui/PremiumImage';

export default function BeforeAfter() {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isResizing) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', () => setIsResizing(false));
      window.addEventListener('touchend', () => setIsResizing(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', () => setIsResizing(false));
      window.removeEventListener('touchend', () => setIsResizing(false));
    };
  }, [isResizing]);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" className="mb-16 md:mb-24">
          THE <br />
          <span className="italic text-gold-light">TRANSFORMATION</span>
        </SectionHeading>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          ref={containerRef}
          className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden group cursor-ew-resize bg-primary"
          onMouseDown={(e) => {
            setIsResizing(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsResizing(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0 w-full h-full grayscale">
            <PremiumImage 
              src="/images/salon/before.jpg" 
              alt="Before Transformation" 
              className="w-full h-full"
              hover={false}
            />
          </div>
          <div className="absolute top-6 left-6 font-sans text-[10px] tracking-[0.3em] uppercase text-cream/70 bg-primary/40 px-3 py-1 backdrop-blur-sm z-10 pointer-events-none">
            Before
          </div>

          {/* After Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <PremiumImage 
              src="/images/salon/after.jpg" 
              alt="After Transformation" 
              className="absolute inset-0 w-full h-full"
              hover={false}
            />
            <div className="absolute top-6 right-6 font-sans text-[10px] tracking-[0.3em] uppercase text-cream/70 bg-primary/40 px-3 py-1 backdrop-blur-sm z-10 pointer-events-none">
              After
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-gold-light z-20 transition-transform duration-75"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-gold-light bg-primary/80 backdrop-blur-sm flex items-center justify-center gap-1 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(201,166,107,0.3)]">
              <div className="w-0.5 h-3 bg-gold-light"></div>
              <div className="w-0.5 h-3 bg-gold-light"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
