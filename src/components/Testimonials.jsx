import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { FadeUp } from './ui/animations/FadeUp';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="05" subtitle="What our clients say" className="mb-16 md:mb-24 text-center md:text-left">
          {["CLIENT EXPERIENCE"]}
        </SectionHeading>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center justify-center">
          <FadeUp delay={0.2} duration={1}>
            <div className="text-gold-light mb-8 font-serif text-8xl md:text-[10rem] leading-none opacity-40">"</div>
            <p className="font-serif text-[clamp(1.75rem,5vw,3rem)] text-cream leading-relaxed mb-12 -mt-12 md:-mt-16 italic">
              Beautiful work, attention to detail and an experience that makes you want to come back.
            </p>
            <div className="flex flex-col gap-1 items-center">
              <div className="w-12 h-[1px] bg-gold-light/40 mb-4"></div>
              <span className="font-sans text-xs md:text-sm tracking-[0.3em] text-gold-light uppercase">
                CLIENT EXPERIENCE
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
