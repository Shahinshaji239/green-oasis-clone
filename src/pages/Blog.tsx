import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Hidden Gems in Andaman Islands",
      excerpt: "Discover the untouched beauty of Andaman's lesser-known beaches and attractions that most tourists miss.",
      author: "Travel Expert",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Destinations",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Best Time to Visit Maldives: A Complete Guide",
      excerpt: "Planning your Maldives vacation? Here's everything you need to know about weather, seasons, and the perfect time to visit.",
      author: "Weather Specialist",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Cultural Etiquette: Do's and Don'ts in Thailand",
      excerpt: "Respect local customs and make the most of your Thai experience with our comprehensive cultural guide.",
      author: "Cultural Expert",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Dubai Beyond Skyscrapers: Local Experiences",
      excerpt: "Explore Dubai's authentic side with traditional souks, local cuisine, and cultural heritage sites.",
      author: "Local Guide",
      date: "November 28, 2023",
      readTime: "8 min read",
      category: "Local Experiences",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Sustainable Tourism: How to Travel Responsibly",
      excerpt: "Learn how to minimize your environmental impact while maximizing your travel experiences.",
      author: "Sustainability Expert",
      date: "November 20, 2023",
      readTime: "6 min read",
      category: "Sustainable Travel",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Turkish Delights: A Culinary Journey Through Turkey",
      excerpt: "From street food to fine dining, discover the rich culinary heritage of Turkey on your next visit.",
      author: "Food Critic",
      date: "November 15, 2023",
      readTime: "9 min read",
      category: "Food & Culture",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Travel Blog
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get inspired with travel tips, destination guides, and insider stories from our travel experts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-card border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;