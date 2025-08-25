import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import andamanImage from "@/assets/destinations/andaman.jpg";
import lakshadweepImage from "@/assets/destinations/lakshadweep.jpg";
import maldivesImage from "@/assets/destinations/maldives.jpg";
import uaeImage from "@/assets/destinations/uae.jpg";
import thailandImage from "@/assets/destinations/thailand.jpg";
import turkeyImage from "@/assets/destinations/turkey.jpg";

const destinations = [
  { name: "Hyderabad", image: uaeImage, slug: "hyderabad" },
  { name: "Delhi, Agra", image: thailandImage, slug: "delhi-agra" },
  { name: "Kashmir, Manali", image: turkeyImage, slug: "kashmir-manali" },
  { name: "Munnar", image: andamanImage, slug: "munnar" },
  { name: "Kodaikkanal", image: lakshadweepImage, slug: "kodaikkanal" },
  { name: "Goa", image: maldivesImage, slug: "goa" },
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={destination.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="group cursor-pointer block"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                        {destination.name}
                      </h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white/90 text-sm">Explore destination</p>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 hover:bg-background border-border" />
          <CarouselNext className="hidden md:flex -right-4 bg-background/80 hover:bg-background border-border" />
        </Carousel>

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