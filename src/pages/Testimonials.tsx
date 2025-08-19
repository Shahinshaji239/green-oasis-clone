import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    destination: "",
    rating: 5,
    review: ""
  });

  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Maldives",
      rating: 5,
      review: "Green Oasis made our honeymoon absolutely perfect! The resort was stunning and the service was exceptional. Every detail was taken care of.",
      date: "December 2023"
    },
    {
      name: "Rajesh Kumar",
      destination: "Thailand",
      rating: 5,
      review: "Amazing experience with Green Oasis! The local guides were knowledgeable and the itinerary was well-planned. Highly recommended!",
      date: "November 2023"
    },
    {
      name: "Anita Patel",
      destination: "UAE",
      rating: 4,
      review: "Great service and competitive prices. The Dubai trip was memorable and the hotel arrangements were excellent.",
      date: "October 2023"
    },
    {
      name: "Vikram Singh",
      destination: "Turkey",
      rating: 5,
      review: "Outstanding service! The cultural tour of Istanbul was incredible. Green Oasis exceeded our expectations in every way.",
      date: "September 2023"
    },
    {
      name: "Meera Nair",
      destination: "Andaman",
      rating: 5,
      review: "The Andaman trip was a dream come true! Crystal clear waters, beautiful beaches, and seamless arrangements. Thank you Green Oasis!",
      date: "August 2023"
    },
    {
      name: "Amit Gupta",
      destination: "Lakshadweep",
      rating: 4,
      review: "Peaceful and serene experience in Lakshadweep. The coral reefs were breathtaking and the accommodation was comfortable.",
      date: "July 2023"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", reviewData);
    alert("Thank you for your review! It will be published after moderation.");
    setReviewData({ name: "", email: "", destination: "", rating: 5, review: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value;
    setReviewData({
      ...reviewData,
      [e.target.name]: value
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
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
            Read what our customers say about their amazing experiences with Green Oasis Travel.
          </p>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
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
                  <option value="Andaman">Andaman</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Maldives">Maldives</option>
                  <option value="UAE">UAE</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rating *
                </label>
                <select
                  name="rating"
                  value={reviewData.rating}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
                  <option value={4}>⭐⭐⭐⭐ Very Good</option>
                  <option value={3}>⭐⭐⭐ Good</option>
                  <option value={2}>⭐⭐ Fair</option>
                  <option value={1}>⭐ Poor</option>
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
                  placeholder="Share your experience with Green Oasis Travel..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Review
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