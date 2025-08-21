import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import andamanImage from "@/assets/destinations/andaman.jpg";
import lakshadweepImage from "@/assets/destinations/lakshadweep.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import uaeImage from "@/assets/destinations/uae.jpg";
import thailandImage from "@/assets/destinations/thailand.jpg";
import turkeyImage from "@/assets/destinations/turkey.jpg";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  slug: string;
}

const DestinationCard = ({ name, image, description, slug }: DestinationCardProps) => {
  const handleInquiry = () => {
    const message = `Hi La Vida Holidays! I'm interested in visiting ${name}. Could you please provide package details and pricing?`;
    const whatsappUrl = `https://wa.me/917736890053?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Map image paths to actual imports
  const imageMap: Record<string, string> = {
    "/src/assets/destinations/andaman.jpg": andamanImage,
    "/src/assets/destinations/lakshadweep.jpg": lakshadweepImage,
    "/src/assets/destinations/maldives.jpg": maldivesImage,
    "/src/assets/destinations/uae.jpg": uaeImage,
    "/src/assets/destinations/thailand.jpg": thailandImage,
    "/src/assets/destinations/turkey.jpg": turkeyImage,
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/destinations/${slug}`}>
        <div className="relative overflow-hidden cursor-pointer">
          <img
            src={imageMap[image]}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.8</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
          </div>
        </div>
      </Link>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>Multiple packages available</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/destinations/${slug}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button 
            onClick={handleInquiry}
            className="flex-1"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Our Destinations
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover breathtaking destinations handpicked by our travel experts. From pristine beaches to cultural wonders, we offer unforgettable experiences across the globe.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DestinationCard 
              name="Andaman" 
              slug="andaman"
              image="/src/assets/destinations/andaman.jpg"
              description="Pristine beaches, crystal clear waters, and vibrant marine life await you in this tropical paradise."
            />
            <DestinationCard 
              name="Lakshadweep" 
              slug="lakshadweep"
              image="/src/assets/destinations/lakshadweep.jpg"
              description="Experience untouched coral islands with turquoise lagoons and rich marine biodiversity."
            />
            <DestinationCard 
              name="Maldives" 
              slug="maldives"
              image="/src/assets/destinations/maldives.jpg"
              description="Ultimate luxury tropical experience with overwater villas and world-class resorts."
            />
            <DestinationCard 
              name="UAE" 
              slug="uae"
              image="/src/assets/destinations/uae.jpg"
              description="Perfect blend of modern luxury and traditional culture in the United Arab Emirates."
            />
            <DestinationCard 
              name="Thailand" 
              slug="thailand"
              image="/src/assets/destinations/thailand.jpg"
              description="Discover the Land of Smiles with its rich culture, stunning temples, and beautiful beaches."
            />
            <DestinationCard 
              name="Turkey" 
              slug="turkey"
              image="/src/assets/destinations/turkey.jpg"
              description="Journey through rich history and stunning landscapes, from Cappadocia to ancient ruins."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;