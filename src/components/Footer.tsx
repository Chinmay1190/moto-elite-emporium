
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold">
              <span className="text-primary">Speed</span>
              <span>Master</span>
            </Link>
            <p className="text-muted-foreground">
              India's premium destination for superbikes, offering the best 
              collection of high-performance motorcycles at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-muted-foreground hover:text-primary transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Sport%20Bikes" className="text-muted-foreground hover:text-primary transition-colors">
                  Sport Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Cruisers" className="text-muted-foreground hover:text-primary transition-colors">
                  Cruisers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Adventure" className="text-muted-foreground hover:text-primary transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Street%20Fighters" className="text-muted-foreground hover:text-primary transition-colors">
                  Street Fighters
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Motorcycle Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>India</p>
              <p className="mt-2">Phone: +91 12345 67890</p>
              <p>Email: info@speedmaster.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SpeedMaster. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
