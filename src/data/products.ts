import { Category, Product } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Army Uniforms',
    slug: 'army-uniforms',
    description: 'Premium quality Indian Army uniforms and accessories',
    imageUrl: 'https://i.pinimg.com/736x/41/4a/3a/414a3a70025d8778f022ee10daafe2d8.jpg',
    displayOrder: 1
  },
  {
    id: '2',
    name: 'NCC Uniforms',
    slug: 'ncc-uniforms',
    description: 'Complete NCC uniform sets for cadets',
    imageUrl: 'https://dresscodeclothing.in/wp-content/uploads/2025/08/NCC-Uniform-with-Accessories-Set-Indian-Army-Military-Commando.jpg',
    displayOrder: 2
  },
  {
    id: '3',
    name: 'Police Uniforms',
    slug: 'police-uniforms',
    description: 'Authentic police uniforms and equipment',
    imageUrl: 'https://www.rewariyasat.com/uploads/2019/09/mp-police.png',
    displayOrder: 3
  },
  {
    id: '4',
    name: 'School & College Uniforms',
    slug: 'school-college-uniforms',
    description: 'Tailored uniforms for educational institutions',
    imageUrl: 'https://www.jsssrewa.org/images/Uniform.jpg',
    displayOrder: 4
  },
  {
    id: '5',
    name: 'Sportswear',
    slug: 'sportswear',
    description: 'High-quality sportswear for all activities',
    imageUrl: '/kit2.jpeg',
    displayOrder: 5
  },
  {
    id: '6',
    name: 'Accessories & Equipment',
    slug: 'accessories-equipment',
    description: 'Military gear, scientific equipment and accessories',
    imageUrl: '/bg3.png',
    displayOrder: 6
  }
];

export const products: Product[] = [
  {
    id: 'p3',
    categoryId: '2',
    name: 'NCC Cadet Full Uniform',
    slug: 'ncc-cadet-full-uniform',
    description: 'Complete NCC uniform set for cadets including shirt, trousers, belt, cap, and badges. Meets all NCC uniform regulations. Available in all sizes.',
    shortDescription: 'Complete NCC uniform with all accessories',
    price: 1599,
    imageUrl: 'https://dresscodeclothing.in/wp-content/uploads/2025/08/NCC-Uniform-with-Accessories-Set-Indian-Army-Military-Commando.jpg',
    images: [],
    isFeatured: true,
    isAvailable: true
  },
  {
    id: 'p1',
    categoryId: '1',
    name: 'Army Combat Uniform Set',
    slug: 'army-combat-uniform-set',
    description: 'Complete Indian Army combat uniform set including shirt, trousers, and cap. Made from high-quality durable fabric suitable for all weather conditions. Features reinforced stitching and regulation design.',
    shortDescription: 'Complete combat uniform with shirt, trousers & cap',
    price: 799,
    imageUrl: 'https://dresscodeclothing.in/wp-content/uploads/2025/08/Indian-Army-Combat-Uniform-Shirt.jpg',
    images: [],
    isFeatured: true,
    isAvailable: true
  },
  {
    id: 'p2',
    categoryId: '1',
    name: 'Army Ceremonial Dress',
    slug: 'army-ceremonial-dress',
    description: 'Premium ceremonial dress uniform for Indian Army personnel. Includes coat, trousers, belt, and badges. Expertly tailored for formal occasions and parades.',
    shortDescription: 'Premium ceremonial dress with coat & accessories',
    price: 3999,
    imageUrl: 'https://5.imimg.com/data5/QM/QK/MY-8451013/army-ceremonial-dress-500x500.jpg',
    images: [],
    isFeatured: true,
    isAvailable: true
  },
  {
    id: 'p4',
    categoryId: '2',
    name: 'NCC Dress Shoes',
    slug: 'ncc-dress-shoes',
    description: 'Regulation NCC dress shoes with superior comfort and durability. High-shine leather finish suitable for parades and formal occasions.',
    shortDescription: 'Regulation dress shoes with high-shine finish',
    price: 1299,
    imageUrl: 'nccshoes.jpeg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p5',
    categoryId: '3',
    name: 'Police Khaki Uniform',
    slug: 'police-khaki-uniform',
    description: 'Standard police khaki uniform set including shirt, trousers, and accessories. Made from breathable fabric with proper fitting.',
    shortDescription: 'Standard khaki uniform for police personnel',
    price: 1799,
    imageUrl: 'https://treyondworld.com/wp-content/uploads/2024/05/CKS00567-scaled.jpg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p6',
    categoryId: '3',
    name: 'NCC Belt & Accessories Kit',
    slug: 'police-belt-accessories-kit',
    description: 'Complete NCC accessories kit including leather belt, whistle, and essential gear holders. Premium quality materials.',
    shortDescription: 'Essential NCC accessories and equipment',
    price: 899,
    imageUrl: 'https://tangocharli.com/wp-content/uploads/2023/07/ncc-accessories.jpg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p7',
    categoryId: '4',
    name: 'School Uniform Set',
    slug: 'school-uniform-set',
    description: 'Comfortable and durable school uniform set. Customizable with school logo and colors. Available for all age groups.',
    shortDescription: 'Quality school uniform with customization options',
    price: 799,
    imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/-5ojroso3.jpg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p8',
    categoryId: '4',
    name: 'College Sports Uniform',
    slug: 'college-sports-uniform',
    description: 'Breathable sports uniform for college students. Includes jersey and shorts. Available in multiple colors and sizes.',
    shortDescription: 'Comfortable sports uniform for colleges',
    price: 699,
    imageUrl: 'tshirt1.jpeg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p9',
    categoryId: '5',
    name: 'Premium Track Suit',
    slug: 'premium-track-suit',
    description: 'High-quality track suit perfect for sports and fitness activities. Made from moisture-wicking fabric with excellent durability.',
    shortDescription: 'Moisture-wicking track suit for sports',
    price: 1499,
    imageUrl: '/kit4.jpeg',
    images: [],
    isFeatured: true,
    isAvailable: true
  },
  {
    id: 'p10',
    categoryId: '5',
    name: 'Sports Jersey Set',
    slug: 'sports-jersey-set',
    description: 'Customizable sports jersey set for teams. Breathable fabric with custom printing available. Bulk orders welcome.',
    shortDescription: 'Customizable team jersey with printing',
    price: 599,
    imageUrl: 'kit3.jpeg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p11',
    categoryId: '6',
    name: 'Military Backpack',
    slug: 'military-backpack',
    description: 'Rugged military-grade backpack with multiple compartments. Water-resistant and perfect for outdoor activities.',
    shortDescription: 'Durable military backpack, water-resistant',
    price: 1199,
    imageUrl: 'https://www.militiazone.in/image/cache/catalog/products/RB-UNO-26INCH/1-735x735.jpg',
    images: [],
    isFeatured: false,
    isAvailable: true
  },
  {
    id: 'p12',
    categoryId: '6',
name: 'Sports Shoes',
slug: 'sports-shoes',
description: 'Comfortable and durable sports shoes designed for running, training, and daily wear. Made with breathable material and strong grip soles.',
shortDescription: 'Comfortable and durable sports shoes',
price: 1499,
imageUrl: 'shoes1.jpeg',
images: [],
isFeatured: false,
isAvailable: true

  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.categoryId === categoryId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
