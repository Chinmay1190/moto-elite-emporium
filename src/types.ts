
export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  spec?: {
    engine?: string;
    displacement?: string;
    power?: string;
    torque?: string;
    mileage?: string;
    weight?: string;
    topSpeed?: string;
  };
  featured?: boolean;
  discount?: number;
  stock: number;
};

export type CategoryType = {
  id: number;
  name: string;
  icon: string;
};

export type BrandType = {
  id: number;
  name: string;
  logo: string;
  country: string;
};

export type OrderType = {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: Array<{
    product: ProductType;
    quantity: number;
  }>;
  customer: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  paymentMethod: string;
  totalAmount: number;
  date: Date;
};
