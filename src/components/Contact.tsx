import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30 font-montserrat">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind für Sie da! Kontaktieren Sie uns für eine kostenlose Beratung 
            oder bei Fragen zu unseren Dienstleistungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Sprechen Sie mit uns
              </h3>
              <p className="text-muted-foreground mb-8">
                Unser Team steht Ihnen gerne zur Verfügung für eine persönliche Beratung 
                oder bei Fragen zu unseren Dienstleistungen.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-trust-green/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefon</h4>
                      <p className="text-lg font-bold text-trust-green">+491606397787</p>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 9:00 - 15:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-compassionate-green/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">E-Mail</h4>
                      <p className="text-trust-green font-medium">info@dreieich-pflege.de</p>
                      <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent-orange/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Adresse</h4>
                      <p className="text-muted-foreground">Freiherr-vom-Stein-Straße 42</p>
                      <p className="text-muted-foreground">63303 Dreieich-Sprendlingen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-compassionate-green/20 hover:shadow-soft transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-green to-trust-green/80 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Öffnungszeiten</h4>
                      <p className="text-muted-foreground">Mo-Fr: 9:00 - 15:00</p>
                      <p className="text-muted-foreground">Sa-So: Geschlossen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Kostenlose Beratung anfordern
              </CardTitle>
              <p className="text-muted-foreground">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Vorname *
                  </label>
                  <Input placeholder="Ihr Vorname" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nachname *
                  </label>
                  <Input placeholder="Ihr Nachname" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  E-Mail *
                </label>
                <Input type="email" placeholder="ihre.email@beispiel.de" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Telefon
                </label>
                <Input placeholder="+491606397787" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Gewünschte Dienstleistung
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground font-montserrat">
                  <option>Bitte wählen Sie</option>
                  <option>Hauswirtschaftliche Hilfe</option>
                  <option>Entlastungsleistungen</option>
                  <option>Beratung & Planung</option>
                  <option>Gesellschaft & Begleitung</option>
                  <option>Pflegehilfsmittel</option>
                  <option>Notfallbetreuung</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Ihre Nachricht
                </label>
                <Textarea 
                  placeholder="Beschreiben Sie Ihre Situation und Wünsche..."
                  rows={4}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground font-montserrat">
                  Ich stimme der{" "}
                  <Link to="/privacy" className="text-trust-green hover:underline font-medium">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu *
                </label>
              </div>
              
              <Button variant="trust" size="lg" className="w-full font-montserrat">
                <MessageCircle className="w-5 h-5 mr-2" />
                Beratung anfordern
              </Button>
              
              <p className="text-xs text-muted-foreground text-center font-montserrat">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;