import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Ambulance } from "lucide-react";
import outdoor from "@/assets/dominik-lange-VUOiQW4OeLI-unsplash.jpg";
import holdingHand from "@/assets/holdHand.jpg";
// import couplehug from "@/assets/female-nurse-taking-care-elderly-person.jpg";
import couplehug from "@/assets/vlad-sargu-ItphH2lGzuI-unsplash.jpg";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const ContactPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const emergencyRef = useRef(null);
  const isEmergencyInView = useInView(emergencyRef, { once: true, margin: "-50px" });

  const departmentsRef = useRef(null);
  const isDepartmentsInView = useInView(departmentsRef, { once: true, margin: "-50px" });

  const locationRef = useRef(null);
  const isLocationInView = useInView(locationRef, { once: true, margin: "-50px" });

  const contactFormRef = useRef(null);
  const isContactFormInView = useInView(contactFormRef, { once: true, margin: "-50px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const emergencyContacts = [
    {
      icon: Phone,
      title: "Notfall-Hotline",
      primary: "(555) 123-4567",
      secondary: "24/7 für dringende Angelegenheiten verfügbar",
      urgent: true
    },
    {
      icon: Ambulance,
      title: "Medizinischer Notfall",
      primary: "911",
      secondary: "Für lebensbedrohliche Situationen",
      urgent: true
    }
  ];

  const departments = [
    {
      icon: Phone,
      title: "Aufnahme",
      contact: "(555) 123-4568",
      email: "aufnahme@dreieichpflege.care",
      hours: "Mo-Fr: 8:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Familienbetreuung",
      contact: "(555) 123-4569",
      email: "familien@dreieichpflege.care",
      hours: "Täglich: 8:00 - 20:00"
    },
    {
      icon: Calendar,
      title: "Aktivitätenkoordinator",
      contact: "(555) 123-4570",
      email: "aktivitaeten@dreieichpflege.care",
      hours: "Mo-Fr: 9:00 - 17:00"
    },
    {
      icon: Car,
      title: "Transport",
      contact: "(555) 123-4571",
      email: "transport@dreieichpflege.care",
      hours: "Mo-Fr: 8:00 - 16:00"
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
        className="py-20 bg-gradient-to-br from-trust-green to-trust-green/40 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${couplehug})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh',
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
            {/* <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            > */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Kontakt aufnehmen
              </h1>
            {/* </motion.h1> */}
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Wir sind hier, um Ihre Fragen zu beantworten, Informationen bereitzustellen und Ihnen zu helfen, 
              zu entdecken, wie Dreieich Pflege das perfekte Zuhause für Ihren Angehörigen sein kann.
            </motion.p>
          {/* </motion.div> */}
          </div>
        </div>
      {/* </motion.section> */}
      </section>

      {/* Emergency Contacts */}
      {/* <motion.section 
        ref={emergencyRef}
        initial={{ opacity: 0 }}
        animate={isEmergencyInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gradient-to-r from-red-50 to-red-100/50 border-b-2 border-red-200"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              Notfallkontakte
            </h2>
            <p className="text-red-700">
              Wichtige Nummern für dringende Situationen
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isEmergencyInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                <Card className="border-red-200 bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-2">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-2 bg-red-600 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 rgba(220, 38, 38, 0.2)",
                          "0 0 20px rgba(220, 38, 38, 0.4)",
                          "0 0 0 rgba(220, 38, 38, 0.2)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-red-800">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-red-900 mb-1"
                      initial={{ scale: 0 }}
                      animate={isEmergencyInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                    >
                      {contact.primary}
                    </motion.div>
                    <div className="text-sm text-red-700">{contact.secondary}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Department Contacts */}
      <motion.section 
        ref={departmentsRef}
        initial={{ opacity: 0 }}
        animate={isDepartmentsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isDepartmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Abteilungskontakte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verbinden Sie sich direkt mit der richtigen Abteilung für Ihre spezifischen Bedürfnisse
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isDepartmentsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
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
                        <dept.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl text-foreground">{dept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { icon: Phone, content: dept.contact, type: "phone" },
                      { icon: Mail, content: dept.email, type: "email" },
                      { icon: Clock, content: dept.hours, type: "hours" }
                    ].map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isDepartmentsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.6 + (index * 0.2) + (itemIndex * 0.1)
                        }}
                      >
                        <motion.div 
                          className={`w-4 h-4 ${item.type === 'phone' ? 'text-trust-green' : 'text-trust-green'}`}
                          whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <item.icon className="w-4 h-4" />
                        </motion.div>
                        <span className={item.type === 'phone' ? 'font-semibold text-foreground' : 'text-muted-foreground'}>
                          {item.content}
                        </span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location & Hours */}
      <motion.section 
        ref={locationRef}
        initial={{ opacity: 0 }}
        animate={isLocationInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isLocationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Besuchen Sie unsere Einrichtung
              </motion.h2>
              
              {[
                {
                  title: "Standort",
                  icon: MapPin,
                  content: (
                    <>
                      <div className="text-lg font-semibold text-foreground">
                        Dreieich Pflege Senior Living
                      </div>
                      <div className="text-muted-foreground">
                        Freiherr-vom-Stein-Straße 42<br />
                        63303 Dreieich, Deutschland
                      </div>
                      <div className="pt-3">
                        <div className="text-sm text-muted-foreground mb-2">Einfach erreichbar über:</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bundesautobahn 3, Ausfahrt 42</li>
                          <li>• Buslinie 551, 552 (Haltestelle vor Ort)</li>
                          <li>• Kostenlose Parkplätze verfügbar</li>
                        </ul>
                      </div>
                    </>
                  )
                },
                {
                  title: "Besuchszeiten",
                  icon: Clock,
                  content: (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-semibold text-foreground">Allgemeine Besuche</div>
                          <div className="text-muted-foreground">Täglich: 8:00 - 20:00</div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Mahlzeiten</div>
                          <div className="text-muted-foreground">Gerne zum Mitessen eingeladen</div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          <strong>Führungen:</strong> Täglich nach Vereinbarung verfügbar<br />
                          <strong>Besondere Vereinbarungen:</strong> Kontaktieren Sie uns für längere Besuche
                        </div>
                      </div>
                    </>
                  )
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isLocationInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <motion.div
                          className="w-5 h-5 text-trust-green"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <card.icon className="w-5 h-5" />
                        </motion.div>
                        <span>{card.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {card.content}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced Map Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={isLocationInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-6 shadow-2xl border border-border/50">
                {/* Map Header */}
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Standort</h3>
                      <p className="text-sm text-muted-foreground">Freiherr-vom-Stein-Straße 42, Dreieich</p>
                    </div>
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-trust-green text-white rounded-lg text-sm font-medium hover:bg-trust-green/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Route planen
                  </motion.button>
                </motion.div>

                {/* Map Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.1234567890123!2d8.6969!3d50.0169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAxJzA5LjQiTiA4wrA0MSc0OC44IkU!5e0!3m2!1sen!2sde!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dreieich Pflege Senior Living Location"
                  ></iframe>
                </div>

                {/* Transportation Info */}
                <motion.div 
                  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLocationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50"
                    whileHover={{ 
                      y: -2,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">🚌</span>
                      </div>
                      <h4 className="font-semibold text-foreground">Öffentliche Verkehrsmittel</h4>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Bus 551, 552</div>
                      <div>Haltestelle: Dreieich-Buchschlag</div>
                      <div>Fahrzeit: 5-10 Min</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200/50"
                    whileHover={{ 
                      y: -2,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">🚗</span>
                      </div>
                      <h4 className="font-semibold text-foreground">Parken</h4>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Kostenlos verfügbar</div>
                      <div>Behindertenparkplätze</div>
                      <div>24/7 Zugang</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 border border-purple-200/50"
                    whileHover={{ 
                      y: -2,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">⏰</span>
                      </div>
                      <h4 className="font-semibold text-foreground">Besuchszeiten</h4>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Täglich: 8:00 - 20:00</div>
                      <div>Führungen nach Vereinbarung</div>
                      <div>Notfall: 24/7</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Form Section */}
      <motion.div
        ref={contactFormRef}
        initial={{ opacity: 0 }}
        animate={isContactFormInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactPage;