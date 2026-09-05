import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "HAIR • BEAUTY • STYLE • CONFIDENCE • SELF CARE • NAILS • SAGAR • ";
  // Repeat the text to ensure continuous scrolling without visual breaks
  const repeatedText = text.repeat(4);

  return (
    <div className="w-full bg-primary border-b border-cream/10 py-3 overflow-hidden flex items-center">
      <motion.div
        className="whitespace-nowrap flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-light pr-8">
          {repeatedText}
        </span>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-light pr-8">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
