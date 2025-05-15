
import { ProductType, CategoryType, BrandType } from "@/types";

export const categories: CategoryType[] = [
  { id: 1, name: "Sport Bikes", icon: "bike" },
  { id: 2, name: "Cruisers", icon: "car" },
  { id: 3, name: "Adventure", icon: "mountain" },
  { id: 4, name: "Street Fighters", icon: "zap" },
  { id: 5, name: "Touring", icon: "map" },
  { id: 6, name: "Electric", icon: "battery-charging" },
];

export const brands: BrandType[] = [
  { 
    id: 1, 
    name: "Honda", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda_logo.svg/120px-Honda_logo.svg.png",
    country: "Japan" 
  },
  { 
    id: 2, 
    name: "Yamaha", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Yamaha_logo.svg/250px-Yamaha_logo.svg.png",
    country: "Japan" 
  },
  { 
    id: 3, 
    name: "Suzuki", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/225px-Suzuki_logo_2.svg.png",
    country: "Japan" 
  },
  { 
    id: 4, 
    name: "Kawasaki", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kawasaki_logo_sign.svg/200px-Kawasaki_logo_sign.svg.png",
    country: "Japan" 
  },
  { 
    id: 5, 
    name: "Ducati", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logo_ducati.svg/250px-Logo_ducati.svg.png",
    country: "Italy" 
  },
  { 
    id: 6, 
    name: "BMW", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png",
    country: "Germany" 
  },
  { 
    id: 7, 
    name: "Triumph", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Triumph_Motorcycles_Logo.svg/250px-Triumph_Motorcycles_Logo.svg.png",
    country: "United Kingdom" 
  },
  { 
    id: 8, 
    name: "KTM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/KTM-Logo.svg/500px-KTM-Logo.svg.png",
    country: "Austria" 
  },
];

