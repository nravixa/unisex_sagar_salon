import { MapPin, Phone, Clock, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Shop+Number+5+Radha+Krishna+Building+Near+Hotel+Palavi+Rambaug+Colony+Kothrud+Pune";
  const whatsappUrl = "https://wa.me/918329484163";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 lg:pr-12"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-cream mb-2">
                SAGAR HAIR STUDIO
              </h2>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-light">
                & Unisex Salon
              </span>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-gold-light mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted">Address</span>
                  <p className="font-sans text-cream/80 leading-relaxed">
                    Shop Number 5, Radha Krishna Building<br />
                    Opposite Anandnagar Bus Stop, Near Hotel Palavi<br />
                    Rambaug Colony, Kothrud<br />
                    Pune, Maharashtra 411038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="text-gold-light mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted">Phone / WhatsApp</span>
                  <a href="tel:+918329484163" className="font-sans text-cream/80 hover:text-gold-light transition-colors">
                    83294 84163
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Clock className="text-gold-light mt-1 flex-shrink-0" size={20} strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted">Opening Hours</span>
                  <p className="font-sans text-cream/80">
                    Open Daily<br />
                    9:30 AM – 9:30 PM
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <a href="tel:+918329484163" className="flex flex-col items-center justify-center gap-2 p-4 border border-cream/10 bg-secondary/50 hover:bg-secondary hover:border-gold-light/50 transition-colors group">
                  <Phone size={18} className="text-gold-light group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-cream">Call Now</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 border border-cream/10 bg-secondary/50 hover:bg-secondary hover:border-gold-light/50 transition-colors group">
                  <MessageCircle size={18} className="text-gold-light group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-cream">WhatsApp</span>
                </a>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 border border-cream/10 bg-secondary/50 hover:bg-secondary hover:border-gold-light/50 transition-colors group">
                  <Navigation size={18} className="text-gold-light group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-cream">Directions</span>
                </a>
                <a href={whatsappUrl + "?text=Hi%20SAGAR%20Hair%20Studio,%20I%20would%20like%20to%20book%20an%20appointment."} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 border border-cream/10 bg-secondary/50 hover:bg-secondary hover:border-gold-light/50 transition-colors group">
                  <Calendar size={18} className="text-gold-light group-hover:scale-110 transition-transform" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-cream">Book Now</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px] relative bg-secondary overflow-hidden border border-cream/10 grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3783.565860361284!2d73.8188176!3d18.5033481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfec2c057bc5%3A0x6bbf6963dc518db6!2sRambaug%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              title="SAGAR Hair Studio Google Maps Location"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
