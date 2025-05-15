
import { createContext, useContext, useEffect, useState } from "react";
import { ProductType } from "@/types";
import { toast } from "sonner";

type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  updateQuantity: (productId: number, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("speedmaster-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotalItems(itemsCount);
    setTotalPrice(total);
    localStorage.setItem("speedmaster-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: ProductType, quantity = 1) => {
    setItems((prevItems) => {
      const exists = prevItems.find((item) => item.product.id === product.id);
      if (exists) {
        toast.success("Updated quantity in cart");
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success("Added to cart");
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => 
      prevItems.filter((item) => item.product.id !== productId)
    );
    toast.info("Item removed from cart");
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const isInCart = (productId: number) => {
    return items.some((item) => item.product.id === productId);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
