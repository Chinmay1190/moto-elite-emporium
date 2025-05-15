
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { allProducts, categories, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/utils/price";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, Filter, Search, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Shop() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(""); 
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [priceRange, setPriceRange] = useState([0, 2500000]); // 0 to 25 Lakhs
  const [sortOrder, setSortOrder] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract query parameters when page loads
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const brand = params.get("brand");
    const search = params.get("search");
    
    if (category) setSelectedCategory(category);
    if (brand) setSelectedBrand(brand);
    if (search) setSearchTerm(search);
  }, [location.search]);

  // Filter products based on search term, category, brand and price range
  useEffect(() => {
    let result = allProducts;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply brand filter
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    result = sortProducts(result, sortOrder);
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, sortOrder]);

  // Sort products based on selected order
  const sortProducts = (products, order) => {
    switch (order) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return [...products].sort((a, b) => (a.featured === b.featured) ? 0 : a.featured ? -1 : 1);
    }
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedBrand("");
    setPriceRange([0, 2500000]);
    setSortOrder("featured");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Explore Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive range of premium superbikes from top 
            manufacturers around the world.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort By</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filters Sidebar (Desktop always visible, Mobile conditional) */}
          <div 
            className={`lg:w-1/4 bg-card rounded-lg p-6 shadow-sm h-fit ${
              isMobileFilterOpen ? 'block' : 'hidden lg:block'
            } ${
              isMobileFilterOpen ? 'fixed inset-0 z-50 bg-background overflow-y-auto' : ''
            }`}
          >
            {/* Mobile Filter Header */}
            {isMobileFilterOpen && (
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search bikes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <Separator />

              <Accordion type="single" collapsible defaultValue="categories">
                <AccordionItem value="categories">
                  <AccordionTrigger className="text-lg font-medium">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category.id}`}
                            checked={selectedCategory === category.name}
                            onCheckedChange={() => 
                              setSelectedCategory(
                                selectedCategory === category.name ? "" : category.name
                              )
                            }
                          />
                          <label
                            htmlFor={`category-${category.id}`}
                            className="text-sm cursor-pointer flex-grow"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brands">
                  <AccordionTrigger className="text-lg font-medium">
                    Brands
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`brand-${brand.id}`}
                            checked={selectedBrand === brand.name}
                            onCheckedChange={() =>
                              setSelectedBrand(
                                selectedBrand === brand.name ? "" : brand.name
                              )
                            }
                          />
                          <label
                            htmlFor={`brand-${brand.id}`}
                            className="text-sm cursor-pointer flex-grow"
                          >
                            {brand.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger className="text-lg font-medium">
                    Price Range
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                      <Slider
                        defaultValue={priceRange}
                        max={2500000}
                        step={50000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>

              {/* Apply Filter Button (Mobile Only) */}
              {isMobileFilterOpen && (
                <Button
                  className="w-full mt-4 lg:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} bikes
              </p>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[200px]">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    <span>Sort By: {sortOrder}</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <div className="bg-muted rounded-full p-8 mb-4">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search criteria.
                </p>
                <Button onClick={handleClearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