export const products: ProductType[] = [
  {
    id: 1,
    name: "Yamaha YZF R15 V4",
    description: "The Yamaha YZF R15 V4 is a premium supersport motorcycle that offers an exhilarating riding experience.",
    price: 175900,
    category: "Sport Bikes",
    brand: "Yamaha",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "155cc",
      displacement: "155 cc",
      power: "18.4 PS",
      torque: "14.2 Nm",
      mileage: "40 kmpl",
      weight: "142 kg",
      topSpeed: "145 km/h"
    },
    featured: true,
    stock: 10
  },
  {
    id: 2,
    name: "Kawasaki Ninja ZX-10R",
    description: "The Kawasaki Ninja ZX-10R is a powerful supersport bike designed for high performance on the road and track.",
    price: 1549000,
    category: "Sport Bikes",
    brand: "Kawasaki",
    image: "https://images.unsplash.com/photo-1531327431456-9621b527eb3d?q=80&w=2069&auto=format&fit=crop",
    spec: {
      engine: "998cc",
      displacement: "998 cc",
      power: "203 PS",
      torque: "114.9 Nm",
      mileage: "12 kmpl",
      weight: "207 kg",
      topSpeed: "299 km/h"
    },
    featured: true,
    stock: 5
  },
  {
    id: 3,
    name: "Ducati Panigale V4",
    description: "The Ducati Panigale V4 is the pinnacle of Ducati's sport bike offering, featuring a powerful V4 engine.",
    price: 2399000,
    category: "Sport Bikes",
    brand: "Ducati",
    image: "https://images.unsplash.com/photo-1661026253192-e2760096e160?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "1103cc",
      displacement: "1103 cc",
      power: "214 PS",
      torque: "124 Nm",
      mileage: "14 kmpl",
      weight: "195 kg",
      topSpeed: "310 km/h"
    },
    featured: true,
    discount: 5,
    stock: 3
  },
  {
    id: 4,
    name: "Honda CB650R",
    description: "The Honda CB650R is a middleweight naked sport bike offering a perfect blend of performance and versatility.",
    price: 879000,
    category: "Street Fighters",
    brand: "Honda",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "649cc",
      displacement: "649 cc",
      power: "87 PS",
      torque: "63 Nm",
      mileage: "20 kmpl",
      weight: "206 kg",
      topSpeed: "225 km/h"
    },
    stock: 8
  },
  {
    id: 5,
    name: "Royal Enfield Meteor 350",
    description: "The Royal Enfield Meteor 350 is a cruiser motorcycle designed for comfortable long-distance riding.",
    price: 204000,
    category: "Cruisers",
    brand: "Royal Enfield",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "349cc",
      displacement: "349 cc",
      power: "20.4 PS",
      torque: "27 Nm",
      mileage: "35 kmpl",
      weight: "191 kg",
      topSpeed: "120 km/h"
    },
    stock: 15
  },
  {
    id: 6,
    name: "BMW S 1000 RR",
    description: "The BMW S 1000 RR is a race-oriented sport bike designed for exceptional performance on the track and road.",
    price: 2200000,
    category: "Sport Bikes",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1635073908681-b4dfb3005264?q=80&w=1974&auto=format&fit=crop",
    spec: {
      engine: "999cc",
      displacement: "999 cc",
      power: "207 PS",
      torque: "113 Nm",
      mileage: "15 kmpl",
      weight: "197 kg",
      topSpeed: "305 km/h"
    },
    featured: true,
    stock: 4
  },
  {
    id: 7,
    name: "KTM 390 Duke",
    description: "The KTM 390 Duke is a high-performance naked bike that offers exceptional power and agility.",
    price: 289900,
    category: "Street Fighters",
    brand: "KTM",
    image: "https://images.unsplash.com/photo-1580341289255-5b9a00ff613b?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "373cc",
      displacement: "373 cc",
      power: "43 PS",
      torque: "37 Nm",
      mileage: "28 kmpl",
      weight: "167 kg",
      topSpeed: "170 km/h"
    },
    discount: 10,
    stock: 12
  },
  {
    id: 8,
    name: "Triumph Street Triple",
    description: "The Triumph Street Triple is a naked sports motorcycle that offers a powerful and dynamic riding experience.",
    price: 956000,
    category: "Street Fighters",
    brand: "Triumph",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "765cc",
      displacement: "765 cc",
      power: "123 PS",
      torque: "79 Nm",
      mileage: "18 kmpl",
      weight: "189 kg",
      topSpeed: "225 km/h"
    },
    stock: 7
  },
  {
    id: 9,
    name: "Suzuki Hayabusa",
    description: "The Suzuki Hayabusa is a sport bike motorcycle designed for high-speed performance and comfortable riding.",
    price: 1640000,
    category: "Sport Bikes",
    brand: "Suzuki",
    image: "https://images.unsplash.com/photo-1641254232518-ed0fea28503d?q=80&w=2070&auto=format&fit=crop",
    spec: {
      engine: "1340cc",
      displacement: "1340 cc",
      power: "190 PS",
      torque: "150 Nm",
      mileage: "17 kmpl",
      weight: "264 kg",
      topSpeed: "299 km/h"
    },
    featured: true,
    stock: 6
  },
  {
    id: 10,
    name: "BMW R 1250 GS",
    description: "The BMW R 1250 GS is a versatile adventure motorcycle designed for both on and off-road adventures.",
    price: 2055000,
    category: "Adventure",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1670253301027-8461abff3a00?q=80&w=1974&auto=format&fit=crop",
    spec: {
      engine: "1254cc",
      displacement: "1254 cc",
      power: "136 PS",
      torque: "143 Nm",
      mileage: "18 kmpl",
      weight: "249 kg",
      topSpeed: "220 km/h"
    },
    stock: 5
  },
  {
    id: 11,
    name: "Aprilia RS 660",
    description: "The Aprilia RS 660 is a middleweight sport bike with advanced technology and impressive performance.",
    price: 1382000,
    category: "Sport Bikes",
    brand: "Aprilia",
    image: "https://images.unsplash.com/photo-1596358985971-23bdaac14a6b?q=80&w=1778&auto=format&fit=crop",
    spec: {
      engine: "659cc",
      displacement: "659 cc",
      power: "100 PS",
      torque: "67 Nm",
      mileage: "20 kmpl",
      weight: "183 kg",
      topSpeed: "240 km/h"
    },
    discount: 8,
    stock: 4
  },
  {
    id: 12,
    name: "Harley-Davidson Fat Boy",
    description: "The Harley-Davidson Fat Boy is an iconic cruiser motorcycle known for its robust styling and powerful engine.",
    price: 2010000,
    category: "Cruisers",
    brand: "Harley-Davidson",
    image: "https://images.unsplash.com/photo-1632091739040-64094f0fc785?q=80&w=2075&auto=format&fit=crop",
    spec: {
      engine: "1746cc",
      displacement: "1746 cc",
      power: "94 PS",
      torque: "155 Nm",
      mileage: "18 kmpl",
      weight: "304 kg",
      topSpeed: "180 km/h"
    },
    stock: 3
  }
];

