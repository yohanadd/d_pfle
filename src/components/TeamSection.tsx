import { Users, Award, Star, Calendar, ShieldCheck, Heart, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import magdalenaImage from '@/assets/co-founder.jpeg';

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, hasStarted]);

  const startAnimation = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return { count, startAnimation };
};

// Team Section Component
const TeamSection = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const teamStats = [
    {
      icon: Users,
      target: 50,
      suffix: "+",
      label: "Experienced employees",
      description: "Qualified nursing staff",
      duration: 2000
    },
    {
      icon: Award,
      target: 25,
      suffix: "+",
      label: "Years of experience",
      description: "In outpatient care",
      duration: 2000
    },
    {
      icon: Star,
      target: 98,
      suffix: "%",
      label: "Satisfaction",
      description: "Our customers rate us",
      duration: 2000
    },
    {
      icon: Clock,
      target: 24,
      suffix: "/7",
      label: "Availability",
      description: "Available for you around the clock",
      duration: 2000
    }
  ];

  const teamMembers = [
    {
      name: "Magdalena Glowa",
      role: "Geschäftsführerin & Pflegedienstleiterin",
      qualification: "Examinierte Altenpflegerin",
      experience: "15+ Jahre Erfahrung",
      specialties: ["Pflegemanagement", "Qualitätssicherung", "Teamleitung"],
      description: "Mit über 15 Jahren Erfahrung in der Pflegebranche bringt Magdalena umfassendes Fachwissen und Leidenschaft für die Betreuung älterer Menschen mit. Ihre Expertise in Pflegemanagement und Qualitätssicherung garantiert höchste Standards in der Patientenversorgung.",
      image: magdalenaImage
    },
    {
      name: "Puneet Kaur Parmar",
      role: "Geschäftsführerin & Stellv. Pflegedienstleiterin",
      qualification: "Krankenschwester",
      experience: "12+ Jahre Erfahrung",
      specialties: ["Medizinische Pflege", "Ausbildung", "Pflegeplanung"],
      description: "Puneet verfügt über 12 Jahre Erfahrung als Krankenschwester und kombiniert medizinisches Fachwissen mit empathischer Patientenbetreuung. Ihr Fokus liegt auf der kontinuierlichen Weiterbildung des Teams und der Entwicklung individueller Pflegekonzepte.",
      image: magdalenaImage
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust-green/10 text-trust-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Unser Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vertrauen Sie den Experten
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Erfahrene Fachkräfte mit Leidenschaft für die Pflege - seit über 25 Jahren vertrauen uns Familien in der Region
          </p>
        </div>

        {/* Team Members Grid - Increased Gap Between Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Section with Actual Photos */}
              <div className="h-80 relative overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-trust-green/20 shadow-sm">
                  <span className="text-sm font-semibold text-trust-green">Co-Founder</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Member Header */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-trust-green font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>{member.qualification}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{member.experience}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4 flex-1">
                  <p className="text-gray-600 text-xs leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-xs text-center">Spezialgebiete:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="px-2 py-1 bg-trust-green/10 text-trust-green rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-trust-green to-trust-green/80"></div>
            </div>
          ))}
        </div>

        {/* Animated Team Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => {
            const { count, startAnimation } = AnimatedCounter({
              target: stat.target,
              duration: stat.duration
            });

            if (isStatsInView) {
              startAnimation();
            }

            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="font-semibold text-gray-800 mb-1 text-sm">{stat.label}</div>
                <p className="text-xs text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Bereit für ein persönliches Gespräch?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lernen Sie unser Team persönlich kennen und erfahren Sie, wie wir Ihnen helfen können.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-trust-green to-trust-green/80 hover:from-trust-green hover:to-trust-green text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Kontakt aufnehmen</span>
                </span>
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-trust-green text-trust-green hover:bg-trust-green hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;