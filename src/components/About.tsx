import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Heart, Globe, Clock, Shield } from "lucide-react";
import CoupleWalking from "@/assets/couple.avif";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";

const About = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ 
    threshold: 0.05, // Lower threshold to trigger earlier
    rootMargin: '0px 0px -150px 0px', // Trigger 150px before the element comes into view
    triggerOnce: true
  });

  // Fallback: if the section is already visible when component mounts, trigger animations
  const [hasTriggered, setHasTriggered] = useState(false);
  const shouldAnimate = isVisible || hasTriggered;

  useEffect(() => {
    // If the section is already visible when component mounts, trigger animations after a short delay
    if (isVisible && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isVisible, hasTriggered]);

  const values = [
    {
      icon: Heart,
      title: "Mit Herz",
      description: "Liebevolle Betreuung mit Empathie und Respekt für jeden Menschen.",
      color: "from-compassionate-green to-compassionate-green/80",
      borderColor: "border-compassionate-green/20"
    },
    {
      icon: Shield,
      title: "Professionell",
      description: "Qualifizierte Fachkräfte mit langjähriger Erfahrung und kontinuierlicher Weiterbildung.",
              color: "from-trust-green to-trust-green/80",
        borderColor: "border-trust-green/20"
    },
    {
      icon: Globe,
      title: "Multikulturell",
      description: "Vielfältiges Team mit Verständnis für verschiedene Kulturen und Sprachen.",
      color: "from-accent-orange to-accent-orange/80",
      borderColor: "border-accent-orange/20"
    },
    {
      icon: Clock,
      title: "Verlässlich",
      description: "24/7 Erreichbarkeit und pünktliche, zuverlässige Betreuung rund um die Uhr.",
      color: "from-compassionate-green to-compassionate-green/80",
      borderColor: "border-compassionate-green/20"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-compassionate-green/5 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-trust-green/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-orange/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 gradient-text">
                Individuelle Betreuung mit Verantwortung
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dreieich Pflege ist Ihr vertrauensvoller Partner für professionelle 
                und liebevolle Betreuung zu Hause. Wir verstehen, dass jeder Mensch einzigartig ist 
                und verdient individuelle Aufmerksamkeit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser multikulturelles Team bringt nicht nur fachliche Kompetenz, sondern auch 
                kulturelle Vielfalt und menschliche Wärme in jeden Haushalt. Wir behandeln 
                jede Familie wie unsere eigene.
              </p>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`${value.borderColor} hover:shadow-soft transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer transform-gpu`}
                  style={{
                    animationDelay: `${isVisible ? (index * 200) + 400 : 0}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 200}ms`
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center group-hover:animate-float transition-all duration-300 group-hover:scale-110`}>
                        <value.icon className="w-5 h-5 text-white" fill="currentColor" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-compassionate-green transition-colors duration-300">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Testimonial */}
            <Card 
                              className={`bg-gradient-to-br from-trust-green/5 to-compassionate-green/5 border-trust-green/20 hover:shadow-soft transition-all duration-500 hover:-translate-y-2 group cursor-pointer`}
              style={{
                animationDelay: isVisible ? '600ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 600ms'
              }}
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-trust-green mb-4 group-hover:animate-pulse-soft transition-all duration-300 group-hover:scale-110" />
                <p className="text-lg text-foreground italic mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                  "Dreieich Pflege hat unserer Familie in einer schwierigen Zeit geholfen. 
                  Die Betreuer sind nicht nur kompetent, sondern auch herzlich und einfühlsam. 
                  Wir fühlen uns wie eine große Familie."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-compassionate-green rounded-full flex items-center justify-center group-hover:animate-float transition-all duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Familie Schmidt</div>
                    <div className="text-sm text-muted-foreground">Dreieich</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              variant="trust" 
              size="lg" 
              className="w-full group hover:shadow-soft transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] transform-gpu relative overflow-hidden"
              style={{
                animationDelay: isVisible ? '800ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 800ms'
              }}
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                Unser Team kennenlernen
              </span>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;