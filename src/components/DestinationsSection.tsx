import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import andamanImage from "@/assets/destinations/andaman.jpg";
import lakshadweepImage from "@/assets/destinations/lakshadweep.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import uaeImage from "@/assets/destinations/uae.jpg";
import thailandImage from "@/assets/destinations/thailand.jpg";
import turkeyImage from "@/assets/destinations/turkey.jpg";

const destinations = [
  { name: "Andaman", image: andamanImage, slug: "andaman" },
  { name: "Lakshadweep", image: lakshadweepImage, slug: "lakshadweep" },
  { name: "Maldives", image: maldivesImage, slug: "maldives" },
  { name: "UAE", image: uaeImage, slug: "uae" },
  { name: "Thailand", image: thailandImage, slug: "thailand" },
  { name: "Turkey", image: turkeyImage, slug: "turkey" },
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our Destinations
          </h2>
          <Link to="/destinations">
            <Button variant="outline" className="hidden md:flex">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.name}
              to={`/destinations/${destination.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/destinations">
            <Button variant="outline">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;