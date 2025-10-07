import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Jai Hind Army Store</h3>
            <p className="text-orange-200 mb-4">
              Your trusted partner for premium quality uniforms and equipment. Serving with pride and precision since establishment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-orange-200 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-orange-200 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="/gallery" className="text-orange-200 hover:text-orange-400 transition-colors">Gallery</a></li>
              <li><a href="/about" className="text-orange-200 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-orange-200 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-orange-200">Ward No. 43, Krishna Nagar<br />Rewa (M.P.)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+917067894770" className="text-orange-200 hover:text-orange-400 transition-colors">
                  +91 7067894770
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:learnwithanukalp@gmail.com" className="text-orange-200 hover:text-orange-400 transition-colors">
                  learnwithanukalp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} J & K Enterprises - Jai Hind Army Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
