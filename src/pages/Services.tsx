import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Holiday Packages",
      description: "Customized holiday packages tailored to your preferences and budget.",
      features: ["All-inclusive packages", "Flexible itineraries", "Local experiences"]
    },
    {
      title: "Flight Booking",
      description: "Best deals on domestic and international flights with 24/7 support.",
      features: ["Competitive prices", "Multiple airline options", "Easy cancellation"]
    },
    {
      title: "Hotel Booking",
      description: "Wide range of accommodations from budget to luxury hotels.",
      features: ["Verified properties", "Best price guarantee", "Instant confirmation"]
    },
    {
      title: "School & College Tours",
      description: "Educational tours designed for students to learn and explore new destinations.",
      features: ["Educational itineraries", "Safety-first approach", "Learning experiences"]
    },
    {
      title: "Industrial Visit",
      description: "Organized visits to industries and companies for educational and professional development.",
      features: ["Factory tours", "Expert guidance", "Knowledge enhancement"]
    },
    {
      title: "Group Tours",
      description: "Organized group tours with experienced guides and curated experiences.",
      features: ["Small group sizes", "Expert guides", "Cultural immersion"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We offer comprehensive travel services to make your journey seamless and memorable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
               
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;