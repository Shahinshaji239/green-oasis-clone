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


const destinationData = {
  hyderabad: {
    name: "Hyderabad",
    image: uaeImage,
    rating: 4.7,
    duration: "3-4 Days",
    bestTime: "Oct - Mar",
    description: "The City of Pearls, Hyderabad offers a perfect blend of historic charm and modern technology. Famous for its biryani, pearls, and magnificent monuments like Charminar and Golconda Fort.",
    highlights: [
      "Charminar - Iconic Monument",
      "Golconda Fort - Historic Architecture",
      "Hussain Sagar Lake - Boat Rides", 
      "Ramoji Film City - World's Largest",
      "Birla Mandir - Beautiful Temple"
    ],
    travelInfo: {
      duration: "3-4 Days",
      bestTime: "October to March",
      groupSize: "2-20 people"
    }
  },
  "delhi-agra": {
    name: "Delhi, Agra",
    image: thailandImage,
    rating: 4.8,
    duration: "4-5 Days",
    bestTime: "Oct - Mar",
    description: "Experience India's golden triangle with Delhi's bustling streets and historical monuments, plus Agra's world-famous Taj Mahal - a perfect combination of culture and heritage.",
    highlights: [
      "Taj Mahal - Wonder of the World",
      "Red Fort - Mughal Architecture",
      "India Gate - War Memorial",
      "Qutub Minar - UNESCO Site",
      "Agra Fort - Historic Fortress"
    ],
    travelInfo: {
      duration: "4-5 Days", 
      bestTime: "October to March",
      groupSize: "2-25 people"
    }
  },
  "kashmir-manali": {
    name: "Kashmir, Manali",
    image: turkeyImage,
    rating: 4.9,
    duration: "6-8 Days",
    bestTime: "Apr - Jun, Sep - Oct",
    description: "Paradise on earth! Experience the breathtaking beauty of Kashmir's valleys and lakes combined with Manali's snow-capped mountains and adventure activities.",
    highlights: [
      "Dal Lake - Shikara Rides",
      "Gulmarg - Skiing & Gondola",
      "Solang Valley - Adventure Sports",
      "Rohtang Pass - Snow Activities",
      "Mughal Gardens - Scenic Beauty"
    ],
    travelInfo: {
      duration: "6-8 Days",
      bestTime: "April to June, September to October", 
      groupSize: "2-15 people"
    }
  },
  munnar: {
    name: "Munnar",
    image: andamanImage,
    rating: 4.6,
    duration: "3-4 Days",
    bestTime: "Sep - Mar",
    description: "Kerala's enchanting hill station with rolling tea plantations, misty mountains, and cool climate. Perfect for honeymoons and nature lovers seeking tranquility.",
    highlights: [
      "Tea Plantations - Scenic Drives",
      "Eravikulam National Park",
      "Mattupetty Dam - Boating",
      "Echo Point - Nature's Wonder",
      "Anamudi Peak - Highest in South India"
    ],
    travelInfo: {
      duration: "3-4 Days",
      bestTime: "September to March",
      groupSize: "2-12 people"
    }
  },
  kodaikkanal: {
    name: "Kodaikkanal", 
    image: lakshadweepImage,
    rating: 4.5,
    duration: "3-4 Days",
    bestTime: "Apr - Jun, Sep - Oct",
    description: "The Princess of Hill Stations in Tamil Nadu, famous for its star-shaped lake, misty hills, and peaceful atmosphere perfect for romantic getaways.",
    highlights: [
      "Kodai Lake - Star Shaped Lake",
      "Coaker's Walk - Scenic Pathway",
      "Bryant Park - Botanical Garden",
      "Pillar Rocks - Natural Formation",
      "Silver Cascade Falls - Waterfall"
    ],
    travelInfo: {
      duration: "3-4 Days",
      bestTime: "April to June, September to October",
      groupSize: "2-15 people"
    }
  },
  goa: {
    name: "Goa",
    image: maldivesImage,
    rating: 4.7,
    duration: "4-6 Days", 
    bestTime: "Nov - Feb",
    description: "India's beach paradise with golden sandy beaches, vibrant nightlife, Portuguese colonial heritage, water sports, and delicious seafood cuisine.",
    highlights: [
      "Baga & Calangute Beaches",
      "Old Goa Churches - UNESCO Sites",
      "Dudhsagar Falls - Majestic Waterfall",
      "Water Sports & Beach Activities",
      "Night Markets & Beach Shacks"
    ],
    travelInfo: {
      duration: "4-6 Days",
      bestTime: "November to February",
      groupSize: "2-20 people"
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

  const handleViewPackages = () => {
    const message = `Hi La Vida Holidays! I'm interested in packages for ${destination.name}. Could you please share available options?`;
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

              {/* Call to Action */}
              <section>
                <div className="text-center bg-primary/5 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Explore {destination.name}?</h2>
                  <p className="text-muted-foreground mb-6">
                    Contact our travel experts to create your perfect {destination.name} experience with customized packages.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={handleViewPackages} size="lg">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View Packages
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleCustomPackage}>
                      Request Custom Package
                    </Button>
                  </div>
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
                    onClick={handleViewPackages}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    View All Packages
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