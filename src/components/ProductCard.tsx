import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuyClick: (product: Product) => void;
}

export default function ProductCard({ product, onBuyClick }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-700">
            ₹{product.price.toLocaleString('en-IN')}
          </span>

          <button
            onClick={() => onBuyClick(product)}
            disabled={!product.isAvailable}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
