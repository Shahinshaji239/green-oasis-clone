import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Tropical Paradise",
      description: "Discover pristine beaches and crystal clear waters"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", 
      title: "Mountain Adventures",
      description: "Experience breathtaking mountain landscapes"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Cultural Journeys",
      description: "Immerse yourself in rich cultural experiences"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      title: "Kerala Hill Station",
      description: "Journey through the scenic Gap road in Munnar, Kerala"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel className="h-full w-full">
        <CarouselContent className="h-full">
          {videos.map((video, index) => (
            <CarouselItem key={index} className="h-full p-0">
              <div className="relative h-full w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white z-10 max-w-4xl px-4">
                    <p className="text-primary-foreground font-medium text-lg mb-4 animate-fade-in">
                      LA VIDA HOLIDAYS
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                      Explore Your Dream Destination With{" "}
                      <span className="text-primary">La Vida Holidays</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
                      {video.description}
                    </p>
                    
                    <Link to="/contact">
                      <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-fade-in">
                        Contact Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>

      {/* Video indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;