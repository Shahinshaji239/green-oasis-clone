import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import logoImage from "@/assets/green-oasis-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Green Oasis" 
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Green Oasis</h3>
                <p className="text-sm opacity-80">Tours & Travels</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted travel partner for 14+ years. We create remarkable memories 
              and unforgettable journeys across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Destinations", "Services", "Contact", "Blog", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-90">
                  Green Oasis Travel Agency<br />
                  Kerala, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span className="opacity-90">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span className="opacity-90">info@greenoasistravel.com</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-sm opacity-80">
              Follow us for travel inspiration and exclusive deals!
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Green Oasis Travel Agency. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/917736890053"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </footer>
  );
};

export default Footer;