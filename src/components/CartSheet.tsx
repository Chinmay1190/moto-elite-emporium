
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/price";

export default function CartSheet() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <SheetContent className="w-full sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Your shopping cart is empty.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-muted-foreground mb-4">
            Add products to your cart to see them here.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </SheetContent>
    );
  }

  return (
    <SheetContent className="w-full sm:w-[400px]">
      <SheetHeader>
        <SheetTitle>Your Cart ({items.length} items)</SheetTitle>
        <SheetDescription>
          Review your items or proceed to checkout.
        </SheetDescription>
      </SheetHeader>
      
      <div className="flex flex-col gap-4 my-4 max-h-[60vh] overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">
                {item.product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.product.brand}</p>
              <div className="flex items-center mt-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="mx-2 text-sm min-w-[20px] text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  disabled={item.quantity >= item.product.stock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-medium">
                {formatPrice(item.product.price * item.quantity)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground"
                onClick={() => removeFromCart(item.product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Separator />
      
      <div className="space-y-4 mt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(totalPrice > 50000 ? 0 : 1500)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-bold">
            {formatPrice(totalPrice + (totalPrice > 50000 ? 0 : 1500))}
          </span>
        </div>
      </div>
      
      <SheetFooter className="mt-6">
        <div className="grid w-full gap-2">
          <Button onClick={handleCheckout} className="w-full">
            Proceed to Checkout
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearCart}
              className="aspect-square"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetFooter>
    </SheetContent>
  );
}
