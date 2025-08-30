import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const recentInquiries = [
    {
        id: "1",
        product: "Premium Grade Basmati Rice",
        seller: "Agri Exports Inc.",
        date: "2023-10-26",
        status: "Responded"
    },
    {
        id: "2",
        product: "Industrial Lathe Machine",
        seller: "Global Machinery",
        date: "2023-10-28",
        status: "Pending"
    },
];

const recommendedProducts = [
    {
        id: "1",
        name: "Organic Spices Combo Pack",
        seller: "Pure Spice Exports",
        image: "https://placehold.co/300x200?text=Organic+Spices",
        price: "$50 - $70 / Carton"
    },
    {
        id: "2",
        name: "Leather Messenger Bags",
        seller: "Fine Leather Goods",
        image: "https://placehold.co/300x200?text=Leather+Bags",
        price: "$25 - $40 / Piece"
    },
    {
        id: "3",
        name: "CNC Milling Machine",
        seller: "Precision Machinery Co.",
        image: "https://placehold.co/300x200?text=CNC+Machine",
        price: "$15,000 / Unit"
    },
];

export default function BuyerDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Buyer Dashboard</h1>
          <p className="text-gray-600">Welcome back, Global Food Importers!</p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Active Inquiries</CardTitle>
              <CardDescription>Inquiries awaiting seller response</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{recentInquiries.filter(i => i.status === 'Pending').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quotes Received</CardTitle>
              <CardDescription>Quotes you have received from sellers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{recentInquiries.filter(i => i.status === 'Responded').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Saved Products</CardTitle>
              <CardDescription>Products you are watching</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Inquiries Table */}
        <Card className="mb-8">
          <CardHeader>
             <CardTitle>My Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInquiries.map((inquiry) => (
                   <TableRow key={inquiry.id}>
                     <TableCell className="font-medium">{inquiry.product}</TableCell>
                     <TableCell>{inquiry.seller}</TableCell>
                     <TableCell>{inquiry.date}</TableCell>
                     <TableCell>
                        <Badge variant={inquiry.status === "Pending" ? "secondary" : "default"}>
                           {inquiry.status}
                        </Badge>
                     </TableCell>
                     <TableCell className="text-right">
                       <Button variant="outline" size="sm" asChild>
                         <Link href={`/buyer/inquiries/${inquiry.id}`}>View Details</Link>
                       </Button>
                     </TableCell>
                   </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Recommended Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map(product => (
                <Card key={product.id}>
                    <CardHeader className="p-0">
                        <img src={product.image} alt={product.name} className="rounded-t-lg w-full h-48 object-cover" />
                    </CardHeader>
                    <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">from {product.seller}</p>
                        <p className="font-bold text-gray-800 mb-3">{product.price}</p>
                        <Button className="w-full" asChild>
                            <Link href={`/products/${product.id}`}>View Product</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}