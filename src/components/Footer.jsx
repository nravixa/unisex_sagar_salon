export default function Footer() {
  const address = "SAGAR Hair Studio & Unisex Salon in Kothrud Pune | Best Hair Salon, Makeup & Beauty Academy, Shop Number 5, Radha Krishna Building, Opposite Anandnagar Bus Stop, Near Hotel Palavi, Rambaug Colony, Kothrud, Pune, Maharashtra 411038";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-cream/10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full border-t border-cream/10 pt-12 pb-12 text-center md:text-left">
          
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-light mb-2">Visit Us</h4>
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans text-sm text-cream/70 leading-relaxed hover:text-gold-light transition-colors block text-center md:text-left"
            >
              SAGAR Hair Studio & Unisex Salon in Kothrud Pune<br />
              Best Hair Salon, Makeup & Beauty Academy<br />
              Shop Number 5, Radha Krishna Building<br />
              Opposite Anandnagar Bus Stop, Near Hotel Palavi<br />
              Rambaug Colony, Kothrud<br />
              Pune, Maharashtra 411038
            </a>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-light mb-2">Contact & Hours</h4>
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              Phone: <a href="tel:+918329484163" className="hover:text-gold-light transition-colors">83294 84163</a><br />
              Open Daily: 9:30 AM – 9:30 PM
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-light mb-2">Navigation</h4>
            <div className="flex flex-col gap-2 font-sans text-sm text-cream/70">
              <a href="#home" className="hover:text-gold-light transition-colors">Home</a>
              <a href="#about" className="hover:text-gold-light transition-colors">About</a>
              <a href="#services" className="hover:text-gold-light transition-colors">Services</a>
              <a href="#lookbook" className="hover:text-gold-light transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-cream/10 pt-8">
          <div className="flex gap-6 font-sans text-[10px] tracking-[0.2em] uppercase text-muted">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">Google Maps</a>
          </div>

          <div className="text-center md:text-left">
            <span className="font-sans text-[10px] tracking-widest text-cream/60 uppercase">
              © 2026 <a href="https://nravixa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-white transition-colors">NRAVIXA</a>
            </span>
          </div>

          <div className="flex gap-6 font-sans text-[10px] tracking-[0.2em] uppercase text-muted">
            <a href="#" className="hover:text-gold-light transition-colors">Privacy Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
