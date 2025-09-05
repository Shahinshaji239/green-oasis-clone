import { ChevronDown } from "lucide-react";
import { useRef } from "react";
// Hosted about us image URL
const aboutImage = "https://ik.imagekit.io/td5ykows9/about-us.png?updatedAt=1757059609139";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImage}
                alt="Green Oasis Team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-lg"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-sm tracking-wider uppercase">
                ABOUT US
              </p>
              
              {/* Animated Main Heading */}
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.1}
                baseRotation={4}
                enableBlur={true}
                blurStrength={5}
                containerClassName="!m-0"
                textClassName="!text-3xl !lg:text-4xl !font-bold !text-foreground !leading-tight"
              >
                WE ARE LA VIDA HOLIDAYS
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              {/* First Paragraph */}
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.15}
                baseRotation={2}
                enableBlur={true}
                blurStrength={3}
                containerClassName="!m-0 !mb-6"
                textClassName="!text-muted-foreground !leading-relaxed !text-base !font-normal"
              >
Step into the world of Lavida - where every journey leaves you wanting more....
</ScrollReveal>
              
              {/* Second Paragraph */}
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.2}
                baseRotation={1.5}
                enableBlur={true}
                blurStrength={3}
                containerClassName="!m-0 !mb-6"
                textClassName="!text-muted-foreground !leading-relaxed !text-base !font-normal"
              >
                At Lavida Holidays, we design travel experiences for every purpose and occasion. From business tours, college and industrial visits (IVs), and school trips to family vacations and honeymoon getaways, our packages are carefully curated to meet your needs.

              </ScrollReveal>
              
              {/* Third Paragraph */}
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.25}
                baseRotation={1}
                enableBlur={true}
                blurStrength={2}
                containerClassName="!m-0 !mb-6"
                textClassName="!text-muted-foreground !leading-relaxed !text-base !font-normal"
              >
To make your travel planning effortless, we provide 24×7 customer support along with live interactions and presentations to clarify your trip details, packages, and itineraries. This ensures transparency, trust, and complete confidence before you begin your journey.
</ScrollReveal>

<ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.25}
                baseRotation={1}
                enableBlur={true}
                blurStrength={2}
                containerClassName="!m-0 !mb-6"
                textClassName="!text-muted-foreground !leading-relaxed !text-base !font-normal"
              >
With our experienced team and customer-first approach, we handle every detail of your journey, allowing you to travel stress-free. Whether it’s an adventure, a learning trip, or a relaxing holiday, we are here to make your travel smooth, affordable, and unforgettable.
</ScrollReveal>

<ScrollReveal
                scrollContainerRef={scrollContainerRef}
                baseOpacity={0.25}
                baseRotation={1}
                enableBlur={true}
                blurStrength={2}
                containerClassName="!m-0 !mb-6"
                textClassName="!text-muted-foreground !leading-relaxed !text-base !font-normal"
              >
                As a growing travel patner, our vision is to become one of India’s most reliable travel planners, delivering comfort, happiness, and lifelong memories — one trip at a time.
</ScrollReveal>
            </div>

            {/* Animated Scroll Down Section */}
            <ScrollReveal
              scrollContainerRef={scrollContainerRef}
              baseOpacity={0.1}
              baseRotation={2}
              enableBlur={true}
              blurStrength={4}
              containerClassName="!m-0"
              textClassName="!flex !items-center !gap-3 !text-sm !text-primary !font-medium"
            >
              SCROLL DOWN FOR MORE
              <ChevronDown size={16} className="animate-bounce" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;