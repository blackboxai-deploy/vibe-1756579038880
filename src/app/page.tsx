import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Global+Trade+Network')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Connecting Global Markets</h1>
          <p className="text-lg lg:text-xl mb-8">Your one-stop platform for international trade. Discover products, connect with suppliers, and grow your business.</p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup/seller">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                    <img src="https://placehold.co/100x100?text=Discover+Products" alt="Discover Products" className="rounded-full w-24 h-24" />
                </div>
              <h3 className="text-xl font-semibold mb-2">1. Discover Products</h3>
              <p className="text-gray-600">Search and find products from a vast catalog of international suppliers.</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                    <img src="https://placehold.co/100x100?text=Connect+with+Suppliers" alt="Connect with Suppliers" className="rounded-full w-24 h-24" />
                </div>
              <h3 className="text-xl font-semibold mb-2">2. Connect with Suppliers</h3>
              <p className="text-gray-600">Directly communicate with sellers, request quotes, and negotiate terms.</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                    <img src="https://placehold.co/100x100?text=Secure+Transactions" alt="Secure Transactions" className="rounded-full w-24 h-24" />
                </div>
              <h3 className="text-xl font-semibold mb-2">3. Secure Transactions</h3>
              <p className="text-gray-600">Utilize our secure platform for trade finance, payments, and logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {renderCategoryCard("Electronics", "https://placehold.co/400x300?text=Electronics")}
            {renderCategoryCard("Apparel & Textiles", "https://placehold.co/400x300?text=Apparel+%26+Textiles")}
            {renderCategoryCard("Machinery & Parts", "https://placehold.co/400x300?text=Machinery")}
            {renderCategoryCard("Agriculture", "https://placehold.co/400x300?text=Agriculture")}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Global Trade Connect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderFeatureCard("Global Reach", "Access a vast network of buyers and sellers from over 150 countries.", "globe.svg")}
            {renderFeatureCard("Verified Suppliers", "We verify our sellers to ensure you source from reliable and trusted partners.", "verified.svg")}
            {renderFeatureCard("Secure Payments", "Our integrated trade finance options provide security and peace of mind.", "secure-payment.svg")}
            {renderFeatureCard("Streamlined Logistics", "Simplify your shipping process with our logistics support and tracking.", "logistics.svg")}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8">Join our platform today and connect with a world of opportunities.</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup/buyer">Join as a Buyer</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/signup/seller">Join as a Seller</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function renderCategoryCard(title: string, imageUrl: string) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold text-center p-2">{title}</h3>
      </div>
      <Link href={`/products?category=${encodeURIComponent(title)}`} className="absolute inset-0"></Link>
    </div>
  )
}

function renderFeatureCard(title: string, description: string, icon: string) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        {/* Placeholder for an icon */}
        <div className="bg-blue-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 18v-2m0-10a9 9 0 11-9 9"></path></svg>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
