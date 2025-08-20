import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, MapPin, MessageCircle, Phone } from "lucide-react";

const packages = {
  "one-day": [
    "Fantasy Park & Malampuzha",
    "Silver Storm",
    "Dream World",
    "Bhoothathankettu Dam & Thumboormuzhi",
    "Kochi City Sightseeing",
    "Alleppey",
    "Peechi Dam to Thrissur Zoo",
    "Peechi Dam, Nelliampathu",
    "Athirapilly, Vazhachal, Ezhattumuqam",
    "Trivandrum",
    "Malampuzha & Dhoni",
    "Vagamon Hills & Parunthumpara View Point",
    "Munnar",
    "Wayanad",
    "Ooty Hills",
    "Kodaikanal Hills",
    "Munnar & Thekkady",
    "Trivandrum & Kanyakumari",
    "Yeracaud Hills",
    "Valapai Hills",
    "Ponmudi & Trivandrum",
    "Kolli Hills",
    "Valparai Hills",
    "Coorg (Kodagu)",
    "Mysore",
    "Bangalore",
    "Hogenakkal Falls"
  ],
  "two-days": [
    "Wayanad",
    "Ooty Hills",
    "Kodaikanal Hills",
    "Munnar & Thekkady",
    "Trivandrum & Kanyakumari",
    "Yeracaud Hills",
    "Valapai Hills",
    "Ponmudi & Trivandrum",
    "Kolli Hills",
    "Valparai Hills",
    "Coorg (Kodagu)",
    "Mysore",
    "Bangalore",
    "Hogenakkal Falls",
    "Chikkamagaluru & Coorg"
  ],
  "three-days": [
    "Mysore & Ooty",
    "Wayanad & Mysore",
    "Hogenakkal Falls & Yercaud Hills",
    "Chennai & Pondicherry",
    "Mysore & Coorg (Kodagu)",
    "Coorg (Kodagu) & Chikkamagaluru",
    "Thekkady, Kodaikanal & Rameshwaram",
    "Chennai, Mahabalipuram, Pondicherry & Kanchipuram"
  ],
  "four-days": [
    "Bangalore, Mysore & Coorg (Kodagu)",
    "Coorg (Kodagu), Belur & Chikkamagaluru",
    "Coorg (Kodagu), Chikkamagaluru & Dandeli",
    "Maple Beach (St. Mary's Island), Gokarna Beach & Dandeli",
    "Murudeshwar Beach, Gokarna Beach & Dandeli"
  ],
  "five-days": [
    "Goa (Grand Island & Dudhsagar Waterfalls)",
    "Goa",
    "Goa & Dandeli",
    "Goa & Malvan"
  ],
  "six-days": [
    "Hyderabad"
  ],
  "eight-days": [
    "Delhi, Agra & Jaipur",
    "Kulu, Manali & Kasol"
  ]
};

const Packages = () => {
  const handlePackageInquiry = (packageName: string, duration: string) => {
    const message = `Hi La Vida Holidays! I'm interested in the ${packageName} package (${duration.replace('-', ' ')}). Could you please provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCustomPackage = () => {
    const message = `Hi La Vida Holidays! I'd like to create a custom travel package. Can you help me plan my trip?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleContactExpert = () => {
    const message = `Hi La Vida Holidays! I need expert consultation for planning my vacation. Please help me choose the perfect package.`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Travel Packages
            </h1>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our carefully curated travel packages designed to give you the best experiences. From one-day trips to extended vacations, we have something for every traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCustomPackage} size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Custom Package
              </Button>
              <Button variant="outline" onClick={handleContactExpert} size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Contact Expert
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {Object.entries(packages).map(([duration, packageList]) => (
              <Card key={duration} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-primary text-2xl capitalize flex items-center gap-3">
                    <Clock className="h-6 w-6" />
                    {duration.replace('-', ' ')} Packages
                    <span className="text-sm font-normal text-muted-foreground">
                      ({packageList.length} packages available)
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packageList.map((packageName, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => handlePackageInquiry(packageName, duration)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                              {packageName}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                              <MapPin className="h-4 w-4" />
                              <span>{duration.replace('-', ' ')} tour</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Get Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Need Help Choosing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our travel experts are here to help you find the perfect package for your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 7736890053</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@lavidaholidays.com</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;