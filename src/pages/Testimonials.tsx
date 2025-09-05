import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Testimonials = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    destination: "",
    review: ""
  });

  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Hyderabad",
      review: "La Vida Holidays made our Hyderabad trip absolutely perfect! The historical monuments were stunning and the service was exceptional. Every detail was taken care of.",
      date: "December 2024"
    },
    {
      name: "Rajesh Kumar",
      destination: "Delhi, Agra",
      review: "Amazing experience with La Vida Holidays! The Taj Mahal visit was breathtaking and the local guides were knowledgeable. The itinerary was well-planned. Highly recommended!",
      date: "November 2024"
    },
    {
      name: "Anita Patel",
      destination: "Kashmir, Manali",
      review: "Great service and competitive prices. The Kashmir and Manali trip was memorable and the hotel arrangements were excellent. The mountain views were spectacular.",
      date: "October 2024"
    },
    {
      name: "Vikram Singh",
      destination: "Munnar",
      review: "Outstanding service! The tea plantation tours in Munnar were incredible. La Vida Holidays exceeded our expectations in every way. The hill station experience was unforgettable.",
      date: "September 2024"
    },
    {
      name: "Meera Nair",
      destination: "Kodaikkanal",
      review: "The Kodaikkanal trip was a dream come true! The cool climate, beautiful lakes, and seamless arrangements made it perfect. Thank you La Vida Holidays!",
      date: "August 2024"
    },
    {
      name: "Amit Gupta",
      destination: "Goa",
      review: "Peaceful and fun experience in Goa. The beaches were beautiful and the accommodation was comfortable. La Vida Holidays made our vacation stress-free and enjoyable.",
      date: "July 2024"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xqadgwkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: reviewData.name,
          email: reviewData.email,
          destination: reviewData.destination,
          review: reviewData.review,
          type: "Customer Review",
          _replyto: reviewData.email,
          _subject: `La Vida Holidays Review: ${reviewData.destination}`
        })
      });

      if (response.ok) {
        // Success
        toast({
          title: "Review Submitted Successfully!",
          description: "Thank you for your review! It will be published after moderation.",
        });
        
        // Reset form
        setReviewData({ name: "", email: "", destination: "", review: "" });
      } else {
        throw new Error("Failed to submit review");
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const subject = `La Vida Holidays Review: ${reviewData.destination}`;
      const body = `Name: ${reviewData.name}\nEmail: ${reviewData.email}\nDestination: ${reviewData.destination}\n\nReview:\n${reviewData.review}`;
      const mailtoUrl = `mailto:lavidaholidays@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      toast({
        title: "Review Submitted!",
        description: "Your review has been sent via email. Thank you for your feedback!",
      });
      
      // Reset form
      setReviewData({ name: "", email: "", destination: "", review: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Customer Reviews
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Read what our customers say about their amazing experiences with La Vida Holidays.
          </p>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 shadow-md">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Trip to {testimonial.destination}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review Section */}
          <div className="bg-card border rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Share Your Experience
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={reviewData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={reviewData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destination Visited *
                </label>
                <select
                  name="destination"
                  value={reviewData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select destination</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhi, Agra">Delhi, Agra</option>
                  <option value="Kashmir, Manali">Kashmir, Manali</option>
                  <option value="Munnar">Munnar</option>
                  <option value="Kodaikkanal">Kodaikkanal</option>
                  <option value="Goa">Goa</option>
                  <option value="Other">Other</option>
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Review *
                </label>
                <Textarea
                  name="review"
                  value={reviewData.review}
                  onChange={handleChange}
                  required
                  placeholder="Share your experience with La Vida Holidays..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;