import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/green-oasis-logo.png";

const Header = () => {
  const navItems = [
    "HOME",
    "ABOUT",
    "DESTINATION", 
    "SERVICES",
    "CONTACT",
    "TESTIMONIALS",
    "BLOG",
  ];

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="border-b py-2 text-sm text-muted-foreground">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>info@greenoasistravel.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Follow us for travel inspiration</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Green Oasis" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Green Oasis</h1>
              <p className="text-xs text-muted-foreground">Tours & Travels</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <Button variant="contact" className="hidden md:flex">
              CONTACT US
            </Button>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;