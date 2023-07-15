export type Product = {
  name: string;
  description: string;
  products: string[];
};

export type ProductInfo = {
  name: string;
  price: number;
  image: string;
  description?: string;
};

export type Item = {
  name: string;
  price: number;
  quantity: number;
};
