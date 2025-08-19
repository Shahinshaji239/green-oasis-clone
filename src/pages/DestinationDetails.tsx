import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Star, Users } from "lucide-react";
import andamanImage from "@/assets/destinations/andaman.jpg";
import lakshadweepImage from "@/assets/destinations/lakshadweep.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import uaeImage from "@/assets/destinations/uae.jpg";
import thailandImage from "@/assets/destinations/thailand.jpg";
import turkeyImage from "@/assets/destinations/turkey.jpg";

const DestinationDetails = () => {
  const { name } = useParams();
  
  const destinationData: { [key: string]: any } = {
    andaman: {
      name: "Andaman Islands",
      image: andamanImage,
      description: "Pristine beaches, crystal clear waters, and untouched natural beauty make Andaman Islands a tropical paradise. Experience the perfect blend of adventure and relaxation in this exotic destination.",
      highlights: [
        "Radhanagar Beach - Asia's Best Beach",
        "Cellular Jail Historical Site",
        "Scuba Diving at Havelock Island",
        "Ross Island Exploration",
        "Limestone Caves at Baratang"
      ],
      duration: "5-7 Days",
      bestTime: "November to April",
      rating: 4.8,
      reviews: 245,
      packages: [
        { name: "Andaman Explorer", price: "₹25,000", days: 5, description: "Perfect for first-time visitors" },
        { name: "Adventure Seeker", price: "₹35,000", days: 7, description: "Includes water sports and diving" },
        { name: "Romantic Getaway", price: "₹45,000", days: 6, description: "Luxury resorts and private beaches" }
      ]
    },
    lakshadweep: {
      name: "Lakshadweep",
      image: lakshadweepImage,
      description: "A tropical archipelago of coral islands, Lakshadweep offers pristine lagoons, white sandy beaches, and rich marine life. Perfect for those seeking tranquility and natural beauty.",
      highlights: [
        "Agatti Island Beach Resort",
        "Bangaram Island Coral Reefs",
        "Minicoy Island Lighthouse",
        "Traditional Laccadivian Culture",
        "Snorkeling and Kayaking"
      ],
      duration: "4-6 Days",
      bestTime: "October to March",
      rating: 4.7,
      reviews: 156,
      packages: [
        { name: "Island Hopper", price: "₹30,000", days: 4, description: "Multi-island experience" },
        { name: "Marine Explorer", price: "₹42,000", days: 6, description: "Focus on water activities" },
        { name: "Cultural Discovery", price: "₹38,000", days: 5, description: "Island culture and traditions" }
      ]
    },
    maldives: {
      name: "Maldives",
      image: maldivesImage,
      description: "The ultimate luxury destination with overwater bungalows, world-class spas, and pristine coral reefs. Maldives offers the perfect romantic escape and underwater adventures.",
      highlights: [
        "Overwater Villa Experience",
        "World-Class Diving Sites",
        "Luxury Spa Treatments",
        "Sunset Dolphin Cruises",
        "Private Beach Dining"
      ],
      duration: "4-8 Days",
      bestTime: "November to April",
      rating: 4.9,
      reviews: 412,
      packages: [
        { name: "Honeymoon Special", price: "₹75,000", days: 5, description: "Romantic overwater villa stay" },
        { name: "Luxury Escape", price: "₹95,000", days: 7, description: "Premium resort with all amenities" },
        { name: "Diver's Paradise", price: "₹65,000", days: 6, description: "Multiple diving excursions included" }
      ]
    },
    uae: {
      name: "United Arab Emirates",
      image: uaeImage,
      description: "Experience the perfect blend of modern luxury and traditional culture in UAE. From Dubai's towering skyscrapers to Abu Dhabi's cultural treasures, UAE offers unforgettable experiences.",
      highlights: [
        "Burj Khalifa Sky Deck",
        "Desert Safari Adventures",
        "Abu Dhabi Louvre Museum",
        "Dubai Mall Shopping Experience",
        "Traditional Souk Markets"
      ],
      duration: "5-7 Days",
      bestTime: "November to March",
      rating: 4.6,
      reviews: 328,
      packages: [
        { name: "Dubai Highlights", price: "₹40,000", days: 5, description: "Best of Dubai city tour" },
        { name: "UAE Complete", price: "₹55,000", days: 7, description: "Dubai and Abu Dhabi combined" },
        { name: "Luxury Shopping", price: "₹48,000", days: 6, description: "Premium shopping and dining" }
      ]
    },
    thailand: {
      name: "Thailand",
      image: thailandImage,
      description: "The Land of Smiles offers incredible diversity - from bustling bangkok streets to serene temple complexes, tropical islands to mountain villages. Thailand captivates every traveler.",
      highlights: [
        "Bangkok Temple Tours",
        "Phuket Beach Paradise",
        "Chiang Mai Cultural Sites",
        "Thai Cooking Classes",
        "Floating Market Experience"
      ],
      duration: "6-10 Days",
      bestTime: "November to February",
      rating: 4.7,
      reviews: 567,
      packages: [
        { name: "Bangkok & Phuket", price: "₹35,000", days: 7, description: "City and beach combination" },
        { name: "Cultural Explorer", price: "₹42,000", days: 8, description: "Northern Thailand temples and culture" },
        { name: "Island Hopping", price: "₹38,000", days: 6, description: "Southern Thai islands tour" }
      ]
    },
    turkey: {
      name: "Turkey",
      image: turkeyImage,
      description: "Where East meets West, Turkey offers a rich tapestry of history, culture, and natural wonders. From ancient ruins to fairy-tale landscapes, Turkey is a treasure trove of experiences.",
      highlights: [
        "Cappadocia Hot Air Balloons",
        "Hagia Sophia & Blue Mosque",
        "Pamukkale Thermal Pools",
        "Ephesus Ancient City",
        "Turkish Bath Experience"
      ],
      duration: "7-10 Days",
      bestTime: "April to June, September to November",
      rating: 4.8,
      reviews: 289,
      packages: [
        { name: "Istanbul & Cappadocia", price: "₹52,000", days: 7, description: "History and fairy chimneys" },
        { name: "Turkey Grand Tour", price: "₹68,000", days: 10, description: "Complete Turkey experience" },
        { name: "Coastal Turkey", price: "₹45,000", days: 8, description: "Mediterranean coast and ruins" }
      ]
    }
  };

  const destination = destinationData[name?.toLowerCase() || ''];

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-8">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Destination Not Found</h1>
            <p className="text-muted-foreground">The destination you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <div className="relative h-96 bg-muted overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">{destination.name}</h1>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  <span>{destination.rating} ({destination.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{destination.bestTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">About {destination.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {destination.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Top Highlights</h3>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Travel Information</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock size={24} className="mx-auto text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Duration</h4>
                    <p className="text-muted-foreground">{destination.duration}</p>
                  </div>
                  <div className="text-center">
                    <Calendar size={24} className="mx-auto text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Best Time</h4>
                    <p className="text-muted-foreground">{destination.bestTime}</p>
                  </div>
                  <div className="text-center">
                    <Users size={24} className="mx-auto text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Group Size</h4>
                    <p className="text-muted-foreground">2-15 People</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-4">Available Packages</h3>
                <div className="space-y-4">
                  {destination.packages.map((pkg: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{pkg.name}</h4>
                        <span className="text-primary font-bold">{pkg.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                      <p className="text-xs text-muted-foreground mb-3">{pkg.days} days package</p>
                      <Button size="sm" className="w-full">
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full mb-3">
                    Request Custom Package
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetails;