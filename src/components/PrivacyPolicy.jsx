import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl text-cream mb-12 tracking-tighter">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-p:text-cream/80 prose-headings:text-gold-light prose-a:text-gold-light max-w-none font-sans leading-relaxed">
          <p className="text-sm text-cream/50 mb-8">Last updated: September 2, 2026</p>
          
          <h2 className="text-2xl mt-12 mb-6 font-serif">1. Introduction</h2>
          <p className="mb-6">
            Welcome to SAGAR Hair Studio & Unisex Salon. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">2. Information We Collect</h2>
          <p className="mb-6">
            We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone numbers), and Usage Data (information about how you use our website).
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">3. How We Use Information</h2>
          <p className="mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process and manage your salon appointments, notify you about changes to our services, and improve our website and customer experiences.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">4. Booking & Contact Information</h2>
          <p className="mb-6">
            When you book an appointment or contact us, the information you provide is used exclusively for scheduling and providing our salon services. We do not sell or rent this information to third parties.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">5. WhatsApp Communication</h2>
          <p className="mb-6">
            By initiating contact through our WhatsApp booking links, you agree to communicate with us via the WhatsApp platform. Please refer to WhatsApp's own privacy policy for details on how they process your messages.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">6. Cookies</h2>
          <p className="mb-6">
            Our website may use cookies to distinguish you from other users. This helps us provide you with a good experience when you browse our website and allows us to improve our site.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">7. Third-Party Services</h2>
          <p className="mb-6">
            We may share your data with trusted third parties who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">8. Data Security</h2>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">9. Data Retention</h2>
          <p className="mb-6">
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">10. Your Rights</h2>
          <p className="mb-6">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">11. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about this privacy policy or our privacy practices, please contact us at our studio located in Kothrud, Pune, or reach out to us via WhatsApp.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-serif">12. Updates to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
