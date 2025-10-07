import { Menu, X, ShoppingBag, Phone, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3 group">
            <ShoppingBag className="h-8 w-8 text-orange-500 group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Jai Hind Army Store</h1>
              <p className="text-xs text-orange-200">J & K Enterprises</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="hover:text-orange-400 transition-colors font-medium">Home</a>
            <a href="/products" className="hover:text-orange-400 transition-colors font-medium">Products</a>
            <a href="/gallery" className="hover:text-orange-400 transition-colors font-medium">Gallery</a>
            <a href="/about" className="hover:text-orange-400 transition-colors font-medium">About Us</a>
            <a href="/contact" className="hover:text-orange-400 transition-colors font-medium">Contact</a>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <a
              href="tel:+917067894770"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>

          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="pb-4 pt-2 border-t border-gray-700 animate-slideUp">
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pr-10 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  autoFocus
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-gray-700 pt-4">
            <a href="/" className="block py-2 hover:text-orange-400 transition-colors font-medium">Home</a>
            <a href="/products" className="block py-2 hover:text-orange-400 transition-colors font-medium">Products</a>
            <a href="/gallery" className="block py-2 hover:text-orange-400 transition-colors font-medium">Gallery</a>
            <a href="/about" className="block py-2 hover:text-orange-400 transition-colors font-medium">About Us</a>
            <a href="/contact" className="block py-2 hover:text-orange-400 transition-colors font-medium">Contact</a>
            <a
              href="tel:+917067894770"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg mt-4"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
