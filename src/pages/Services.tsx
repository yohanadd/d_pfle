import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Stethoscope, Utensils, Activity, Shield, Home, Brain, Dumbbell, Music, Palette } from "lucide-react";
import diningImage from "@/assets/food.jpeg";
import rehabImage from "@/assets/therapy.jpeg";
import activitiesImage from "@/assets/daily_activity.jpeg";
import outdoor from "@/assets/care-for-the-elderly-6960542_1920.jpg";
import holdingHand from "@/assets/holdHand.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Persönliche Pflege",
    description: "Individuelle Pflegepläne, die auf die einzigartigen Bedürfnisse und Vorlieben jedes Bewohners zugeschnitten sind.",
    details: ["Tägliche Gesundheitsüberwachung", "Medikamentenverwaltung", "Hilfe bei der persönlichen Hygiene", "Mobilitätsunterstützung"]
  },
  {
    icon: Stethoscope,
    title: "Medizinische Unterstützung",
    description: "24/7 Pflege mit medizinischem Fachpersonal vor Ort und regelmäßiger Gesundheitsüberwachung.",
    details: ["Lizenzierte Pflegekräfte", "Regelmäßige Gesundheitsbewertungen", "Notfallreaktion", "Arztkoordination"]
  },
  {
    icon: Utensils,
    title: "Nahrhafte Verpflegung",
    description: "Koch-zubereitete Mahlzeiten mit diätetischen Anpassungen und flexiblen Essenszeiten.",
    details: ["Drei tägliche Mahlzeiten plus Snacks", "Besondere Ernährungsbedürfnisse", "Frische, lokale Zutaten", "Soziale Essenserfahrung"]
  },
  {
    icon: Activity,
    title: "Engagierende Aktivitäten",
    description: "Soziale Programme, Fitnesskurse und Freizeitaktivitäten zur Förderung des Wohlbefindens.",
    details: ["Tägliche Aktivitätsprogramme", "Bewegungsklassen", "Kunst und Handwerk", "Live-Unterhaltung"]
  },
  {
    icon: Users,
    title: "Familienunterstützung",
    description: "Offene Kommunikation und familiäre Beteiligung an Pflegeentscheidungen und Aktivitäten.",
    details: ["Regelmäßige Familientreffen", "Pflegeplan-Updates", "Flexible Besuchszeiten", "Familienveranstaltungen"]
  },
  {
    icon: Clock,
    title: "Verhinderungspflege",
    description: "Kurzzeitpflege-Dienste zur Entlastung von Familienpflegern.",
    details: ["Tägliche oder wöchentliche Aufenthalte", "Notfall-Verhinderungspflege", "Probeaufenthalte verfügbar", "Umfassende Bewertungen"]
  },
];

const specialtyServices = [
  {
    icon: Brain,
    title: "Gedächtnispflege",
    description: "Spezialisierte Programme für Bewohner mit Alzheimer und Demenz",
    features: ["Sichere Umgebung", "Kognitive Therapien", "Familienbildung", "Strukturierte Routinen"]
  },
  {
    icon: Dumbbell,
    title: "Rehabilitationsdienste",
    description: "Physio- und Ergotherapie zur Erhaltung der Selbstständigkeit",
    features: ["Physiotherapie", "Ergotherapie", "Logopädie", "Erholungsplaning"]
  },
  {
    icon: Shield,
    title: "Übergangspflege",
    description: "Unterstützung für Bewohner, die sich von Krankenhausaufenthalten erholen",
    features: ["Post-OP-Pflege", "Medikamentenüberwachung", "Erholungsplanung", "Familienkoordination"]
  },
  {
    icon: Home,
    title: "Unterstützung für selbstständiges Leben",
    description: "Hilfe bei gleichzeitiger Wahrung maximaler Selbstständigkeit",
    features: ["Haushaltsführung", "Mahlzeitenzubereitung", "Transport", "Soziale Aktivitäten"]
  }
];

