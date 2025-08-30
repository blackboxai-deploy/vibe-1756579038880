
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  minOrderQuantity: number;
  sellerId: string;
  image: string;
  category: string;
}

export interface Inquiry {
  id: string;
  productId: string;
  buyerId: string;
  quantity: number;
  message: string;
  createdAt: Date;
}
