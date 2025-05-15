
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { allProducts, brands, categories } from "@/data/products";

export default function Index() {
  const [category, setCategory] = useState("all");
  const featuredProducts = allProducts.filter(product => product.featured).slice(0, 6);
  const latestProducts = [...allProducts].sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white animate-fade-in">
                Unleash Your <span className="text-glow">Racing Spirit</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl animate-fade-in" style={{animationDelay: "0.2s"}}>
                Explore India's premium collection of high-performance 
                superbikes from top global brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Button size="lg" asChild className="font-medium text-lg">
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-white border-white hover:text-white/90 hover:bg-white/10 font-medium text-lg">
                  <Link to="/brands">Explore Brands</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center animate-bike-slide">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" 
                alt="Featured Superbike" 
                className="rounded-lg shadow-2xl max-w-full h-auto max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {/* Replace with actual icon logic based on category.icon */}
                  <span className="text-2xl">🏍️</span>
                </div>
                <span className="font-medium text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-heading font-bold">Featured Bikes</h2>
            <Button variant="ghost" asChild className="gap-1">
              <Link to="/shop">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="opacity-0 animate-fade-in" 
                style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/shop?brand=${encodeURIComponent(brand.name)}`}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="text-center">
                  <h3 className="font-medium">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground">{brand.country}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Latest Arrivals
          </h2>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-lg">
                <TabsTrigger value="all" onClick={() => setCategory("all")}>All</TabsTrigger>
                <TabsTrigger value="sport" onClick={() => setCategory("Sport Bikes")}>Sport</TabsTrigger>
                <TabsTrigger value="cruiser" onClick={() => setCategory("Cruisers")}>Cruiser</TabsTrigger>
                <TabsTrigger value="adventure" onClick={() => setCategory("Adventure")}>Adventure</TabsTrigger>
                <TabsTrigger value="street" onClick={() => setCategory("Street Fighters")}>Street</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sport">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts
                  .filter(product => product.category === "Sport Bikes")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cruiser">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts
                  .filter(product => product.category === "Cruisers")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="adventure">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts
                  .filter(product => product.category === "Adventure")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="street">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts
                  .filter(product => product.category === "Street Fighters")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials/Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Why Choose SpeedMaster
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Authentic Products</h3>
              <p className="text-muted-foreground">
                All our bikes are 100% authentic with manufacturer warranty and after-sales service.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">
                Enjoy free delivery across India on all superbikes worth ₹5 Lakhs and above.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple secure payment options with EMI facilities from leading banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Experience the Thrill?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of premium superbikes and find your 
            perfect ride today. Competitive prices and excellent after-sales service guaranteed.
          </p>
          <Button size="lg" variant="default" asChild className="font-medium text-lg bg-white text-primary hover:bg-white/90">
            <Link to="/shop">Find Your Dream Bike</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
