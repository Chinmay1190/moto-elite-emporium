
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">About SpeedMaster</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            India's premier destination for premium superbikes and motorcycle enthusiasts.
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1558980394-da1f85d3b540?q=80&w=2070&auto=format&fit=crop" 
            alt="SpeedMaster Showroom" 
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Our Story</h2>
            <p className="text-white/90 max-w-2xl">
              Founded in 2010 by motorcycle enthusiasts, SpeedMaster has grown to become 
              India's most trusted premium motorcycle retailer.
            </p>
          </div>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To provide motorcycle enthusiasts with access to the world's finest 
              superbikes, exceptional customer service, and a community that shares their passion.
            </p>
            <p className="text-muted-foreground">
              We strive to make the process of finding and owning your dream bike as 
              exciting as riding it.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              To become the most trusted name in premium motorcycles across South Asia,
              known for our curated selection, expert knowledge, and customer-first approach.
            </p>
            <p className="text-muted-foreground">
              We envision a world where every rider can access their dream machine with confidence.
            </p>
          </div>
        </div>
        
        {/* What Sets Us Apart */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">What Sets Us Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our team consists of motorcycle enthusiasts and certified technicians who provide 
                expert guidance and support throughout your ownership journey.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">
                We carefully curate our collection to include only the finest motorcycles from 
                the world's most prestigious manufacturers.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                We foster a vibrant community of riders through events, group rides, and online 
                forums where enthusiasts can connect and share their passion.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Journey */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Our Journey</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop" 
                  alt="SpeedMaster Beginning" 
                  className="rounded-lg shadow-md w-full h-60 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">2010: The Beginning</h3>
                <p className="text-muted-foreground">
                  SpeedMaster started as a small showroom in Mumbai with just 15 motorcycles and
                  a team of three passionate enthusiasts. Our focus on customer experience and 
                  authentic products quickly earned us a loyal following.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1635073908681-b4dfb3005264?q=80&w=1974&auto=format&fit=crop" 
                  alt="SpeedMaster Expansion" 
                  className="rounded-lg shadow-md w-full h-60 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">2015: National Expansion</h3>
                <p className="text-muted-foreground">
                  After five successful years, we expanded to Delhi, Bangalore, and Chennai,
                  bringing our collection to over 200 motorcycles across multiple brands. We also
                  launched our online platform to reach enthusiasts nationwide.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
                  alt="SpeedMaster Today" 
                  className="rounded-lg shadow-md w-full h-60 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">2023: SpeedMaster Today</h3>
                <p className="text-muted-foreground">
                  Today, SpeedMaster is India's leading premium motorcycle retailer, with
                  10 showrooms across the country, an award-winning e-commerce platform, and
                  a community of over 50,000 riders. We continue to innovate and expand our
                  offerings while staying true to our core values.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Join Our Community</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Whether you're a seasoned rider or just starting your journey, we welcome you to
            explore our collection and become part of the SpeedMaster family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link to="/shop">Explore Our Collection</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
