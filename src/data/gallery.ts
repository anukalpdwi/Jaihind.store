export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'store' | 'products' | 'events' | 'customers';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Store Front',
    description: 'Jai Hind Army Store - Your trusted uniform destination',
    imageUrl: '/g1.jpeg',
    category: 'store'
  },
  {
    id: 'g2',
    title: 'Inside Our Store',
    description: 'Wide range of uniforms and equipment on display',
    imageUrl: '/g2.jpeg',
    category: 'store'
  },
  {
    id: 'g3',
    title: 'Army Uniform Collection',
    description: 'Premium quality Indian Army uniforms',
    imageUrl: '/g3.jpeg',
    category: 'products'
  },
  {
    id: 'g4',
    title: 'NCC Cadet Uniforms',
    description: 'Complete NCC uniform sets for cadets',
    imageUrl: '/g4.jpeg',
    category: 'products'
  },
  {
    id: 'g5',
    title: 'Police Gear Display',
    description: 'Professional police uniforms and accessories',
    imageUrl: '/bg1.jpeg',
    category: 'products'
  },
  {
    id: 'g6',
    title: 'Sports Collection',
    description: 'High-quality sportswear for all activities',
    imageUrl: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'products'
  },
  {
    id: 'g7',
    title: 'Customer Service',
    description: 'Dedicated team helping customers find the right fit',
    imageUrl: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'store'
  },
  {
    id: 'g8',
    title: 'Quality Check',
    description: 'Every product undergoes strict quality inspection',
    imageUrl: 'https://images.pexels.com/photos/7679876/pexels-photo-7679876.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'store'
  },
  {
    id: 'g9',
    title: 'NCC Parade Day',
    description: 'Proud to serve NCC cadets across the region',
    imageUrl: 'https://images.pexels.com/photos/6069101/pexels-photo-6069101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events'
  },
  {
    id: 'g10',
    title: 'Bulk Order Delivery',
    description: 'Successfully delivered uniforms to local school',
    imageUrl: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events'
  },
  {
    id: 'g11',
    title: 'Happy Customers',
    description: 'Customer satisfaction is our priority',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'customers'
  },
  {
    id: 'g12',
    title: 'Military Equipment',
    description: 'Authentic military gear and accessories',
    imageUrl: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'products'
  }
];

export const getImagesByCategory = (category: string): GalleryImage[] => {
  if (category === 'all') return galleryImages;
  return galleryImages.filter(img => img.category === category);
};
