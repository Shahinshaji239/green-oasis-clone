import { ChevronDown } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                WE ARE{" "}
                <span className="text-primary">GREEN OASIS</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Green Oasis, your journey will start with a concept and end with remarkable memories. 
                Suppose you are looking for a family vacation or a business trip, as the Best Travel Agency 
                in Kerala with 14 years of experience. In that case, we can help you experience the journey 
                with all of your needs and expectations.
              </p>
              
              <p>
                Our team is not just professionals; they are focused on dedication and passion to make 
                your travel expectations come true. From the second you contact us, you can feel the 
                customized services created to make sure that all parts of your trip are perfect.
              </p>
              
              <p>
                At Green Oasis, we make your journey remembered, easier, and exciting. As one of the 
                leading Tours and Travels in Kerala, we take the stress out of arranging and confirming 
                your concept into a tour you'll enjoy.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-primary font-medium">
              <span>SCROLL DOWN FOR MORE</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;