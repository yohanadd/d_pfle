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
    <section className="relative pt-12 flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-soft-green rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-soft-green/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-deep-navy/30 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden animate-fade-in"
        style={{ backgroundImage: `url(${heroImageMobile})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/85 via-deep-navy/70 to-deep-navy/60"></div>
      </div>

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/65 to-deep-navy/45"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          {/* Enhanced Trust Badge with Animation */}
          <div className="flex items-center space-x-3 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-3 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="relative">
                <ShieldCheck
                  className="w-5 h-5 text-coral-red"
                  fill="currentColor"
                />
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">
                Zertifiziert nach SGB XI/XII
              </span>
            </div>
          </div>

          {/* Enhanced Main Headline */}
          <div className="mb-8 space-y-4">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-gradient-to-r  font- from-white to-gray-200 bg-clip-text text-transparent">
                Menschliche
              </span>
              <span className="block bg-gradient-to-r from-soft-green to-light-sage bg-clip-text text-transparent animate-gradient">
                Pflege mit Herz
              </span>
            </h1>

            {/* Animated underline */}
            <div
              className="w-24 h-1 bg-gradient-to-r from-soft-green to-coral-red rounded-full animate-slide-in"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>

          {/* Enhanced Subheadline */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 max-w-2xl leading-relaxed animate-fade-in-up font-light"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="bg-white/10 backdrop-blur-sm px-2 py-1 text-lg rounded-lg border border-white/20">
              Qualität ist kein Zufall.
            </span>
          </p>

          {/* Enhanced CTA Buttons */}
          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-5 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Primary Button - Contact Us */}
            <Link to="/contact" className="block">
              <button className="text-lg px-12 py-4 group rounded-full cursor-pointer relative overflow-hidden bg-gradient-to-r from-coral-red to-orange-400 hover:from-coral-red hover:to-orange-500 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-auto">
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <span className="relative flex items-center space-x-3 justify-center">
                  <Phone className="w-6 h-6" />
                  <span className="font-bold text-white">
                    Kontaktieren Sie uns
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>

            {/* Secondary Button - Who We Are */}
            <Link to="/about" className="block">
              <button className="text-lg px-12 py-4 backdrop-blur-md rounded-full border-2 border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden !bg-transparent hover:border-white/60 hover:bg-white/10 w-full sm:w-auto">
                <span className="flex items-center space-x-3 text-white justify-center">
                  <Users className="w-6 h-6" />
                  <span className="font-semibold">Wer wir sind</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Enhanced Trust Element */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/30 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Trust Item 1 - Family Focus */}
            <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-soft-green to-light-sage rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Home className="w-7 h-7 text-white" fill="currentColor" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Wie Zuhause</div>
                <div className="text-gray-300">
                  Betreuung in vertrauter Umgebung
                </div>
              </div>
            </div>

            {/* Trust Item 2 - Availability */}
            <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-coral-red to-orange-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Clock className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  24/7 Für Sie da
                </div>
                <div className="text-gray-300">Rund um die Uhr Betreuung</div>
              </div>
            </div>

            {/* Trust Item 3 - Multicultural */}
            <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Users className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  Multikulturell
                </div>
                <div className="text-gray-300">Vielfältiges Betreuerteam</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-light tracking-widest">
            MEHR ENTDECKEN
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-soft-green to-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
