import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, MapPin, Star, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import andamanImage from "@/assets/destinations/andaman.jpg";
import lakshadweepImage from "@/assets/destinations/lakshadweep.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import uaeImage from "@/assets/destinations/uae.jpg";
import thailandImage from "@/assets/destinations/thailand.jpg";
import turkeyImage from "@/assets/destinations/turkey.jpg";

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

const destinationData = {
  andaman: {
    name: "Andaman",
    image: andamanImage,
    rating: 4.8,
    duration: "5-7 Days",
    bestTime: "Oct - May",
    description: "Discover the pristine beauty of Andaman Islands with crystal clear waters, white sandy beaches, and vibrant marine life. Perfect for water sports, diving, and romantic getaways.",
    highlights: [
      "Radhanagar Beach - Asia's Best Beach",
      "Cellular Jail - Historical Significance",
      "Scuba Diving & Snorkeling",
      "Mangrove Kayaking",
      "Light & Sound Show"
    ],
    travelInfo: {
      duration: "5-7 Days",
      bestTime: "October to May",
      groupSize: "2-15 people"
    }
  },
  lakshadweep: {
    name: "Lakshadweep",
    image: lakshadweepImage,
    rating: 4.7,
    duration: "4-6 Days",
    bestTime: "Oct - Mar",
    description: "Experience the untouched beauty of India's coral islands with turquoise lagoons, pristine beaches, and rich marine biodiversity.",
    highlights: [
      "Agatti Island - Gateway to Lakshadweep",
      "Bangaram Island - Coral Paradise",
      "Water Sports & Diving",
      "Traditional Island Culture",
      "Marine Life Sanctuary"
    ],
    travelInfo: {
      duration: "4-6 Days",
      bestTime: "October to March",
      groupSize: "2-12 people"
    }
  },
  maldives: {
    name: "Maldives",
    image: maldivesImage,
    rating: 4.9,
    duration: "4-7 Days",
    bestTime: "Nov - Apr",
    description: "Escape to the Maldives for the ultimate luxury tropical experience with overwater villas, world-class resorts, and unparalleled natural beauty.",
    highlights: [
      "Overwater Villa Experience",
      "Male City Tour",
      "Sunset Dolphin Cruise",
      "Underwater Restaurant Dining",
      "Private Beach Access"
    ],
    travelInfo: {
      duration: "4-7 Days",
      bestTime: "November to April",
      groupSize: "2-10 people"
    }
  },
  uae: {
    name: "UAE",
    image: uaeImage,
    rating: 4.6,
    duration: "4-6 Days",
    bestTime: "Nov - Mar",
    description: "Experience the perfect blend of modern luxury and traditional culture in the United Arab Emirates, from Dubai's skyscrapers to Abu Dhabi's heritage.",
    highlights: [
      "Burj Khalifa & Dubai Mall",
      "Desert Safari Adventure",
      "Sheikh Zayed Grand Mosque",
      "Dubai Marina & JBR Beach",
      "Gold & Spice Souks"
    ],
    travelInfo: {
      duration: "4-6 Days",
      bestTime: "November to March",
      groupSize: "2-20 people"
    }
  },
  thailand: {
    name: "Thailand",
    image: thailandImage,
    rating: 4.7,
    duration: "5-8 Days",
    bestTime: "Nov - Feb",
    description: "Discover the Land of Smiles with its rich culture, stunning temples, beautiful beaches, and delicious cuisine that will captivate all your senses.",
    highlights: [
      "Grand Palace & Wat Pho Temple",
      "Phi Phi Islands & Maya Bay",
      "Floating Markets Experience",
      "Thai Cooking Classes",
      "Elephant Sanctuary Visit"
    ],
    travelInfo: {
      duration: "5-8 Days",
      bestTime: "November to February",
      groupSize: "2-25 people"
    }
  },
  turkey: {
    name: "Turkey",
    image: turkeyImage,
    rating: 4.8,
    duration: "6-9 Days",
    bestTime: "Apr - Jun, Sep - Nov",
    description: "Journey through Turkey's rich history and stunning landscapes, from the fairy chimneys of Cappadocia to the ancient ruins of Ephesus.",
    highlights: [
      "Hot Air Balloon in Cappadocia",
      "Hagia Sophia & Blue Mosque",
      "Pamukkale Thermal Pools",
      "Ephesus Ancient City",
      "Grand Bazaar Shopping"
    ],
    travelInfo: {
      duration: "6-9 Days",
      bestTime: "April to June, September to November",
      groupSize: "2-30 people"
    }
  }
};

const DestinationDetails = () => {
  const { name } = useParams();
  const destination = destinationData[name as keyof typeof destinationData];

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Destination Not Found</h1>
          <Link to="/destinations">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBookNow = (packageName: string) => {
    const message = `Hi La Vida Holidays! I'm interested in booking the ${packageName} package for ${destination.name}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCustomPackage = () => {
    const message = `Hi La Vida Holidays! I'd like to create a custom package for ${destination.name}. Can you help me plan my trip?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleContactExpert = () => {
    const message = `Hi La Vida Holidays! I need expert consultation for my ${destination.name} trip. Please help me plan the perfect vacation.`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/destinations">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="flex items-end justify-between text-white">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">{destination.name}</h1>
                  <div className="flex items-center gap-6 text-lg">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-5 w-5" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-5 w-5" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">About {destination.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Top Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Travel Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Travel Information</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-muted/50 rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Duration</h3>
                    <p className="text-muted-foreground">{destination.travelInfo.duration}</p>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-lg">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Best Time</h3>
                    <p className="text-muted-foreground">{destination.travelInfo.bestTime}</p>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">Group Size</h3>
                    <p className="text-muted-foreground">{destination.travelInfo.groupSize}</p>
                  </div>
                </div>
              </section>

              {/* All Available Packages */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Available Packages</h2>
                <div className="space-y-6">
                  {Object.entries(packages).map(([duration, packageList]) => (
                    <Card key={duration} className="overflow-hidden">
                      <CardHeader className="bg-primary/5">
                        <CardTitle className="text-primary capitalize">
                          {duration.replace('-', ' ')} Packages
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {packageList.map((packageName, index) => (
                            <div
                              key={index}
                              className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                              onClick={() => handleBookNow(packageName)}
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-foreground text-sm">{packageName}</h4>
                                <Button size="sm" variant="outline" className="ml-2">
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Booking */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full" 
                    onClick={handleCustomPackage}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Request Custom Package
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleContactExpert}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Expert
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                    <p className="text-muted-foreground">+91 7736890053</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                    <p className="text-muted-foreground">info@lavidaholidays.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Why Choose La Vida Holidays?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">14+ Years of Experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Customized Itineraries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Best Price Guarantee</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetails;