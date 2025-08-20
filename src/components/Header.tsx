import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/green-oasis-logo.png";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "DESTINATIONS", path: "/destinations" }, 
    { name: "PACKAGES", path: "/packages" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "BLOG", path: "/blog" },
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
                <span>+91 7736890053</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>info@lavidaholidays.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Follow us for travel inspiration</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="La Vida Holidays" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">La Vida Holidays</h1>
              <p className="text-xs text-muted-foreground">Tours & Travels</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? "text-primary font-semibold" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="contact" className="hidden md:flex">
                CONTACT US
              </Button>
            </Link>
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