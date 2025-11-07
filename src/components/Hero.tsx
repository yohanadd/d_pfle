import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Phone,
  Star,
  Users,
  Clock,
  ShieldCheck,
  Home,
  HandHeart,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import heroImageMobile from "@/assets/hero-mobile.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-12 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden font-montserrat">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        {/* Mobile Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${heroImageMobile})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/85 via-deep-navy/70 to-deep-navy/60"></div>
        </div>

        {/* Desktop Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/65 to-deep-navy/45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-3 border border-white/30 shadow-lg">
              <div className="relative">
                <ShieldCheck
                  className="w-5 h-5 text-trust-green"
                  fill="currentColor"
                />
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">
                Zertifiziert nach SGB XI/XII
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Mit Herz 
              </span>
              <span className="block bg-gradient-to-r from-trust-green to-trust-green/80 bg-clip-text text-transparent relative z-10">
                 für Menschen
              </span>
            </h1>

            {/* Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-trust-green to-trust-green/80 rounded-full"></div>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-light">
            <span className="bg-white/10 backdrop-blur-sm px-2 py-1 text-base rounded-lg border border-white/20">
              Qualität ist kein Zufall.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            {/* Primary Button - Contact Us */}
            <Link to="/contact" className="block">
              <button className="text-base px-10 py-3 rounded-full bg-gradient-to-r from-trust-green to-trust-green/80 border-0 shadow-2xl w-full sm:w-auto">
                <span className="flex items-center space-x-3 justify-center">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="font-bold text-white">
                    Kontaktieren Sie uns
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>

            {/* Secondary Button - Who We Are */}
            <Link to="/about" className="block">
              <button className="text-base px-10 py-3 backdrop-blur-md rounded-full border-2 border-trust-green shadow-lg !bg-transparent w-full sm:w-auto">
                <span className="flex items-center space-x-3 text-white justify-center">
                  <Users className="w-5 h-5 text-white" />
                  <span className="font-semibold">Wer wir sind</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Trust Element */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/30">
            {/* Trust Item 1 - Family Focus */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">Wie Zuhause</div>
                <div className="text-gray-300 text-sm">
                  Betreuung in vertrauter Umgebung
                </div>
              </div>
            </div>

            {/* Trust Item 2 - Availability */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">
                  24/7 Für Sie da
                </div>
                <div className="text-gray-300 text-sm">Rund um die Uhr Betreuung</div>
              </div>
            </div>

            {/* Trust Item 3 - Multicultural */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">
                  Multikulturell
                </div>
                <div className="text-gray-300 text-sm">Vielfältiges Betreuerteam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;