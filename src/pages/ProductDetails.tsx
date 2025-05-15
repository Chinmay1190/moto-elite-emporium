
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, RefreshCcw, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { allProducts } from "@/data/products";
import { ProductType } from "@/types";
import { formatPrice } from "@/utils/price";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, isInCart } = useCart();
  
  // Multiple images for demo (in real app, this would come from the backend)
  const productImages = [
    product?.image,
    "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?q=80&w=2070&auto=format&fit=crop"
  ];
  
  useEffect(() => {
    if (id) {
      // Simulate API loading
      setIsLoading(true);
      setTimeout(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        setProduct(foundProduct || null);
        
        // Set related products (same category, different id)
        if (foundProduct) {
          const sameCategoryProducts = allProducts
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(sameCategoryProducts);
        }
        
        setIsLoading(false);
        // Reset quantity when product changes
        setQuantity(1);
        // Reset active image when product changes
        setActiveImage(0);
      }, 500);
    }
  }, [id]);
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0 && product && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  // Calculate discounted price if discount is available
  const discountedPrice = product?.discount 
    ? product.price - (product.price * product.discount / 100)
    : null;
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-primary border-r-2 border-b-2 border-muted mb-4"></div>
          <p className="text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-primary">{product.category}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img 
                src={productImages[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`cursor-pointer rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    activeImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.featured && <Badge variant="default">Featured</Badge>}
                {product.discount && <Badge variant="destructive">{product.discount}% OFF</Badge>}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">{product.name}</h1>
              <div className="flex items-baseline gap-2 mt-2">
                {discountedPrice ? (
                  <>
                    <span className="text-2xl font-bold text-primary">{formatPrice(discountedPrice)}</span>
                    <span className="text-lg text-muted-foreground line-through">{formatPrice(product.price)}</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">{product.description}</p>
            
            <div className="flex items-center gap-6">
              <div className="font-medium">Brand:</div>
              <div>{product.brand}</div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="font-medium">Availability:</div>
              {product.stock > 0 ? (
                <div className="text-green-600 dark:text-green-400 flex items-center gap-1">
                  <RefreshCcw className="h-4 w-4" /> 
                  In Stock ({product.stock} available)
                </div>
              ) : (
                <div className="text-destructive">Out of Stock</div>
              )}
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-full px-2"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium w-12 text-center">
                    {quantity}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleQuantityChange(1)}
                    disabled={product.stock <= quantity}
                    className="h-full px-2"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  size="lg" 
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={isInCart(product.id) || product.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                </Button>
                
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <RefreshCcw className="h-5 w-5 shrink-0" />
                <span className="text-sm">30 Day Return</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="h-5 w-5 shrink-0" />
                <span className="text-sm">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specifications Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="mb-8 border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-6 py-3"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-6 py-3"
              >
                Shipping & Returns
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent px-6 py-3"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="pt-4">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {product.spec?.engine && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Engine</span>
                      <span>{product.spec.engine}</span>
                    </div>
                  )}
                  {product.spec?.displacement && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Displacement</span>
                      <span>{product.spec.displacement}</span>
                    </div>
                  )}
                  {product.spec?.power && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Power</span>
                      <span>{product.spec.power}</span>
                    </div>
                  )}
                  {product.spec?.torque && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Torque</span>
                      <span>{product.spec.torque}</span>
                    </div>
                  )}
                  {product.spec?.mileage && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Mileage</span>
                      <span>{product.spec.mileage}</span>
                    </div>
                  )}
                  {product.spec?.weight && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Weight</span>
                      <span>{product.spec.weight}</span>
                    </div>
                  )}
                  {product.spec?.topSpeed && (
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Top Speed</span>
                      <span>{product.spec.topSpeed}</span>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="pt-4">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Shipping Information</h3>
                <p className="mb-4">
                  All bikes are thoroughly inspected and tested before shipping. Delivery times may vary based on your location:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Metro cities: 3-5 business days</li>
                  <li>Other cities: 5-7 business days</li>
                  <li>Remote areas: 7-10 business days</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-4">Return Policy</h3>
                <p className="mb-4">
                  We offer a hassle-free 30-day return policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
                </p>
                <p>
                  Please note that the bike must be unused, in its original condition, and with all documentation intact.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-4">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground mb-4">No reviews yet for this product.</p>
                  <Button variant="outline">Write the First Review</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
