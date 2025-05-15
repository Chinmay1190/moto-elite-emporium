
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, orderDate } = location.state || {};
  
  // If someone tries to access this page directly without going through checkout
  useEffect(() => {
    if (!orderId) {
      navigate("/");
    }
  }, [orderId, navigate]);
  
  if (!orderId) return null;
  
  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="bg-card rounded-lg shadow-sm p-8 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-primary animate-pulse-light" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold mb-4">Order Successful!</h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Order ID:</span>
            <span>{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Order Date:</span>
            <span>{new Date(orderDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <p className="mb-6">
          We've sent a confirmation email with all the details of your order.
          You can track your order status in your account.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/account/orders">Track Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
