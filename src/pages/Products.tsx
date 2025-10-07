import { useState, useEffect } from 'react';
import { Filter, Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import { categories, products as allProducts } from '../data/products';
import { Product } from '../types';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, []);

  useEffect(() => {
    let products = allProducts;

    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        products = products.filter(p => p.categoryId === category.id);
      }
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(products);
  }, [selectedCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    const url = new URL(window.location.href);
    url.searchParams.delete('search');
    window.history.replaceState({}, '', url.toString());
  };

  const clearCategory = () => {
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-orange-100">
            Browse our complete collection of premium uniforms and equipment
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-gray-700 font-semibold">Active Filters:</span>

            {searchQuery && (
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg">
                <Search className="h-4 w-4" />
                <span className="font-medium">Search: "{searchQuery}"</span>
                <button
                  onClick={clearSearch}
                  className="hover:bg-orange-200 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {selectedCategory !== 'all' && (
              <div className="flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-lg">
                <Filter className="h-4 w-4" />
                <span className="font-medium">
                  Category: {categories.find(c => c.slug === selectedCategory)?.name}
                </span>
                <button
                  onClick={clearCategory}
                  className="hover:bg-red-200 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-bold text-gray-900">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              All Products
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.slug
                    ? 'bg-green-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyClick={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No products found</p>
            {searchQuery && (
              <p className="text-gray-400">
                Try different keywords or browse all products
              </p>
            )}
          </div>
        )}
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
