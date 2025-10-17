import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Heart, Clock, Calendar, MapPin, Star } from "lucide-react";
import staffImage from "@/assets/healthcare-staff.jpg";
import commonAreaImage from "@/assets/common-area.jpg";
import hug from "@/assets/hug.jpeg";
import hug2 from "@/assets/hug2.jpeg";
import room from "@/assets/timothy-buck-psrloDbaZc8-unsplash.jpg"
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, margin: "-50px" });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-50px" });

  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-50px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const timeline = [
    {
      year: "1999",
      title: "Gegründet",
      description: "Dreieich Pflege öffnete seine Türen mit der Vision, außergewöhnliche Seniorenpflege zu bieten"
    },
    {
      year: "2005",
      title: "Erweiterung",
      description: "Gedächtnispflege-Flügel hinzugefügt und Rehabilitationsdienste erweitert"
    },
    {
      year: "2012",
      title: "Anerkennung",
      description: "Staatliche Zertifizierung und 5-Sterne-Qualitätsbewertung erhalten"
    },
    {
      year: "2018",
      title: "Innovation",
      description: "Implementierung modernster Pflegetechnologien und Familienkommunikationssysteme"
    },
    {
      year: "2024",
      title: "Exzellenz",
      description: "25 Jahre mitfühlende Pflege und Gemeinschaftsdienst feiern"
    }
  ];

  const testimonials = [
    {
      quote: "Das Personal bei Dreieich Pflege behandelte meinen Vater wie Familie. Ihr Mitgefühl und ihre Professionalität gaben uns in einer schwierigen Zeit inneren Frieden.",
      author: "Jennifer Thompson",
      role: "Tochter einer Bewohnerin",
      rating: 5
    },
    {
      quote: "Ich arbeite seit 30 Jahren im Gesundheitswesen und kann ehrlich sagen, dass dies die beste Einrichtung ist, die ich je gesehen habe. Die Aufmerksamkeit für Details ist bemerkenswert.",
      author: "Dr. Michael Chen",
      role: "Familienarzt",
      rating: 5
    },
    {
      quote: "Hierher zu ziehen war die beste Entscheidung, die wir getroffen haben. Die Aktivitäten, das Essen, die Pflege - alles übertrifft die Erwartungen.",
      author: "Robert & Mary Wilson",
      role: "Bewohner",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <section 
        // ref={heroRef}
        // initial={{ opacity: 0, y: 50 }}
        // animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 bg-gradient-to-br from-trust-green to-trust-green/90 text-white relative overflow-hidden" 
        style={{
          backgroundImage: `url(${hug})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '54vh',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-trust-green/5"
          style={{ y }}
        ></motion.div>
        <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center py-20">
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          > */}
          <div>
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              // initial={{ opacity: 0, y: 30 }}
              // animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.8, delay: 0.4 }}
            >
              Unsere Geschichte der Fürsorge
            </h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Dreieich Pflege ist seit jeher ein Leuchtturm mitfühlender Pflege, 
              der ein wahres Zuhause schafft, in dem Senioren mit Würde und Freude gedeihen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <motion.section 
        ref={missionRef}
        initial={{ opacity: 0 }}
        animate={isMissionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Unsere Mission & Werte
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Wir glauben, dass jeder Senior mit Würde leben sollte, umgeben von 
                  Pflege, die ihre Lebensgeschichte ehrt und ihre individuelle Reise unterstützt.
                </p>
              </motion.div>
              
              <div className="space-y-6">
                {[
                  { icon: Heart, title: "Mitgefühl", description: "Jede Interaktion wird von Empathie, Freundlichkeit und echter Fürsorge für das Wohlbefinden unserer Bewohner geleitet.", color: "text-trust-green" },
                  { icon: Users, title: "Gemeinschaft", description: "Wir fördern bedeutungsvolle Verbindungen und schaffen eine Umgebung, in der sich jeder zugehörig fühlt.", color: "text-warm-green" },
                  { icon: Award, title: "Exzellenz", description: "Wir streben kontinuierlich nach den höchsten Standards in Pflege, Sicherheit und Servicequalität.", color: "text-accent" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isMissionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + (index * 0.2),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <motion.div
                            className={`w-6 h-6 ${value.color}`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <value.icon className="w-6 h-6" fill="currentColor" />
                          </motion.div>
                          <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isMissionInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
                              <motion.div 
                  className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-trust-green/20 to-transparent rounded-2xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(34, 197, 94, 0.2)",
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                      "0 0 0 rgba(34, 197, 94, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
              <img 
                src={hug2} 
                alt="Gesundheitspersonal"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section 
        ref={statsRef}
        initial={{ opacity: 0 }}
        animate={isStatsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-secondary/30 to-accent/20"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              In Zahlen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unser Engagement für Exzellenz spiegelt sich in unseren Leistungen und der Zufriedenheit der Bewohner wider
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "25", label: "Jahre", sublabel: "fürsorglicher Service", color: "text-trust-green" },
              { number: "200+", label: "Familien", sublabel: "mit Exzellenz betreut", color: "text-warm-green" },
              { number: "50+", label: "Mitarbeiter", sublabel: "Engagierte Fachkräfte", color: "text-accent" },
              { number: "5", label: "Sterne Bewertung", sublabel: "Staatliche Zertifizierung", color: "text-trust-green", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.2),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`text-4xl font-bold ${stat.color} mb-2`}
                      initial={{ scale: 0 }}
                      animate={isStatsInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {stat.icon ? (
                        <div className="flex items-center justify-center space-x-1">
                          <span>{stat.number}</span>
                          <stat.icon className="w-8 h-8 animate-pulse-soft" fill="currentColor" />
                        </div>
                      ) : (
                        stat.number
                      )}
                    </motion.div>
                    <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        ref={testimonialsRef}
        initial={{ opacity: 0 }}
        animate={isTestimonialsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Was Familien sagen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Das Vertrauen und die Zufriedenheit unserer Familien ist unser größter Erfolg
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.2),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-gradient-to-br from-soft-cream to-accent/50 border-accent/20 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-8 h-8 text-trust-green mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Quote className="w-8 h-8" />
                    </motion.div>
                    <blockquote className="text-foreground leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={isTestimonialsInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.6 + (index * 0.2) + (i * 0.1) }}
                            whileHover={{ 
                              scale: 1.2,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Star className="w-4 h-4 text-accent" fill="currentColor" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Photo */}
      <motion.section 
        ref={teamRef}
        initial={{ opacity: 0 }}
        animate={isTeamInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-secondary/30 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isTeamInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-warm-green/20 to-transparent rounded-2xl"
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(34, 197, 94, 0.2)",
                    "0 0 20px rgba(34, 197, 94, 0.4)",
                    "0 0 0 rgba(34, 197, 94, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
              <img 
                src={commonAreaImage} 
                alt="Team und Bewohner"
                className="relative rounded-2xl shadow-card w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isTeamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Lernen Sie unsere Pflegefamilie kennen
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Unser Team engagierter Fachkräfte bringt jahrelange Erfahrung, 
                spezialisierte Ausbildung und echte Leidenschaft für die Seniorenpflege zusammen. 
                Von unseren lizenzierten Krankenschwestern bis hin zu unseren Aktivitätskoordinatoren 
                ist jedes Teammitglied darauf bedacht, eine positive, fördernde Umgebung zu schaffen.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {[
                  { icon: Clock, number: "24/7", label: "Pflege verfügbar" },
                  { icon: Calendar, number: "365", label: "Tage im Jahr" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300"
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isTeamInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.2) }}
                  >
                    <motion.div 
                      className="w-8 h-8 text-trust-green mx-auto mb-3"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <stat.icon className="w-8 h-8" />
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold text-foreground"
                      initial={{ scale: 0 }}
                      animate={isTeamInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.4 + (index * 0.2) }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Button variant="caring" size="lg">
                  Unser Team kennenlernen
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-trust-green to-trust-green/90 text-white"
        style={{
          backgroundImage: `url(${room})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Erleben Sie den Dreieich Pflege Unterschied
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Besuchen Sie uns, um aus erster Hand zu sehen, wie wir eine fürsorgliche 
              Gemeinschaft schaffen, in der Ihr Angehöriger wirklich gedeihen kann.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="warm" size="lg" className="text-lg px-8">
                  Rundgang vereinbaren
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-trust-green bg-white/10 backdrop-blur-sm">
                  Broschüre herunterladen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutPage;