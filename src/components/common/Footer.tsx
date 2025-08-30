import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Global Trade</h2>
            <p className="text-gray-400">Connecting businesses worldwide. We facilitate international trade with trust and efficiency.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="#" className="hover:underline">For Buyers</Link></li>
              <li><Link href="#" className="hover:underline">For Sellers</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping & Logistics</Link></li>
              <li><Link href="/finance" className="hover:underline">Trade Finance</Link></li>
              <li><Link href="/compliance" className="hover:underline">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Global Trade Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}