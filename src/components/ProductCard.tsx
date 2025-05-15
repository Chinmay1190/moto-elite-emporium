
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "@/utils/price";
import { toast } from "@/components/ui/use-toast";

type ProductCardProps = {
  product: ProductType;
  className?: string;
  style?: React.CSSProperties;  // Add style prop to support inline styles
};

export default function ProductCard({ product, className = "", style }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 3000,
    });
  };
  
  // Calculate discounted price
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100) 
    : null;

  // Generate random rating between 3.5 and 5.0
  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);

  return (
    <div
      className={`product-card group animate-fade-in ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style} // Apply the style prop here
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-primary px-3 py-1 text-xs font-bold rounded-full text-primary-foreground shadow-md">
              Featured
            </span>
          )}
          {product.discount && (
            <span className="absolute top-2 right-2 bg-destructive px-3 py-1 text-xs font-bold rounded-full text-destructive-foreground shadow-md animate-pulse-slow">
              {product.discount}% OFF
            </span>
          )}
          <div className="product-actions absolute inset-0 bg-black/60 flex items-center justify-center space-x-3 opacity-0 translate-y-4 transition-all duration-300">
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full shadow-lg" 
              onClick={handleAddToCart}
              disabled={isInCart(product.id)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isInCart(product.id) ? "Added" : "Add to Cart"}
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-background/20 hover:bg-background/40 shadow-lg">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium line-clamp-1 text-lg">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < Math.floor(Number(rating)) 
                        ? "text-amber-400 fill-amber-400" 
                        : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{rating}</span>
              </div>
            </div>
            <div className="text-right">
              {discountedPrice ? (
                <>
                  <p className="font-bold text-primary">
                    {formatPrice(discountedPrice)}
                  </p>
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </p>
                </>
              ) : (
                <p className="font-bold">{formatPrice(product.price)}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
              {product.category}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              product.stock > 0 
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
            }`}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

