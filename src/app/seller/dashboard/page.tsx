import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


const products = [
  {
    id: "1",
    name: "Premium Grade Basmati Rice",
    category: "Agriculture",
    stock: 1500, // in metric tons
    price: 950, // per metric ton
    status: "Published",
  },
  {
    id: "2",
    name: "Hand-Woven Silk Carpet",
    category: "Textiles",
    stock: 300, // units
    price: 1200, // per unit
    status: "Published",
  },
  {
    id: "3",
    name: "Industrial Lathe Machine",
    category: "Machinery",
    stock: 15, // units
    price: 25000, // per unit
    status: "Draft",
  },
  {
    id: "4",
    name: "Organic Assam Tea",
    category: "Agriculture",
    stock: 800, // in kg
    price: 25, // per kg
    status: "Published",
  },
];

const inquiries = [
    {
        id: "1",
        product: "Premium Grade Basmati Rice",
        buyer: "Global Food Importers",
        quantity: "200 MT",
        date: "2023-10-26",
        status: "Pending"
    },
    {
        id: "2",
        product: "Hand-Woven Silk Carpet",
        buyer: "Artisan Crafts Co.",
        quantity: "50 units",
        date: "2023-10-25",
        status: "Responded"
    },
    {
        id: "3",
        product: "Organic Assam Tea",
        buyer: "Pure Health Foods",
        quantity: "100 kg",
        date: "2023-10-24",
        status: "New"
    },
];

export default function SellerDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Seller Dashboard</h1>
          <Button asChild>
            <Link href="/seller/products/new">Add New Product</Link>
          </Button>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Products</CardTitle>
              <CardDescription>Number of products listed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{products.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Inquiries</CardTitle>
              <CardDescription>Inquiries needing a response</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{inquiries.filter(i => i.status === 'New').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
              <CardDescription>Orders awaiting fulfillment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Products Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>My Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>${product.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={product.status === "Published" ? "default" : "secondary"}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/seller/products/edit/${product.id}`}>Edit</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Inquiries Table */}
        <Card>
          <CardHeader>
             <CardTitle>Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                   <TableRow key={inquiry.id}>
                     <TableCell className="font-medium">{inquiry.product}</TableCell>
                     <TableCell>{inquiry.buyer}</TableCell>
                     <TableCell>{inquiry.quantity}</TableCell>
                     <TableCell>{inquiry.date}</TableCell>
                     <TableCell>
                        <Badge variant={
                            inquiry.status === "New" ? "destructive" :
                            inquiry.status === "Pending" ? "secondary" :
                            "default"
                        }>
                           {inquiry.status}
                        </Badge>
                     </TableCell>
                     <TableCell className="text-right">
                       <Button variant="outline" size="sm" asChild>
                         <Link href={`/seller/inquiries/${inquiry.id}`}>View</Link>
                       </Button>
                     </TableCell>
                   </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}