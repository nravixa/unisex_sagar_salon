export default function Footer() {
  const address = "Sagar’s hair & beauty studio in Kothrud Pune | Best Hair Salon, Makeup & Beauty Academy, Shop Number 5, Radha Krishna Building, Opposite Anandnagar Bus Stop, Near Hotel Palavi, Rambaug Colony, Kothrud, Pune, Maharashtra 411038";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer id="footer-section" className="bg-primary py-8 border-t border-cream/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 text-center">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-muted hover:text-gold-light transition-colors">Google Maps</a>

          <span className="text-cream/30 text-[8px] md:text-[10px]">|</span>

          <a href="tel:7038009048" className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-gold-light hover:text-white transition-colors">
            7038009048
          </a>

          <span className="text-cream/30 text-[8px] md:text-[10px]">|</span>

          <span className="font-sans text-[8px] md:text-[10px] tracking-widest text-cream/60 uppercase">
            © 2026 <a href="https://nravixa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-white transition-colors">NRAVIXA</a>
          </span>

          <span className="text-cream/30 text-[8px] md:text-[10px]">|</span>

          <a 
            href="/privacy-policy" 
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/privacy-policy');
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}
            className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-muted hover:text-gold-light transition-colors"
          >
            Privacy Policy
          </a>
        </div>
    </footer>
  );
}
