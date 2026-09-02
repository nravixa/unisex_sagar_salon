export default function Footer() {
  const address = "SAGAR Hair Studio & Unisex Salon in Kothrud Pune | Best Hair Salon, Makeup & Beauty Academy, Shop Number 5, Radha Krishna Building, Opposite Anandnagar Bus Stop, Near Hotel Palavi, Rambaug Colony, Kothrud, Pune, Maharashtra 411038";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer id="footer-section" className="bg-primary pt-16 pb-8 border-t border-cream/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

        <div className="text-center mb-16 max-w-2xl">
          <h2 className="font-serif text-fluid-hero text-cream leading-none tracking-tighter mb-4">
            SAGAR
          </h2>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold-light block mb-6">
            Hair Studio & Unisex Salon
          </span>
          <p className="font-serif italic text-muted text-lg lg:text-xl">
            "Premium hair, beauty and self-care experiences crafted for confidence and elegance."
          </p>
        </div>


        <div className="w-full flex flex-row justify-center items-center gap-3 md:gap-8 border-t border-cream/10 pt-8 whitespace-nowrap overflow-visible">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-muted hover:text-gold-light transition-colors">Google Maps</a>

          <span className="font-sans text-[8px] md:text-[10px] tracking-widest text-cream/60 uppercase">
            © 2026 <a href="https://nravixa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-white transition-colors">NRAVIXA</a>
          </span>

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
      </div>
    </footer>
  );
}
