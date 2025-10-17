import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import commonAreaImage from "@/assets/common-area.jpg";
import bedroomImage from "@/assets/bedroom.jpg";

const facilities = [
  {
    title: "Comfortable Living Spaces",
    description: "Private and semi-private rooms designed to feel like home, with personal furnishings and modern amenities.",
    image: bedroomImage,
    features: ["Private bathrooms", "Emergency call systems", "Climate control", "Personal furniture welcome"],
  },
  {
    title: "Community Areas",
    description: "Beautiful common spaces for socializing, dining, and activities that foster connections and engagement.",
    image: commonAreaImage,
    features: ["Dining hall", "Activity rooms", "Garden patio", "Library and reading nooks"],
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Modern Facilities, Homely Atmosphere
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our thoughtfully designed spaces combine comfort, safety, and accessibility 
            to create an environment that truly feels like home.
          </p>
        </div>
        
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="overflow-hidden shadow-card">
                  <CardContent className="p-0">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-96 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-foreground">{facility.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
                
                <ul className="space-y-3">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-trust-green rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="caring" className="mt-6">
                  View Virtual Tour
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;