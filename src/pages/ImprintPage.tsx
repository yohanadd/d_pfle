import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone,  MapPin, User, Building } from "lucide-react";

const ImprintPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-trust-green to-trust-green/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Rechtliche Informationen und Kontaktdaten der Pflegedienst 3eich GmbH
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Company Information */}
            <Card className="mb-12 border-trust-green/20 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-trust-green/5 to-trust-green/10">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-trust-green" />
                  Unternehmensinformationen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Verantwortlich:</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-trust-green mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Geschäftsführerin und Pflegedienstleiterin:</h4>
                        <p className="text-gray-700">Magdalena Glowa - Examinierte Altenpflegerin</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-trust-green mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Geschäftsführerin und stellvertretende Pflegedienstleiterin:</h4>
                        <p className="text-gray-700">Puneet Kaur Parmar - Krankenschwester</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Kontakt:</h3>
                    
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-trust-green" />
                      <div>
                        <div className="font-medium text-gray-900">Pflegedienst 3eich GmbH</div>
                        <div className="text-gray-700">Freiherr-vom-Stein-Straße 42</div>
                        <div className="text-gray-700">63303 Dreieich-Sprendlingen</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-trust-green" />
                      <div>
                        <div className="font-medium text-gray-900">Telefon:</div>
                        <div className="text-gray-700">06103-8025731</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                     
                      <div>
                        <div className="font-medium text-gray-900">Fax:</div>
                        <div className="text-gray-700">06103-8025734</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-trust-green" />
                      <div>
                        <div className="font-medium text-gray-900">E-mail:</div>
                        <div className="text-gray-700">pflegedienst.3eich@yahoo.com</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Rechtliche Informationen:</h3>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900 mb-2">Handelsregisternummer:</div>
                      <div className="text-gray-700">55045</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900 mb-2">Rechtsform:</div>
                      <div className="text-gray-700">Gesellschaft mit beschränkter Haftung (GmbH)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Sections */}
            <div className="space-y-8">
              {/* Haftungsausschluss */}
              <Card className="border-trust-green/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-trust-green/5 to-trust-green/10">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Haftungsausschluss (Disclaimer)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h3>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                        rechtswidrige Tätigkeit hinweisen.
                      </p>
                      <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
                        den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
                        ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                        möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir 
                        diese Inhalte umgehend entfernen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Links</h3>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir 
                        keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                        Anbieter oder Betreiber der Seiten verantwortlich.
                      </p>
                      <p>
                        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der 
                        verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
                        nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                        Links umgehend entfernen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h3>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                      <p>
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                        Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
                        Inhalte Dritter als solche gekennzeichnet.
                      </p>
                      <p>
                        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten 
                        wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                        werden wir derartige Inhalte umgehend entfernen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImprintPage;