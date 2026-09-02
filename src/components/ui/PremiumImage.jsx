import { useState, useEffect, useRef } from 'react';
import { cn } from './Button';
import { ImageIcon } from 'lucide-react';

export function PremiumImage({
  src,
  alt,
  className,
  loading = 'lazy',
  priority = false,
  objectPosition = 'center',
  hover = true
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // If priority is true, don't lazy load
  const loadStrategy = priority ? 'eager' : loading;

  useEffect(() => {
    // If the image is already complete (e.g. from cache), mark as loaded immediately
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  if (hasError) {
    return (
      <div className={cn("w-full h-full bg-primary flex items-center justify-center relative overflow-hidden", className)}>
        {/* Subtle dark gradient for premium feel instead of generic grey */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary/80"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col items-center gap-2 opacity-30 text-gold-light">
          <ImageIcon size={24} strokeWidth={1} />
          <span className="font-sans text-[8px] uppercase tracking-widest text-muted">Image Pending</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden w-full h-full group bg-secondary", className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loadStrategy}
        decoding={priority ? "sync" : "async"}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        style={{ objectPosition }}
        className={cn(
          "w-full h-full object-cover transition-all ease-[0.16,1,0.3,1]",
          hover && "group-hover:scale-105 duration-[800ms]",
          !hover && "duration-[600ms]",
          isLoaded ? "opacity-100" : "opacity-0 blur-sm scale-[1.02]"
        )}
      />
    </div>
  );
}
