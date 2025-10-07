import { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { galleryImages, getImagesByCategory, GalleryImage } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'store', name: 'Our Store' },
    { id: 'products', name: 'Products' },
    { id: 'events', name: 'Events' },
    { id: 'customers', name: 'Customers' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setFilteredImages(getImagesByCategory(categoryId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-orange-100">
            Take a look at our store, products, and happy customers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-bold text-gray-900">Filter Gallery</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
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
            Showing <span className="font-bold text-gray-900">{filteredImages.length}</span> images
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="max-w-5xl w-full animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="bg-white p-6 mt-4 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
