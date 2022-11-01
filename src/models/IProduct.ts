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
  cooking: string;
  units: string[];
  reviews: { id: string; username: string; review: string }[];
  questions: { id: string; question: string; answear: string }[];
  image: string;
  id: string;
}
