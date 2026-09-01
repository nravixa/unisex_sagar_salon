import { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from './Button';

export function CinematicVideo({ 
  desktopSrc, 
  mobileSrc, 
  poster, 
  className,
  priority = false 
}) {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (priority || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: '200px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [priority, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <img 
        src={poster} 
        alt="Cinematic presentation" 
        className={cn("w-full h-full object-cover", className)} 
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={cn("w-full h-full object-cover", className)}
      poster={poster}
      autoPlay={priority}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "metadata"}
    >
      <source src={mobileSrc || desktopSrc} media="(max-width: 768px)" type="video/mp4" />
      <source src={desktopSrc} media="(min-width: 769px)" type="video/mp4" />
      <img src={poster} alt="Fallback" className="w-full h-full object-cover" />
    </video>
  );
}
