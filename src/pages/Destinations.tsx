import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationsSection from "@/components/DestinationsSection";

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
        <DestinationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;