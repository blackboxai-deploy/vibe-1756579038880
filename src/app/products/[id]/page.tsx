'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { notFound } from 'next/navigation';

const products = [
    {
        id: "1",
        name: "Premium Grade Basmati Rice",
        category: "Agriculture",
        seller: "Agri Exports Inc.",
        image: "https://placehold.co/800x600?text=Basmati+Rice",
        price: "$950 / MT",
        minOrder: "20 MT",
        description: "Cultivated in the foothills of the Himalayas, our Basmati rice is known for its long grains, aromatic fragrance, and exquisite taste. We offer various grades to meet your specific needs.",
        specifications: {
            "Variety": "1121 Basmati",
            "Length": "8.4mm Avg.",
            "Moisture": "12% Max",
            "Broken": "2% Max",
            "Origin": "India"
        }
    }
    // ... other products
];

const product = products[0];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the product by id
  // const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Media & Seller Info */}
          <div className="lg:col-span-2">
             <Card className="mb-8">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                             <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md"/>
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
                            <p className="text-md text-gray-500 mb-4">from <span className="font-semibold text-blue-600 cursor-pointer hover:underline">{product.seller}</span></p>
                            
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                                <span className="text-gray-600 ml-2"></span>
                            </div>
                            <p className="text-sm text-gray-600">Minimum Order: <span className="font-semibold">{product.minOrder}</span></p>

                            <Separator className="my-6" />

                            <p className="text-gray-700 leading-relaxed">{product.description}</p>
                        </div>
                    </div>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                             <div key={key} className="border-b pb-2">
                                <p className="font-semibold text-gray-600">{key}</p>
                                <p className="text-gray-800">{value}</p>
                             </div>
                        ))}
                    </div>
                </CardContent>
             </Card>
          </div>

          {/* Inquiry Form */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Send Inquiry to Seller</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" placeholder={`e.g., 25 MT`} />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I\'m interested in this product. Please send me your best quote and payment terms."
                        rows={5}
                      />
                    </div>

                    <p className="text-xs text-gray-500">Your message will be sent directly to the seller along with your company profile.</p>

                    <Button type="submit" className="w-full">Send Inquiry</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}