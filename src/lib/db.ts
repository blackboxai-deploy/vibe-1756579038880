import { Product, Inquiry } from './types';

// Mock database

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Grade Basmati Rice",
    description: "Long-grain aromatic rice from the Himalayas.",
    price: 950,
    minOrderQuantity: 20,
    sellerId: "seller1",
    image: "https://placehold.co/400x300?text=Basmati+Rice",
    category: "Agriculture",
  },
  {
    id: "2",
    name: "Hand-Woven Silk Carpet",
    description: "Exquisite handmade silk carpets from traditional artisans.",
    price: 1200,
    minOrderQuantity: 50,
    sellerId: "seller2",
    image: "https://placehold.co/400x300?text=Silk+Carpet",
    category: "Textiles",
  },
];

export const inquiries: Inquiry[] = [
  {
    id: "1",
    productId: "1",
    buyerId: "buyer1",
    quantity: 25,
    message: "Interested in a trial order. Please provide CIF prices to Port of Hamburg.",
    createdAt: new Date('2023-10-28T10:00:00Z'),
  },
];

// Mock database functions

export const getProducts = async () => {
  return products;
};

export const getProductById = async (id: string) => {
  return products.find(p => p.id === id);
};

export const createProduct = async (product: Omit<Product, 'id'>) => {
  const newProduct: Product = {
    id: (products.length + 1).toString(),
    ...product,
  };
  products.push(newProduct);
  return newProduct;
};

export const createInquiry = async (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => {
  const newInquiry: Inquiry = {
    id: (inquiries.length + 1).toString(),
    createdAt: new Date(),
    ...inquiry,
  };
  inquiries.push(newInquiry);
  return newInquiry;
};
