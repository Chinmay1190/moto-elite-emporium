
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartSheet from "./CartSheet";

export default function Header() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-heading text-3xl font-bold"
        >
          <span className="text-primary">Speed</span>
          <span>Master</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/brands"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Brands
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          
          <Link to="/search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
            <CartSheet />
          </Sheet>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute bg-background/95 backdrop-blur-lg w-full px-4 py-6 shadow-lg transition-all duration-300 ${
          mobileNavOpen ? "top-full opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
            onClick={() => setMobileNavOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
            onClick={() => setMobileNavOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/brands"
            className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
            onClick={() => setMobileNavOpen(false)}
          >
            Brands
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
            onClick={() => setMobileNavOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
            onClick={() => setMobileNavOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
