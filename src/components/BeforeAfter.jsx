import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { PremiumImage } from './ui/PremiumImage';
import beforeImg from '../assets/Images/before-image.jpeg';
import afterImg from '../assets/Images/after-image.jpeg';

export default function BeforeAfter() {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const reqRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isResizing) return;
    if (reqRef.current) cancelAnimationFrame(reqRef.current);
    
    reqRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    });
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('mouseup', () => setIsResizing(false));
      window.addEventListener('touchend', () => setIsResizing(false));
    }
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', () => setIsResizing(false));
      window.removeEventListener('touchend', () => setIsResizing(false));
    };
  }, [isResizing]);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" className="mb-12 md:mb-16 lg:mb-24">
          THE TRANSFORMATION
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
          {/* Before Image Layer */}
          <div className="absolute inset-0 w-full h-full grayscale z-0">
            <PremiumImage
              src={beforeImg}
              alt="Before Transformation"
              className="w-full h-full"
              hover={false}
              priority={true}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-cream bg-primary/40 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md z-10 pointer-events-none shadow-lg border border-cream/10">
              BEFORE
            </div>
          </div>

          {/* After Image Layer (Clipped) */}
          <div
            className="absolute inset-0 w-full h-full object-cover z-20"
            style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <PremiumImage
              src={afterImg}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full"
              hover={false}
              priority={true}
            />
            <div className="absolute top-4 right-4 md:top-6 md:right-6 font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-cream bg-primary/40 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md z-10 pointer-events-none shadow-lg border border-cream/10">
              AFTER
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
