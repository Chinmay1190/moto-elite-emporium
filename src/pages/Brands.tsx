
import { Link } from "react-router-dom";
import { brands } from "@/data/products";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Brands() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Premium Brands</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the top motorcycle brands from around the world, each with 
            their own legacy of innovation, performance, and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Card 
              key={brand.id} 
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{brand.name}</CardTitle>
                    <CardDescription>{brand.country}</CardDescription>
                  </div>
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-12 w-auto object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {getBrandDescription(brand.name)}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/shop?brand=${encodeURIComponent(brand.name)}`}>
                    View {brand.name} Bikes
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function to provide descriptions for each brand
function getBrandDescription(brandName: string): string {
  const descriptions = {
    "Honda": "Renowned for reliability and innovation, Honda offers a diverse range of motorcycles from commuter bikes to powerful sport models.",
    "Yamaha": "Yamaha combines cutting-edge technology with sleek design, providing thrilling performance across their extensive motorcycle lineup.",
    "Suzuki": "Suzuki delivers a perfect balance of performance and value, with motorcycles known for their nimble handling and durability.",
    "Kawasaki": "Kawasaki's motorcycles are engineered for excitement, offering raw power and aggressive styling in their legendary Ninja series and beyond.",
    "Ducati": "Italian craftsmanship meets racing heritage in Ducati's premium motorcycles, delivering unmatched style and performance.",
    "BMW": "BMW Motorrad represents German engineering excellence, with touring and adventure bikes known for comfort, technology, and reliability.",
    "Triumph": "With British heritage and modern innovation, Triumph creates motorcycles with distinct character and exceptional handling.",
    "KTM": "KTM specializes in off-road and street motorcycles with razor-sharp handling, lightweight design, and competitive performance.",
    "Royal Enfield": "India's oldest motorcycle brand offers classic styling with modern engineering, known for their iconic cruisers and heritage models.",
    "Harley-Davidson": "American icon Harley-Davidson crafts legendary cruisers with unmistakable sound, style, and a strong sense of freedom.",
    "Aprilia": "Italian sportbike maker known for race-derived technology and exceptional handling in their high-performance motorcycles."
  };
  
  return descriptions[brandName] || 
    `${brandName} is a renowned motorcycle manufacturer creating exceptional bikes with innovative technology and distinctive style.`;
}
