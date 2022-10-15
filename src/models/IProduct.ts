export interface IProduct {
  title: string;
  description: string;
  price: number;
  discount: number;
  priceBefore: number;
  rating: number;
  freshness: string;
  farm: string;
  delivery: string;
  stock: number;
  whishlist: boolean;
  freeShipping: boolean;
  deliveryTime: number;
  country: string;
  categories: string[];
  color: string;
  size: string;
  units: string[];
  reviews: string[];
  questions: string[];
  image: string;
  brand: string;
  id: string;
}
