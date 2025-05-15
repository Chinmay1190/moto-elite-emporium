
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/utils/price";

type ProductCardProps = {
  product: ProductType;
  className?: string;
};

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  // Calculate discounted price
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100) 
    : null;

  return (
    <div
      className={`product-card group animate-fade-in ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            <span className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-semibold rounded text-primary-foreground">
              Featured
            </span>
          )}
          {product.discount && (
            <span className="absolute top-2 right-2 bg-destructive px-2 py-1 text-xs font-semibold rounded text-destructive-foreground">
              {product.discount}% OFF
            </span>
          )}
          <div className="product-actions absolute inset-0 bg-black/60 flex items-center justify-center space-x-2 opacity-0 translate-y-4 transition-all duration-300">
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full" 
              onClick={handleAddToCart}
              disabled={isInCart(product.id)}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              {isInCart(product.id) ? "Added" : "Add to Cart"}
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-background/20 hover:bg-background/40">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
            </div>
            <div className="text-right">
              {discountedPrice ? (
                <>
                  <p className="font-semibold text-primary">
                    {formatPrice(discountedPrice)}
                  </p>
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </p>
                </>
              ) : (
                <p className="font-semibold">{formatPrice(product.price)}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
              {product.category}
            </span>
            <span className={`text-xs ${product.stock > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
