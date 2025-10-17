import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import heroImageMobile from "@/assets/hero-mobile.jpg";

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[60vh] md:min-h-[80vh] lg:min-h-screen">
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-contain bg-top bg-no-repeat md:hidden animate-fade-in"
        style={{ backgroundImage: `url(${heroImageMobile})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/75 via-deep-navy/50 to-deep-navy/25"></div>
        {/* Smooth fade-out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
      </div>
      
      {/* Desktop Background Image (hidden on mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/75 via-deep-navy/50 to-deep-navy/25"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-3 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Star className="w-4 h-4 text-coral-red" fill="currentColor" />
              <span className="text-white font-medium text-sm">Zertifiziert nach SGB XI/XII</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Menschliche Pflege
            <span className="block text-soft-green">mit Herz</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {/* Professionelle und liebevolle Betreuung in Ihrem gewohnten Umfeld. 
            Wir kommen zu Ihnen nach Hause. */}
            Qualität ist kein Zufall.

          </p>
          
          {/* CTA Buttons - Desktop Only */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="xl" className="text-lg px-10 group">
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="warm" size="xl" className="text-lg px-10">
              Unser Team kennenlernen
            </Button>
          </div>
          
          {/* Simple Trust Element - Desktop Only */}
          <div className="hidden md:flex items-center space-x-6 pt-8 border-t border-white/20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-soft-green to-light-sage rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-white font-semibold">Ihre Familie ist unsere Familie</div>
                <div className="text-gray-300 text-sm">Multikulturelles Team</div>
              </div>
            </div>
          </div>
          
          {/* Content ends here - removed CTA buttons and trust element */}
        </div>
      </div>

      {/* Floating Contact Card */}
      <div className="absolute bottom-8 right-8 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-hero">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-coral-red to-coral-red/80 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold">Sofort erreichbar</div>
              <div className="text-gray-300 text-sm">24/7 für Sie da</div>
              <div className="text-coral-red font-bold">06103 123-456</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;