import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, MapPin, Star, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hyderabadImage from "@/assets/destinations/hyderabad.png";
import agraImage from "@/assets/destinations/agra.png";
import manaliImage from "@/assets/destinations/manali.png";
import munnarImage from "@/assets/destinations/munnar.png";
import kodaikanalImage from "@/assets/destinations/kodaikanal.png";
import goaImage from "@/assets/destinations/goa.png";


const destinationData = {
  hyderabad: {
    name: "Hyderabad",
    image: hyderabadImage,
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
    image: agraImage,
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
    image: manaliImage,
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
    image: munnarImage,
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
    image: kodaikanalImage,
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
    image: goaImage,
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
  const navigate = useNavigate();
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
    navigate('/packages');
  };

  const handleCustomPackage = () => {
    const message = `Hi La Vida Holidays! I'd like to create a custom package for ${destination.name}. Can you help me plan my trip?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleContactExpert = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-1">
          <Link to="/destinations">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="container mx-auto">
              <div className="text-white">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{destination.name}</h1>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pt-1 pb-8 sm:pt-1 sm:pb-12">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">About {destination.name}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {destination.description}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Top Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Travel Information */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Travel Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Duration</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{destination.travelInfo.duration}</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Best Time</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{destination.travelInfo.bestTime}</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-muted/50 rounded-lg sm:col-span-2 lg:col-span-1">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Group Size</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{destination.travelInfo.groupSize}</p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section>
                <div className="text-center bg-primary/5 rounded-lg p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to Explore {destination.name}?</h2>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Contact our travel experts to create your perfect {destination.name} experience with customized packages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button onClick={handleViewPackages} size="lg" className="w-full sm:w-auto">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View Packages
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleCustomPackage} className="w-full sm:w-auto">
                      Request Custom Package
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Booking */}
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-primary text-base sm:text-lg">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <Button 
                    className="w-full text-sm sm:text-base" 
                    onClick={handleViewPackages}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    View All Packages
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-sm sm:text-base"
                    onClick={handleContactExpert}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Expert
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-primary text-base sm:text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Call Us</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">+91 7736890053</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Email Us</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">info@lavidaholidays.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Office Hours</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-primary text-base sm:text-lg">Why Choose La Vida Holidays?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">14+ Years of Experience</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Customized Itineraries</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Best Price Guarantee</span>
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