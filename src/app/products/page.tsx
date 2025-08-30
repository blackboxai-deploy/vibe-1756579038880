'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

const products = [
    {
        id: "1",
        name: "Premium Grade Basmati Rice",
        category: "Agriculture",
        seller: "Agri Exports Inc.",
        image: "https://placehold.co/400x300?text=Basmati+Rice",
        price: "$950 / MT",
        minOrder: "20 MT"
    },
    {
        id: "2",
        name: "Hand-Woven Silk Carpet",
        category: "Textiles",
        seller: "Artisan Crafts Co.",
        image: "https://placehold.co/400x300?text=Silk+Carpet",
        price: "$1200 / Piece",
        minOrder: "50 Pieces"
    },
    {
        id: "3",
        name: "Industrial Lathe Machine",
        category: "Machinery",
        seller: "Global Machinery",
        image: "https://placehold.co/400x300?text=Lathe+Machine",
        price: "$25,000 / Unit",
        minOrder: "1 Unit"
    },
    {
        id: "4",
        name: "Organic Assam Tea",
        category: "Agriculture",
        seller: "Pure Health Foods",
        image: "https://placehold.co/400x300?text=Assam+Tea",
        price: "$25 / kg",
        minOrder: "100 kg"
    },
    {
        id: "5",
        name: "Pharmaceutical Grade Gelatin",
        category: "Chemicals",
        seller: "PharmaBulk Suppliers",
        image: "https://placehold.co/400x300?text=Gelatin",
        price: "$8,000 / MT",
        minOrder: "5 MT"
    },
    {
        id: "6",
        name: "Recycled PET Flakes",
        category: "Plastics",
        seller: "Eco-Polymers Ltd.",
        image: "https://placehold.co/400x300?text=PET+Flakes",
        price: "$1,100 / MT",
        minOrder: "25 MT"
    },

];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = products.filter(p => {
    return (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.seller.toLowerCase().includes(searchTerm.toLowerCase())) &&
           (category === 'all' || p.category === category);
  });

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-600 mt-2">Explore a wide range of products from verified international suppliers.</p>
        </header>

        {/* Filters */}
        <Card className="mb-8 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input 
                    placeholder="Search by product or supplier..." 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <Select onValueChange={setCategory} defaultValue="all">
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Textiles">Textiles</SelectItem>
                        <SelectItem value="Machinery">Machinery</SelectItem>
                        <SelectItem value="Chemicals">Chemicals</SelectItem>
                        <SelectItem value="Plastics">Plastics</SelectItem>
                    </SelectContent>
                </Select>
                 <Button>Search</Button>
            </div>
        </Card>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">from <span className="font-semibold">{product.seller}</span></p>
                <p className="text-lg font-semibold text-gray-900 mb-1">{product.price}</p>
                <p className="text-sm text-gray-500 mb-4">Min. Order: {product.minOrder}</p>
                <Button className="w-full" asChild>
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-16">
                <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
        )}

      </div>
    </div>
  );
}