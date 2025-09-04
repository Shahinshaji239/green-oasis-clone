import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
            About Lavida Holidays
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  
We are a young and passionate travel company that began our journey just a year ago. In this short time, we have grown into a trusted partner for travelers across India. Our mission is simple — to make travel easy, enjoyable, and memorable.<br/><br/>

At Lavida Holidays, we provide complete travel solutions including custom tour planning, holiday packages, all-India trips, hotel bookings, bus reservations, and train ticketing. With a strong focus on reliability, affordability, and customer satisfaction, we ensure that every trip becomes a story worth remembering.
                </p>
                <p className="text-muted-foreground">
                  Our team of experienced travel experts carefully curates each journey to ensure you experience the authentic culture, breathtaking landscapes, and warm hospitality of every destination.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Lavida Holidays?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Expert local guides and personalized itineraries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    24/7 customer support throughout your journey
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Best price guarantee and flexible booking options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Sustainable and responsible tourism practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;