import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to get active link styles
  const getActiveStyles = (path: string) => {
    return isActive(path) 
      ? "text-soft-green font-semibold border-b-2 border-soft-green" 
      : "text-steel-gray hover:text-soft-green transition-colors font-medium";
  };

  return (
    <header className="bg-green-50 text-steel-gray border-b border-sky-gray sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <div className="flex items-center space-x-3"> */}

          <div className="flex items-center justify-between relative">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-soft-green/30">
                <img 
                  src={logoImage} 
                  alt="Dreieich Pflege Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-steel-gray">Dreieich Pflege</span>
                <div className="text-steel-gray/70 text-xs">Menschliche Pflege mit Herz</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8"> */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            <Link to="/" className={`${getActiveStyles("/")} pb-1`}>
              Startseite
            </Link>
            <Link to="/services" className={`${getActiveStyles("/services")} pb-1`}>
              Leistungen
            </Link>
            <Link to="/about" className={`${getActiveStyles("/about")} pb-1`}>
              Über uns
            </Link>
            {/* <Link to="/team" className="text-steel-gray hover:text-soft-blue transition-colors font-medium">Team</Link> */}
            <Link to="/contact" className={`${getActiveStyles("/contact")} pb-1`}>
              Kontakt
            </Link>
          </nav>
          
          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-steel-gray/70">
              {/* <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>06103 123-456</span>
              </div> */}
              {/* <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Dreieich</span>
              </div> */}
            </div>
            <Link to="/contact">
              <Button variant="hero" size="sm" className="bg-soft-green text-white hover:bg-soft-green/90">
                Kostenlose Beratung
              </Button>
            </Link>

            {/* <Button variant="hero" size="sm" className="bg-soft-blue text-white hover:bg-soft-blue/90">
              Kostenlose Beratung
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-steel-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sky-gray">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`${getActiveStyles("/")} py-2 ${isActive("/") ? "bg-soft-green/10 rounded-lg px-3" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Startseite
              </Link>
              <Link 
                to="/services" 
                className={`${getActiveStyles("/services")} py-2 ${isActive("/services") ? "bg-soft-green/10 rounded-lg px-3" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dienstleistungen
              </Link>
              <Link 
                to="/about" 
                className={`${getActiveStyles("/about")} py-2 ${isActive("/about") ? "bg-soft-green/10 rounded-lg px-3" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              {/* <Link 
                to="/team" 
                className="text-steel-gray hover:text-soft-green transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link> */}
              <Link 
                to="/contact" 
                className={`${getActiveStyles("/contact")} py-2 ${isActive("/contact") ? "bg-soft-green/10 rounded-lg px-3" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <div className="pt-4 border-t border-sky-gray">
                <div className="flex items-center space-x-2 text-sm text-steel-gray/70 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>06103 - 802 57 31</span>
                </div>
                <Button variant="hero" size="sm" className="w-full bg-soft-green text-white hover:bg-soft-green/90">
                  Kostenlose Beratung
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;