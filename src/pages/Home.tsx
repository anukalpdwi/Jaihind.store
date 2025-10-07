import { useState } from 'react';
import { Shield, Award, Truck, Headphones as HeadphonesIcon, ArrowRight, Image as ImageIcon } from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import ProductCard from '../components/ProductCard';
import OrderModal from '../components/OrderModal';
import { categories, getFeaturedProducts } from '../data/products';
import { galleryImages } from '../data/gallery';
import { Product } from '../types';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroSlideshow />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Authentic materials and superior craftsmanship</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
              <p className="text-gray-600">Years of experience serving institutions</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping across India</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our wide range of products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-sm group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Our most popular items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyClick={setSelectedProduct}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ImageIcon className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Gallery
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Glimpse of our store, products, and satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="font-bold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact us on WhatsApp for instant ordering and queries
          </p>
          <a
            href="https://wa.me/917067894770"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

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
