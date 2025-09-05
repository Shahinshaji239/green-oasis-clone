import { Button } from "@/components/ui/button";
// Hosted hero banner image URL
const heroBanner = "https://ik.imagekit.io/td5ykows9/hero-banner.jpg?updatedAt=1757059543862";
import TextType from './TextType';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">LAVIDA HOLIDAYS</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <TextType 
                  text={[
                    "Explore Your Dream Destination With Lavida Holidays ",
                    "Discover Amazing Adventures", 
                    "Create Unforgettable Memories"
                  ]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-type"
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                <TextType 
                  text={[
                    "Explore the wonders of the world with the best Travel Agency in Kerala.",
                    "Your journey to extraordinary destinations starts here.",
                    "Professional travel planning for unforgettable experiences."
                  ]}
                  typingSpeed={60}
                  pauseDuration={3000}
                  initialDelay={1000}
                  showCursor={false}
                  className="text-type" /* Apply the text-type class */
                />
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroBanner}
                alt="Beautiful travel destination"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;