const Services = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });

  const specialtyRef = useRef(null);
  const isSpecialtyInView = useInView(specialtyRef, { once: true, margin: "-50px" });

  const highlightsRef = useRef(null);
  const isHighlightsInView = useInView(highlightsRef, { once: true, margin: "-50px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen font-montserrat" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-br from-trust-green to-trust-green/90 text-white relative overflow-hidden" 
        style={{
          backgroundImage: `url(${outdoor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          backgroundRepeat: 'no-repeat',
          minHeight: '46vh',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div 
          className="absolute inset-0 bg-trust-green/5"
          style={{ y }}
        ></motion.div>
        <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center py-20">
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Umfassende Pflegedienste
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Wir bieten ein vollständiges Spektrum an Dienstleistungen, die darauf ausgerichtet sind, 
              das körperliche, emotionale und soziale Wohlbefinden unserer Bewohner mit personalisierten 
              Pflegeplänen zu unterstützen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <motion.section 
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kernpflegedienste
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere grundlegenden Dienstleistungen bilden die Grundlage für außergewöhnliche Seniorenpflege
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isServicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group hover:shadow-card transition-all duration-300 border-border/50 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex} 
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + (index * 0.15) + (detailIndex * 0.08)
                          }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-trust-green rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: detailIndex * 0.2 }}
                          ></motion.div>
                          <span className="text-muted-foreground">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Specialty Services */}
      <motion.section 
        ref={specialtyRef}
        initial={{ opacity: 0 }}
        animate={isSpecialtyInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSpecialtyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Spezialpflegeprogramme
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fortgeschrittene Programme, die für spezifische Pflegebedürfnisse und Erholungsziele entwickelt wurden
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isSpecialtyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group hover:shadow-card transition-all duration-300 border-border/50 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-lg flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isSpecialtyInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + (index * 0.15) + (featureIndex * 0.08)
                          }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-trust-green rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                          ></motion.div>
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Highlights */}
      <motion.section 
        ref={highlightsRef}
        initial={{ opacity: 0 }}
        animate={isHighlightsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-secondary/30 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {/* Dining Services */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Utensils className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-trust-green font-semibold">Kulinarische Exzellenz</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  Gourmet-Dining-Erlebnis
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  Unser professionelles Küchenteam erstellt köstliche, ernährungsphysiologisch ausgewogene Mahlzeiten 
                  mit frischen, lokal bezogenen Zutaten. Besondere Ernährungsbedürfnisse und Vorlieben 
                  werden sorgfältig berücksichtigt.
                </motion.p>
                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={isHighlightsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  {[
                    "Täglich zubereitete Menüs vom Koch",
                    "Besondere Diätanpassungen", 
                    "Flexible Essenszeiten"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.4 + (index * 0.15) }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-trust-green rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      ></motion.div>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
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
                  src={diningImage} 
                  alt="Speisesaal"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Rehabilitation */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div 
                  className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-trust-green/20 to-transparent rounded-2xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(34, 197, 94, 0.2)",
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                      "0 0 0 rgba(34, 197, 94, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                ></motion.div>
                <img 
                  src={rehabImage} 
                  alt="Rehabilitationsraum"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Dumbbell className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-trust-green font-semibold">Erholung & Wohlbefinden</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Rehabilitation & Therapie
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Unser modernes Rehabilitationszentrum bietet umfassende Therapiedienste 
                  zur Erhaltung der Mobilität, Erholung von Verletzungen und Verbesserung 
                  der Lebensqualität.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Activities */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHighlightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Activity className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-trust-green font-semibold">Bereicherungsprogramme</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Tägliche Aktivitäten & Programme
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Unser vielfältiges Aktivitätsprogramm fördert soziale Beteiligung, kognitive Stimulation 
                  und persönliche Erfüllung durch eine Vielzahl von Freizeit- und Bildungsmöglichkeiten.
                </motion.p>
                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  {[
                    { icon: Music, label: "Musiktherapie" },
                    { icon: Palette, label: "Kunstkurse" },
                    { icon: Users, label: "Soziale Events" }
                  ].map((activity, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHighlightsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.8 + (index * 0.2) }}
                      whileHover={{ 
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-lg flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <activity.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-sm text-foreground font-medium">{activity.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={isHighlightsInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
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
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                ></motion.div>
                <img 
                  src={activitiesImage} 
                  alt="Aktivitätsprogramme"
                  className="relative rounded-2xl shadow-card w-full h-80 object-cover"
                />
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
        className="py-20 bg-gradient-to-r from-trust-green to-trust-green/90 text-white relative"
        style={{
          backgroundImage: `url(${holdingHand})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Bereit, mehr über unsere Dienste zu erfahren?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Vereinbaren Sie eine persönliche Beratung, um zu besprechen, wie unsere Dienste 
              die einzigartigen Bedürfnisse Ihres Angehörigen erfüllen können.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white text-trust-green hover:bg-gray-100 font-semibold border-2 border-white transition-all duration-300 shadow-lg"
                  onClick={handleContactClick}
                >
                  Kontaktieren Sie uns
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

export default Services;