import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, Users, Shield, Clock, Phone } from "lucide-react";
import CoupleWalking from "@/assets/couple.avif";

const services = [
  {
    title: "Hauswirtschaftliche Hilfe",
    description: "Professionelle Unterstützung bei Haushalt, Einkäufen und täglicher Organisation.",
    // description: "Professionelle Unterstützung bei der Haushaltsführung, Einkäufen und der täglichen Organisation.",
    icon: Home,
    color: "from-trust-green to-trust-green/80"
  },
  {
    title: "Entlastungsleistungen",
    description: "Entlastung für pflegende Angehörige durch qualifizierte Betreuung und Unterstützung.",
    icon: Shield,
    color: "from-compassionate-green to-compassionate-green/80"
  },
  {
    title: "Beratung & Planung",
    description: "Umfassende Beratung zu Pflegeleistungen, Anträgen und individuellen Betreuungsplänen.",
    icon: Users,
    color: "from-accent-orange to-accent-orange/80"
  },
  {
    title: "Gesellschaft & Begleitung",
    description: "Menschliche Begleitung, Gespräche und gemeinsame Aktivitäten für mehr Lebensqualität.",
    icon: Heart,
    color: "from-compassionate-green to-compassionate-green/80"
  },
  {
    title: "Pflegehilfsmittel",
    description: "Beratung und Unterstützung bei der Beschaffung und Nutzung von Pflegehilfsmitteln.",
    icon: Shield,
    color: "from-trust-green to-trust-green/80"
  },
  {
    title: "24/7 Notfallbetreuung",
    description: "Rund um die Uhr erreichbar für Notfälle und dringende Betreuungsanfragen.",
    icon: Clock,
    color: "from-accent-orange to-accent-orange/80"
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${CoupleWalking})`,
      }}
    > 
      <div className="absolute inset-0 bg-black/30"></div>

     {/* <div className="absolute inset-0 bg-gradient-to-b from-background/8 to-secondary/7 backdrop-blur-sm"></div> */}

    {/* Content wrapper */}
    <div className="relative container mx-auto px-6">     
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Wir bieten ein umfassendes Spektrum an Pflege- und Betreuungsleistungen, 
            die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:animate-float transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="text-center">
                  <Button variant="warm" size="sm" className="w-full">
                    Mehr erfahren
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-trust-green to-trust-green/90 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Individuelle Beratung gewünscht?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie sich kostenlos und unverbindlich von unseren Experten beraten. 
              Wir finden gemeinsam die beste Lösung für Ihre Situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Kostenlose Beratung
              </Button>
              <Button variant="warm" size="lg" className="text-lg px-8">
                Broschüre herunterladen
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;