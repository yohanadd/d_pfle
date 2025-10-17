import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Heart, Shield, Globe } from "lucide-react";
import logoImage from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
                              <div className="w-10 h-10 bg-gradient-to-r from-trust-green to-compassionate-green rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="Dreieich Pflege Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold">Dreieich Pflege</span>
                <div className="text-sm text-gray-300">Menschliche Pflege mit Herz</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr vertrauensvoller Partner für professionelle und liebevolle 
              Betreuung zu Hause. Wir behandeln jede Familie wie unsere eigene.
            </p>
            <div className="flex space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-compassionate-green to-compassionate-green/80 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-accent-orange/80 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unsere Dienstleistungen</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/services#hauswirtschaft" className="hover:text-white transition-colors">
                  Hauswirtschaftliche Hilfe
                </a>
              </li>
              <li>
                <a href="/services#entlastung" className="hover:text-white transition-colors">
                  Entlastungsleistungen
                </a>
              </li>
              <li>
                <a href="/services#beratung" className="hover:text-white transition-colors">
                  Beratung & Planung
                </a>
              </li>
              <li>
                <a href="/services#gesellschaft" className="hover:text-white transition-colors">
                  Gesellschaft & Begleitung
                </a>
              </li>
              <li>
                <a href="/services#hilfsmittel" className="hover:text-white transition-colors">
                  Pflegehilfsmittel
                </a>
              </li>
              <li>
                <a href="/services#notfall" className="hover:text-white transition-colors">
                  24/7 Notfallbetreuung
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnellzugriff</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition-colors">
                  Unser Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  Häufige Fragen
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog & News
                </a>
              </li>
              <li>
                <a href="/downloads" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-orange" />
                <div>
                  <div className="font-medium">06103 123-456</div>
                  <div className="text-sm">24/7 erreichbar</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-orange" />
                <div>
                  <div className="font-medium">info@dreieich-pflege.de</div>
                  <div className="text-sm">Antwort innerhalb 24h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-orange" />
                <div>
                  <div className="font-medium">Musterstraße 123</div>
                  <div className="text-sm">63303 Dreieich</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-orange" />
                <div>
                  <div className="font-medium">Mo-Fr: 8:00 - 18:00</div>
                  <div className="text-sm">Sa: 9:00 - 14:00</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="accent" size="sm" className="w-full">
                Kostenlose Beratung
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Dreieich Pflege. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
              <a href="/imprint" className="text-gray-300 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;