// Generate remaining products to have more than 70
const generateMoreProducts = (): ProductType[] => {
  const baseProducts = [
    {
      name: "Ducati Monster",
      description: "The Ducati Monster is a naked bike known for its stylish design and exhilarating performance.",
      price: 1180000,
      category: "Street Fighters",
      brand: "Ducati",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      spec: {
        engine: "821cc",
        displacement: "821 cc",
        power: "109 PS",
        torque: "86 Nm",
        mileage: "19 kmpl",
        weight: "206 kg",
        topSpeed: "225 km/h"
      },
      stock: 7
    },
    {
      name: "KTM 1290 Super Duke R",
      description: "The KTM 1290 Super Duke R is a high-performance naked bike with explosive power and precision handling.",
      price: 1850000,
      category: "Street Fighters",
      brand: "KTM",
      image: "https://images.unsplash.com/photo-1580341289255-5b9a00ff613b?q=80&w=2070&auto=format&fit=crop",
      spec: {
        engine: "1301cc",
        displacement: "1301 cc",
        power: "180 PS",
        torque: "140 Nm",
        mileage: "16 kmpl",
        weight: "189 kg",
        topSpeed: "290 km/h"
      },
      stock: 5
    },
    {
      name: "Triumph Trident 660",
      description: "The Triumph Trident 660 is a middleweight roadster that combines performance with everyday usability.",
      price: 695000,
      category: "Street Fighters",
      brand: "Triumph",
      image: "https://images.unsplash.com/photo-1635073908681-b4dfb3005264?q=80&w=1974&auto=format&fit=crop",
      spec: {
        engine: "660cc",
        displacement: "660 cc",
        power: "81 PS",
        torque: "64 Nm",
        mileage: "22 kmpl",
        weight: "189 kg",
        topSpeed: "210 km/h"
      },
      stock: 8
    }
  ];

  // Generate additional products with different variations
  const moreProducts: ProductType[] = [];
  let lastId = products.length;

  // Create 60 more products
  for (let i = 0; i < 60; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const yearVariation = 2020 + (i % 5);
    const priceVariation = Math.round((0.9 + Math.random() * 0.3) * baseProduct.price);
    const stock = Math.floor(Math.random() * 15) + 1;
    const featured = Math.random() > 0.8;
    const discount = Math.random() > 0.8 ? Math.floor(Math.random() * 15) + 5 : undefined;

    moreProducts.push({
      id: lastId + i + 1,
      name: `${baseProduct.name} ${yearVariation}`,
      description: baseProduct.description,
      price: priceVariation,
      category: baseProduct.category,
      brand: baseProduct.brand,
      image: baseProduct.image,
      spec: baseProduct.spec,
      featured,
      discount,
      stock
    });
  }

  return moreProducts;
};

export const allProducts: ProductType[] = [...products, ...generateMoreProducts()];
